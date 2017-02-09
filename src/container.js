import React from 'react'
const PostList = require('./posts/list')

const Container = (props) => {
  return (
      <div id="container">
          <PostList
            posts={props.posts}
            stage={props.stage}
            />
      </div>
  )
}

module.exports = Container
