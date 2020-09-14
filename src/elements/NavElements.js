import styled from "styled-components"

export const NavWrapper = styled.nav`
grid-column: 1 / span 14;
grid-row: 1 / 2;
display: grid;
justify-content: center;
align-items: center;
background-color: #99fffb;

  img {
    height: 40px;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`