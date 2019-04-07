import React from "react"
import PropTypes from "prop-types"
import { Spring } from "react-spring/renderprops"
import styled from "styled-components"
import { auto } from "eol"

const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: calc(100vw - 200px);
  padding: 0 100px;
  height: 100vh;
  color: white;
  overflow: hidden;
  position: relative;
`

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: auto;
`

const Name = styled.h1`
  font-size: 8rem;
  font-family: inherit;
  letter-spacing: 0.1em;
  font-weight: 600;
  margin: 0px;
  line-height: 1;
`
const Portfolio = styled.h3`
  font-size: 6rem;
  letter-spacing: 0.1em;
  font-weight: 600;
  margin: 0px;
  line-height: 1;
  color: #ff4d5a;
  text-shadow: 0 10px 15px rgba(2, 11, 22, 0.2);
  font-family: 'Roboto';
  font-weight: 900;
`

const Career = styled(Name)`
  font-size: 3rem;
  margin-top: 10px;
`

const Bar = styled.span`
  display: block;
  border-radius: 5px;
  height: 4px;
  width: 88px;
  background-color: #ff4d5a;
  margin-top: 10px;
`
const BarContainer = styled.span`
  margin: 20px 0px;
  width: 100%;
  text-align: center;
`

class Hero extends React.Component {
  render() {
    const { section, index } = this.props
    const isVisible = section === index ? true : false
    console.log("props: ", this.props)
    console.log("isVisible: ", isVisible)
    return (
      <div className="section">
        <Section>
          <Row>
            <Spring
              delay={400}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-700px)",
              }}
            >
              {props => (
                <div>
                  <Name style={{ ...props }}>SERGIO</Name>
                  <Name style={{ ...props }}>GUTIERREZ</Name>
                </div>
              )}
            </Spring>
            <BarContainer>
              <Spring
                delay={500}
                to={{
                  opacity: isVisible ? 1 : 0,
                  marginRight: isVisible ? "0px" : "50px",
                  transform: isVisible ? "translateX(0)" : "translateX(-208px)",
                }}
              >
                {props => (
                  <div style={{ position: "relative" }} Container>
                    <Bar style={{ ...props }} />
                  </div>
                )}
              </Spring>
              <Spring
                delay={500}
                to={{
                  opacity: isVisible ? 1 : 0,
                  marginLeft: isVisible ? "50px" : "0px",
                  transform: isVisible ? "translateX(0)" : "translateX(-208px)",
                }}
              >
                {props => (
                  <div>
                    <Bar style={{ ...props }} />
                  </div>
                )}
              </Spring>
            </BarContainer>
            <Spring
              delay={600}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-400px)",
              }}
            >
              {props => (
                <div>
                  <Career style={{ ...props }}>front-end developer /</Career>
                  <Career style={{ ...props }}>system engineer.</Career>
                </div>
              )}
            </Spring>
          </Row>
          <Row>
            <Spring
              delay={300}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(600px)",
              }}
            >
              {props => (
                <div style={{ flex: "auto" }}>
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
