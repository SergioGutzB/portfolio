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
  media,
} from '../styles/global';
import Skill from '../components/skill';
import styled from 'styled-components';
import Link from 'gatsby-link';

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

class About extends React.Component {
  render() {
    return (
      <Wrapper>
        <HeaderFixed />
        <ButtonBack
          url="/#about"
          style={{
            position: 'fixed',
            top: '122px',
            left: '42px',
          }}
        />
        <Section right style={{ backgroundColor: '#020b16' }}>
          <CardFull isVisible={true} imageUrl="about/back1.jpg" />
          <ContainerFloat style={{ marginTop: '-41px' }}>
            <Titletext text="About Me" isVisible={true} />
            <Bars isVisible={true} />
            <SubTitleText
              text="Me encanta la tecnología, la animación y el desarrollo de video juegos"
              isVisible={true}
              delay={530}
            />
          </ContainerFloat>
        </Section>

        <SectionPage>
          <SectionText>
            <Title>Quién Soy</Title>
            <div>
              <Text style={{ padding: '0px 60px 0 30px' }}>
                Nacido en la cidudad de Bogotá en 1988. Graduado de ingeniero de
                sistemas de la universidad Distrital Francisco José de Caldas.
                Años antes de entrar a la universidad ya me interesaba el mundo
                del desarrollo y diseño, realicé mis primeras paginas web y
                juegos pequeños con Flash y Action Script.
              </Text>
              <Text style={{ padding: '0px 60px 0 30px' }}>
                Despues de graduarme he trabajado en varias compañias como
                Desarrollar web full-stack. En los dos ultimos años me he
                especializado como desarrollador front-end.
              </Text>
            </div>
          </SectionText>
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
            <Title>Conjunto de Habilidades</Title>
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
