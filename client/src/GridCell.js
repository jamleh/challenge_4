import React, { Component } from 'react';
import { connect } from 'react-redux';
//import store from './store'
class GridCell extends Component {
    handleClick(){
        console.log(`Clicked on Column ${this.props.x}`)
        //this.props.sendTileDrop(this.props.x);
    }
   
    render() { 
        return ( 
            <div className="cell" onClick={()=>this.handleClick()}>
                <p>{this.props.x}, {this.props.y}</p>
            </div>
         );
    }
}
 
export default GridCell;