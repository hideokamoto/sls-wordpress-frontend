import React from 'react'
const PostTitle = require('./title')

const Post = (props) => {
  const post = props.post
  const stage = props.stage
  const link = `${stage}/blog/${post.slug}`
  return (
      <archive key={post.id} className="post">
          <a href={link} className="post-header">
              <PostTitle>{post.title.rendered}</PostTitle>
          </a>
          <div className="post-description" dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
      </archive>
  )
}
module.exports = Post
