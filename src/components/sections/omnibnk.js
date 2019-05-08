import React from 'react';
import PropTypes from 'prop-types';
import Titletext from '../title-text';
import Bars from '../bars';
import SubTitleText from '../sub-title-text';
import Card from '../card';
import RaisedButton from '../button';
import { Section, ContainerFloat } from '../../styles/global';

const Omnibnk = (props) => {
    const { section, index } = props;
    const isVisible = section === index ? true : false;
    const props2 = { text: 'Omni|Bnk', isVisible, reverse: true };
    return (
      <div className="section">
        <Section>
          <Card
            isVisible={isVisible}
            imageUrl="perspective-omni.png"
            year={2018}
          />
          <ContainerFloat>
            <Titletext {...props2} />
            <Bars isVisible={isVisible} />
            <SubTitleText text="Fintech" isVisible={isVisible} delay={530} />
            <SubTitleText text="website" isVisible={isVisible} delay={560} />
            <RaisedButton
              text="Show me more"
              isVisible={isVisible}
              delay={590}
              url="/omnibnk/"
            />
          </ContainerFloat>
        </Section>
      </div>
    );
}

Omnibnk.propTypes = {
  index: PropTypes.number,
  section: PropTypes.number,
};

export default Omnibnk;
