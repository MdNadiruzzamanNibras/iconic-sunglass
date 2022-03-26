import React, { useEffect, useState } from 'react';
import Choose from '../Choose/Choose';
import Item from '../Item/Item';
import './Shop.css'
const Shop = () => {
    const [sunglasses, setSunglasses]=useState([])
    const[chooses, setChoose]=useState([])
    
    const handleToChoose=(sunglass)=>{
        let newChoose =[]
        const chooseLength = chooses.slice(0, 3)
        if(!chooseLength){
            
            const newChoose =[...chooses, sunglass]
        }
        else{

        }
        
        setChoose(newChoose)
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
                 sunglasses.map(sunglass=><Item key={sunglass.id} sunglass={sunglass}handleToChoose={handleToChoose}></Item>)
             }
            </div>
            <div className='choose-container'>
               {
                   chooses.map(choose=> <Choose choose={choose}></Choose>)
               }
            </div>
            
        </div>
    );
};

export default Shop;