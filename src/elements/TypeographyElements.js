import styled from "styled-components"

export const P = styled.p`
  font-size: ${prop => {
    switch (prop.size) {
      case "medium":
        return "1.125rem"
      case "small":
        return "1rem"
      case "xSmall":
        return "0.875rem"
      default:
        return "1.125rem"
    }
  }};
  text-decoration: ${props =>
    props.textDecoration ? props.textDecoration : "none"};
  font-weight: ${prop => {
    switch (prop.weight) {
      case "normal":
        return 400
      case "bold":
        return 700
      default:
        return 400
    }
  }};
  color: ${props => {
    switch (props.color) {
      case "dark1":
        return props.theme.colors.dark1
      case "dark2":
        return props.theme.colors.dark2
      case "dark3":
        return props.theme.colors.dark3
      case "light1":
        return props.theme.colors.light1
      case "light2":
        return props.theme.colors.light2
      default:
        return props.theme.colors.dark1
    }
  }};
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
`

export const H1 = styled.h1`
  color: ${props => {
    switch (props.color) {
      case "dark1":
        return props.theme.colors.dark1
      case "dark2":
        return props.theme.colors.dark2
      case "dark3":
        return props.theme.colors.dark3
      case "light1":
        return props.theme.colors.light1
      case "light2":
        return props.theme.colors.light2
      default:
        return props.theme.colors.dark1
    }
  }};
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
`
export const H2 = styled.h2`
  color: ${props => {
    switch (props.color) {
      case "dark1":
        return props.theme.colors.dark1
      case "dark2":
        return props.theme.colors.dark2
      case "dark3":
        return props.theme.colors.dark3
      case "light1":
        return props.theme.colors.light1
      case "light2":
        return props.theme.colors.light2
      default:
        return props.theme.colors.dark1
    }
  }};
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
`
