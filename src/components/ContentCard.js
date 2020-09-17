import React from "react"
import { CardWrapper, P, H1, ButtonWrapper } from "../elements"

export const ContentCard = ( {date, title, excerpt, slug}) => {
    return (
      <CardWrapper>
        <P size="xSmall" textAlign="center" margin="0 0 0.5rem 0" color="dark2">
            {date}
        </P>
        <H1 textAlign="center" margin="0 0 1rem 0">
            {title}
        </H1>
        <P size="small" textAlign="center" margin="0 0 1.5rem 0" color="dark2">
            {excerpt}
        </P>
      <ButtonWrapper href={slug}>Read more</ButtonWrapper>
      </CardWrapper>
    )
  }