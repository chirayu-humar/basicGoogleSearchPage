// Write your code here
import {Component} from 'react'
import ReactDOM from 'react-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onSignClick = event => {
    console.log('onsignclick is being called')
    const id = event.currentTarget.id.replace('img', '')
    const listId = id.toString()
    const {suggestionsList} = this.props
    const newInputElement = suggestionsList.filter(
      eachItem => eachItem.id.toString() === listId,
    )
    console.log(newInputElement)
    const inputElement = document.getElementById('input')
    inputElement.value = newInputElement[0].suggestion.toString()
    console.log(inputElement)
    this.setState({
      searchInput: newInputElement[0].suggestion,
    })
  }

  changeListItem = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const newList = suggestionsList.filter(eachItem => {
      const {searchInput} = this.state
      return eachItem.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase())
    })
    console.log(newList)
    return (
      <div className="bg-container">
        <div className="first">
          <img
            alt="google logo"
            className="image"
            src="https://cdn-icons-png.flaticon.com/512/300/300221.png?w=740&t=st=1684258932~exp=1684259532~hmac=5ded1d615173f54c559027783b2336ceaa17f4f3f208c42b2e1b2ea03506f208"
          />
        </div>
        <ul className="second">
          <li id="firstListElement">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input
              id="input"
              onChange={this.changeListItem}
              placeholder="Search Google"
              type="search"
              className="searchBox"
            />
          </li>
          {newList.map(eachItem => (
            <SuggestionItem
              key={eachItem.id}
              details={eachItem}
              onSignClick={this.onSignClick}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default GoogleSuggestions
