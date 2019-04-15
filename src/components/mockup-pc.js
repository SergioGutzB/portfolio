import React from "react"
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

const MockupPc = props => {
  const { image } = props;
  return <CardDiv filename={url} />
}

export default MockupPc;