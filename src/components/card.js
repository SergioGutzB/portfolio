import React from 'react';
import styled from 'styled-components';
import Image from './image';
import { Filter, media } from '../styles/global';
import YearUp from './year-up'

const CardDiv = styled.div`
  margin: 0 0 0 auto;
  height: 74%;
  width: 65.9%;
  box-shadow: 0 80px 140px -40px rgba(0, 0, 0, 0.6);
  background-color: #4d4d4d;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: left center;
  transform: ${props =>
    props.isVisible
      ? 'translate(0, 0) scale(1)'
      : 'translate(10%, 0) scale(0.8)'};
  transition: transition 1s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  ${media.desktop`
  `}
  ${media.tablet`
  `}
  ${media.phone`
    height: 55%;
    margin: 70px auto auto;
    width: 84%;
  `}
`;

const Cover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background: #ff4d5a;
  transform: ${props =>
    props.isVisible
      ? 'translateX(110%) translateZ(0px)'
      : 'translateX(-100%) translateZ(0px)'};
  transition: transform 1s;
`;
const CoverBlue = styled(Cover)`
  background: #072142;
  transform: ${props =>
    props.isVisible
      ? 'translateX(160%) translateZ(0px)'
      : 'translateX(-40%) translateZ(0px)'};
  transition: transform 1s;
`;

function Card(props) {
  const { isVisible, imageUrl, filter, year } = props;
  return (
    <CardDiv isVisible={isVisible}>
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
      {filter === false ? null : <Filter />}
      <div>
        <Cover isVisible={isVisible} />
        <CoverBlue isVisible={isVisible} />
        <YearUp year={year} isVisible={isVisible}/>
      </div>
    </CardDiv>
  );
}

export default Card;
