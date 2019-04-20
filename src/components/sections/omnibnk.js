import React from "react"
import PropTypes from "prop-types"
import Titletext from "../title-text"
import Bars from '../bars'
import SubTitleText from '../sub-title-text'
import Card from '../card'
import RaisedButton from '../button'
import { Section, ContainerFloat } from '../../styles/global'


class Omnibnk extends React.Component {
  render() {
    const { section, index } = this.props
    const isVisible = section === index ? true : false
    const props = { text: "Omni|Bnk", isVisible, reverse: true }
    return (
      <div className="section">
        <Section>
          <Card isVisible={isVisible} imageUrl="perspective-omni.png"/>
          <ContainerFloat>
            <Titletext {...props} />
            <Bars isVisible={isVisible}/>
            <SubTitleText text='Fintech' isVisible={isVisible} delay={530} />
            <SubTitleText text='website' isVisible={isVisible} delay={560} />
            <RaisedButton text='Show me more' isVisible={isVisible} delay={590} url='/omnibnk/' />
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
