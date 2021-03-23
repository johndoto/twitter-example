import { array } from 'prop-types'
import React from 'react'
import { useSelector } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFrown } from '@fortawesome/free-regular-svg-icons'

import './index.scss'

const FeedResults = () => {
  const tweets = useSelector(({ feed: { tweets } }) => tweets)
  return (
    <div className="feed-results">
      {Array.isArray(tweets) && tweets.length > 0 ? (
        <>
          {tweets.map((tweet, i) => {
            const tweetText = tweet.text.split('…')[0]
            const tweetLink = tweet.text.split('…')[1]
            const even = i % 2 === 0
            return (
              <div key={`tweet-${tweet.id}`} className={`tweet ${even ? 'even' : 'odd'}`}>
                <div className="profile-photo">
                  <img src={tweet.user.profile_image_url} />
                </div>
                <div className="tweet-content">
                  <div className="username">@{tweet.user.screen_name}</div>
                  <div className="text">{tweetText}…</div>
                  <a className="link" href={tweetLink} target="_blank" rel="noreferrer noopener">
                    {tweetLink}
                  </a>
                  <div className="hashtags">
                    {tweet?.entities?.hashtags.map((hashtag, j) => (
                      <div key={`tweet-${tweet.id}-hashtag-${j}`} className="hashtag">
                        #{hashtag.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </>
      ) : (
        <div className="no-results">
          No Results <FontAwesomeIcon icon={faFrown} />
        </div>
      )}
    </div>
  )
}

export default FeedResults
