import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css";

const Shop = () => {
    const first10 = fakeData.slice(0, 15)
    const [products, setProducts] = useState(first10)
    const [cart, setCart] = useState([])

    useEffect(() => {
        const savedCart = getDatabaseCart()
        const productKeys = Object.keys(savedCart)

        const PreviousCart = productKeys.map(existingkey => {
            const Product = fakeData.find(product => product.key === existingkey)
            Product.quantity = savedCart[existingkey]
            return Product;
        })
        setCart(PreviousCart)
    }, [])


    const handleAddClick = (product) => {
        const toBeAddeKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddeKey)
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddeKey)
            newCart = [...others, sameProduct]
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart)
        addToDatabaseCart(product.key, count)
    }
    return (
        <div>
            <div className="search-container row">
                <div className="col-11">
                    <input type="text" name="" id="" placeholder="Type Here to Search" className="form-control" />
                </div>
                <div className="col-1">
                    <a href="#"><span><FontAwesomeIcon className="cart-counter" icon={faShoppingCart} />{cart.length}</span></a>
                </div>
            </div>

            <div className="shop-container">
                <div className="product-container">
                    {
                        products.map(pd => {
                            return (
                                <div>
                                    {
                                        <Product
                                            key={pd.key}
                                            showAddToCart={true}
                                            product={pd}
                                            handleAddClick={handleAddClick}
                                        ></Product>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div className="cart-container">
                    <Cart TotalQuantity={cart}>
                        <Link to={"/order-review"}>
                            <button className="btn btn-warning review-btn" >Review Your Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;