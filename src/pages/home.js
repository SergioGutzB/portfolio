import React from "react"
import "fullpage.js/vendors/scrolloverflow"
import ReactFullpage from "@fullpage/react-fullpage"
import Hero from "../components/sections/hero"
import styled from "styled-components"

const anchors = ["firstPage", "secondPage", "thirdPage"]
const fullpageOptions = {
  licenseKey: "F03741B9-DB594A2F-8DCD815F-57D360E2",
  anchors: ["firstPage", "secondPage", "thirdPage"],
  sectionsColor: ["#0f1c40", "#f0d617", "#0798ec"],
  callbacks: ["onLeave"],
  scrollOverflow: true,
  anchors: anchors,
  navigation: true,
  navigationTooltips: anchors,
  onLeave: (origin, destination, direction) => {
    console.log("onLeave event", { origin, destination, direction })
  },
}

const Fullpage = styled.div`
  display: inline-block;
`

class App extends React.Component {
  render() {
    return (
      <ReactFullpage
        {...fullpageOptions}
        render={({ state, fullpageApi }) => {
          console.log("state: ", state)
          const { initialized, destination, sectionCount } = state
          const show = initialized && destination ? state.destination.index + 1 : 0
          console.log("show: ", show)

          return initialized ? (
            <Fullpage id="fullpage-wrapper">
              <Hero section={show} index={1} />
              <Hero section={show} index={2} />
              <Hero section={show} index={3} />
            </Fullpage>
          ) : (
            <Fullpage id="fullpage-wrapper">
              <div className="section"></div>
            </Fullpage>
          )
        }}
      />
    )
  }
}

export default App
