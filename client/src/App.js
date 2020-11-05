import React, { Component } from 'react';
import GridCell from './GridCell'
class App  extends Component {

    render() { 
        const cells=[];
        for(var y=0;y<7;y++){
            for(var x=0;x<7;x++){
                cells.push(<GridCell c={x} y={y} />); 

            }

        }
        return  <div>
            {cells}
        </div>
    }

}
 
export default App ;