import React from 'react';
import '../../css/Showcase.css';
import FilterDiv from './FilterDiv.js';

const Showcase = (props) =>  {

    return (
        <div className="rowC">
            <div className="left-div">
                <FilterDiv />
            </div>
            <div className="right-div">
                <p>world!</p>    
            </div> 
        </div>
        

    );
  }


export default Showcase;