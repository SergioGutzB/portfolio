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


export const Filter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #852977;
  opacity: 0.3;
`