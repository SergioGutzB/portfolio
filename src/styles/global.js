import styled from "styled-components"

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${props => (props.right ? "100vw" : "calc(100vw - 245px)")};
  padding: ${props => (props.right ? "0 0 0 145px" : "0 100px 0 145px")};
  height: 100vh;
  color: white;
  overflow: hidden;
  position: relative;
  transition: width 0.1s;
`

export const ContainerFloat = styled.div`
  position: absolute;
  width: 50%;
`
