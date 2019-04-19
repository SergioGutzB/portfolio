import React from 'react';
import styled, { keyframes } from 'styled-components';
import Image from '../components/image';
import TrackVisibility from 'react-on-screen';

const Title = styled.div`
  font-size: 2.4rem;
  color: #072142;
  letter-spacing: 0.2em;
  line-height: 1.2;
  font-family: Roboto;
  font-weight: 500;
  word-wrap: break-word;
  white-space: normal;
  line-height: 30px;
`;

const Progress = styled.div`
  width: 100%;
  height: 1.4rem;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 5px 15px 0 rgba(7, 33, 66, 0.15);
  margin-top: 8px;
  &:after {
    content: ' ';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    border-radius: 10px;
    width: ${props => (props.percentage ? props.percentage : '0')};
    background-image: linear-gradient(to right, #072142, #8c2b7a 50%, #ff4d5a);
    transition: ${props =>
      props.isVisible ? 'width 1s linear' : 'width 0.3s linear'};
  }
`;

const Year = styled.div`
  font-size: 1.4rem;
  line-height: 1.2;
  color: #c0c5ca;
  margin-left: 0.8rem;
  letter-spacing: 0.2em;
  line-height: 30px;
`;

const Logo = styled.div`
  width: 11%;
  align-self: center;
  margin-right: 30px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Detail = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
`;

const Skill = props => {
  const { percentage, url, label, years } = props;
  return (
    <TrackVisibility>
      {({ isVisible }) => (
        <Container id="skill">
          <Logo>
            <Image filename={url ? url : ''} />
          </Logo>
          <Detail>
            <Title>{label}</Title>
            <Year>{years}</Year>
            <Title style={{ flex: 'auto', textAlign: 'right' }}>{percentage} %</Title>
            <Progress
              percentage={isVisible ? percentage + '%' : '0'}
              isVisible={isVisible}
            />
          </Detail>
        </Container>
      )}
    </TrackVisibility>
  );
};

export default Skill;
