import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

//to use router we import the following
//import{
//  BrowserRouter as Router,
//  Switch,
//  Route,
//  Link
//}from "react-router-dom";

//whatever we write here will be seen in our react app
//In index.js we deliver the app.js into div with root as id.
//jsx js and html infused.
//class is replaced by className, similarly, tag by tagName, tab by tabIndex
//for is replaced by htmlFor
//every single tag too we have a closing / eg img tag <img src="..."/>
//and where ever we need to use java script element we use js elements
//the below code is compiled by Babel into js then we see the website.
//this is function based components.

function App() {
  //for darkmode
  const [mode,setMode] = useState('light'); //Whether dark mode is enabled or not.
  
  //for alert.js we are making a object for alert
  const [alert,setAlert]=useState(null);

  //now we made object for alert. and bfr it was null now we have set alert
  //Now we want to set time for this showalert, after sometime we set it to null
  const showAlert=(message,type)=>{
     setAlert({
      msg:message,
      type:type
     })
     setTimeout(()=>{
      setAlert(null)
     },1500);
  }

  let toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#1b1c1a';
      document.body.style.color='white';
      showAlert("Dark mode has been activated","success");
      document.title="TextUtil - Dark Mode";
      
      //this updates the title every 1 ms
      {/*
        setInterval(()=>{
        document.title="TextUtils - It's a great site";
      },2000)
      setInterval(()=>{
        document.title="TextUtils - Install Now";
      },1500)
      */}

    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Light mode has been activated","success");
      //document.title="TextUtil - Light Mode";
    }
  }
  return (
    <>
    <Navbar title="TextUtils" aboutText="About" Mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the text:" Mode={mode}/>
    </div>
    {/*<div className="container my-3"><About/></div>*/}
    </>
  );
}

export default App;
