import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Loading, NoResults, HashtagContainer, Hashtag } from 'Patterns'

import { GET_TWEETS } from '../../redux/ducks'
import './index.scss'

const FeedHashtags = () => {
  const dispatch = useDispatch()
  const { search, searchLoading, hashtags } = useSelector(({ feed }) => feed)
  return (
    <div className="feed-hashtags">
      <h3>Filter by hashtag</h3>
      {searchLoading ? (
        <Loading />
      ) : (
        <HashtagContainer>
          {Array.isArray(hashtags) && hashtags.length > 0 ? (
            <>
              {hashtags.map((hashtag, i) => (
                <Hashtag
                  key={`hashtag-${i}`}
                  text={hashtag}
                  onClick={() => dispatch({ type: GET_TWEETS, payload: { search, hashtag } })}
                />
              ))}
            </>
          ) : (
            <NoResults text="No hashtags" />
          )}
        </HashtagContainer>
      )}
    </div>
  )
}

export default FeedHashtags
