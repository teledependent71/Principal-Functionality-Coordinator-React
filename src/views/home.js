import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Principal Functionality Coordinator</title>
        <meta
          property="og:title"
          content="Principal Functionality Coordinator"
        />
      </Helmet>
    </div>
  )
}

export default Home
