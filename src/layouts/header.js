import React from 'react'
const Mikan = require('../lib/mikan')
const HeaderNav = require('./header-nav')
const Header = (props) => {
  const title = Mikan(props.site.title)
  const description = Mikan(props.site.description)
  const home = props.site.home
  return (
      <header className="sidebar pure-u-1 pure-u-md-1-4">
        <div className="header" role="presentation">
          <h1 className="brand-title">
            <a
              href={home}
              dangerouslySetInnerHTML={{'__html': title}}
            />
          </h1>
          <p
            className="brand-tagline"
            dangerouslySetInnerHTML={{'__html': description}}
          />
          <HeaderNav />
        </div>
      </header>
  )
}

module.exports = Header
