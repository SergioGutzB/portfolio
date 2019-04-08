import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Titletext from "./title-text"
import Bars from '../Bars'
import SubTitleText from '../subTitleText'
import Card from '../card'

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

const ContainerFloat = styled.div`
  position: absolute;
  top: 50%;
  bottom: 50px;
  width: 50%;
`

class Omnibnk extends React.Component {
  render() {
    const { section, index } = this.props
    const isVisible = section === index ? true : false
    const props = { text: "Omni|Bnk", isVisible }
    return (
      <div className="section">
        <Section>
          <Card isVisible={isVisible} />
          <ContainerFloat>
            <Titletext {...props} />
            <Bars isVisible={isVisible}/>
            <SubTitleText text='Fintech' isVisible={isVisible} delay={600} />
            <SubTitleText text='website' isVisible={isVisible} delay={700} />
          </ContainerFloat>
        </Section>
      </div>
    )
  }
}

Omnibnk.propTypes = {
  index: PropTypes.number,
  section: PropTypes.number,
}

export default Omnibnk
