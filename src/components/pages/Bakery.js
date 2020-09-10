import React from 'react';
import '../../css/Bakery.css';
import EmeraldNav from '../parts/EmeraldNav.js';
import Showcase from '../parts/Showcase.js';
import EmeraldFooter from '../parts/EmeraldFooter.js';

const Bakery = (props) =>  {

    return (
        <div>
            <EmeraldNav/>
            <Showcase/>
            <EmeraldFooter/>
        </div>
    );
  }


export default Bakery;