import React from 'react';
import './Choose.css'
const Choose = ({ choose}) => {
    
  const {name, img }= choose
 
    return (
        <div>
            <div className="choose-flex">
                
                <img src={img} alt="" />
                <h1>{name}</h1>
            </div>
            
        </div>
    );
};

export default Choose;