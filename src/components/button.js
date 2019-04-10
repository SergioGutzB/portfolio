import React from "react"
import { Spring } from "react-spring/renderprops"
import styled from "styled-components"

const Button = styled.button`
  margin-top: 30px;
  border: none;
  font-size: 1.6rem;
  color: #fff;
  background: #ff4d5a;
  line-height: 1;
  font-weight: bold;
  padding: 18px 32px;
  border-radius: 50px;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  letter-spacing: 0.1em;
  font-family: "Roboto";
`

const RaisedButton = props => {
  const { text, isVisible, delay } = props
  return (
    <Spring
      delay={delay ? delay : 500}
      to={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(-400px)",
      }}
    >
      {props => <Button style={props}>{text}</Button>}
    </Spring>
  )
}

export default RaisedButton
