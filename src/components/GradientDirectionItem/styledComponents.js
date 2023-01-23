// Style your elements here
import styled from 'styled-components'

export const GradientItem = styled.li`
  list-style-type: none;
  padding: 20px;
  border: 1px solid black;
  background-color: ${props =>
    props.direct === props.value ? '#ededed' : ' #ffffff79'};
  font-weight: bold;

  margin: 15px;
`
export const GradientItemButton = styled.button`
  border: none;
  background: none;
  opacity: ${props => (props.direct === props.value ? 1 : 0.5)};
`
