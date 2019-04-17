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

class ElBanderin extends React.Component {
  render() {
    const { section, index } = this.props
    const isVisible = section === index ? true : false
    const props = { text: "El banderín", isVisible, reverse: true }
    return (
      <div className="section">
        <Section>
          <Card isVisible={isVisible} imageUrl="elbanderin/background.png"/>
          <ContainerFloat>
            <Titletext text="El Banderín" isVisible={isVisible} delay={500} />
            <Bars isVisible={isVisible}/>
            <SubTitleText text='Fútbol' isVisible={isVisible} delay={600} />
            <SubTitleText text='website' isVisible={isVisible} delay={700} />
            <RaisedButton text='Show me more' isVisible={isVisible} delay={700} url='/elbanderin/'/>
          </ContainerFloat>
        </Section>
      </div>
    )
  }
}

ElBanderin.propTypes = {
  index: PropTypes.number,
  section: PropTypes.number,
  delay: PropTypes.number
}

export default ElBanderin

