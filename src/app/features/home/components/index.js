import React from 'react'
import { FeedSearch, FeedHashtags, FeedResults } from 'Features'
import './index.scss'

const Home = () => (
  <div className="home-layout">
    <FeedSearch />
    <FeedHashtags />
    <FeedResults />
  </div>
)

export default Home
