import React from 'react'
const PureBlog = require('./lib/purecss_blogs')

const Container = (props) => {
  return (
      <div id="container">
          <PureBlog />
          {props.children}
      </div>
  )
}

module.exports = Container
