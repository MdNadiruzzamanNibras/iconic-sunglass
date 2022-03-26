import React, { useEffect, useState } from 'react';
import './Shop.css'
const Shop = () => {
    const [sunglasses, setSunglasses]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=> console.log(data))
    },[])
    return (
        <div className='shop-container'>
            
            <div className='products-container'>
                
            </div>
            <div className='order-container'>
               
            </div>
            
        </div>
    );
};

export default Shop;