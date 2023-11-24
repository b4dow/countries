import React, { useEffect } from 'react'
import Cards from '../../components/Cards/Cards'
import { useDispatch, useSelector } from 'react-redux'
import { changePage, getActivities, getCountries } from '../../redux/action'
import style from './Home.module.css'
import Sort from '../../components/Sort/Sort'
const Home = () => {
  const countries = useSelector(state => state.countries)
  const totalCountries = useSelector(state => state.totalCountries)

  const currentPage = useSelector(state => state.currentPage)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCountries())
    dispatch(getActivities())
  }, [])

  const paginate = event => {
    const name = event.target.name
    dispatch(changePage(name))
  }

  return (
    <div className={style.Container}>
      <Sort />
      <Cards countries={countries} />
      <div className={style.Paginate}>
        <button name='prev' onClick={paginate}>
          Prev
        </button>
        <span>
          {currentPage + 1} / {totalCountries}
        </span>
        <button name='next' onClick={paginate}>
          Next
        </button>
      </div>
    </div>
  )
}

export default Home
