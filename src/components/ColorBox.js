const ColorBox=(props)=>{
const Style={
    backgroundColor:props.color,
    width:"120px",
    height:"150px",
    fontFamily:""
}

const Style_name={
    color:props.color
}
    return(
        <div className="box" >
            <div style={Style}>  </div>
            <div className="codeName" ><h3 className="code">{props.code}</h3><p style={Style_name} className="name">{props.name}</p></div>
        </div>
        
    )
}
export default ColorBox;