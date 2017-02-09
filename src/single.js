import React from 'react'
const Post = require('./posts/single')

const Single = (props) => {
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

module.exports = Single
