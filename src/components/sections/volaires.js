import React from "react"
import PropTypes from "prop-types"
import Titletext from "../title-text"
import Bars from "../bars"
import SubTitleText from "../sub-title-text"
import Card from "../card"
import RaisedButton from "../button"
import { Section, ContainerFloat } from '../../styles/global'

class Volaires extends React.Component {
  render() {
    const { section, index } = this.props
    const isVisible = section === index ? true : false
    return (
      <div className="section">
        <Section>
          <Card
            isVisible={isVisible}
            imageUrl="volaires/perspective-volaires.png"
            year={2015}
          />
          <ContainerFloat>
            <Titletext text="Volaires" isVisible={isVisible} delay={500} />
            <Bars isVisible={isVisible} />
            <SubTitleText
              text="Marketplace"
              isVisible={isVisible}
              delay={600}
            />
            <SubTitleText text="website" isVisible={isVisible} delay={700} />
            <RaisedButton
              text="Show me more"
              isVisible={isVisible}
              delay={700}
              url="/volaires/"
            />
          </ContainerFloat>
        </Section>
      </div>
    )
  }
}

Volaires.propTypes = {
  index: PropTypes.number,
  section: PropTypes.number,
  delay: PropTypes.number,
}

export default Volaires
