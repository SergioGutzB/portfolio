import React from "react"
import { Spring } from "react-spring/renderprops"
import styled from "styled-components"
import { Link } from "gatsby"

const Button = styled.button`
  margin-top: 30px;
  border: none;
  background: #ff4d5a;
  padding: 18px 32px;
  border-radius: 50px;
  transition: opacity 0.1s;
  font-family: "Roboto";
  color: #fff;
  font-size: 1.6rem;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 0.1em;
  line-height: 1;
  a {
  }
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

const RaisedButton = props => {
  const { text, isVisible, delay, url } = props
  return (
    <Spring
      delay={delay ? delay : 500}
      to={{
        transform: isVisible ? "translateX(0)" : "translateX(-400px)",
      }}
    >
      {props => (
        <Link to={url ? url : "/"}>
          <Button style={props} >{text}</Button>
        </Link>
      )}
    </Spring>
  )
}

export default RaisedButton
