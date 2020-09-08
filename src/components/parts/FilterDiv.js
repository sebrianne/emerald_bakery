import React from 'react';
import '../../css/FilterDiv.css';
import Nav from 'react-bootstrap/Nav'

const FilterDiv = (props) =>  {

    return (
        <div className="widget">
            <Nav.Link className = "choice"> Glacé </Nav.Link>
            <Nav.Link className = "choice"> Salé </Nav.Link>
            <Nav.Link className = "choice"> Sec </Nav.Link>
        </div>
    );
  }


export default FilterDiv;