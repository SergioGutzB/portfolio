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
  SectionText,
  SectionPage,
  Text,
  ImageFull,
  Title,
  SubTitle,
  FooterBack,
  media,
} from '../styles/global';
import Skill from '../components/skill';
import styled from 'styled-components';
import ScrollDown from '../components/scrolldown';

const Skills = styled.div`
  width: 90%;
  margin: 100px auto 140px;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 50px;
  ${media.desktop`
  `}
  ${media.tablet`
  `}
  ${media.phone`
    width: calc(100% - 30px);
    margin: 60px auto 100px;
    grid-gap: 40px;
  `}
`;

const Futures = styled.div`
  width: calc(100% - 160px);
  padding: 50px 0 100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 100px;
`;

const Future = styled.div`
  flex: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

class About extends React.Component {
  render() {
    return (
      <Wrapper>
        <HeaderFixed url="/#about" />
        <Section
          right
          style={{ backgroundColor: '#020b16' }}
          className="firstSection"
        >
          <CardFull isVisible={true} imageUrl="about/back1.jpg" />
          <ContainerFloat style={{ marginTop: '-41px' }}>
            <Titletext text="About Me" isVisible={true} />
            <Bars isVisible={true} />
            <SubTitleText
              text="I love technology, development and any technique of visualization"
              isVisible={true}
              delay={530}
            />
          </ContainerFloat>
          <ScrollDown />
        </Section>

        <SectionPage>
          <SectionText>
            <Title>WHO I AM</Title>
            <div>
              <Text style={{ padding: '0px 70px 0 35%' }}>
                Born in the city of Bogota in 1988. Graduated as an engineer
                Systems of the Francisco José de Caldas District University. My
                career has been guided by the development of web applications
                and Specialized as front-end developer during the last 3 years
              </Text>
              <Text style={{ padding: '0px 70px 0 35%' }}>
                I started to develop my first applications in a way. Self-taught
                before starting college. Develop some web pages in flash with
                actionscript 3, which led me appropriate design skills and
                applications like Photoshop and illustrator.
              </Text>
            </div>
          </SectionText>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignContent: 'center',
              width: '70%',
              margin: '0 auto',
              position: 'relative',
              padding: '0 0 120px',
            }}
          >
            <Future style={{ alignItems: 'center' }}>
              <Image filename="skills.png" styles={{ width: '150px' }} />
              <SubTitle style={{ margin: '30px 0' }}>Skills</SubTitle>
              <Text>Proactive &#8626;</Text>
              <Text>Autodidact &#8626;</Text>
              <Text>Continuous learning &#10003;</Text>
            </Future>
            <Future style={{ alignItems: 'center' }}>
              <Image filename="weaknesses.png" styles={{ width: '150px' }} />
              <SubTitle style={{ margin: '30px 0' }}>Weaknesses</SubTitle>
              <Text>Demanding &#8614; leadership - delegation</Text>
              <Text>
                <strong>NO</strong> it's also an answer !&#8614; Evaluate,
                viability
              </Text>
              <Text>Ingles &#8599;</Text>
            </Future>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              position: 'relative',
            }}
          >
            <Title>The future</Title>
            <Futures>
              <Future>
                <SubTitle>Short term</SubTitle>
                <Text>Train me personally and professionally.</Text>
                <Text>Speak English.</Text>
              </Future>
              <Future>
                <SubTitle>Medium term</SubTitle>
                <Text>Train me personally and professionally.</Text>
                <Text>Machine learning, data visualization.</Text>
              </Future>
              <Future>
                <SubTitle>Long term</SubTitle>
                <Text>Committed to the company.</Text>
                <Text>Climb professionally.</Text>
                <Text>New leadership challenges.</Text>
              </Future>
            </Futures>
          </div>
          <ImageFull>
            <Image
              filename="about/perspective-about.png"
              alt="Perpesctive Omni|Bnk"
            />
          </ImageFull>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              position: 'relative',
            }}
          >
            <Title>Technical Skills</Title>
            <Skills>
              <Skill
                label="HTML/CSS"
                years="6 YEARS"
                percentage={80}
                url="logos/html-css3.png"
              />
              <Skill
                label="Sass"
                years="4 YEARS"
                percentage={70}
                url="logos/sass.png"
              />
              <Skill
                label="Javascript"
                years="5 YEARS"
                percentage={70}
                url="logos/js.png"
              />
              <Skill
                label="Angular"
                years="4 YEARS"
                percentage={70}
                url="logos/angular6.png"
              />
              <Skill
                label="Styled-Components"
                years="2 YEARS"
                percentage={60}
                url="logos/styled-components.png"
              />
              <Skill
                label="React JS"
                years="3 YEARS"
                percentage={70}
                url="logos/react.png"
              />
              <Skill
                label="Redux"
                years="1 YEAR"
                percentage={60}
                url="logos/redux.png"
              />
              <Skill
                label="NEXT JS"
                years="3 YEAR"
                percentage={60}
                url="logos/next-js.png"
              />
              <Skill
                label="Webpack"
                years="3 YEARS"
                percentage={50}
                url="logos/webpack.png"
              />
              <Skill
                label="Ngrx"
                years="1 YEAR"
                percentage={40}
                url="logos/ngrx.png"
              />
              <Skill
                label="Jasmine"
                years="2 YEAR"
                percentage={50}
                url="logos/jasmine.png"
              />
              <Skill
                label="Karma"
                years="1 YEAR"
                percentage={40}
                url="logos/karma.png"
              />
              <Skill
                label="Lambda AWS"
                years="HALF A YEAR"
                percentage={50}
                url="logos/lambda.png"
              />
              <Skill
                label="Serverless"
                years="HALF A YEAR"
                percentage={40}
                url="logos/serverless.png"
              />
              <Skill
                label="Sketch"
                years="HALF A YEAR"
                percentage={30}
                url="logos/sketch.png"
              />
              <Skill
                label="Invision"
                years="HALF A YEAR"
                percentage={30}
                url="logos/invision.png"
              />
              <Skill
                label="Zeplin"
                years="1 YEAR"
                percentage={40}
                url="logos/zeplin.png"
              />
              <Skill
                label="Photoshop"
                years="6 YEAR"
                percentage={40}
                url="logos/photoshop.png"
              />
              <Skill
                label="Illustrator"
                years="4 YEAR"
                percentage={30}
                url="logos/illustrator.png"
              />
              <Skill
                label="InkScape"
                years="4 YEAR"
                percentage={30}
                url="logos/inkscape.png"
              />
            </Skills>
          </div>
          <FooterBack>
            <ButtonBackBlack url="/#about" text="BACK" />
            <a href="mailto:sergut18@gmail.com" style={{ marginTop: '40px' }}>
              <Text>sergut18@gmail.com</Text>
            </a>
          </FooterBack>
        </SectionPage>
      </Wrapper>
    );
  }
}

export default About;
