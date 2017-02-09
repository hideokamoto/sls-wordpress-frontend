import React from 'react'
import {renderToString} from 'react-dom/server'
const WPAPI = require('wpapi')
const Container = require('./container')
const Archive = require('./archives')
const Single = require('./single')
const renderFullPage = require('./lambda/renderFullPage')

module.exports.index = (event, context, callback) => {
  const stage = event.stage
  const wp = new WPAPI({'endpoint': 'https://api.wp-app.org/wp-json'})

  wp.posts().then((data) => {
    const renderedContent = renderToString(
        <Container>
          <Archive
            context={context}
            posts={data}
            stage={stage}
            />
        </Container>
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
  const stage = event.stage

  wp.posts().slug(event.path.slug).then((data) => {
      const minPostNum = 1;
      if ( data.length < minPostNum) {
          throw new Error(`'[404]:Post ${event.path.slug} not found'`)
      }
    const renderedContent = renderToString(
        <Container>
          <Single
            context={context}
            posts={data}
            stage={stage}
            />
        </Container>
    )
    const renderedPage = renderFullPage(renderedContent, event)

    callback(null, renderedPage)
  })
  .catch((err) => {
      callback(err);
  })
}
