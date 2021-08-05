import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
    console.log(login)
    return (
        <div className="assemble">
             <NavLink to='/home'>Home</NavLink>
             <NavLink to='/offer'>Offer</NavLink>
             
             
        </div>
    )
}

export default Navbar;