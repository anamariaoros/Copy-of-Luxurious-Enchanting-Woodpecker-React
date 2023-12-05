import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Copy of Luxurious Enchanting Woodpecker</title>
        <meta
          property="og:title"
          content="Page - Copy of Luxurious Enchanting Woodpecker"
        />
      </Helmet>
      <span>Text</span>
      <ul className="list">
        <li className="list-item">
          <span>Text</span>
        </li>
        <li className="list-item">
          <span>Text</span>
        </li>
        <li className="list-item">
          <span>Text</span>
        </li>
      </ul>
      <img alt="image" src="/1-200h.png" className="page-image" />
      <img alt="image" src="/1-200h.png" className="page-image1" />
      <img
        src="https://images.unsplash.com/photo-1701475391252-2d3f3f03db41?ixid=M3w5MTMyMXwwfDF8YWxsfDJ8fHx8fHwyfHwxNzAxNzY4ODExfA&amp;ixlib=rb-4.0.3&amp;w=200"
        alt="image"
        className="page-image2"
      />
      <img
        src="https://images.unsplash.com/photo-1701519664310-f5fa33f5062f?ixid=M3w5MTMyMXwwfDF8YWxsfDEzfHx8fHx8Mnx8MTcwMTc2ODgxMXw&amp;ixlib=rb-4.0.3&amp;w=200"
        alt="image"
        className="page-image3"
      />
    </div>
  )
}

export default Page
