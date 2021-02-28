import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cartDetail;
    const totalPrice = cart.reduce((total,pdt) => total+=pdt.price, 0)
    let Shipping = 0;
    if(totalPrice > 35){
        Shipping = 12.49;
    }
    else if(totalPrice > 15){
        Shipping = 5.59;
    }
    else if(totalPrice > 0){
        Shipping = 0;
    }
    const grandPrice = (totalPrice + Shipping).toFixed(2);
    const tax = (grandPrice*10/100).toFixed(2);
    return (
        <div>
            <h2>Ordered Summery</h2>
            <h4>Ordered Item: {props.cartDetail.length}</h4>
            <p>Ordered Item Price: {totalPrice}</p>
            <p>Shipping cost: {Shipping}</p>
            <p>Tax: {tax}</p>
            <h3>Total Price: {grandPrice}</h3>
            <button className='reviewBtn'>Review Ordered Items</button>
        </div>
    );
};

export default Cart;