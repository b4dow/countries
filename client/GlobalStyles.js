import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
    margin: 0;
  padding: 0;
  font-size: 62.5%;
  font-family: "Lato", sans-serif;
  background-color: #ecf0f1   ;
}
`

export const Container = styled.div`
  width: min(95%, 120rem);
  margin: 0 auto;
`
