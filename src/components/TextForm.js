import React, {useState} from 'react'

                       
export default function Textform(props) {

    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = ()=>{
        // console.log("Uppercase was clicked"+ text);
        let newText = ("");
        setText(newText)
    }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState('');   
  
    return (
        <>
    <div className="container" style={{Color:props.mode==='dark'?'white':'grey'}}>
       <h1>{props.heading}</h1>
       <div className="mb-3">
       <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey'}} id="my box" rows="12"></textarea>
       </div>
       <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
       <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
       <button className="btn btn-primary mx-2"  onClick={handleClearClick}>Clear Text</button>
       </div>

       <div className="container my-2">
           <h1>Your text summary</h1>
           <p>{text.split(" ").length} words and  {text.length} characters</p>
           <p>{0.008 * text.split(" ").length} Minutes read</p>
           <h3>Preview</h3>
           <p>{text.length>0?text:"Enter something to preivew here"}</p>
          
       </div>
       </>
       
    )
}
