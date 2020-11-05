import React, { Component } from 'react';

class Form  extends Component {
    state = { 
        username:"default",
        password:null
     }
    //  constructor(){
    //      super();
    //      this.saveData= this.saveData.bind(this);
    //  }
    render() { 
        return  <form > 
        User Name: <input name='username' type='text' placeholder='Enter your user name here' />
        <p/>
        Password: <input name='password' type='password' placeholder='Enter your password here' />
        <p/>
        <input type='button' value='Next' onClick={this.saveData} />
       <span>{this.saveData()}</span> 
</form> 
    }
    //we don'tneed constructor in arrow function , this is another method to call a function 
    saveData = () =>{
           // this.setState({ username:12    })
           
        console.log("button clicked",this)
    }
}
 
export default Form ;