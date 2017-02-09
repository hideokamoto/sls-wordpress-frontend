import React from 'react'
const PostList = require('./posts/list')

const Container = (props) => {
  return (
      <div id="container">
          {props.children}
      </div>
  )
}

module.exports = Container
