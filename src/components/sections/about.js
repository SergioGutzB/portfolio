import React from "react"
import PropTypes from "prop-types"
import Titletext from "../title-text"
import Bars from "../bars"
import SubTitleText from "../sub-title-text"
import Card from "../card"
import RaisedButton from "../button"
import { Section, ContainerFloat } from '../../styles/global'

class About extends React.Component {
  render() {
    const { section, index } = this.props
    const isVisible = section === index ? true : false
    return (
      <div className="section">
        <Section>
          <Card
            isVisible={isVisible}
            imageUrl="about/back1.jpg"
            year={2019}
          />
          <ContainerFloat>
            <Titletext text="About Me" isVisible={isVisible} />
            <Bars isVisible={isVisible} />
            <SubTitleText
              text="Me encanta la tecnología, la animación y el desarrollo de video juegos"
              isVisible={isVisible}
            />
            <RaisedButton
              text="Show me more"
              isVisible={isVisible}
              url="/about/"
            />
          </ContainerFloat>
        </Section>
      </div>
    )
  }
}

About.propTypes = {
  index: PropTypes.number,
  section: PropTypes.number,
  delay: PropTypes.number,
}

export default About

