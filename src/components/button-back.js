import React from "react"
import styled from "styled-components"
import Arrowleft from "../assets/result.svg"
import Link from "gatsby-link"
import { Spring } from "react-spring/renderprops"

const Arrow = styled.div`
  width: 64px;
  transition: transform 0.2s;
  z-index: 2020;
  position: fixed;
  top: 122px;
  left: 42px;
  &:hover {
    transform: translateX(-10px);
    cursor: pointer;
  }
`

const ButtonBack = props => {
  const { url } = props
  return (
    <Spring
      delay={400}
      from={{
        left: "-64px",
      }}
      to={{
        left: "42px",
      }}
    >
      {props => (
        <Link to={url ? url : "/"}>
          <Arrow style={props}>
            <Arrowleft style={{ width: "64px" }} />
          </Arrow>
        </Link>
      )}
    </Spring>
  )
}

export default ButtonBack
