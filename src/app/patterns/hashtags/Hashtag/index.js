import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const Hashtag = ({ text, onClick }) => (
  <div className="hashtag" onClick={onClick}>
    #{text}
  </div>
)

Hashtag.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

Hashtag.defaultProps = {
  onClick: null
}

export default Hashtag
