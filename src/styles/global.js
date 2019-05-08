import styled, { css } from 'styled-components';

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

// ${media.desktop`
// `}
// ${media.tablet`
// `}
// ${media.phone`
// `}

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${props => (props.right ? '100vw' : 'calc(100vw - 245px)')};
  padding: ${props => (props.right ? '0 0 0 145px' : '0 100px 0 145px')};
  height: 100vh;
  color: white;
  overflow: hidden;
  position: relative;
  transition: width 0.1s;

  ${media.desktop`
  `}
  ${media.tablet`
  `}
  ${media.phone`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100vw;
    padding: 0;
  `}
`;

export const ContainerFloat = styled.div`
  position: absolute;
  width: 50%;
  min-height: 210px;
  ${media.desktop`
  `}
  ${media.tablet`
  `}
  ${media.phone`
    bottom: 10%;
    width: 100%;
    padding-left: 25px;
  `}
`;

export const Filter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #852977;
  opacity: 0.3;
`;
export const Linear = styled.div`
  max-height: 100vh;
  max-width: 100vw;
  background-image: linear-gradient(
    to bottom,
    #072142,
    #061c37,
    #07182b,
    #061220,
    #020b16
  );
`;
export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  overflow-y: auto;
  position: relative;
`;

export const SectionPage = styled.section`
  width: 100vw;
  padding-top: 7.2rem;
  position: relative;
  ${media.desktop`
  `}
  ${media.tablet`
  `}
  ${media.phone`
    padding-top: 2rem;
  `}
`;

export const Title = styled.h1`
  font-size: 4rem;
  color: #072142;
  letter-spacing: 0.2em;
  font-family: 'futura_m';
  margin-right: 3.2rem;
  position: relative;
  padding-left: 6.2rem;
  margin-top: 0;
  text-transform: uppercase;
  &:before {
    content: '';
    width: 4.8rem;
    height: 2px;
    background: #020b16;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  ${media.desktop`
  `}
  ${media.tablet`
  `}
  ${media.phone`
    font-size: 7vw;
    padding-left: 5rem;
    margin-top: 2rem;
    &:before {
      width: 3.8rem;
    }
  `}
`;

export const SubTitle = styled.h3`
  color: #072142;
  letter-spacing: 0.2em;
  line-height: 1.2;
  font-family: 'futura_de';
  font-size: 2.4em;
  word-wrap: break-word;
  white-space: normal;
  margin: 0;
`;

export const Text = styled.p`
  margin: 6px 0;
  padding: 0;
  border: 0;
  font-size: 150%;
  vertical-align: baseline;
  line-height: 2;
  word-wrap: break-word;
  white-space: normal;
  ${media.desktop`
  `}
  ${media.tablet`
  `}
  ${media.phone`
    font-size: 3.5vw;
    margin: 6px 0 0 15px;
  `}
`;

export const SectionHeader = styled.div`
  width: 100%;
  padding: 0 9%;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 5px;
  grid-auto-rows: minmax(30px, auto);
  ${media.desktop`
  `}
  ${media.tablet`
  `}
  ${media.phone`
    grid-template-columns: auto;
    grid-gap: 15px;
  `}
`;

export const ImageFull = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const SectionText = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 5px;
  grid-auto-rows: minmax(30px, auto);
  align-items: flex-start;
  margin: 140px 0px;
  ${media.desktop`
  `}
  ${media.tablet`
  `}
  ${media.phone`
    grid-template-columns: auto;
    grid-gap: 15px;
    margin: 60px 0px;
  `}
`;

export const SectionIcons = styled.section`
  width: calc(100% - 240px);
  padding: 140px 120px;
  background-color: #f2f4f5;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 30px;
  align-items: center;
  justify-items: center;
  justify-content: center;
  ${media.desktop`
  `}
  ${media.tablet`
  `}
  ${media.phone`
    width: calc(100% - 80px);
    padding: 100px 40px;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  `}
`;

export const ImageIcon = styled.div`
  width: 40%;
  margin: 0 auto;
`;

export const FooterBack = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  height: 380px;
  background-color: #f2f4f5;
`;
