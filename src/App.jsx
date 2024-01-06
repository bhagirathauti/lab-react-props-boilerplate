import './App.css';
function App(props) {
  console.log(props)
  // code here
  let data=props.props;
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
      {data.map((el)=>(
        <div key={el.id}>
          <img src={el.img} width={"680px"} height={"400px"}/>
        </div>
      ))}
    </div>
    </>
  )
}

export default App;
