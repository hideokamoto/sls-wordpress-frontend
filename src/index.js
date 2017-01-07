import React from 'react'
import {renderToString} from 'react-dom/server'
const WPAPI = require('wpapi')
const PostList = require('./posts/list')
const LambdaInfo = require('./lambda')

const App = (props) => {
  return (
      <div id="container">
          <LambdaInfo context={props.context} />
          <PostList posts={props.posts} />
      </div>
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
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://unpkg.com/purecss@0.6.1/build/pure-min.css" integrity="sha384-CCTZv2q9I9m3UOxRLaJneXrrqKwUNOzZ6NGEUMwHtShDJ+nCoiXJCAgi05KfkLGY" crossorigin="anonymous">
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
      const minPostNum = 1;
      if ( data.length < minPostNum) {
          throw new Error(`'[404]:Post ${event.path.slug} not found'`)
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
      callback(err);
  })
}
