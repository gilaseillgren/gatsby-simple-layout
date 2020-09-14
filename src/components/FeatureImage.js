import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FeatureImageWrapper } from "../elements"

export const FeatureImage = ({ fixed }) => {
  const data = useStaticQuery(graphql`
    query {
      imageSharp(fixed: { originalName: { eq: "hero-bg.jpg" } }) {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `)

  return (
    <FeatureImageWrapper>
      <Img
        fixed={fixed ? fixed : data.imageSharp.fixed}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
        }} 
     >
         <h1>hej</h1>
     </Img>
    </FeatureImageWrapper>
  )
}