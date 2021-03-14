import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css';

const Review = () => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const saveCart = getDatabaseCart()
        const ProductKeys = Object.keys(saveCart)

        const cartProduct = ProductKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key)
            product.quantity = saveCart[key]
            return product;
        })
        setCart(cartProduct);
    }, []);

    const removeItemHandle = (ProductKey) => {
        const newCart = cart.filter(pd => pd.key !== ProductKey)
        setCart(newCart);
        removeFromDatabaseCart(ProductKey)
    }

    return (
        <div className="row Product-Container">
            <div className="col-10">
                {
                    cart.map(pd =>
                        <ReviewItem
                            key={pd.key}
                            ProductDetails={pd}
                            removeItemHandle={removeItemHandle}>
                        </ReviewItem>)
                }
            </div>
            <div className="col-2">
                <Cart TotalQuantity={cart}></Cart>
            </div>
        </div>
    );
};

export default Review;