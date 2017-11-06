import { Link } from 'react-router-dom'
import React from 'react'

const NavBar = (props) => {

	return(
		<nav className="navbar" aria-label="main navigation" onClick={props.handleLogout}>
      <div className="navbar-brand">
        <a className="navbar-item" href="/spots">
          <img src="../marker.png" alt="📍" width="28" height="28"/>
          <p className="navbar-item spots-title"><strong>Spots</strong></p>
        </a>
      </div>
      <div className="navbar-menu navbar-end">
        <div className="navbar-item">
        	<Link to='/spots' >My Spots</Link>
        </div>
        <div className="navbar-item">
        	<Link to='/spots/new'>Add New Spot</Link>
        </div>
        <div className="navbar-item">
        	{(localStorage.getItem("jwtToken")) ? <a data-id="logout">Logout</a> : <Link to='/spots/new'>Login</Link> }
        </div>
      </div>
    </nav>
	)
}

export default NavBar