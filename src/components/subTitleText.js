import React from 'react';
import { Spring } from 'react-spring/renderprops';
import styled from 'styled-components';
import { media } from "../styles/global"

const SubText = styled.div`
  font-family: "Roboto";
  letter-spacing: 0.18em;
  font-weight: 400;
  margin: 0px;
  line-height: 1;
  font-size: 2.4rem;
  margin-top: 10px;
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
  return (
    <Spring
      delay={delay ? delay : 600}
      config={{
        friction: 28,
      }}
      to={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(-300px)',
      }}
    >
      {props => <SubText style={props}>{text}</SubText>}
    </Spring>
  );
}

export default SubTitleText;
