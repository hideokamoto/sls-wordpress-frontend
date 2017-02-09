import React from 'react'
const PureBlog = require('./lib/purecss_blogs')

const Container = (props) => {
  return (
      <div id="container" className="pure-g">
        <PureBlog />
        <header className="sidebar pure-u-1 pure-u-md-1-4">
          <div className="header" role="presentation">
            <h1 className="brand-title">Serverless React Webapp</h1>
            <p className="brand-tagline">This is example application</p>
            <nav className="nav">
              <ul className="nav-list">
                <li className="nav-item">
                  <a className="pure-button" href="http://purecss.io">Pure</a>
                </li>
                <li className="nav-item">
                  <a className="pure-button" href="http://yuilibrary.com">YUI Library</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div role="presentation" className="content pure-u-1 pure-u-md-3-4">
          {props.children}
        </div>
      </div>
  )
}

module.exports = Container
