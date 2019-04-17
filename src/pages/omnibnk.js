import React from "react"
import styled from "styled-components"
import HeaderFixed from "../components/header-fixed"
import CardFull from "../components/card-full"
import { Section } from "../styles/global"
import ButtonBack from "../components/button-back"
import ButtonBackBlack from "../components/button-back-black"
import Titletext from "../components/sections/title-text"
import Bars from "../components/Bars"
import SubTitleText from "../components/subTitleText"
import { ContainerFloat } from "../styles/global"
import Image from "../components/image"

const Linear = styled.div`
  max-height: 100vh;
  max-width: 100vw;
  background-image: linear-gradient(to bottom, #072142, #061c37, #07182b, #061220, #020b16);
`
const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  overflow-y: auto;
  position: relative;
`

const SectionPage = styled.section`
  width: 100vw;
  padding-top: 7.2rem;
  position: relative;
`

const Title = styled.h1`
  font-size: 4rem;
  color: #072142;
  letter-spacing: 0.2em;
  font-family: "futura_m";
  margin-right: 3.2rem;
  position: relative;
  padding-left: 6.2rem;
  margin-top: 5rem;
  text-transform: uppercase;
  &:before {
    content: "";
    width: 4.8rem;
    height: 2px;
    background: #020b16;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
`

const SubTitle = styled.h3`
  color: #072142;
  letter-spacing: 0.2em;
  line-height: 1.2;
  font-family: "futura_de";
  font-size: 2.4em;
  word-wrap: break-word;
  white-space: normal;
  margin: 0;
`

const Text = styled.p`
  margin: 6px 0;
  padding: 0;
  border: 0;
  font-size: 150%;
  vertical-align: baseline;
  line-height: 2;
  word-wrap: break-word;
  white-space: normal;
`

const SectionHeader = styled.div`
  width: 100%;
  padding: 0 9%;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 5px;
  grid-auto-rows: minmax(30px, auto);
`

const ImageFull = styled.div`
  width: 100%;
  margin: 0 auto;
`

const SectionText = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 5px;
  grid-auto-rows: minmax(30px, auto);
  align-items: center;
  margin: 140px 0px;
`

const SectionIcons = styled.section`
  width: calc(100% - 240px);
  padding: 140px 120px;
  background-color: #f2f4f5;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 30px;
  align-items: center;
  justify-items: center;
  justify-content: center;
`

const SectionIframes = styled.section`
  width: 100%;
  padding: 0 0 140px;
  background-color: #f2f4f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 720px;
`

const ImageIcon = styled.div`
  width: 40%;
  margin: 0 auto;
`

const FooterBack = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  height: 380px;
  background-color: #f2f4f5;
`

const Iframe = styled.iframe`
  border: none;
  width: 69%;
  height: 40vw;
  margin: 0 auto;
`

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <HeaderFixed />
        <ButtonBack
          url="/#omnibnk"
          style={{
            position: "fixed",
            top: "122px",
            left: "42px",
          }}
        />
        <Section right style={{ backgroundColor: "#020b16" }}>
          <CardFull isVisible={true} imageUrl="perspective-omni.png" />
          <ContainerFloat style={{ marginTop: "-41px" }}>
            <Titletext text="Omni|Bnk" isVisible={true} />
            <Bars isVisible={true} />
            <SubTitleText text="Fintech" isVisible={true} delay={530} />
            <SubTitleText text="website" isVisible={true} delay={560} />
          </ContainerFloat>
        </Section>

        <SectionPage>
          <SectionHeader>
            <SubTitle>ROLE</SubTitle>
            <SubTitle>DATE</SubTitle>
            <SubTitle>OVERVIEW</SubTitle>
            <Text>Front-End Developer</Text>
            <Text>SEP 2017 - NOW</Text>
            <Text>Plataforma financiera para hacer factoring y confirming</Text>
          </SectionHeader>
          <ImageFull
            style={{ width: "calc(100% - 100px)", margin: "50px auto" }}
          >
            <Image filename="mockup-omni.png" style={{ marginTop: "10px" }} />
          </ImageFull>
          <SectionText>
            <Title>Features</Title>
            <div>
              <Text style={{ padding: "0px 60px 0 30px", fontStyle: "italic" }}>
                "Somos la primera plataforma digital de soluciones financieras
                de Latinoamérica, para empresas, que cambio las reglas a través
                de un financiamiento rápido, transparente y con toda la libertad
                que siempre quisiste".
              </Text>
              <Text style={{ padding: "0px 60px 0 30px", fontStyle: "italic" }}>
                - Profiles: Financial, Supplier, Allied Debtor
              </Text>
            </div>
          </SectionText>
          <ImageFull>
            <Image filename="perspective-omni.png" alt="Perpesctive Omni|Bnk" />
          </ImageFull>
          <SectionText>
            <Title>Development</Title>
            <Text style={{ padding: "0px 60px 0 30px" }}>
              Plataforma web SPA desarrollada con Angular 6 junto con Ngrx
              (Redux) para administrar nuestros datos de aplicación. Apoyamos
              nuestra hoja de estilos sobre Angular Material para agilizar el
              desarollo, no reinventamos la rueda.
            </Text>
          </SectionText>
          <SectionIcons>
            <ImageIcon>
              <Image filename="logos/angular6.png" alt="Angular 6 Omni|Bnk" />
            </ImageIcon>
            <ImageIcon>
              <Image filename="logos/ngrx" alt="Ngrx Omni|Bnk" />
            </ImageIcon>
            <ImageIcon>
              <Image filename="logos/redux.png" alt="Ngrx Omni|Bnk" />
            </ImageIcon>
            <ImageIcon>
              <Image filename="logos/sass.png" alt="Ngrx Omni|Bnk" />
            </ImageIcon>
            <ImageIcon>
              <Image filename="logos/webpack.png" alt="Ngrx Omni|Bnk" />
            </ImageIcon>
            <ImageIcon>
              <Image filename="logos/karma.png" alt="Ngrx Omni|Bnk" />
            </ImageIcon>
            <ImageIcon>
              <Image filename="logos/jasmine.png" alt="Ngrx Omni|Bnk" />
            </ImageIcon>
            <ImageIcon>
              <Image filename="logos/lambda.png" alt="Ngrx Omni|Bnk" />
            </ImageIcon>
            <ImageIcon>
              <Image filename="logos/serverless.png" alt="Ngrx Omni|Bnk" />
            </ImageIcon>
          </SectionIcons>
          <SectionIframes>
            <Iframe src="https://landing-omnibnk.netlify.com/" />
          </SectionIframes>
          <SectionText>
            <Title>Tasks</Title>
            <div style={{ padding: "0px 60px 0 30px" }}>
              <Text>
                - Crear, diseñar, modificar templates Angular Material
              </Text>
              <Text>
                - Desarrollar, diseñar e implementar components, layouts and
                views
              </Text>
              <Text>
                - Desarrollar, deplegar landing pages SPA (React - HTML -
                Javascript)
              </Text>
            </div>
          </SectionText>
          <FooterBack>
            <ButtonBackBlack url="/#omnibnk" text="BACK" />
          </FooterBack>
        </SectionPage>
      </Wrapper>
    )
  }
}

export default App
