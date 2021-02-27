import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import "./Shop.css";

const Shop = () => {
    const first10 = fakeData.slice(0, 10)
    console.log(first10);
    const [products, setProducts] = useState(first10)
    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        products.map(product => {
                            return (
                                <div>
                                    {
                                        <Product product={product}></Product>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div className="cart-container">
                    <h3>This is Cart</h3>
                </div>
            </div>
        </div >
    );
};

export default Shop;