import React from 'react'
import { Link } from 'react-router-dom'
import style from './Card.module.css'

const Card = ({ country }) => {
  const { id, imagen_bandera, nombre, continente, poblacion } = country
  return (
    <Link to={`/home/${id}`} className={style.Container}>
      <div className={style.CardContainer}>
        <div className={style.ImgContainer}>
          <img src={imagen_bandera} alt={nombre} />
        </div>
        <div className={style.TextContainer}>
          <div>
            <h2>Nombre:</h2>
            <p>{nombre}</p>
          </div>
          <div>
            <h3>Continente:</h3>
            <p>{continente} </p>
          </div>
          <div>
            <h3>Población:</h3>
            <p>{poblacion} </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
