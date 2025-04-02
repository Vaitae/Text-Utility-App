import React from 'react'
//impt
import PropTypes from 'prop-types'

//rfc
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-1">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{props.aboutText}</a>
          </li>
        </ul>
      {/* 
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary mx-2" type="submit">Search</button>
        </form>
      */}
      <div className={`form-check form-switch mx-2 mb-2 mb-lg-0 text-${props.Mode==="light"?"dark":"light"}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="dark-mode"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Mode</label>
      </div>
        
      </div>
    </div>
  </nav>
  )
}

//Helps us to check the datatype of properties, if anything else is passed then we get an error.
//if we use .isRequired is used without default proptypes then we get an error that title is needed.
//with default there is no error
Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    aboutText:PropTypes.string.isRequired
};

//Default props in function based components
//If props were not passed then use these values.
Navbar.defaultProps = {
    title:'title here',
    aboutText:'About'
};

//props is basically sending values from app.js to Navbar.js
