import React,{useState} from 'react'

export default function Form() {
  const [text,setText]=useState("Enter your text here");
  const toUpper =()=>{
    let newText=text.toUpperCase();
    setText(newText);
  }
  const toLower =()=>{
    let newText=text.toLowerCase();
    setText(newText);
  }
  const toClear =()=>{
    let newText="";
    setText(newText);
  }
  const handleValue =(event)=>{
    setText(event.target.value);
  }
  return (
    <>
        <div className='container mt-5'>
          <div className="mb-3">
             <h1>Enter the text to Analyze </h1>
             <textarea className="form-control" value={text} onChange={handleValue} id="exampleFormControlTextarea1" rows="8"></textarea>
          </div>
          <button className='btn btn-primary' onClick={toUpper}>Convert to Uppercase</button>
          <button className='btn btn-primary mx-1' onClick={toLower}>Convert to Lowercase</button>
          <button className='btn btn-primary' onClick={toClear}>Clear</button>
        </div>
        <div className='container'>
          <h3 className='mt-4'>Your text Summary</h3>
           <p>{text===""?text.split(" ").length-1:text.split(" ").length} words and {text.length} characters</p>
        </div>
    </>
  )
}
