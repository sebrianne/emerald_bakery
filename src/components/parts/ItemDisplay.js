import React from 'react';
import '../../css/ItemDisplay.css';
import image from '../../media/sec.jpg';

const ItemDisplay = (props) =>  {

    return (
        <div class = "shelf-space">
           <img className = "food-img" src = {image} alt = "emerald_bakery_item"/>
           <br /> <br />
           <p className = "item-title"> Strawberry Scones </p>
           <p className = "item-price"> $3.99 </p>
        </div>
    );
  }


export default ItemDisplay;