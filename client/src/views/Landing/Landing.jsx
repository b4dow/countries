import React from 'react'
import style from './landing.module.css'
import imageLanding from '../../../../countries.png'
import { NavLink } from 'react-router-dom'

const Landing = () => {
  return (
    <div className={style.LandingContainer}>
      <div className={style.ContainerImg}>
        <img src={imageLanding} alt='Fondo Countries' />
        <div className={style.ButtonLanding}>
          <NavLink to='/home' className={style.LinkLanding}>HOME PAGE</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Landing
