import React from 'react';
import EmeraldNav from '../parts/EmeraldNav.js';
import EmeraldFooter from '../parts/EmeraldFooter.js';
import '../../css/Home.css';
import img from '../../media/banner.png';

const Home = (props) =>  {

    return (
        <div>
            <EmeraldNav/>
            <br/>
            <div className = "banner">
                <img src = {img} alt = "home-img"/>
                <p class = "txt"> From assorted scones, specialty quiches,
                original cakes, and delicious tea sandwiches, Emerald Bakery has something for you!
                Come enjoy high tea in house, visit our bakery counter, or have it delivered. </p>
                <button class="btn">  SHOP NOW </button>
            </div>
            <br />
            <EmeraldFooter/>
        </div>
    );
  }


export default Home;