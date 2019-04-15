import React from "react"
import PropTypes from "prop-types"
import { Spring } from "react-spring/renderprops"
import styled from "styled-components"

const Textani = styled.h1`
  font-size: 8.5rem;
  font-family: inherit;
  letter-spacing: 0.15em;
  font-weight: 900;
  margin: 0px;
  line-height: 1;
`
class Titletext extends React.Component {
  render() {
    const { isVisible, text, delay } = this.props
    return (
      <Spring
        config={{
          clamp: false,
          friction: 30,
        }}
        delay={delay ? delay : 500}
        to={{
          transform: isVisible ? "translateX(0)" : "translateX(-700px)",
        }}
      >
        {props => <Textani style={{ ...props }}>{text}</Textani>}
      </Spring>
    )
  }
}

Titletext.propTypes = {
  text: PropTypes.string,
  isVisible: PropTypes.bool,
}

export default Titletext
