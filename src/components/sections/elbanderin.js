import React from 'react';
import PropTypes from 'prop-types';
import Titletext from '../title-text';
import Bars from '../bars';
import SubTitleText from '../sub-title-text';
import Card from '../card';
import RaisedButton from '../button';
import { Section, ContainerFloat } from '../../styles/global';

class ElBanderin extends React.Component {
  render() {
    const { section, index } = this.props;
    const isVisible = section === index ? true : false;
    return (
      <div className="section">
        <Section>
          <Card
            isVisible={isVisible}
            imageUrl="elbanderin/background.png"
            year={2017}
          />
          <ContainerFloat>
            <Titletext text="El Banderín" isVisible={isVisible} delay={500} />
            <Bars isVisible={isVisible} />
            <SubTitleText text="Fútbol" isVisible={isVisible} delay={600} />
            <SubTitleText text="website" isVisible={isVisible} delay={700} />
            <RaisedButton
              text="Show me more"
              isVisible={isVisible}
              delay={700}
              url="/elbanderin/"
            />
          </ContainerFloat>
        </Section>
      </div>
    );
  }
}

ElBanderin.propTypes = {
  index: PropTypes.number,
  section: PropTypes.number,
  delay: PropTypes.number,
};

export default ElBanderin;
