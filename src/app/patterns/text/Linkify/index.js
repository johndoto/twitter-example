import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { Anchor } from 'Patterns'

const urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi

const Linkify = ({ id, text }) => {
  const parts = text.split(urlRegex)
  return parts.map((str, i) =>
    str.match(urlRegex) ? (
      <Anchor key={`tweet-${id}-text-fragment-${i}`} to={str} type="external">
        {str}
      </Anchor>
    ) : (
      <Fragment key={`tweet-${id}-text-fragment-${i}`}>{str}</Fragment>
    )
  )
}

Linkify.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  text: PropTypes.string.isRequired
}

Linkify.defaultProps = {}

export default Linkify
