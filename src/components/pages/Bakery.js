import React from 'react';
import '../../css/Bakery.css';
import EmeraldNav from '../parts/EmeraldNav.js';
import Showcase from '../parts/Showcase.js';

const Bakery = (props) =>  {

    return (
        <div>
            <EmeraldNav/>
            <Showcase/>
        </div>
    );
  }


export default Bakery;