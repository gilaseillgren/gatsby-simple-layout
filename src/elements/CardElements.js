import styled from "styled-components"

export const CardWrapper = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.detail1};
  padding: ${props => props.theme.spacings.small};
  margin-top: ${props => props.theme.spacings.small};
`