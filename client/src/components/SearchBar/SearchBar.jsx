import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import 'boxicons'
import style from './SearchBar.module.css'
import { searchCountry } from '../../redux/action'
const SearchBar = () => {
  const dispatch = useDispatch()

  const [search, setSearch] = useState('')

  const handlerChange = event => {
    setSearch(event.target.value)
  }

  const handlerSubmit = e => {
    e.preventDefault()
    dispatch(searchCountry(search))
  }

  return (
    <div className={style.ContainerSearchBar}>
      <form onSubmit={handlerSubmit}>
        <input
          onChange={handlerChange}
          type='text'
          placeholder='buscar'
          name='nombre'
        />
        <button type='submit'>
          <box-icon name='search-alt' animation='tada'></box-icon>
        </button>
      </form>
    </div>
  )
}

export default SearchBar
