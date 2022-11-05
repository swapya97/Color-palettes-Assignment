import "./App.css";
import ColorBox from "./components/ColorBox";
import Details from "./components/Details";

function App(props) {
  return (
    <div>
 <h1>Color Palettes:</h1>
    <div className="Main_container"> 
      <ColorBox color={Details[0].color} code={Details[0].code} name={Details[0].name}/>
      <ColorBox color={Details[1].color} code={Details[1].code} name={Details[1].name}/>
      <ColorBox color={Details[2].color} code={Details[2].code} name={Details[2].name}/>
      <ColorBox color={Details[3].color} code={Details[3].code} name={Details[3].name}/>
      <ColorBox color={Details[4].color} code={Details[4].code} name={Details[4].name}/>
      <ColorBox color={Details[5].color} code={Details[5].code} name={Details[5].name}/>
      <ColorBox color={Details[6].color} code={Details[6].code} name={Details[6].name}/>
      <ColorBox color={Details[7].color} code={Details[7].code} name={Details[7].name}/>
      <ColorBox color={Details[8].color} code={Details[8].code} name={Details[8].name}/>
      <ColorBox color={Details[9].color} code={Details[9].code} name={Details[9].name}/>
    </div>
    </div>
    
  );
}

export default App;
