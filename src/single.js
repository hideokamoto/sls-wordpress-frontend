import React from 'react'
const Title = require('./wp_posts/title')
const Content = require('./wp_posts/content')

const Single = (props) => {
    const postList = props.posts.map( post => {
        return (
            <div key={post.id}>
              <Title>{post.title.rendered}</Title>
              <Content>{post.content.rendered}</Content>
            </div>
        )
    })
    return (
        <main>
            <h1>WP Postlist</h1>
            {postList}
        </main>
    )
}

module.exports = Single