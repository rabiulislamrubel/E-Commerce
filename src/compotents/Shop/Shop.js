import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0,15);
    const [products, setProducts]=useState(first10)
    const [clickPdt, setClickPdt] =useState([]);
    
    const handleAddProduct = (productClick) => {
        const newCart = [...clickPdt, productClick];
        setClickPdt(newCart);
        
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(pd => <Product product={pd} handle={handleAddProduct} key ={pd.key}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cartDetail = {clickPdt}></Cart>
            </div>
        </div>
    );
};

export default Shop;