import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {

  return (
    <div>
      <div className={`navbar navbar-expand-md navbar-${props.mode} bg-${props.mode} p-3 fixed-top top-0 mb-5`}>
        <div className="container-md">
            <a href="/" className='navbar-brand'>Glidebook</a>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#NavMenu" type='button'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className="collapse navbar-collapse" id='NavMenu'>
               <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link to='/home' className='nav-link'>Home</Link></li>
                <li className="nav-item"><Link to='/about' className='nav-link'>About</Link></li>
                <li className="nav-item"><Link to='/glidebook' className='nav-link'>GlideBook</Link></li>
                <li className="nav-item"><Link to='/contact' className='nav-link'>Contact</Link></li>
                <li className="nav-item py-2 mx-3" style={{cursor: "pointer", color: "black"}} onClick={props.togglemode}><i className='fa-solid fa-sun'></i></li>
               </ul>
            </div> 
        </div>
      </div>
    </div>
  )
}

export default Navbar
