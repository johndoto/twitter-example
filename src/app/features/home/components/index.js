import React, { Fragment } from 'react'
import { Filters, Feed } from 'Features'
import './index.scss'

export const Home = () => (
  <>
    <h2>Twitter Example</h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, eius! Sequi ut officiis
      laborum non quisquam laudantium modi iste commodi beatae voluptates id, pariatur blanditiis
      consectetur quae voluptate laboriosam possimus?
    </p>
    <Filters />
    <Feed />
  </>
)

export default Home
