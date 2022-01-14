import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    // {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul>
        {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
          </form> */}
        <div className={`custom-control custom-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={props.toggleMode}/>
            <label className="custom-control-label text-white bg-dark" htmlFor="customSwitch1" >Enable {props.mode==='light'?"Dark":"Light"} Mode</label>
        </div>
      </div>
    </nav>


  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About text here'
};