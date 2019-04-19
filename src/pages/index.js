import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Hero from '../components/sections/hero';
import Omnibnk from '../components/sections/omnibnk';
import PortalFinance from '../components/sections/portalfinance';
import styled from 'styled-components';
import HeaderFixed from '../components/header-fixed';
import ElBanderin from '../components/sections/elbanderin';
import Volaires from '../components/sections/volaires';
import Moonlightsvg from '../assets/moonlight.svg';

const anchors = ['hero', 'omnibnk', 'portalfinance', 'elbanderin', 'volaires'];
const fullpageOptions = {
  licenseKey: 'F03741B9-DB594A2F-8DCD815F-57D360E2',
  anchors,
  callbacks: ['onLeave'],
  scrollOverflow: true,
  navigation: true,
  navigationTooltips: anchors,
  onLeave: (origin, destination, direction) => {
    // console.log("onLeave event", { origin, destination, direction })
  },
};

const Fullpage = styled.div`
  display: inline-block;
`;

const Linear = styled.div`
  max-height: 100vh;
  max-width: 100vw;
  background-image: linear-gradient(to bottom, #103057 0%, #0c1625 100%);
  z-index: 10;
  position: relative;
`;

const MoonBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -100;
`;

const MoonLight = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 29.427%;
  margin: auto;
  height: 1385px;
  width: 1385px;
  z-index: -100;
`;

const MoonLightWrap = styled.div`
  width: 100%;
  height: 100%;
  transform: translate3d(0px, 0px, 0px) rotate(0.0001deg);
  transform-style: preserve-3d;
  backface-visibility: hidden;
  position: relative;
  pointer-events: none;
`;

class App extends React.Component {
  render() {
    return (
      <Linear>
        <HeaderFixed />
        <ReactFullpage
          {...fullpageOptions}
          render={({ state }) => {
            const { destination } = state;
            const show = destination ? destination.index + 1 : 1;
            return (
              <Fullpage id="fullpage-wrapper">
                <Hero section={show} index={1} />
                <Omnibnk section={show} index={2} />
                <PortalFinance section={show} index={3} />
                <ElBanderin section={show} index={4} />
                <Volaires section={show} index={5} />
              </Fullpage>
            );
          }}
        />
        <MoonBackground>
          <MoonLight>
            <MoonLightWrap>
              <Moonlightsvg
                style={{
                  transfor: 'translate3d(-27.5px, 13.9px, 0px)',
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  position: 'relative',
                  display: 'block',
                  left: '0px',
                  top: '0px',
                }}
              />
            </MoonLightWrap>
          </MoonLight>
        </MoonBackground>
      </Linear>
    );
  }
}

export default App;
