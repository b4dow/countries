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
} from '../action/types'

const initialState = {
  countries: [],
  countriesBackup: [],
  countriesFiltered: [],
  country: {},
  totalCountries: 0,
  activities: [],
  activitiesBackup: [],
  currentPage: 0,
  filter: false
}

const countriesReducer = (state = initialState, { type, payload }) => {
  const ITEM_PER_PAGE = 10
  switch (type) {
    case SET_COUNTRIES:
      return {
        ...state,
        countries: [...payload].splice(0, ITEM_PER_PAGE),
        countriesBackup: payload,
        countriesFiltered: payload,
        totalCountries: Math.ceil(payload.length / ITEM_PER_PAGE)
      }

    case SET_ACTIVITIES:
      return {
        ...state,
        activities: [...payload].splice(0, ITEM_PER_PAGE),
        activitiesBackup: payload,
        totalActivities: Math.ceil(payload.length / ITEM_PER_PAGE)
      }

    case SET_COUNTRIES_BY_ID:
      return {
        ...state,
        country: payload
      }

    case RESTART:
      return {
        ...state,
        countries: [...state.countriesBackup].splice(0, ITEM_PER_PAGE),
        countriesFiltered: [...state.countriesBackup],
        currentPage: 0,
        totalCountries: Math.ceil(
          [...state.countriesBackup].length / ITEM_PER_PAGE
        )
      }
    case PAGINATION:
      const nextPage = state.currentPage + 1
      const prevPage = state.currentPage - 1
      const firstIndex =
        payload === 'next' ? nextPage * ITEM_PER_PAGE : prevPage * ITEM_PER_PAGE

      if (state.filter) {
        if (
          payload === 'next' &&
          firstIndex >= state.countriesFiltered.length
        ) {
          return state
        }
        if (payload === 'prev' && prevPage < 0) return state

        return {
          ...state,
          countries: [...state.countriesFiltered].splice(
            firstIndex,
            ITEM_PER_PAGE
          ),
          currentPage: payload === 'next' ? nextPage : prevPage,
          filter: true
        }
      }

      if (payload === 'next' && firstIndex >= state.countriesBackup.length)
        return state
      if (payload === 'prev' && prevPage < 0) return state

      console.log(state)

      return {
        ...state,
        countries: [...state.countriesBackup].splice(firstIndex, ITEM_PER_PAGE),
        currentPage: payload === 'next' ? nextPage : prevPage,
        filter: false
      }

    case SEARCH_COUNTRY:
      return {
        ...state,
        countries: [...payload].splice(0, ITEM_PER_PAGE),
        countriesFiltered: payload,
        filters: true,
        totalCountries: Math.ceil([...payload].length / ITEM_PER_PAGE)
      }

    case FILTER_BY_CONTINENTS:
      if (payload === 'seleccionar') {
        return state
      }
      const filterbyContinents = [...state.countriesBackup].filter(
        country => country.continente === payload
      )

      console.log(filterbyContinents)

      return {
        ...state,
        countries: [...filterbyContinents].splice(0, ITEM_PER_PAGE),
        countriesFiltered: filterbyContinents,
        currentPage: 0,
        filter: true,
        totalCountries: Math.ceil(filterbyContinents.length / ITEM_PER_PAGE)
      }
    case FILTER_BY_ACTIVITY:
      if (payload === 'seleccionar') {
        return state
      }

      const filteredCountries = [...state.countriesBackup].filter(country => {
        return (
          country.Activities &&
          country.Activities.some(activity => activity.nombre === payload)
        )
      })

      console.log(state.totalActivities)

      return {
        ...state,
        countries: [...filteredCountries].splice(0, ITEM_PER_PAGE),
        countriesFiltered: filteredCountries,
        filter: true,
        totalCountries: Math.ceil(filteredCountries.length / ITEM_PER_PAGE),
        currentPage: 0
      }

    case ORDER_BY_NAME:
      let orderByName = []

      if (payload === 'AZ') {
        orderByName = [...state.countriesFiltered].sort((prev, next) => {
          if (prev.nombre > next.nombre) return 1
          if (prev.nombre < next.nombre) return -1
          return 0
        })
      } else if (payload === 'ZA') {
        orderByName = [...state.countriesFiltered].sort((prev, next) => {
          if (prev.nombre > next.nombre) return -1
          if (prev.nombre < next.nombre) return 1
          return 0
        })
      } else {
        return { ...state }
      }

      console.log(orderByName)

      return {
        ...state,
        countries: [...orderByName].splice(0, ITEM_PER_PAGE),
        countriesFiltered: orderByName,
        totalCountries: Math.ceil(orderByName.length / ITEM_PER_PAGE),
        currentPage: 0
      }
    case ORDER_BY_POBLATION:
      let orderByPoblation = []

      if (payload === 'menosAmas') {
        orderByPoblation = [...state.countriesFiltered].sort((a, b) => {
          if (a.poblacion > b.poblacion) return 1
          if (a.poblacion < b.poblacion) return -1
          return 0
        })
      } else if (payload === 'masAmenos') {
        orderByPoblation = [...state.countriesFiltered].sort((a, b) => {
          if (a.poblacion < b.poblacion) return 1
          if (a.poblacion > b.poblacion) return -1
          return 0
        })
      } else {
        return {
          ...state
        }
      }

      return {
        ...state,
        countries: [...orderByPoblation].splice(0, ITEM_PER_PAGE),
        countriesFiltered: orderByPoblation,
        totalCountries: Math.ceil(orderByPoblation.length / ITEM_PER_PAGE),
        currentPage: 0
      }

    default:
      return { ...state }
  }
}

export default countriesReducer
