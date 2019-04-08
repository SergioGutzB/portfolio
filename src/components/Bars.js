import React from "react"
import PropTypes from "prop-types"
import { Spring } from "react-spring/renderprops"
import styled from "styled-components"

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
  text-align: center;
`

class Bars extends React.Component {
  render() {
    const { isVisible } = this.props
    return (
      <BarContainer>
        <Spring
          delay={500}
          config={{
            clamp: true,
            friction: 40,
          }}
          to={{
            opacity: isVisible ? 1 : 0,
            marginRight: isVisible ? "0px" : "50px",
            transform: isVisible ? "translateX(0)" : "translateX(-208px)",
          }}
        >
          {props => (
            <div style={{ position: "relative" }}>
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
    )
  }
}

Bars.propTypes = {
  isVisible: PropTypes.bool,
}

export default Bars
