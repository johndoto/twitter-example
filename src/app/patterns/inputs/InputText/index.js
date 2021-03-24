import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './index.scss'

const InputText = ({ value, onChange }) => (
  <div className="input-text">
    <FontAwesomeIcon icon={faSearch} />
    <input type="text" value={value} onChange={onChange} />
  </div>
)

InputText.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}

InputText.defaultProps = {
  value: '',
  onChange: null
}

export default InputText
