import React from "react"
import { Spring } from "react-spring/renderprops"
import styled from "styled-components"

const Header = styled.header`
  top: 0;
  left: 0;
  padding: 40px 40px 0;
  color: #fff;
  display: flex;
  justify-content: space-between;
  z-index: 1000;
  position: relative;
`

const Nav = styled.div`
  width: 100vw;
  background-image: linear-gradient(to right, #072142, #8c2b7a 42%, #ff4d5a);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const MenuIcon = styled.div`
  position: relative;
  width: 50px;
  height: 22px;
  cursor: pointer;
  z-index: 1010;
  margin-left: auto;
  &:before {
    content: "";
    width: 100%;
    height: 3px;
    background: #fff;
    position: absolute;
    right: 0;
    transition: 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    bottom: ${props => (props.open ? "50%" : "0")};
    transform: ${props =>
      props.open
        ? "rotate(-45deg) translate3d(0, 50%, 0)"
        : "rotate(0deg) translate3d(0, 0, 0)"};
  }
  &:after {
    content: "";
    width: 100%;
    height: 3px;
    background: #fff;
    position: absolute;
    right: 0;
    transition: 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    top: ${props => (props.open ? "50%" : "0")};
    transform: ${props =>
      props.open
        ? "rotate(45deg) translate3d(0, -50%, 0)"
        : "rotate(0deg) translate3d(0, 0, 0)"};
  }
`

const Wrap = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`

class HeaderFixed extends React.Component {
  state = {
    open: false,
  }

  toggle = () => {
    console.log("toogle")
    this.setState({ open: !this.state.open })
  }

  render() {
    const { open } = this.state
    return (
      <Header>
        <Wrap>
          <MenuIcon open={open} onClick={() => this.toggle()} />
        </Wrap>

        <Spring
          to={{
            height: open ? "100" : "0",
          }}
        >
          {props => {
            return <Nav style={{height: `${props.height}vh` }} />
          }}
        </Spring>
      </Header>
    )
  }
}

export default HeaderFixed
