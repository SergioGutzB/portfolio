import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Filter, media } from '../styles/global';
import Image from './image';

const animationCard = keyframes`
  0% {
    margin-right: 245px;
    height: 74.1%;
    width: 53.3%;
  }
  100% {
    margin-right: 160px;
    height: 100%;
    width: 60%;
  }
`;

const animationCardPhone = keyframes`
  0% {
    margin-top: 70px;
    height: 55vh;
    width: 84%;
  }
  100% {
    margin-top: 0;
    height: 64.2%;
    width: 100%;
  }
`;

const CardDiv = styled.div`
  margin: 0 auto;
  box-shadow: 0 80px 140px -40px rgba(0, 0, 0, 0.6);
  background-color: #4d4d4d;
  position: relative;
  overflow: hidden;
  animation: ${animationCard} 0.6s ease-out 0s forwards;
  ${media.desktop`
  `}
  ${media.tablet`
  `}
  ${media.phone`
    animation: ${animationCardPhone} 0.6s ease-out 0s forwards;
  `}
`;
function Card(props) {
  const { imageUrl } = props;
  return (
    <CardDiv>
      <Image
        filename={imageUrl}
        styles={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
        }}
      />
      <Filter />
    </CardDiv>
  );
}

export default Card;
