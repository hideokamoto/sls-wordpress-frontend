import React from 'react'

const Mikan = require('../lib/mikan')
const HeaderNav = (props) => {
  const title = Mikan(props.children)

  return (
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
  )
}

module.exports = HeaderNav
