import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    font-size: 14px;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.4;
    color: ${({ theme }) => theme.colors.text}
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Comfortaa', cursive;
    font-size: 24px;
  }

  a {
    text-decoration: none;
    user-select: none;
    outline: none;
    color: ${({ theme }) => theme.colors.text}
  }

  li, ul {
    margin: 0;
    padding: 0;
  }

  a.active {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
  }
`
