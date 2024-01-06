import { Component } from "react";
import "./App.css"

export default class AppClass extends Component{
 constructor(props){
  super();
  this.data=props;
 }
render(){
  let galleryStyle = {
    textAlign:"center"
  }
  let divStyle = {
    padding:"50px",
    display:"grid",
    gridTemplateColumns:"repeat(2,1fr)",
    placeItems : "Center",
    gap:"50px"
  }
  return(
    <>
    <h1 style={galleryStyle}>Kalvium Gallery</h1>
    <div style={divStyle}>
      {this.data.props.map((el)=>(
        <div key={el.id}>
          <img src={el.img} width={"680px"} height={"400px"}/>
        </div>
      ))}
    </div>
    </>
  )
}
  // code here
}
