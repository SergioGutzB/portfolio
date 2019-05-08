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

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <HeaderFixed url="/#portalfinance" />
        <Section
          right
          style={{ backgroundColor: '#020b16' }}
          className="firstSection"
        >
          <CardFull isVisible={true} imageUrl="portalfinance/background.jpg" />
          <ContainerFloat>
            <Titletext text="PortalFinance" isVisible={true} />
            <Bars isVisible={true} />
            <SubTitleText text="Fintech" isVisible={true} delay={530} />
            <SubTitleText text="website" isVisible={true} delay={560} />
          </ContainerFloat>
          <ScrollDown />
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
                Landing page in record time (2 days) for demos with investors.
                It is a website with a single page with scroll that shows
                descriptive information of the services offered by the company.
              </Text>
              <Text style={{ padding: '0px 60px 0 30px' }}>
                It was used React passes its development for the simplicity of
                creating components and with a second purpose of making known to
                the Front-End team how fast and easy it is to create
                applications with react.
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
                - Develop, design and implement components, layout and
                animations
              </Text>
              <Text>
                - Develop, design and implement components, layout and
                animations)
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
