import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2c3e50;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const Nav = styled(NavLink)`
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out;
`
