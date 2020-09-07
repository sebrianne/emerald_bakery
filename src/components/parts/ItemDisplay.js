import React from 'react';
import '../../css/ItemDisplay.css';

class ItemDisplay extends React.Component  {

  constructor(props) {
      super(props);
      this.state = { 
          name: props.name,
          price: props.price,
          url: props.url
      };
    }

    render () {
      return (
        <div class = "shelf-space">
           <img className = "food-img" src = {this.state.url} alt = "emerald_bakery_item"/>
           <br /> <br/>
           <p className = "item-title"> {this.state.name} </p>
           <p className = "item-price"> {this.state.price} </p>
        </div>
      );
    }
  }


export default ItemDisplay;