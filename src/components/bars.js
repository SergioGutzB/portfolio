import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from '../styles/global';

const Bar = styled.span`
  display: block;
  border-radius: 5px;
  height: 4px;
  width: 88px;
  background-color: #ff4d5a;
  margin-top: 10px;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  margin-right: ${props => (props.isVisible && props.right ? '0' : '50px')};
  margin-left: ${props => (props.isVisible && props.left ? '50px' : '0')};
  transform: ${props =>
    props.isVisible ? 'translateX(0)' : 'translateX(-208px)'};
  transition: all 0.8s ease-out 0.3s;
  ${media.desktop`
  `}
  ${media.tablet`
  `}
  ${media.phone`
    width: 60px;
    height: 2px;
  `}
`;

const BarContainer = styled.div`
  padding: 25px 0px;
  text-align: center;
  ${media.desktop`
  `}
  ${media.tablet`
  `}
  ${media.phone`
    padding: 10px 0px;
  `}
`;

class Bars extends React.Component {
  render() {
    const { isVisible } = this.props;
    return (
      <BarContainer>
        <Bar isVisible={isVisible} right={true} />
        <Bar isVisible={isVisible} left={true} />
      </BarContainer>
    );
  }
}

Bars.propTypes = {
  isVisible: PropTypes.bool,
};

export default Bars;
