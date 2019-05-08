import React from 'react';
import HeaderFixed from '../components/header-fixed';
import CardFull from '../components/card-full';
import ButtonBackBlack from '../components/button-back-black';
import Titletext from '../components/title-text';
import Bars from '../components/bars';
import SubTitleText from '../components/sub-title-text';
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
import ScrollDown from '../components/scrolldown';

class Elbanderin extends React.Component {
  render() {
    return (
      <Wrapper>
        <HeaderFixed url="/#volaires" />
        <Section
          right
          style={{ backgroundColor: '#020b16' }}
          className="firstSection"
        >
          <CardFull
            isVisible={true}
            imageUrl="volaires/perspective-volaires.png"
          />
          <ContainerFloat style={{ marginTop: '-41px' }}>
            <Titletext text="Volaires" isVisible={true} />
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
            <Text>MarketPlace Planes</Text>
          </SectionHeader>
          <ImageFull
            style={{ width: 'calc(100% - 100px)', margin: '50px auto' }}
          >
            <Image
              filename="volaires/mockup-volaires.png"
              style={{ marginTop: '10px' }}
            />
          </ImageFull>
          <SectionText>
            <Title>Features</Title>
            <div>
              <Text style={{ padding: '0px 60px 0 30px' }}>
                Tourism market, where you could find tickets, plans, cars, and
                profile of the gamified user.
              </Text>
            </div>
          </SectionText>
          <ImageFull>
            <Image
              filename="volaires/perspective-volaires.png"
              alt="Perpesctive Omni|Bnk"
            />
          </ImageFull>
          <SectionText>
            <Title>Development</Title>
            <div>
              <Text style={{ padding: '5px 60px 0 30px' }}>
                - Back-end developed with Django, together with Java modules for
                the SOAP connection with the Global Distribution System.
              </Text>
              <Text style={{ padding: '0px 60px 0 30px' }}>
                - Fronted developed in AngularJS and integrated into the backend
                by means of Django's own templates.
              </Text>
              <Text style={{ padding: '0px 60px 0 30px' }}>
                - New modules (Plans) developed with Django and ReactJs and
                Mobx.
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
              <Image filename="volaires/page1.jpg" alt="Volaires - home" />
            </ImageFull>
            <ImageFull
              style={{
                width: '40%',
                margin: '0 auto 0 2%',
              }}
            >
              <Image filename="volaires/page2.jpg" alt="Volaires - planes" />
            </ImageFull>
          </div>
          <SectionText>
            <Title>Tasks</Title>
            <div style={{ padding: '0px 60px 0 30px' }}>
              <Text>- Continue with the development of the plans module.</Text>
              <Text>- Refactoring styles of the application in general.</Text>
              <Text>
                - Decouple Angular 1 front-end as templates from the back-end
                with Django.
              </Text>
              <Text>- Create module of Plans with react.</Text>
              <Text>- Create the user profile module.</Text>
              <Text>
                - Create module of com map in D3JS and location of tourist
                points.
              </Text>
            </div>
          </SectionText>
          <FooterBack>
            <ButtonBackBlack url="/#volaires" text="BACK" />
          </FooterBack>
        </SectionPage>
      </Wrapper>
    );
  }
}

export default Elbanderin;
