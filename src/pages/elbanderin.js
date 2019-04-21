import React from "react"
import HeaderFixed from "../components/header-fixed"
import CardFull from "../components/card-full"
import ButtonBackBlack from "../components/button-back-black"
import Titletext from "../components/title-text"
import Bars from "../components/bars"
import SubTitleText from "../components/sub-title-text"
import { ContainerFloat } from "../styles/global"
import Image from "../components/image"
import {
  Wrapper,
  Section,
  SectionHeader,
  SectionIcons,
  SectionText,
  SectionPage,
  SubTitle,
  Text,
  ImageFull,
  Title,
  ImageIcon,
  FooterBack,
} from "../styles/global"
import ScrollDown from '../components/scrolldown';

class Elbanderin extends React.Component {
  render() {
    return (
      <Wrapper>
        <HeaderFixed url="/#elbanderin" />
        <Section right style={{ backgroundColor: "#020b16" }} className="firstSection">
          <CardFull isVisible={true} imageUrl="elbanderin/background.png" />
          <ContainerFloat style={{ marginTop: "-41px" }}>
            <Titletext text="PortalFinance" isVisible={true} />
            <Bars isVisible={true} />
            <SubTitleText text="Fintech" isVisible={true} delay={530} />
            <SubTitleText text="website" isVisible={true} delay={560} />
          </ContainerFloat>
          <ScrollDown />
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
              filename="elbanderin/mockup-elbanderin.png"
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
              filename="elbanderin/perspective-elbanderin.png"
              alt="Perpesctive Omni|Bnk"
            />
          </ImageFull>
          <SectionText>
            <Title>Development</Title>
            <div>
              <Text style={{ padding: "0px 60px 0 30px" }}>
                El Front-End ha sido desarrollado sobre React, Mobx y Nextjs
                junto a otras librerias que contribuyeron aún desarrollo rapido
                y eficiente:
              </Text>
              <Text style={{ padding: "5px 60px 0 30px" }}>
                - Mobx administra el store de datos de la aplicación (User,
                authenticación)
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
                - Definir theme y guia de stilos globales (radium ->
                styled-component)
              </Text>
              <Text>
                - Crear componentes reutilizables (Collapse panels, arrows,
                layouts, buttons, toggle buttons, temas, topics, news)
              </Text>
              <Text>
                - Definir, desarrollar e implementar servicios para hacer
                peticiones al api back-end (Ruby on Rails)
              </Text>
              <Text>
                - Definir y crear auth store para la autenticación por token.
                (ServerCookies, LocalCookies)
              </Text>
              <Text>
                - Integrar API de Facebook (Singin, share post and comments)
              </Text>
              <Text>- Deploy Site con AWS EC2 con un Servidor de Node.</Text>
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
