import React from 'react';
import HeaderFixed from '../components/header-fixed';
import CardFull from '../components/card-full';
import ButtonBackBlack from '../components/button-back-black';
import Titletext from '../components/title-text';
import Bars from '../components/bars';
import SubTitleText from '../components/sub-title-text';
import { ContainerFloat } from '../styles/global';
import Image from '../components/image';
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
} from '../styles/global';
import ScrollDown from '../components/scrolldown';

class Elbanderin extends React.Component {
  render() {
    return (
      <Wrapper>
        <HeaderFixed url="/#elbanderin" />
        <Section
          right
          style={{ backgroundColor: '#020b16' }}
          className="firstSection"
        >
          <CardFull isVisible={true} imageUrl="elbanderin/background.png" />
          <ContainerFloat style={{ marginTop: '-41px' }}>
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
            <Text>Soccer News Site</Text>
          </SectionHeader>
          <ImageFull
            style={{ width: 'calc(100% - 100px)', margin: '50px auto' }}
          >
            <Image
              filename="elbanderin/mockup-elbanderin.png"
              style={{ marginTop: '10px' }}
            />
          </ImageFull>
          <SectionText>
            <Title>Features</Title>
            <div>
              <Text style={{ padding: '0px 60px 0 30px' }}>
                The Banderin another point of view. The football seen from the
                four corners. Fans, technicians, players and journalists.
              </Text>
              <Text style={{ padding: '0px 60px 0 30px' }}>
                Modern football news site, with an adaptive, configurable design
                that integrates the content manager within the final front-end.
                Allowing editors, content creators and administrators to see a
                new publication in real time as the user would see it.
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
              <Text style={{ padding: '0px 60px 0 30px' }}>
                - The Front-End has been developed on React, Mobx and Nextjs along
                with other libraries that contributed to a fast and efficient
                development:
              </Text>
              <Text style={{ padding: '5px 60px 0 30px' }}>
                - Mobx manages the data store of the application (User,
                authentication)
              </Text>
              <Text style={{ padding: '5px 60px 0 30px' }}>
                - React-Motion to create the animations of the panels (content
                managers and topics).
              </Text>
              <Text style={{ padding: '0px 60px 0 30px' }}>
                - React-dropzone to drag and drop the images when creating
                topics, news, equipment.
              </Text>
              <Text style={{ padding: '0px 60px 0 30px' }}>
                - Styled-component created simple and reusable styles that can be
                called as components.
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
              width: '100%',
              backgroundColor: '#f2f4f5',
              padding: '10px 0 140px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
          >
            <ImageFull
              style={{
                width: '40%',
                margin: '0 2% 0 auto',
              }}
            >
              <Image
                filename="elbanderin/page-home2.png"
                alt="EL banderin - home"
              />
            </ImageFull>
            <ImageFull
              style={{
                width: '40%',
                margin: '0 auto 0 2%',
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
            <div style={{ padding: '0px 60px 0 30px' }}>
              <Text>
                - Create and configure project with react, nextjs and mobx
              </Text>
              <Text>
                - Define theme and global style guide (radium ->
                styled-component)
              </Text>
              <Text>
                - Create reusable components (Collapse panels, arrows, layouts,
                buttons, toggle buttons, themes, topics, news)
              </Text>
              <Text>
                - Define, develop and implement services to make requests to the
                api back-end (Ruby on Rails)
              </Text>
              <Text>
                - Define and create auth store for token authentication.
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
    );
  }
}

export default Elbanderin;
