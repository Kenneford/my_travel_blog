import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.css'

export default function Header({tourData}) {
  return (
    <div>
        <header>
            <h1>Kenn<span>Travel</span></h1>
            <div className='navLinks'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/blog">Blog</NavLink>
            </div>
        </header>
    </div>
  )
}
