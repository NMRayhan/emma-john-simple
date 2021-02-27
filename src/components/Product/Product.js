import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.product);
    const { img, name, url, seller, price, stock } = props.product
    return (
        <div className="row" style={{ borderBottom: "1px solid lightgray", marginRight: "2px" }}>
            <div className="col-md-3 product-img">
                <img src={img} alt="" />
            </div>
            <div className="col-md-9 product-Details row">
                <a href={url}>{name}</a>
                <div className="col-md-6">
                    <p>by: {seller}</p>
                    <h4>${price}</h4>
                    <p>only {stock} left in stock - order soon</p>
                    <button
                        className="btn btn-warning"
                        onClick={() => props.handleAddClick(props.product)}
                    ><FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>
                </div>
                <div className="col-md-6">
                    <h4>Features</h4>
                </div>
            </div>
        </div>
    );
};

export default Product;