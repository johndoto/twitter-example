import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFrown } from '@fortawesome/free-regular-svg-icons'

import './index.scss'

const NoResults = ({ text }) => (
  <div className="no-results">
    <h4>{text}</h4>
    <FontAwesomeIcon icon={faFrown} />
  </div>
)

NoResults.propTypes = {
  text: PropTypes.string
}

NoResults.defaultProps = {
  text: 'No results'
}

export default NoResults
