import React from "react"
import Omnibnk from "../components/sections/omnibnk"
import styled from "styled-components"
import HeaderFixed from "../components/header-fixed"
import Card from '../components/card';

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
        <Card
          isVisible={true}
          imageUrl="https://s3.amazonaws.com/sergiogutzb-portfolio2/assets/omnibnk-login.png"
        />
      </Linear>
    )
  }
}

export default App
