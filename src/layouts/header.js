import React from 'react'
const Mikan = require('../lib/mikan')
const HeaderNav = require('./header-nav')
const Header = (props) => {
  const title = Mikan(props.children)

  return (
      <header className="sidebar pure-u-1 pure-u-md-1-4">
        <div className="header" role="presentation">
          <h1 className="brand-title">Serverless React Webapp</h1>
          <p className="brand-tagline">This is example application</p>
          <HeaderNav />
        </div>
      </header>
  )
}

module.exports = Header
