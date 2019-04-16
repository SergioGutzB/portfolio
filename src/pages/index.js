import React from "react"
import ReactFullpage from "@fullpage/react-fullpage"
import Hero from "../components/sections/hero"
import Omnibnk from "../components/sections/omnibnk"
import styled from "styled-components"
import HeaderFixed from "../components/header-fixed"
import ElBanderin from "../components/sections/elbanderin"
import Volaires from "../components/sections/volaires"

const anchors = ["hero", "omnibnk", "elbanderin", "volaires"]
const fullpageOptions = {
  licenseKey: "F03741B9-DB594A2F-8DCD815F-57D360E2",
  anchors,
  callbacks: ["onLeave"],
  scrollOverflow: true,
  navigation: true,
  navigationTooltips: anchors,
  onLeave: (origin, destination, direction) => {
    // console.log("onLeave event", { origin, destination, direction })
  },
}

const Fullpage = styled.div`
  display: inline-block;
`

const Linear = styled.div`
  max-height: 100vh;
  max-width: 100vw;
  background-image: linear-gradient(to bottom, #103057 0%, #0c1625 100%);
`

class App extends React.Component {
  
  render() {
    return (
      <Linear>
        <HeaderFixed />
        <ReactFullpage
          {...fullpageOptions}
          render={({ state, fullpageApi }) => {
            const { initialized, destination } = state
            const show = destination ? destination.index + 1 : 1
            return (
              <Fullpage id="fullpage-wrapper">
                <Hero section={show} index={1} />
                <Omnibnk section={show} index={2} />
                <ElBanderin section={show} index={3} />
                <Volaires section={show} index={4} />
              </Fullpage>
            )
          }}
        />
      </Linear>
    )
  }
}

export default App
