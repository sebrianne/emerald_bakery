import React from 'react';
import '../../css/Showcase.css';
import FilterDiv from './FilterDiv.js';
import ItemDisplay from './ItemDisplay.js';

const Showcase = (props) =>  {

    return (
        <div className="rowC">
            <div className="left-div">
                <br/>
                <FilterDiv />
            </div>
            <div className="right-div"> 
                <ItemDisplay />
                <ItemDisplay />
                <ItemDisplay />
                <ItemDisplay />
                <ItemDisplay />
            </div> 
        </div>
        

    );
  }


export default Showcase;