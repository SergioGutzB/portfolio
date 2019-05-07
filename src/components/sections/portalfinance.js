import React from 'react';
import PropTypes from 'prop-types';
import Titletext from '../title-text';
import Bars from '../bars';
import SubTitleText from '../sub-title-text';
import Card from '../card';
import RaisedButton from '../button';
import { Section, ContainerFloat } from '../../styles/global';

class PortalFinance extends React.Component {
  render() {
    const { section, index } = this.props;
    const isVisible = section === index ? true : false;
    const props = { text: 'PortalFinance', isVisible, reverse: true };
    return (
      <div className="section">
        <Section>
          <Card
            isVisible={isVisible}
            imageUrl="portalfinance/background.jpg"
            year={2017}
          />
          <ContainerFloat>
            <Titletext {...props} />
            <Bars isVisible={isVisible} />
            <SubTitleText text="Fintech" isVisible={isVisible} delay={530} />
            <SubTitleText text="website" isVisible={isVisible} delay={560} />
            <RaisedButton
              text="Show me more"
              isVisible={isVisible}
              delay={590}
              url="/portalfinance/"
            />
          </ContainerFloat>
        </Section>
      </div>
    );
  }
}

PortalFinance.propTypes = {
  index: PropTypes.number,
  section: PropTypes.number,
};

export default PortalFinance;
