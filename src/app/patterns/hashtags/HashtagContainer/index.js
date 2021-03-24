import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const HashtagContainer = ({ children }) => <div className="hashtag-container">{children}</div>

HashtagContainer.propTypes = {
  children: PropTypes.node.isRequired
}

HashtagContainer.defaultProps = {}

export default HashtagContainer
