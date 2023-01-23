// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-image: linear-gradient(
    ${props => props.newDisplay},
    ${props => props.newFirst},
    ${props => props.newLast}
  );
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const MainHeading = styled.h1`
  font-weight: bold;
  font-size: 30px;
`

export const Paras = styled.p`
  font-weight: 600;
  font-size: 20px;
`
export const InputItem = styled.input`
  width: 100px;
  height: 40px;
  border: none;
`
export const LabelItem = styled.p`
  font-weight: bold;
`
export const InputContainer = styled.div`
  display: flex;
  border: none;
`

export const EachInputLabelItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 25px;
  border: none;
`
export const GenerateButton = styled.button`
  border: none;
  border-radius: 15px;
  color: white;
  padding: 15px;
  background-color: #00c9b7;
  width: 150px;
  margin-top: 15px;
`
