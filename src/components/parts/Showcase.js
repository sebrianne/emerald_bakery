import React from 'react';
import '../../css/Showcase.css';
import FilterDiv from './FilterDiv.js';
import ItemDisplay from './ItemDisplay.js';

class Showcase extends React.Component  {

    constructor(props) {
        super(props);
        this.state = { 
            apiResponse: "",
            items: []
        };
      }
    
      callAPI() {
        fetch("http://localhost:4000/test")
        .then(res => res.text())
        .then(res =>
          this.setState({apiResponse: res}, () =>{
            this.generateItems();
          }));
      }

      generateItems () {
        var parsed = JSON.parse(this.state.apiResponse);
        var temp_items = [];
        for (let category in parsed) {
          for(let item in parsed[category]) {
            var feilds = parsed[category][item];
            temp_items.push(<ItemDisplay name = {item} price = {feilds["price"]} url = {feilds["url"]}/>)
          }
        }
        this.setState({items: temp_items});
      }
    
      componentWillMount() {
          this.callAPI();
      }
    render () {
        return (
        <div className="rowC">
            <div className="left-div">
                <br/>
                <FilterDiv />
            </div>
            <div className="right-div"> 
              {this.state.items}
            </div> 
        </div>
      );
    }

  }


export default Showcase;