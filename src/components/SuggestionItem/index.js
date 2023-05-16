// Write your code here
import './index.css'
import ReactDOM from 'react-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

const SuggestionItem = props => {
  const {details, onSignClick} = props
  const {suggestion, id} = details
  const listId = 'listElement'.concat(id.toString())
  const imgId = 'img'.concat(id.toString())
  return (
    <li className="listElement" id={listId}>
      <p>{suggestion}</p>
      <div className="img-container">
        <FontAwesomeIcon onClick={onSignClick} id={imgId} icon={faArrowRight} />
      </div>
    </li>
  )
}

export default SuggestionItem
