import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Filter, media } from '../styles/global';
import Image from './image';

const animationCard = keyframes`
  0% {
    marginRight: 0;
    height: 74.2%;
  }
  100% {
    marginRight: -100px;
    height: 100%;
  }
`;

const animationCardPhone = keyframes`
  0% {
    height: 74.2%;
    width: 72.5%;
  }
  100% {
    height: 65%;
    width: 100%;
  }
`;

const CardDiv = styled.div`
  margin-left: auto;
  margin-right: 0px;
  box-shadow: 0 80px 140px -40px rgba(0, 0, 0, 0.6);
  background-color: #4d4d4d;
  position: relative;
  overflow: hidden;
  width: 72.5%;
  animation: ${animationCard} 0.5s linear 0s forwards;
  ${media.desktop`
  `}
  ${media.tablet`
  `}
  ${media.phone`
    animation: ${animationCardPhone} 0.5s linear 0s forwards;
  `}
`;
function Card(props) {
  const { imageUrl } = props;
  return (
    <CardDiv style={props}>
      <Image
        filename={imageUrl}
        styles={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          transition: 'width 0.4s',
        }}
      />
      <Filter />
    </CardDiv>
  );
}

export default Card;
