import React from 'react'
import style from './Navbar.module.css'
import { Link, useLocation } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'

const Navbar = () => {
  const { pathname } = useLocation()
  return (
    <div className={style.NavContainer}>
      <div className={style.NavLogo}>
        <h2>
          <span>Henry's</span> countries
        </h2>
      </div>
      <div>
        <Link
          className={`${pathname === '/home' ? style.NavActive : ''} ${
            style.Nav
          }`}
          to='/home'
        >
          Home
        </Link>
        <Link
          className={`${pathname === '/create' ? style.NavActive : ''} ${
            style.Nav
          }`}
          to='/create'
        >
          Create
        </Link>
      </div>
      <SearchBar />
    </div>
  )
}

export default Navbar
