import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from '../styles/global';

const Textani = styled.h1`
  font-size: 8.5rem;
  font-family: inherit;
  letter-spacing: 0.15em;
  font-weight: 900;
  margin: 0px;
  line-height: 1;
  transform: ${props =>
    props.isVisible ? 'translateX(0)' : 'translateX(-700px)'};
  transition: transform 0.8s ease-out;
  ${media.desktop`
  `}
  ${media.tablet`
  `}
  ${media.phone`
    font-size: 8.5vw;
  `}
`;
class Titletext extends React.Component {
  render() {
    const { isVisible, text} = this.props;
    return <Textani isVisible={isVisible}>{text}</Textani>;
  }
}

Titletext.propTypes = {
  text: PropTypes.string,
  isVisible: PropTypes.bool,
};

export default Titletext;
