import React, { useEffect, useState } from 'react';
import Choose from '../Choose/Choose';
import Item from '../Item/Item';
import './Shop.css'
const Shop = () => {
    const [sunglasses, setSunglasses]=useState([])
    const[chooses, setChoose]=useState([])
    
    const handleToChoose=(sunglass)=>{
        
        
        // if(!newChoose.length===4){
            
           const newChoose =[...chooses, sunglass]
        // // }
        // // else{

        // // }
        
        setChoose(newChoose)
    }
    const [random, setrandom]= useState([])
    const handleRandom=()=>{
       console.log('add')
    }
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=> setSunglasses(data))
    },[])
    return (
        <div className='shop-container'>
            
            <div className='items-container'>
             {
                 sunglasses.map(sunglass=><Item key={sunglass.id} sunglass={sunglass} handleToChoose={handleToChoose}></Item>)
             }
            </div>
            <div className='choose-container'>
               {
                   chooses.map(choose=> <Choose key={choose._id} choose={choose} 
                    ></Choose>)
               }
               <div>
                <button onClick={handleRandom}>Choose 1 for me</button>
            </div>
            </div>
            
        </div>
    );
};

export default Shop;