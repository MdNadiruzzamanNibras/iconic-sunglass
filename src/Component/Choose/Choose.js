import React from 'react';
import './Choose.css'
const Choose = (props) => {
  const {name, img }= props.choose
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