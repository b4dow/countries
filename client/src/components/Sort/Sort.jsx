import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  filterByActivity,
  filterByContinents,
  orderByCountries,
  orderByPoblation,
  restart
} from '../../redux/action'
import style from '../../views/Home/Home.module.css'

const Sort = () => {
  const allCountries = useSelector(state => state.countriesBackup)
  const allActivities = useSelector(state => state.activitiesBackup)

  const dispatch = useDispatch()

  const reset = () => {
    dispatch(restart())

    document.getElementById('orderCountries').value = document.getElementById(
      'initialOrdenCountries'
    ).value

    document.getElementById('orderPoblation').value =
      document.getElementById('initialPoblation').value

    document.getElementById('continentes').value =
      document.getElementById('initialContinents').value
  }

  const filterCountries = event => {
    const value = event.target.value
    dispatch(filterByContinents(value))
  }

  const filterActivities = event => {
    const value = event.target.value
    dispatch(filterByActivity(value))
  }

  const orderCountries = event => {
    const value = event.target.value
    dispatch(orderByCountries(value))
  }

  const orderPoblation = e => {
    const value = e.target.value
    dispatch(orderByPoblation(value))
  }

  const uniqueAllContinents = allCountries?.map(country => country.continente)

  const uniqueContinents = [...new Set(uniqueAllContinents)]

  const uniqueAllActivities = allActivities?.map(activity => activity.nombre)

  return (
    <div className={style.Filtered}>
      <div>
        <button onClick={reset}>RESET</button>
      </div>
      <div>
        <select onChange={filterCountries} id='continentes'>
          <option value='seleccionar' id='initialContinents'>
            --continentes--
          </option>
          {uniqueContinents?.map((continente, index) => (
            <option key={index} value={continente}>
              {continente}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select onChange={filterActivities} id='actividad'>
          <option value='seleccionar' id='initialActivity'>
            --actividad--
          </option>
          {uniqueAllActivities?.map((activity, index) => (
            <option key={index} value={activity}>
              {activity}
            </option>
          ))}
        </select>
      </div>

      <div>
        <select onChange={orderCountries} name='countries' id='orderCountries'>
          <option value='-' id='initialOrdenCountries'>
            --ordenamiento--
          </option>
          <option value='AZ'>A-Z</option>
          <option value='ZA'>Z-A</option>
        </select>
      </div>
      <div>
        <select onChange={orderPoblation} name='poblacion' id='orderPoblation'>
          <option value='-' id='initialPoblation'>
            --poblacion--
          </option>
          <option value='menosAmas'>menos a más</option>
          <option value='masAmenos'>más a menos</option>
        </select>
      </div>
    </div>
  )
}

export default Sort
