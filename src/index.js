import React from 'react'
import {renderToString} from 'react-dom/server'
const WPAPI = require('wpapi')

const App = (props) => {
  return (
    <div id="container">
      <LambdaInfo context={props.context} />
      <WPPosts posts={props.posts} />
    </div>
  )
}

const LambdaInfo = (props) => {
    const context = props.context
    return (
        <header>
            <h1>Lambda Info</h1>
            <table>
                <tr><th>invokedFunctionArn</th><td>{context.invokedFunctionArn}</td></tr>
                <tr><th>logGroupName</th><td>{context.logGroupName}</td></tr>
            </table>
        </header>
    )
}

const WPPost = (props) => {
    const post = props.post
    return (
        <archive key={post.id}>
            <h2>{post.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
        </archive>
    )
}

const WPPosts = (props) => {
    const postList = props.posts.map( post => {
        return <WPPost post={post} />
    })
    return (
        <main>
            <h1>WP Postlist</h1>
            {postList}
        </main>
    )
}

function safeStringify(obj) {
  return JSON.stringify(obj)
    .replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}

function renderFullPage(renderedContent, context) {
  context = safeStringify(context)

  return `<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        ${renderedContent}
        <script>
            var props = ${context};
            console.log(props);
        </script>
    </body>
</html>`
}

module.exports.index = (event, context, callback) => {
  const wp = new WPAPI({'endpoint': 'https://api.wp-app.org/wp-json'})

  wp.posts().then((data) => {
    const renderedContent = renderToString(
        <App
            context={context}
            posts={data}
        />
    )
    const renderedPage = renderFullPage(renderedContent, context)

    callback(null, renderedPage)
  })
  .catch((err) => {
    callback(err)
  })
}


module.exports.post = (event, context, callback) => {
  if ( event.path.slug === 'undefined' ) {
      callback(new Error('[404] Not found'))
  }
  const wp = new WPAPI({'endpoint': 'https://api.wp-app.org/wp-json'})

  wp.posts().slug(event.path.slug).then((data) => {
      if ( data.length < 1) {
          throw new Error(`'Post ${event.path.slug} not found'`)
      }
    const renderedContent = renderToString(
        <App
            context={context}
            posts={data}
        />
    )
    const renderedPage = renderFullPage(renderedContent, event)

    callback(null, renderedPage)
  })
  .catch((err) => {
      const renderedPage = renderFullPage('error', err)

      callback(null,renderedPage)
  })
}
