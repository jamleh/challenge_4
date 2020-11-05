import React, { Component } from 'react';
import GridCell from './GridCell'
import './App.css';
class App  extends Component {

    render() { 
        const cells=[];
        for(let y=5;y>=0;y--){
            const row=[]
            for(let x=0;x<7;x++){
                row.push(<GridCell key={x+y} x={x} y={y} />); 
            }
                cells.push(<div key={y} className='row'>{row}</div>)
        }
        return  <div >
            <center> 
            {cells}
            </center>
           
        </div>
    }

}
 
export default App ;