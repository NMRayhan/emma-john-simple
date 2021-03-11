import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import './ProductDetails.css';

const ProductDetails = () => {
    const { productKey } = useParams()
    const product = fakeData.find(pd => {
        return pd.key === productKey;
    })
    console.log(product);
    return (
        <div style={{ width: "80%", margin: "0 auto" }}>
            <div className="container row">
                <h2 className="col-12">{product.name}</h2>
            </div>
            <div className="container row align-items-center">
                <div className="col-4">
                    <img src={product.img} alt="" className="border border-5 border-success" />
                </div>
                <div className="col-4">
                    <p>by: {product.seller}</p>
                    <h4>${product.price}</h4>
                    <p>Only <strong>{product.stock}</strong> left in stock - order soon</p>
                </div>
                <div className="col-4">
                    <h4>Features</h4>
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;