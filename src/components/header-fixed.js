import React, { useState } from 'react';
import { Spring } from 'react-spring/renderprops';
import styled from 'styled-components';
import TextMenu from './text-menu';
import { navigate } from 'gatsby';

const Header = styled.header`
  top: 0;
  left: 0;
  color: #fff;
  display: flex;
  justify-content: space-between;
  z-index: 2000;
  position: fixed;
`;

const Wrap = styled.div`
  display: flex;
  position: relative;
  padding: 40px;
  width: calc(100vw - 80px);
`;

const Nav = styled.div`
  width: 100vw;
  background-image: linear-gradient(to right, #072142, #8c2b7a 42%, #ff4d5a);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  overflow: hidden;
`;

const MenuIcon = styled.div`
  position: relative;
  width: 50px;
  height: 22px;
  cursor: pointer;
  z-index: 2010;
  margin-left: auto;
  &:before {
    content: '';
    width: 100%;
    height: 3px;
    background: #fff;
    position: absolute;
    right: 0;
    transition: 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    bottom: ${props => (props.open ? '50%' : '0')};
    transform: ${props =>
      props.open
        ? 'rotate(-45deg) translate3d(0, 50%, 0)'
        : 'rotate(0deg) translate3d(0, 0, 0)'};
  }
  &:after {
    content: '';
    width: 100%;
    height: 3px;
    background: #fff;
    position: absolute;
    right: 0;
    transition: 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    top: ${props => (props.open ? '50%' : '0')};
    transform: ${props =>
      props.open
        ? 'rotate(45deg) translate3d(0, -50%, 0)'
        : 'rotate(0deg) translate3d(0, 0, 0)'};
  }
`;

const HeaderFixed = () => {
  const [open, setOpen] = useState(false);
  const toggle = (url = undefined) => {
    setOpen(!open);
    if (url) {
      setTimeout(() => {
        navigate(url);
      }, 600);
    }
  };

  const Ul = styled.ul`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    margin: 0px;
    padding: 0px;
  `;

  return (
    <Header>
      <Wrap>
        <MenuIcon open={open} onClick={() => toggle()} />
      </Wrap>

      <Spring
        to={{
          height: open ? '100' : '0',
        }}
      >
        {props => {
          return (
            <Nav style={{ height: `${props.height}vh` }}>
              <Ul>
                <li onClick={() => toggle('/')}>
                  <TextMenu text="Home" isVisible={open} />
                </li>
                <li onClick={() => toggle('/omnibnk')}>
                  <TextMenu text="Omni|Bnk" isVisible={open} />
                </li>
                <li onClick={() => toggle('/portalfinance')}>
                  <TextMenu text="PortalFinance" isVisible={open} />
                </li>
                <li onClick={() => toggle('/elbanderin')}>
                  <TextMenu text="El Banderin" isVisible={open} />
                </li>
                <li onClick={() => toggle('/volaires')}>
                  <TextMenu text="Volaires" isVisible={open} />
                </li>
                <li onClick={() => toggle('/about')}>
                  <TextMenu text="about me" isVisible={open} />
                </li>
                <li />
              </Ul>
            </Nav>
          );
        }}
      </Spring>
    </Header>
  );
};

export default HeaderFixed;
