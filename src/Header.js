import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { fetchData, fetchAssets } from './controller/content';
import './Header.css'

export default function Header() {

  return (
    <div>
        <header>
            <h1>Kenel<span>Travel</span></h1>
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
