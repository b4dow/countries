import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries, postActivities } from '../../redux/action'
import validate from './validate'
import style from './Form.module.css'

const Create = () => {
  const navigate = useNavigate()
  const [input, setInput] = useState({
    nombre: '',
    dificultad: 0,
    duracion: 0,
    temporada: '',
    pais: ''
  })

  const [errors, setErrors] = useState({
    nombre: '',
    dificultad: '',
    duracion: '',
    temporada: '',
    pais: ''
  })

  const countries = useSelector(state => state.countriesBackup)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCountries())
  }, [])

  const handleChange = event => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
    setErrors(
      validate({
        ...input,
        [event.target.name]: event.target.value
      })
    )
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (
      !input.nombre ||
      !input.duracion ||
      !input.dificultad ||
      !input.temporada ||
      !input.pais
    ) {
      const alerta = alert('los campos no pueden estar vacios')
      return alerta
    }
    dispatch(postActivities(input))
    setTimeout(() => {
      navigate('/home')
    }, 2000)
  }

  return (
    <div className={style.Container}>
      <form className={style.FormContainer} action='' onSubmit={handleSubmit}>
        <label htmlFor='nombre'>Actividad Turistica</label>
        <input
          type='text'
          name='nombre'
          onChange={handleChange}
          placeholder='Actividad Turistica'
        />
        {errors.nombre && <p className={style.Error}>{errors.nombre}</p>}
        <label htmlFor='dificultad'>Dificultad</label>
        <input
          type='number'
          name='dificultad'
          onChange={handleChange}
          placeholder='dificultad'
        />
        {errors.dificultad && (
          <span className={style.Error}>{errors.dificultad}</span>
        )}
        <label htmlFor='duracion'>Duración</label>
        <input
          type='number'
          name='duracion'
          onChange={handleChange}
          placeholder='duracion'
        />
        {errors.duracion && <p className={style.Error}>{errors.duracion}</p>}
        <label htmlFor='temporada'>Temporada:</label>
        <select
          name='temporada'
          placeholder='temporada'
          onChange={handleChange}
        >
          <option value='seleccionar'>--- seleccionar ---</option>
          <option value='verano'>Verano</option>
          <option value='otoño'>Otoño</option>
          <option value='invierno'>Invierno</option>
          <option value='primavera'>Primavera</option>
        </select>
        {errors.temporada && <p className={style.Error}>{errors.temporada}</p>}
        <label htmlFor='pais'>País:</label>
        <select name='pais' onChange={handleChange}>
          <option value='seleccionar'>--- seleccionar ---</option>
          {countries?.map(country => (
            <option key={country.id} value={country.nombre}>
              {country.nombre}
            </option>
          ))}
        </select>
        {errors.pais && <p className={style.Error}>{errors.pais}</p>}
        <button type='submit'>
          <box-icon name='send' animation='tada'></box-icon>
        </button>
      </form>
    </div>
  )
}

export default Create
