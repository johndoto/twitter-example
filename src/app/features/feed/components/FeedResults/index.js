import React from 'react'
import { useSelector } from 'react-redux'

import { Loading, Linkify, NoResults, HashtagContainer, Hashtag } from 'Patterns'

import './index.scss'

const FeedResults = () => {
  const { searchLoading, tweets } = useSelector(({ feed }) => feed)
  return (
    <div className="feed-results">
      {searchLoading ? (
        <Loading />
      ) : (
        <>
          {Array.isArray(tweets) && tweets.length > 0 ? (
            <>
              {tweets.map((tweet, i) => {
                const even = i % 2 === 0
                const tweetText = tweet?.text || ''
                const hashtags = tweet?.entities?.hashtags || []
                return (
                  <div key={`tweet-${tweet.id}`} className={`tweet ${even ? 'even' : 'odd'}`}>
                    <div className="profile-photo">
                      <img src={tweet.user.profile_image_url} />
                    </div>
                    <div className="tweet-content">
                      <div className="username">@{tweet.user.screen_name}</div>
                      <div className="text">
                        <Linkify id={tweet.id} text={tweetText} />
                      </div>
                      {Array.isArray(hashtags) && hashtags.length > 0 && (
                        <HashtagContainer>
                          {hashtags.map((hashtag, j) => (
                            <Hashtag key={`tweet-${tweet.id}-hashtag-${j}`} text={hashtag.text} />
                          ))}
                        </HashtagContainer>
                      )}
                    </div>
                  </div>
                )
              })}
            </>
          ) : (
            <NoResults text="No tweet results" />
          )}
        </>
      )}
    </div>
  )
}

export default FeedResults
