import React from 'react'
import Helmet from "react-helmet"
const Title = require('./wp_posts/title')
const Content = require('./wp_posts/content')

const Single = (props) => {
    const postList = props.posts.map( post => {
        return (
            <div key={post.id} role="presentation">
              <Helmet
                title={post.title.rendered}
                />
              <Title>{post.title.rendered}</Title>
              <Content>{post.content.rendered}</Content>
            </div>
        )
    })
    return (
        <main>
            {postList}
        </main>
    )
}

module.exports = Single
