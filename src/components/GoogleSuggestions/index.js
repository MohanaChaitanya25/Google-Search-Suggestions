// Write your code here
import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  selectSearch = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const filteredList = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase().trim()),
    )

    // const searchResults = destinationsList.filter(eachDestination =>
    //   eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    // )

    return (
      <div className="googleSearchSuggestions-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="suggestions-container">
          <div className="searchContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              onChange={this.onChangeSearchInput}
              type="search"
              className="searchInputElement"
              placeholder="Search Google"
              value={searchInput}
            />
          </div>
          <ul className="suggestions-list-container">
            {filteredList.map(eachItem => (
              <SuggestionItem
                key={eachItem.id}
                suggestion={eachItem.suggestion}
                selectedSearch={this.selectSearch}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
