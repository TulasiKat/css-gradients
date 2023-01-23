import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  MainContainer,
  MainHeading,
  Paras,
  InputItem,
  LabelItem,
  InputContainer,
  EachInputLabelItem,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    first: '#8ae323',
    last: '#014f7b',
    direction: `to ${gradientDirectionsList[0].value}`,
    direct: gradientDirectionsList[0].value,
    newFirst: '#8ae323',
    newLast: '#014f7b',
    newDisplay: `to ${gradientDirectionsList[0].value}`,
  }

  generateClicked = () => {
    console.log('generate clicked')
    const {first, last, direction} = this.state
    this.setState({newDisplay: direction, newFirst: first, newLast: last})
  }

  firstChanged = event => {
    this.setState({first: event.target.value})
  }

  lastChanged = event => {
    this.setState({last: event.target.value})
  }

  passingFunction = value => {
    this.setState({direct: value, direction: `to ${value}`})
  }

  render() {
    const {direct, first, last, newFirst, newLast, newDisplay} = this.state
    console.log(newDisplay)
    console.log(newFirst)
    return (
      <MainContainer
        newFirst={newFirst}
        newLast={newLast}
        newDisplay={newDisplay}
        data-testid="gradientGenerator"
      >
        <MainHeading>Generate a CSS Color Gradient</MainHeading>
        <Paras>Choose Direction</Paras>
        <ul>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              details={each}
              direct={direct}
              passingFunction={this.passingFunction}
            />
          ))}
        </ul>
        <Paras>Pick the Colors</Paras>
        <InputContainer>
          <EachInputLabelItem>
            <LabelItem>{first}</LabelItem>
            <InputItem
              type="color"
              id="first"
              value={first}
              onChange={this.firstChanged}
            />
          </EachInputLabelItem>
          <EachInputLabelItem>
            <LabelItem>{last}</LabelItem>
            <InputItem
              type="color"
              id="last"
              value={last}
              onChange={this.lastChanged}
            />
          </EachInputLabelItem>
        </InputContainer>
        <GenerateButton type="button" onClick={this.generateClicked}>
          Generate
        </GenerateButton>
      </MainContainer>
    )
  }
}

export default GradientGenerator
