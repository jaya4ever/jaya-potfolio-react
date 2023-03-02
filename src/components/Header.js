import React from 'react'
import Navbar from './Navbar'

function Header({navigate,currentPage}) {
    return (
        <div className="header">
            <h1 className='logo'>Jaya Singh</h1>
            <Navbar navigate={navigate} currentPage={currentPage}/>
        </div>
    )
}

export default Header