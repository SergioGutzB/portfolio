import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Section, media } from '../../styles/global';
import styled from 'styled-components';
import Bars from '../bars';
import Titletext from '../title-text';
import SubTitleText from '../sub-title-text';

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: auto;
  height: 100%;
  ${media.desktop`
  `}
  ${media.tablet`
  `}
  ${media.phone`
    width: 100%;
    height: auto;
    justify-content: flex-end;
  `}
`;
const Portfolio = styled.h3`
  font-size: 6rem;
  letter-spacing: 0.1em;
  font-weight: 600;
  margin: 0px;
  line-height: 1;
  color: #ff4d5a;
  text-shadow: 0 10px 15px rgba(2, 11, 22, 0.2);
  font-family: "Roboto";
  font-weight: 900;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transform: ${props =>
    props.isVisible ? 'translateX(0)' : 'translateX(400px)'};
  transition: transform 0.8s ease-out 0.2s;
  ${media.desktop`
  `}
  ${media.tablet`
  `}
  ${media.phone`
    width: 100%;
    text-align: center;
    font-size: 7vw;
  `}
`;

const Hero = props => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log('props: ', props)
    setIsVisible(props.section === props.index ? true : false);
  }, [props.section]);

  return (
    <div className="section">
      <Section>
        <Row style={{ paddingLeft: '35px' }}>
          <Titletext text="SERGIO" isVisible={isVisible} delay={500} />
          <Titletext text="GUTIERREZ" isVisible={isVisible} delay={500} />
          <Bars isVisible={isVisible} />
          <SubTitleText
            text="front-end developer /"
            isVisible={isVisible}
            delay={600}
          />
          <SubTitleText
            text="system engineer"
            isVisible={isVisible}
            delay={700}
          />
        </Row>
        <Row>
          <div
            style={{
              flex: 'auto',
              display: 'flex',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Portfolio isVisible={isVisible}>PORTFOLIO</Portfolio>
          </div>
        </Row>
      </Section>
    </div>
  );
};

Hero.propTypes = {
  index: PropTypes.number,
  section: PropTypes.number,
};

export default Hero;
