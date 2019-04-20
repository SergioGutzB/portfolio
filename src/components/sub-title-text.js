import React from 'react';
import styled from 'styled-components';
import { media } from '../styles/global';

const SubText = styled.div`
  font-family: "Roboto";
  letter-spacing: 0.18em;
  font-weight: 400;
  margin: 0px;
  line-height: 1;
  font-size: 2.4rem;
  margin-top: 10px;
  transform: ${props =>
    props.isVisible ? 'translateX(0)' : 'translateX(-300px)'};
  transition: all 0.8s ease-out 0.2s;
  ${media.desktop`
  `}
  ${media.tablet`
  `}
  ${media.phone`
    font-size: 4vw;
    width: 90%;
  `}
`;

function SubTitleText(props) {
  const { isVisible, text, delay } = props;
  return <SubText isVisible={isVisible}>{text}</SubText>;
}

export default SubTitleText;
