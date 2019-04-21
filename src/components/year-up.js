import React from 'react';
import styled from 'styled-components';
import { media } from '../styles/global';

const Year = styled.div`
  line-height: 1.1;
  text-shadow: 0 10px 30px rgba(2, 11, 22, 0.5);
  color: #fff;
  font-size: 15rem;
  font-family: 'Abril Fatface';
  font-weight: 500;
  text-align: right;
  transform: ${props =>
    props.isVisible ? 'translateY(0)' : 'translateY(170px)'};
  transition: transform 0.4s ease-out 0.5s;
`;
const Container = styled.div`
  position: absolute;
  bottom: 10px;
  overflow: hidden;
  height: 165px;
  width: 100%;
  right: 30px;
  text-align: right;
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

const YearUp = props => {
  const { isVisible, year } = props;
  return (
    <Container>
      <Year isVisible={isVisible}>{year}</Year>
    </Container>
  );
};

export default YearUp;
