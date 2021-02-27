import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css";

const Shop = () => {
    const first10 = fakeData.slice(0, 15)
    // console.log(first10);
    const [products, setProducts] = useState(first10)
    const [cart, setCart] = useState([])
    const handleAddClick = (product) => {
        console.log(product);
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div>
            <div className="search-bar ">
                <input type="text" name="" id="" placeholder="Type Here to Search" className="form-control"/>
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        products.map(product => {
                            return (
                                <div>
                                    {
                                        <Product
                                            product={product}
                                            handleAddClick={handleAddClick}
                                            key={product.key}
                                        ></Product>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div className="cart-container">
                    <Cart TotalQuantity={cart}></Cart>
                </div>
            </div>
        </div >
    );
};

export default Shop;