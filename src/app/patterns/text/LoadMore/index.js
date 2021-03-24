import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const LoadMore = ({ onClick }) => (
  <div className="load-more" onClick={onClick}>
    <h4>Load More</h4>
  </div>
)

LoadMore.propTypes = {
  onClick: PropTypes.func.isRequired
}

LoadMore.defaultProps = {}

export default LoadMore
