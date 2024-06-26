
import {Component} from 'react'
import Uparrow from '../assets/images/faqup.webp'
import Downarrow from '../assets/images/faqdown.webp'
const PLUS_IMAGE =Downarrow
  
const MINUS_IMAGE =Uparrow
  
class FaqItem extends Component {
  state = {
    isActive: false,
  }
  renderAnswer = () => {
    const {faqData} = this.props
    const {answerText} = faqData
    const {isActive} = this.state
    if (isActive) {
      return (
        <div >
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }
  onToggleAnswer = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }
  renderActiveImage = () => {
    const {isActive} = this.state
    const image = isActive ? MINUS_IMAGE : PLUS_IMAGE
    const altText = isActive ? 'minus' : 'plus'
    return (
      <button className="button-faq" type="button" onClick={this.onToggleAnswer}>
        <img className="faqimage" src={image} alt={altText}  />
      </button>
    )
  }
  render() {
    const {faqData} = this.props
    const {questionText} = faqData
    return (
      
      <li className="list-item-container">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          {this.renderActiveImage()}
        </div>
        {this.renderAnswer()}
      </li>
      
    )
  }
}
export default FaqItem
