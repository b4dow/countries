import axios from 'axios'
import {
  FILTER_BY_ACTIVITY,
  FILTER_BY_CONTINENTS,
  ORDER_BY_NAME,
  ORDER_BY_POBLATION,
  PAGINATION,
  RESTART,
  SEARCH_COUNTRY,
  SET_ACTIVITIES,
  SET_COUNTRIES,
  SET_COUNTRIES_BY_ID
} from './types'

export const getCountries = () => async dispatch => {
  try {
    const { data } = await axios('http://localhost:3001/countries/')

    return dispatch({
      type: SET_COUNTRIES,
      payload: data
    })
  } catch (error) {
    console.log('SUCEDIO UN ERROR AL REQUERIR LOS PAISES...')
  }
}

export const getActivities = () => async dispatch => {
  try {
    const { data } = await axios.get('http://localhost:3001/activities/')
    return dispatch({
      type: SET_ACTIVITIES,
      payload: data
    })
  } catch (error) {
    alert(error.responde.data.error)
  }
}

export const getCountriesByID = id => dispatch => {
  // try {
  //   const { data } = await axios(`http://localhost:3001/countries/${id}`)
  //   dispatch({
  //     type: SET_COUNTRIES_BY_ID,
  //     payload: data
  //   })
  // } catch (error) {
  //   alert('HUBO UN ERROR AL MOSTRAR EL PAIS POR ID')
  // }

  axios
    .get(`http://localhost:3001/countries/${id}`)
    .then(response => response.data)
    .then(data =>
      dispatch({
        type: SET_COUNTRIES_BY_ID,
        payload: data
      })
    )
    .catch(error => console.log(error))
}

export const postActivities = (info, time) => async dispatch => {
  try {
    await axios.post('http://localhost:3001/activities', info)
    alert('ACTIVIDAD CREADA CORRECTAMENTE.')
  } catch (error) {
    console.log('NO SE CREA LA ACTIVIDAD')
  }
}

export const restart = () => async dispatch => {
  try {
    dispatch({
      type: RESTART
    })
  } catch (error) {
    alert(error.response.data.error)
  }
}

export const changePage = order => async dispatch => {
  console.log(order)

  try {
    dispatch({ type: PAGINATION, payload: order })
  } catch (error) {
    alert(error.response.data.error)
  }
}

export const filterByContinents = country => async dispatch => {
  try {
    dispatch({
      type: FILTER_BY_CONTINENTS,
      payload: country
    })
  } catch (error) {
    alert(error.response.data.error)
  }
}

export const filterByActivity = activity => async dispatch => {
  try {
    dispatch({
      type: FILTER_BY_ACTIVITY,
      payload: activity
    })
  } catch (error) {
    alert(error.response.data.error)
  }
}

export const orderByCountries = order => async dispatch => {
  try {
    dispatch({
      type: ORDER_BY_NAME,
      payload: order
    })
  } catch (error) {
    alert(error.response.data.error)
  }
}

export const orderByPoblation = order => async dispatch => {
  try {
    dispatch({
      type: ORDER_BY_POBLATION,
      payload: order
    })
  } catch (error) {
    alert(error.response.data.error)
  }
}

export const searchCountry = country => async dispatch => {
  try {
    const { data } = await axios.get(
      `http://localhost:3001/countries?name=${country}`
    )
    dispatch({
      type: SEARCH_COUNTRY,
      payload: data
    })
  } catch (error) {
    alert(error.response.data.error)
  }
}
