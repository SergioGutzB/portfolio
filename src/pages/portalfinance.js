import React from 'react';
import HeaderFixed from '../components/header-fixed';
import CardFull from '../components/card-full';
import ButtonBack from '../components/button-back';
import ButtonBackBlack from '../components/button-back-black';
import Titletext from '../components/sections/title-text';
import Bars from '../components/Bars';
import SubTitleText from '../components/subTitleText';
import Image from '../components/image';
import {
  ContainerFloat,
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
} from '../styles/global';

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <HeaderFixed />
        <ButtonBack
          url="/#portalfinance"
          style={{
            position: 'fixed',
            top: '122px',
            left: '42px',
          }}
        />
        <Section right style={{ backgroundColor: '#020b16' }}>
          <CardFull isVisible={true} imageUrl="portalfinance/background.jpg" />
          <ContainerFloat>
            <Titletext text="PortalFinance" isVisible={true} />
            <Bars isVisible={true} />
            <SubTitleText text="Fintech" isVisible={true} delay={530} />
            <SubTitleText text="website" isVisible={true} delay={560} />
          </ContainerFloat>
        </Section>

        <SectionPage>
          <SectionHeader>
            <div>
              <SubTitle>ROLE</SubTitle>
              <Text>Front-End Developer</Text>
            </div>
            <div>
              <SubTitle>DATE</SubTitle>
              <Text>DIC 2017</Text>
            </div>
            <div>
              <SubTitle>OVERVIEW</SubTitle>
              <Text>PortalFinance - Landing Page</Text>
            </div>
          </SectionHeader>
          <ImageFull
            style={{ width: 'calc(100% - 100px)', margin: '50px auto' }}
          >
            <Image
              filename="mockup-portalfinance.png"
              style={{ marginTop: '10px' }}
            />
          </ImageFull>
          <SectionText>
            <Title>Features</Title>
            <div>
              <Text style={{ padding: '0px 60px 0 30px', fontStyle: 'italic' }}>
                PortalFinance Landing Page
              </Text>
              <Text style={{ padding: '0px 60px 0 30px', fontStyle: 'italic' }}>
                - Profiles: Financial, Supplier, Allied Debtor
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
              <Text style={{ padding: '0px 60px 0 30px' }}>
                Landing page en tiempo record (2 días) para demos con los
                inversionistas. Es una sitio web con una sola pagina con scroll
                que muestra información descriptiva de los servicio que ofrece
                la compañia.
              </Text>
              <Text style={{ padding: '0px 60px 0 30px' }}>
                Se uso React pasa su desarrollo por la simplicidad de crear
                componentes y con un segundo propposito de dar a conocer al
                equipo de Front-End lo rápido y facil que es crear aplicaciones
                con react.
              </Text>
            </div>
          </SectionText>
          <SectionIcons>
            <ImageIcon>
              <Image filename="logos/react.png" alt="React Omni|Bnk" />
            </ImageIcon>
            <ImageIcon>
              <Image filename="logos/sass.png" alt="Sass Omni|Bnk" />
            </ImageIcon>
            <ImageIcon>
              <Image filename="logos/webpack.png" alt="Webpack Omni|Bnk" />
            </ImageIcon>
            <ImageIcon>
              <Image filename="logos/lambda.png" alt="Lambda Omni|Bnk" />
            </ImageIcon>
            <ImageIcon>
              <Image
                filename="logos/serverless.png"
                alt="Serverless Omni|Bnk"
              />
            </ImageIcon>
          </SectionIcons>
          <div
            style={{
              width: '100%',
              backgroundColor: '#f2f4f5',
              padding: '10px 0 140px',
            }}
          >
            <ImageFull style={{ width: '60%', margin: '50px auto' }}>
              <Image
                filename="portalfinance-page.png"
                alt="Portal Finance Full Page"
              />
            </ImageFull>
          </div>
          <SectionText>
            <Title>Tasks</Title>
            <div style={{ padding: '0px 60px 0 30px' }}>
              <Text>
                - Desarrollar, diseñar e implementar components, layout and
                animations
              </Text>
              <Text>
                - Desarrollar, deplegar landing pages SPA (React - HTML -
                Javascript)
              </Text>
            </div>
          </SectionText>
          <FooterBack>
            <ButtonBackBlack url="/#portalfinance" text="BACK" />
          </FooterBack>
        </SectionPage>
      </Wrapper>
    );
  }
}

export default App;
