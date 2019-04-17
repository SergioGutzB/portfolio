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
  background-image: linear-gradient(to bottom, #103057 0%, #0c1625 100%);
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

const SectionFullPage = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 700px;
  height: auto;
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

class Elbanderin extends React.Component {
  render() {
    return (
      <Wrapper>
        <HeaderFixed />
        <ButtonBack
          url="/#elbanderin"
          style={{
            position: "fixed",
            top: "122px",
            left: "42px",
          }}
        />
        <Section right style={{ backgroundColor: "#020b16" }}>
          <CardFull isVisible={true} imageUrl="elbanderin/background.png" />
          <ContainerFloat style={{ marginTop: "-41px" }}>
            <Titletext text="PortalFinance" isVisible={true} />
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
            <Text>JUL 2017</Text>
            <Text>Sitio de Noticias de Futboll</Text>
          </SectionHeader>
          <ImageFull
            style={{ width: "calc(100% - 100px)", margin: "50px auto" }}
          >
            <Image
              filename="mockup-portalfinance.png"
              style={{ marginTop: "10px" }}
            />
          </ImageFull>
          <SectionText>
            <Title>Features</Title>
            <div>
              <Text style={{ padding: "0px 60px 0 30px" }}>
                El Banderin otro punto de Vista. El futlbol visto desde las
                cuatro esquinas. Hinchas, técnicos, jugadores y periodistas.
              </Text>
              <Text style={{ padding: "0px 60px 0 30px" }}>
                Sitio de noticias de futbol moderno, con un diseño adaptativo,
                configurable que integra el administrador de contenido dentro
                del front-end final. Permitiendo a los editores, creadores de
                contenido y administradores ver una nueva publicacion en tiempo
                real tal y como la vería el usuario.
              </Text>
            </div>
          </SectionText>
          <ImageFull>
            <Image
              filename="perspective-portal.png"
              alt="Perpesctive Omni|Bnk"
            />
          </ImageFull>
          <SectionText>
            <Title>Development</Title>
            <div>
              <Text style={{ padding: "0px 60px 0 30px" }}>
                El Front-End ha sido desarrollado sobre React, Mobx y Nextjs junto a
                otras librerias que contribuyeron aún desarrollo rapido y eficiente:
              </Text>
              <Text style={{ padding: "5px 60px 0 30px" }}>
                - Mobx administra el store de datos de la aplicación (User, authenticación)
              </Text>
              <Text style={{ padding: "5px 60px 0 30px" }}>
                - React-Motion para crear la animaciones de los paneles
                (administradores de contenido y tópicos).
              </Text>
              <Text style={{ padding: "0px 60px 0 30px" }}>
                - React-dropzone para arrastar y soltar las imagenes al momento
                de crear tópicos, noticias, equipos.
              </Text>
              <Text style={{ padding: "0px 60px 0 30px" }}>
                - Con Styled-component se crearon estilos simples y
                reutilizables que se pueden llamar como componentes.
              </Text>
            </div>
          </SectionText>
          <SectionIcons>
            <ImageIcon>
              <Image filename="logos/react.png" alt="React Omni|Bnk" />
            </ImageIcon>
            <ImageIcon>
              <Image filename="logos/next-js.png" alt="NextJS Omni|Bnk" />
            </ImageIcon>
            <ImageIcon>
              <Image
                filename="logos/styled-components.png"
                alt="Styled-components Omni|Bnk"
              />
            </ImageIcon>
            <ImageIcon>
              <Image filename="logos/webpack.png" alt="Webpack Omni|Bnk" />
            </ImageIcon>
          </SectionIcons>
          <div
            style={{
              width: "100%",
              backgroundColor: "#f2f4f5",
              padding: "10px 0 140px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <ImageFull
              style={{
                width: "40%",
                margin: "0 2% 0 auto",
              }}
            >
              <Image
                filename="elbanderin/page-home2.png"
                alt="EL banderin - home"
              />
            </ImageFull>
            <ImageFull
              style={{
                width: "40%",
                margin: "0 auto 0 2%",
              }}
            >
              <Image
                filename="elbanderin/page-calendar.png"
                alt="El banderín - calendar"
              />
            </ImageFull>
          </div>
          <SectionText>
            <Title>Tasks</Title>
            <div style={{ padding: "0px 60px 0 30px" }}>
              <Text>
              - Crear y configurar proyecto con react, nextjs y mobx 
              </Text>
              <Text>
              - Definir theme y guia de stilos globales (radium -> styled-component) 
              </Text>
              <Text>
              - Crear componentes reutilizables (Collapse panels, arrows, layouts, buttons, toggle buttons, temas, topics, news)
              </Text>
              <Text>
              - Definir, desarrollar e implementar servicios para hacer peticiones al api back-end (Ruby on Rails)
              </Text>
              <Text>
              - Definir y crear auth store para la autenticación por token. (ServerCookies, LocalCookies)
              </Text>
              <Text>
              - Integrar API de Facebook (Singin, share post and comments)
              </Text>
              <Text>
              - Deploy Site con AWS EC2 con un Servidor de Node.
              </Text>
            </div>
          </SectionText>
          <FooterBack>
            <ButtonBackBlack url="/#elbanderin" text="BACK" />
          </FooterBack>
        </SectionPage>
      </Wrapper>
    )
  }
}

export default Elbanderin
