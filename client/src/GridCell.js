import React, { Component } from 'react';

class GridCell extends Component {
    handleClick(){
        console.log(`Clicked on Column ${this.props.x}`)
    }
    state = {  }
    render() { 
        return ( 
            <div onClick={()=>this.handleClick()}>
                <p>{this.props.x}, {this.props.y}</p>
            </div>
         );
    }
}
 
export default GridCell;