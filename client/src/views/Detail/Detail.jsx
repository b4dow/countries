import React, { useEffect } from 'react'
import { getCountriesByID } from '../../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import style from './Detail.module.css'

const Detail = () => {
  const { id } = useParams()

  const country = useSelector(store => store.country)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCountriesByID(id))
  }, [id])

  return (
    <div className={style.Container}>
      <div className={style.DetailContainer}>
        <div className={style.ContainerImg}>
          <img src={country.imagen_bandera} alt={country.nombre} />
        </div>
        <div className={style.ContainerPf}>
          <h2>
            <span>ID </span> {country.id}
          </h2>
          <h2>
            <span>NOMBRE </span>
            {country.nombre}
          </h2>
          <h2>
            <span>CONTINENTE </span>
            {country.continente}
          </h2>
          <h2>
            <span>CAPITAL </span> {country.capital}
          </h2>
          {country.subregion ? (
            <h2>
              <span> SUBREGION </span> {country.subregion}
            </h2>
          ) : (
            ''
          )}
          {country.area ? (
            <h2>
              <span>AREA </span> {country.area}
            </h2>
          ) : (
            ''
          )}
          <h2>
            <span>POBLACION </span> {country.poblacion}
          </h2>
        </div>
      </div>
      {country.Activities && (
        <div className={style.DetailContainer}>
          <div className={style.ContainerPf}>
            <h2>
              <span>ACTIVIDADES: </span>
              {country.Activities?.map(activity => (
                <>
                  <h2>
                    {' '}
                    NOMBRE <span> {activity.nombre}</span>
                  </h2>
                  <h2>
                    {' '}
                    DIFICULTAD <span>{activity.dificultad}</span>
                  </h2>
                  <h2>
                    {' '}
                    DURACION <span>{activity.duracion}</span>
                  </h2>
                  <h2>
                    {' '}
                    TEMPORADA <span>{activity.temporada}</span>
                  </h2>
                </>
              ))}
            </h2>
          </div>
        </div>
      )}
    </div>
  )
}

export default Detail
