import React from 'react'
import { FeedSearch, FilterHashtag, FeedResults } from 'Features'
import './index.scss'

const Home = () => (
  <div className="home-layout">
    <FeedSearch />
    <FilterHashtag />
    <FeedResults />
  </div>
)

export default Home
