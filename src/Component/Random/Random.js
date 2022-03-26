import React from 'react';

const Random = ({random}) => {
    const {name, price, img}= random
    console.log(random)

    return (
        <div className='random-container'>
              <h1>Random Choose</h1>
            <div className="img-container">
               <img src={img} alt=''></img>
            </div>
            <div>
                
               <h2>{name}</h2>
               <p>${price}</p>
            </div>
            </div>
        
    );
};

export default Random;