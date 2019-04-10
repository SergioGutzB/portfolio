import React from "react"
import { Spring } from "react-spring/renderprops"
import styled from "styled-components"

const CardDiv = styled.div`
  margin: 0 0 0 auto;
  height: 60%;
  width: 70%;
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
  const { isVisible, imageUrl } = props
  return (
    <Spring
      config={{
        clamp: true,
        friction: 70,
      }}
      to={{
        transform1: isVisible
          ? "translate(0, 0) scale(1)"
          : "translate(10%, 0) scale(0.82)",
        transform2: isVisible
          ? "translateX(110%) translateZ(0px)"
          : "translateX(-100%) translateZ(0px)",
        transform3: isVisible
          ? "translateX(160%) translateZ(0px)"
          : "translateX(-40%) translateZ(0px)",
      }}
    >
      {props => (
        <CardDiv style={{ transform: props.transform1 }} image={imageUrl}>
          <div>
            <Cover style={{ transform: props.transform2 }} />
            <CoverBlue style={{ transform: props.transform3 }} />
          </div>
        </CardDiv>
      )}
    </Spring>
  )
}

export default Card
