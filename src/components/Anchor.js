import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Anchor = ({ to, children, type }) => (
  <>
    {type === 'default' ? (
      <Link to={to}>{children}</Link>
    ) : (
      <a href={to} rel="noopener noreferrer" target="_blank">
        {children}
      </a>
    )}
  </>
)

Anchor.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
  type: PropTypes.oneOf(['default', 'external'])
}

Anchor.defaultProps = {
  children: null,
  type: 'default'
}

export default Anchor
