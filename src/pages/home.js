import React from "react"
import "fullpage.js/vendors/scrolloverflow"
import ReactFullpage from "@fullpage/react-fullpage"
import Hero from "../components/sections/hero"
import Omnibnk from "../components/sections/omnibnk"
import styled from "styled-components"
import HeaderFixed from "../components/header-fixed"

const anchors = ["firstPage", "secondPage", "thirdPage"]
const fullpageOptions = {
  licenseKey: "F03741B9-DB594A2F-8DCD815F-57D360E2",
  anchors: ["firstPage", "secondPage", "thirdPage"],
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

const App = () => (
  <Linear>
    <HeaderFixed />
    <ReactFullpage
      {...fullpageOptions}
      render={({ state, fullpageApi }) => {
        const { initialized, destination } = state
        console.log('state: ', state)
        const show = destination ? destination.index + 1 : 1

        return (
          <Fullpage id="fullpage-wrapper">
            <Hero section={show} index={1} />
            <Omnibnk section={show} index={2} />
            <Hero section={show} index={3} />
            <Hero section={show} index={4} />
          </Fullpage>
        )
      }}
    />
  </Linear>
)

export default App
