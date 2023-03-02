import React from 'react'
import Navbar from './Navbar'

function Header({navigate}) {
    return (
        <div className="header">
            <h1 className='logo'>Jaya Singh</h1>
            <Navbar navigate={navigate}/>
        </div>
    )
}

export default Header