import React, {useState} from 'react'



export default function TextForm(props) {
    
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleUppercase = ()=>{
        setText(text.toUpperCase());
    }
     const handleLowercase = ()=>{
        setText(text.toLowerCase());
    }
        const handleClear = ()=>{
        setText("");
    }
    const handleCapitalize = ()=>{
        let newText = text.split(" ");
        for (let i = 0; i < newText.length; i++) {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
        }
        setText(newText.join(" "));
    }

    const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
        <button className="btn btn-dark my-2 mx-1" disabled={text.length === 0} style={{backgroundColor: props.mode === 'light' ? '#007bff' : '#222'}} onClick={handleUppercase}>Convert to Uppercase</button>
        <button className="btn btn-dark my-2 mx-1" disabled={text.length === 0} style={{backgroundColor: props.mode === 'light' ? '#007bff' : '#222'}} onClick={handleLowercase}>Convert to Lowercase</button>
        <button className="btn btn-dark my-2 mx-1" disabled={text.length === 0} style={{backgroundColor: props.mode === 'light' ? '#007bff' : '#222'}} onClick={handleClear}>Clear Text</button>
        <button className="btn btn-dark my-2 mx-1" disabled={text.length === 0}  style={{backgroundColor: props.mode === 'light' ? '#007bff' : '#222'}} onClick={handleCapitalize}>Convert the first letter to Uppercase</button>
    </div>
    </div>
    <div className="className" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Nothing to preview here"}</p>
    </div>
    </>
  )
}
