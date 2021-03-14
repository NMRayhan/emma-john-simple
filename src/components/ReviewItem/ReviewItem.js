import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
const product_style = {
    borderBottom: '1px solid gray',
    borderLeft: '1px solid gray',
    borderRight: '1px solid gray'
}
const ReviewItem = (props) => {
    const { quantity, category, name, img, price, key } = props.ProductDetails;
    // console.log(typeof quantity);
    return (
        <div className="row align-items-center" style={product_style}>
            <div className="col-4">
                <img src={img} alt="" />
            </div>
            <div className="col-8">
                <Link><h5>{name}</h5></Link>
                <p>Quantity :{quantity} </p>
                <p>Category : {category}</p>
                <h6>Price :  ${price}</h6>
                <button className="btn btn-warning"
                    onClick={() => props.removeItemHandle(key)}>
                    <FontAwesomeIcon icon={faTimesCircle} /> Remove Item
                </button>
            </div>
        </div >
    );
};

export default ReviewItem;