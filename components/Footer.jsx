import React from 'react'
import { AiOutlineTwitter, AiFillYoutube, AiOutlineShoppingCart } from 'react-icons/ai';

const urlTwitter = 'https://twitter.com/codeTrackLift'
const urlYoutube = 'https://www.youtube.com/channel/UCVDOFoM5NXYrPoC02lbNJ-Q'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='footer-container'>
      <p style={{fontStyle: 'italic'}}>
        Copyright © {currentYear} <AiOutlineShoppingCart size={25} className='footer-shopping-cart' /> shopByPete
      </p>
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