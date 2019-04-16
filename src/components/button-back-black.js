import React from "react"
import styled from "styled-components"
import Arrowleft from "../assets/left-black.svg"
import Link from "gatsby-link"
import { Spring } from "react-spring/renderprops"

const Arrow = styled.div`
  min-width: 64px;
  width: auto;
  z-index: 2020;
  display: flex;
  flex-direction: row;
  transition:All 0.7s ease-out;
  &:hover {
    transform: translateX(-40px);
    cursor: pointer;
  }
`

const ArrowText = styled.span`
  display: inline-block;
  font-size: 3.2rem;
  color: #020b16;
  letter-spacing: 0.2em;
  position: relative;
  text-decoration: none;
  margin-left: 15px;
`

const ButtonBack = props => {
  const { url, text, style } = props
  return (
    <Link to={url ? url : "/"}>
      <Arrow style={{ ...style }}>
        <Arrowleft style={{ width: "64px", color: "red" }} />
        <ArrowText>{text}</ArrowText>
      </Arrow>
    </Link>
  )
}

export default ButtonBack
