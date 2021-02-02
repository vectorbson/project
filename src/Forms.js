import React from 'react';
import Button from 'react-button-component';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const option = ["one","two","three"]
const defaultOption = option[0]
class Forms extends React.Component{
constructor(props){
    super(props);
    this.state={value:''};
    this.handlesubmit=this.handlesubmit.bind(this)
     
}

handlesubmit=(event)=>{
    this.setState({value:event.target.value});
       
}

render(){
    return(
    <div className="Forms">
    <form >
       
        <input style ={{width:"210px",height:"25px",borderRadius:"50mm"}} type="text"  onChange={this.handlesubmit} placeholder="User name"/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
       
        
       
        <input style ={{width:"210px",height:"25px",borderRadius:"50mm"}} type="password"  onChange={this.handlesubmit} placeholder="Password"/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
   
        <Dropdown style={{width:"100px"}} options={option} onChange={this._onSelect} value={defaultOption}></Dropdown>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <Button onClick={()=>{alert("enter your details")}}><h4>login</h4></Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button onClick={()=>{alert("wait")}}><h4>Sign in</h4></Button>
        <br></br>
        <br></br>
        <br></br>
        
       
    </form>
    </div>
    )
}
}
export default Forms;