
import {MdAddShoppingCart} from 'react-icons/md'
import React from 'react';
import './Item.css'
const Item = ({handleToChoose, sunglass}) => {
    
  const{img, name, price} =sunglass
  
    return (
        <div className='item-container'>
            <div className="img-container">
               <img src={img} alt=''></img>
            </div>
            <div>
                
               <h2>{name}</h2>
               <p>${price}</p>
            </div>
            <div className=' mx-auto'>
            <button className='item-btn' onClick={()=>handleToChoose(sunglass)}>Add To Cart
            <MdAddShoppingCart/> </button>
            </div>
            
           
        </div>
    );
};

export default Item;