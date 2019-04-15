import React from "react"
import { Spring } from "react-spring/renderprops"
import styled from "styled-components"

const CardDiv = styled.div`
  margin-left: auto;
  margin-right: 0px;
  box-shadow: 0 80px 140px -40px rgba(0, 0, 0, 0.6);
  background-color: #4d4d4d;
  position: relative;
  overflow: hidden;
  background: ${props => (props.image ? `url(${props.image})` : "")};
  background-size: cover;
  background-position: left center;
`

const Cover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background: #ff4d5a;
  transform: translate3d(100%, 0, 0);
`
const CoverBlue = styled(Cover)`
  background: #072142;
`

function Card(props) {
  const { imageUrl } = props
  return (
    <Spring
      config={{
        clamp: true,
        friction: 40,
      }}
      from={{
        "marginRight": "0",
        height: "74%",
        width: "65.9%",
      }}
      to={{
        "marginRight": "-100px",
        height: "100%",
        width: "74.3%",
      }}
    >
      {props => <CardDiv style={props} image={imageUrl} />}
    </Spring>
  )
}

export default Card
