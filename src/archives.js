import React from 'react'
const Title = require('./wp_posts/title')
const Excerpt = require('./wp_posts/excerpt')

const Archive = (props) => {
    const stage = props.stage
    const postList = props.posts.map( post => {
        const link = `/${stage}/blog/${post.slug}`
        return (
            <div key={post.id} role="presentation">
              <a href={link} className="post-header">
                <Title>{post.title.rendered}</Title>
              </a>
              <Excerpt>{post.excerpt.rendered}</Excerpt>
            </div>
        )
    })
    return (
        <main>
            {postList}
        </main>
    )
}

module.exports = Archive
