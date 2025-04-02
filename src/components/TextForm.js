import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick=()=>{
        //we are accessing the text from the function
        //console.log("Uppercase was clicked"+text);
        //setText("Clicked on handleUpClick");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    }

    const handleLowCLick=()=>{
        //console.log("CLicked on handleLowChange");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");
    }

    const handleSpaceClick=()=>{
      let newText=text.replaceAll(" ","");
      setText(newText);
      props.showAlert("Removed Extra Spaces!","success");
    }

    const handleTitleCase=()=>{
      let newText=text.toLowerCase().split(" ");
      for (let i=0;i<newText.length;i++){
        newText[i]=newText[i].charAt(0).toUpperCase()+newText[i].slice(1);
      }
      let Text=newText.join(" ");
      setText(Text);
      props.showAlert("Converted to Titlecase!","success");
   }

    const handleClear=()=>{
        let newText="";
        setText(newText);
        props.showAlert("Cleared Text!","success");
    }

    const handleCopyClick=()=>{
      console.log("Text Copied");
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard!","info");
    }

    //If not used this then we couldn't type into the textarea 
    const handleOnChange=(event)=>{
        console.log("On change");
        //Without this below stmt we couldnt change text when clicked on btn
        setText(event.target.value);
    }

  //everytime the text is entered, we use this state
  //text here is value which is by defualt set to enter tetx here
  //setText is function which is used to update the value of text
  const [text, setText] = useState("");

  //So now where ever we mention count everywhere is would get updated.
  //we cant update the value of state like a variable rather we use a function for a state.
  //text="new Text" //wrong way to update text
  //to update the text we setText("new Text") //correct way
  return (
    <>
    <div className="container">
      <h1 className="my-5 mb-2">{props.heading}</h1>
      <div className="mb-3 my-2">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.Mode==='light'?'#f5f5f5':'white'}} id="myBox" rows="6"></textarea>
      </div>
      <button className="btn btn-primary my-1" onClick={handleLowCLick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary my-1" onClick={handleTitleCase}>Title Case</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleSpaceClick}>Remove Extra Space</button>
      <button className="btn btn-primary my-1" onClick={handleCopyClick}>Copy Text</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear Text</button>
    </div> 
    <div className="container my-3">
        <h2>Text Summary</h2>
        <p>{text.split(" ").length-1} words and {text.trim().length} characters.</p>
        <p>{0.008*text.split(" ").length} Minutes Read</p>
        <h2>Preview:</h2>
        <p className="border p-3">{(text.length>0)?text:"Enter something in the Text area to preview"}</p>
    </div>
    </>
  );
}

//text.split("") will return an array and length of the array will
//  get us the number of string.