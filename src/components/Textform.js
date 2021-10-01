import React,{useState} from 'react'


export default function Textform(props){
   const handleUpClick=()=>{
        console.log("uppercase clicked");
        let newText=text.toUpperCase();

        setText(newText)
        props.showAlert("converted to uppercase","success");
    }
    const handleLoClick=()=>{
        console.log("lowercase clicked");
        let newText=text.toLowerCase();

        setText(newText)
        props.showAlert("converted to lowercase","success");
    }
    const handleCLClick=()=>{
        console.log("CLEAR");
        let newText=" ";

        setText(newText)
        props.showAlert("Text cleared","success");
    }
    const handleOnchange=(event)=>{
        console.log(" clicked");
        setText(event.target.value);
    }
const [text, setText] = useState('');
//setText("new text");
    return(
        <>
        <div className="container" style={{Color:props.mode==='dark' ?'white':'black'}}>
        <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='dark' ?'grey':'white'
,color:props.mode==='dark' ?'white':'black'}}id="mybox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>CONVERT TO UPPER CASE</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>CONVERT TO LOWER CASE</button>
    <button className="btn btn-primary mx-2" onClick={handleCLClick}>CLEAR TEXT</button>
    
        </div>
        <div className="container my-2"style={{Color:props.mode==='dark' ?'white':'black'}}>
        <h1>Text Summary</h1>
    <p> {text.split(" ").length} words and {text.length} charecters</p>
    <p>{0.008*text.split(" ").length } minutes</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter Something"}</p>
        </div>
        </>
    )
}