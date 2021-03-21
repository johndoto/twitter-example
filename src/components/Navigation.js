import React from 'react'
import { Anchor } from './index'

const Navigation = () => (
  <div>
    <ul>
      <li>
        <Anchor to="/">Home</Anchor>
      </li>
      <li>
        <Anchor to="/about">About</Anchor>
      </li>
      <li>
        <Anchor to="/sample">Sample</Anchor>
      </li>
    </ul>
  </div>
)

export default Navigation
