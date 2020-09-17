import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"

const index = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard
          date="Idag"
          title="Vilken härlig dag"
          excerpt="Vilken härlig dag det har varit idag."
          slug="/vilken-fin-dag"
        />
      </Content>
    </Container>
  )
}

export default index