import React from 'react';
import styled, { keyframes } from 'styled-components';
import Arrowleft from '../assets/left-white.svg';
import Link from 'gatsby-link';
import { media } from '../styles/global';

const arrowMove = keyframes`
  0% {
    left: -64px;
  }
  100% {
    left: 42px;
  }
`;

const Arrow = styled.div`
  width: 64px;
  transition:All 0.3s ease-out;
  z-index: 1020;
  position: fixed;
  top: 122px;
  animation: ${arrowMove} 0.8s ease-out forwards;
  &:hover {
    transform: translateX(-15px);
    transition: transform 0.3s ease-out;
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
`;

const ButtonBack = props => {
  const { url } = props;
  return (
    <Link to={url ? url : '/'}>
      <Arrow>
        <Arrowleft />
      </Arrow>
    </Link>
  );
};

export default ButtonBack;
