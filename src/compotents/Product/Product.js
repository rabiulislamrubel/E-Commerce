import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css';


const Product = (props) => {
    const {name,img,price,stock, seller} = props.product
    return (
        <div className='product'>
            <div className='photo'>
                <img src={img} alt=""/>
            </div>
            <div className="product-detail">
                <h3>{name}</h3>
                <p><small>By: {seller}</small></p>
                <p><small>Price: ${price}</small></p>
                <p><small>Stock: {stock}</small></p>
                <button className='btn' onClick ={() => props.handle(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;