import React from 'react'
import { AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai';

const urlTwitter = 'https://twitter.com/codeTrackLift'
const urlYoutube = 'https://www.youtube.com/channel/UCVDOFoM5NXYrPoC02lbNJ-Q'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 E-commerce Store</p>
      <p className='icons'>
        <a href={urlYoutube} target='_blank' rel='noreferrer'>
          <AiFillYoutube />
        </a>
        <a href={urlTwitter} target='_blank' rel='noreferrer'>
          <AiOutlineTwitter />
        </a>
      </p>
    </div>
  )
}

export default Footer