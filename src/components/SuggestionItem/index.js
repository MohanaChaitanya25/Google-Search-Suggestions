// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestion, selectedSearch} = props

  const selectedSuggestion = () => {
    selectedSearch(suggestion)
  }

  return (
    <li className="searchItem">
      <p className="suggestion">{suggestion}</p>
      <button type="button" className="arrow-btn" onClick={selectedSuggestion}>
        <img
          className="arrow-img"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
