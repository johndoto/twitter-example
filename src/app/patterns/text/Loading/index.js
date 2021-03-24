import React from 'react'
// import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'

import './index.scss'

const Loading = () => (
  <div className="results-loading">
    <h4>Loading</h4>
    <FontAwesomeIcon icon={faSync} spin />
  </div>
)

Loading.propTypes = {}

Loading.defaultProps = {}

export default Loading
