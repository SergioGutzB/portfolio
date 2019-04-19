import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"

const SubText = styled.div`
  display: inline-block;
  color: #fff;
  font-family: "Roboto";
  font-weight: 900;
  letter-spacing: 0.1em;
  font-weight: 400;
  margin: 0px;
  line-height: 1;
  font-size: 8rem;
  text-shadow: 0 10px 30px rgba(2, 11, 22, 0.2);
  text-transform: uppercase;
  transition: 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.3s;
  transform: ${props =>
    props.visible ? "translate3d(0, 0, 0)" : "translate3d(0, 100%, 0)"};
  &:after {
    content: "";
    height: 8px;
    background: #fff;
    position: absolute;
    left: 0;
    top: 40%;
    width: 0px;
    transition: 0.3s cubic-bezier(0.77, 0, 0.175, 1);
  }
  &:hover {
    cursor: pointer;
    &:after {
      width: 100%;
    }
  }
`
const Container = styled.div`
  display: inline-block;
  margin-top: 4rem;
  position: relative;
  padding: 0 153px;
  overflow: hidden;
`

function TextMenu(props) {
  const { isVisible, text, url } = props
  return (
    <Container>
      <SubText visible={isVisible ? true : false}>{text}</SubText>
    </Container>
  )
}

export default TextMenu
