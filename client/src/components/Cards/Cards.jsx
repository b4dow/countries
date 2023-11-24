import React from 'react'
import Card from '../Card/Card'
import { CardsContainer } from './CardsStyle'

const Cards = ({ countries }) => {
  return (
    <CardsContainer>
      {countries?.map(country => (
        <Card key={country.id} country={country} />
      ))}
    </CardsContainer>
  )
}

export default Cards
