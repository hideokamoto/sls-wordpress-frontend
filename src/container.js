import React from 'react'
const PureBlog = require('./lib/purecss_blogs')
const Header = require('./layouts/header')

const Container = (props) => {
  return (
      <div id="container" className="pure-g">
        <PureBlog />
        <Header />
        <div role="presentation" className="content pure-u-1 pure-u-md-3-4">
          {props.children}
        </div>
      </div>
  )
}

module.exports = Container
