import React, { Fragment } from 'react'
import { Anchor } from '../components'
import dog from '../assets/images/dog.png'

const About = () => (
  <Fragment>
    <p>
      The main contributors are alicoding (
      <Anchor to="https://github.com/alicoding">https://github.com/alicoding</Anchor>) and pgerochi
      (<Anchor to="https://github.com/pgerochi">https://github.com/pgerochi</Anchor>)
    </p>
    Random photo of my dog. <img src={dog} className="small-img" />
  </Fragment>
)

export default About
