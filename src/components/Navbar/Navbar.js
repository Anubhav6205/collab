import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import profile from './profilepic.jpeg'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
  <div className="container-fluid">
    <img src={logo} alt="logo" width="70" height="70"/>
    <div className="navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <div className="d-flex mt-3" style={{marginLeft:450}}>
        <Link className="nav-link active" aria-current="page" to="/" style={{color:'#D22B2B'}}><h5>Home</h5></Link>
        <Link className="nav-link active" to="/search" style={{color:'#00CED1'}}><h5>Search</h5></Link>
        <Link className="nav-link active" to="/playlist" style={{color:'#D22B2B'}}><h5>Playlist</h5></Link>
        </div>
        <Link className="nav-link active" to="/profile" style={{marginLeft:400}}>
        <img src={profile} alt="logo" width="70" height="70" style={{borderRadius:50,borderStyle:'solid',borderColor:'#00CED1'}}/>
        </Link>
      </div>
    </div>
  </div>
</nav>
  )
}
