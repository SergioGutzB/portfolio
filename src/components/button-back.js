import React from "react"
import styled from "styled-components"
import Arrowleft from "../assets/left-white.svg"
import Link from "gatsby-link"
import { Spring } from "react-spring/renderprops"
import { media } from "../styles/global"

const Arrow = styled.div`
  width: 64px;
  transition:All 0.3s ease-out;
  z-index: 1020;
  position: fixed;
  top: 122px;
  left: 42px;
  &:hover {
    transform: translateX(-10px);
    cursor: pointer;
  }
  ${media.desktop`
  `}
  ${media.tablet`
  `}
  ${media.phone`
    width: 54px;
    margin: 30px 25px 0px auto;
    top: 5vw;
    margin-left: -10px;
    svg {
      width: 45px;
    }
  `}
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
            <Arrowleft/>
          </Arrow>
        </Link>
      )}
    </Spring>
  )
}

export default ButtonBack
