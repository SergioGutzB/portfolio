import React from "react"
import { Spring } from "react-spring/renderprops"
import styled from "styled-components"

const SubText = styled.div`
  font-size: 8rem;
  font-family: inherit;
  letter-spacing: 0.1em;
  font-weight: 600;
  margin: 0px;
  line-height: 1;
  font-size: 3rem;
  margin-top: 10px;
`

function SubTitleText(props) {
  const { isVisible, text, delay } = props
  return (
    <Spring
      delay={delay ? delay : 500}
      config={{
        friction: 28,
      }}
      to={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(-400px)",
      }}
    >
      {props => <SubText style={props}>{text}</SubText>}
    </Spring>
  )
}

export default SubTitleText
