import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import debounce from 'lodash.debounce'

import { GET_TWEETS } from '../../redux/ducks'
import './index.scss'

const FeedSearch = () => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')

  const debounceTime = 750
  const debouncedDispatch = useCallback(
    debounce(
      (nextValue) => dispatch({ type: GET_TWEETS, payload: { search: nextValue } }),
      debounceTime
    ),
    []
  )

  const handleChange = (event) => {
    const { value: nextValue } = event.target
    setSearch(nextValue)
    debouncedDispatch(nextValue)
  }

  return (
    <div className="feed-search">
      <h3>Tweet Feed</h3>
      <input type="text" value={search} onChange={handleChange} />
    </div>
  )
}

export default FeedSearch
