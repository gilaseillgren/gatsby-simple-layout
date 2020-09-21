import styled from "styled-components"

export const NavWrapper = styled.nav`
  grid-column: 1 / span 14;
  grid-row: 1 / 2;
  display: grid;
  justify-content: stretch;
  align-items: center;
  background-color: none;

  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 1 / span 8;

    .navbar.active {
      div {
        display: block;
      }
    }
    .brand {
      float: right;
      text-align: right;
      svg {
        fill: white;
      }
    }
  }


  .navbar {
    .toggle,
    .brand {
      display: inline-block;
    }
    .link {
      font-weight: 700;
      display: block;
      width: 100%;
      text-align: center;
      padding: 1.3em 1rem 1rem 1rem;
      text-decoration: none;
      color: white;
      &:hover,
      &:active {
        text-decoration: underline;
      }
    }
    .brand {
      width: 8em;
      text-align: center;
      padding: 1em 0;
      color: white;
    }
    .toggle {
      padding: 9px 11px;
      width: 40px;
      height: 40px;
      border-radius: 25px;
      color: black;
      vertical-align: middle;
      border: 1px solid black;
      margin: 10px;
    }
  }

  @media (min-width: 48em) {
    .navbar {
      display: flex;
      .left,
      .right {
        display: flex;
        flex: 1;
      }
      .link {
        width: auto;
      }
      .right {
        justify-content: flex-end;
      }
      .toggle {
        display: none;
      }
    }
  }

  .navbar {
    div {
      display: none;
      @media (min-width: 48em) {
        display: flex;
      }
    }
  }

`
