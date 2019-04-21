import React from 'react';
import styled, { keyframes } from 'styled-components';
import { media } from '../styles/global'

const ScrollUp = keyframes`
  0% {
    top: 200px;
  }
  100% {
    top: 0;
  }
`;
const Scroll = styled.div`
  top: 200px;
  font-size: 1.4rem;
  color: #fff;
  line-height: 1;
  letter-spacing: 0.3em;
  writing-mode: vertical-rl;
  position: relative;
  animation: ${ScrollUp} 0.6s ease-out 0.3s forwards;
  &:after {
    content: '';
    width: 2px;
    height: 64px;
    background: #fff;
    position: absolute;
    left: 0;
    right: 0;
    margin: 20px auto 0;
  }
`;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  overflow: hidden;
  height: 200px;
  width: 14px;
  ${media.desktop`
    left: 0;
    right: auto;
  `}
  ${media.tablet`
  `}
  ${media.phone`
    left: auto;
    right: 30px;
  `}
`;

const ScrollDown = props => (
  <Container>
    <Scroll>SCROLL DOWN</Scroll>
  </Container>
);

export default ScrollDown;
