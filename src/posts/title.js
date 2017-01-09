import React from 'react'

const Mikan = require('../lib/mikan')
const PostTitle = (props) => {
  const title = Mikan(props.children)

  return (
      <h2
          className="post-title"
          dangerouslySetInnerHTML={{'__html': title}}
      />
  )
}

module.exports = PostTitle
