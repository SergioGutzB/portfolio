import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TextMenu from './text-menu';
import { navigate } from 'gatsby';
import { media } from '../styles/global';
import Image from './image';
import ButtonBack from './button-back';

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
  display: grid;
  grid-template-columns: auto 25px 40px 70px;
  grid-auto-rows: 30px;
  grid-gap: 30px;
  position: relative;
  padding: 40px;
  width: calc(100vw - 80px);
  filter: ${props =>
    props.hover && !props.open ? 'brightness(0.4)' : 'brightness(1)'};
  transition: all 0.3s ease-out;
  ${media.desktop`
  `}
  ${media.tablet`
  `}
  ${media.phone`
    padding: 24px;
    width: calc(100vw - 50px);
  `}
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
  height: ${props => (props.open ? '100vh' : '0')};
  transition: height 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
`;

const MenuIcon = styled.div`
  position: relative;
  width: 50px;
  height: 22px;
  cursor: pointer;
  z-index: 2010;
  /* margin-left: auto; */
  margin-right: 30px;
  &:before {
    content: '';
    width: 100%;
    height: 3px;
    background: #fff;
    position: absolute;
    right: 0;
    bottom: ${props => (props.open ? '50%' : '0')};
    transform: ${props =>
      props.open
        ? 'rotate(-45deg) translate3d(0, 50%, 0)'
        : 'rotate(0deg) translate3d(0, 0, 0)'};
    transition: all 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }
  &:after {
    content: '';
    width: 100%;
    height: 3px;
    background: #fff;
    position: absolute;
    right: 0;
    top: ${props => (props.open ? '50%' : '0')};
    transform: ${props =>
      props.open
        ? 'rotate(45deg) translate3d(0, -50%, 0)'
        : 'rotate(0deg) translate3d(0, 0, 0)'};
    transition: transform 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }
  ${media.desktop`
  `}
  ${media.tablet`
  `}
  ${media.phone`
    width: 35px;
    height: 18px;
  `}
`;

const A = styled.a`
  height: 25px;
  width: 25px;
  z-index: 2010;
  opacity: 1;
  &:hover {
    opacity: 0.6;
  }
`;

const HeaderFixed = props => {
  const { url } = props;
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const toggle = (url = undefined) => {
    setOpen(!open);
    if (url) {
      setTimeout(() => {
        navigate(url);
      }, 600);
    }
  };

  const listenToScroll = () => {
    const nodeScroll = document.querySelector('.firstSection');
    const winScroll = window.pageYOffset;
    if (nodeScroll && nodeScroll.scrollHeight) {
      if (winScroll > nodeScroll.scrollHeight - 100) {
        setHover(true);
        console.log('position: ', true);
      } else {
        setHover(false);
        console.log('position: ', false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', () => listenToScroll());
    // returned function will be called on component unmount
    return () => {
      window.removeEventListener('scroll', () => listenToScroll());
    };
  }, []);

  return (
    <Header>
      <Wrap hover={hover} open={open}>
        <div />
        <A
          href="https://www.linkedin.com/in/sergioguztb/"
          target="_blank"
          hover={hover}
          open={open}
        >
          <Image filename="linkedin.png" />
        </A>
        <A
          href="https://github.com/SergioGutzB/"
          target="_blank"
          hover={hover}
          open={open}
        >
          <Image filename="github.png" />
        </A>
        <MenuIcon open={open} onClick={() => toggle()} hover={hover} />
        {url ? (
          <ButtonBack
            url="/#elbanderin"
            style={{
              position: 'fixed',
              top: '122px',
              left: '42px',
            }}
          />
        ) : null}
      </Wrap>
      <Nav open={open}>
        <ul>
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
        </ul>
      </Nav>
    </Header>
  );
};

export default HeaderFixed;
