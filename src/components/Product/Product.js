import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { img, name, seller, price, stock, key } = props.product
    // console.log(props.showAddToCart);
    return (
        <div className="row" style={{
            borderBottom: "1px solid lightgray",
            marginRight: "2px"
        }}>
            <div className="col-lg-3 product-img">
                <img src={img} alt="" />
            </div>
            <div className="col-lg-9 product-Details row">
                <h4>
                    <Link to={"/product/" + key}>
                        {name}
                    </Link>
                </h4>
                <div className="col-md-6">
                    <p>By: {seller}</p>
                    <h4>${price}</h4>
                    <p>Only <strong>{stock}</strong> left in stock - order soon</p>
                    {props.showAddToCart &&
                        <button
                            className="btn btn-warning"
                            onClick={() => props.handleAddClick(props.product)}
                        ><FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>}
                </div>
                <div className="col-md-6">
                    <h4>Features</h4>
                </div>
            </div>
        </div>
    );
};

export default Product;