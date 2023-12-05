import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Home - Copy of Luxurious Enchanting Woodpecker</title>
        <meta
          property="og:title"
          content="Home - Copy of Luxurious Enchanting Woodpecker"
        />
      </Helmet>
      <a href="https://example.com" target="_blank" rel="noreferrer noopener">
        Link
      </a>
      <img
        alt="image"
        src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
        className="home-image"
      />
      <img
        alt="image"
        src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
        className="home-image1"
      />
    </div>
  )
}

export default Home
