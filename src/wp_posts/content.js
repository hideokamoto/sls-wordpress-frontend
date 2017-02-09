import React from 'react'

const PostContent = (props) => {
  const content = props.children
  return (
      <div
        className="post-description"
        dangerouslySetInnerHTML={{__html: content}}
        />
  )
}
module.exports = PostContent
