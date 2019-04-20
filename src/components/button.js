import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Button = styled.button`
  margin-top: 30px;
  border: none;
  background: #ff4d5a;
  padding: 18px 32px;
  border-radius: 50px;
  transition: opacity 0.1s;
  font-family: 'Roboto';
  color: #fff;
  font-size: 1.6rem;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 0.1em;
  line-height: 1;
  transform: ${props =>
    props.isVisible ? 'translateX(0)' : 'translateX(-400px)'};
  transition: transform 0.8s ease-out 0.3s;
  a {
  }
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const RaisedButton = props => {
  const { text, isVisible, delay, url } = props;
  return (
    <Link to={url ? url : '/'}>
      <Button isVisible={isVisible}>{text}</Button>
    </Link>
  );
};

export default RaisedButton;
