import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Titletext from "./title-text"
import Bars from '../Bars'
import SubTitleText from '../subTitleText'
import Card from '../card'
import RaisedButton from '../button'
import { Section } from '../../styles/global'

const ContainerFloat = styled.div`
  position: absolute;
  width: 50%;
`

class Omnibnk extends React.Component {
  render() {
    const { section, index } = this.props
    const isVisible = section === index ? true : false
    const props = { text: "Omni|Bnk", isVisible, reverse: true }
    return (
      <div className="section">
        <Section>
          <Card isVisible={isVisible} imageUrl="https://s3.amazonaws.com/sergiogutzb-portfolio2/assets/omnibnk-login.png"/>
          <ContainerFloat>
            <Titletext {...props} />
            <Bars isVisible={isVisible}/>
            <SubTitleText text='Fintech' isVisible={isVisible} delay={530} />
            <SubTitleText text='website' isVisible={isVisible} delay={560} />
            <RaisedButton text='Show me more' isVisible={isVisible} delay={590} />
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
