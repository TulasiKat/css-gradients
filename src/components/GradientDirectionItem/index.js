// Write your code here
import {GradientItem, GradientItemButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, direct, passingFunction} = props
  const {value, displayText} = details

  const herePassing = () => {
    passingFunction(value)
  }

  return (
    <GradientItemButton
      type="button"
      onClick={herePassing}
      direct={direct}
      value={value}
    >
      <GradientItem direct={direct} value={value} color="black">
        {displayText}
      </GradientItem>
    </GradientItemButton>
  )
}

export default GradientDirectionItem
