import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './ProductDetails.css';

const ProductDetails = () => {
    const { productKey } = useParams()
    const product = fakeData.find(pd => {
        return pd.key === productKey;
    })
    console.log(product);
    return (
        <div style={{ width: "80%", margin: "0 auto" }}>
            <div className="container">
                <Product showAddToCart={false} product={product}></Product>
            </div>
        </div>
    );
};

export default ProductDetails;