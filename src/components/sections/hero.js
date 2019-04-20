import React from "react"
import PropTypes from "prop-types"
import { Spring } from "react-spring/renderprops"
import styled from "styled-components"
import Bars from "../Bars"
import Titletext from "../sections/title-text"
import SubTitleText from "../subTitleText"
import { Section, media } from '../../styles/global'


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
`
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
  ${media.desktop`
  `}
  ${media.tablet`
  `}
  ${media.phone`
    width: 100%;
    text-align: center;
    font-size: 7vw;
  `}
`

class Hero extends React.Component {
  state = {
    isVisible: false,
  }

  componentWillReceiveProps(nextProps) {
    this.setState({isVisible: nextProps.index === nextProps.section ? true : false})
  }
  render() {
    const {isVisible} = this.state
    return (
      <div className="section">
        <Section>
          <Row>
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
            <Spring
              delay={300}
              config={{
                friction: 40,
              }}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(400px)",
              }}
            >
              {props => (
                <div
                  style={{
                    flex: "auto",
                    display: "flex",
                    alignItems: "center",
                    width: "100%"
                  }}
                >
                  <Portfolio style={{ ...props }}>PORTFOLIO</Portfolio>
                </div>
              )}
            </Spring>
          </Row>
        </Section>
      </div>
    )
  }
}

Hero.propTypes = {
  index: PropTypes.number,
  section: PropTypes.number,
}

export default Hero
