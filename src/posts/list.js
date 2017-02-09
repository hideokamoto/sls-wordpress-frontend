import React from 'react'
const Post = require('./single')

const PostList = (props) => {
    const postList = props.posts.map( post => {
        return <Post post={post} stage={props.stage}/>
    })
    return (
        <main>
            <h1>WP Postlist</h1>
            {postList}
        </main>
    )
}

module.exports = PostList
