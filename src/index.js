import React from 'react'
import {renderToString} from 'react-dom/server'
import Helmet from 'react-helmet';
const WPAPI = require('wpapi')
const Container = require('./container')
const Archive = require('./archives')
const Single = require('./single')
const site = require('../config/site')
const renderFullPage = require('./lambda/renderFullPage')

module.exports.index = (event, context, callback) => {
  const stage = event.stage
  const api = site.api
  const wp = new WPAPI({'endpoint': api})
  let result = {}
  wp.url(api).get().then(data => {
      result.root = {
        title: data.name,
        description: data.description,
        home: `https://${event.headers.Host}/${stage}`
      }
    return wp.posts()
  }).then(data => {
    const renderedContent = renderToString(
        <Container
            site={result.root}
          >
          <Archive
            posts={data}
            stage={stage}
            />
        </Container>
    )
    let head = Helmet.rewind()
    const renderedPage = renderFullPage(renderedContent, context, head)

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
  const api = site.api
  const wp = new WPAPI({'endpoint': api})
  const stage = event.stage

  let result = {}
  wp.url(api).get().then(data => {
      result.root = {
        title: data.name,
        description: data.description,
        home: `https://${event.headers.Host}/${stage}`
      }
      return wp.posts().slug(event.path.slug)
  }).then(data => {
      const minPostNum = 1;
      if ( data.length < minPostNum) {
          throw new Error(`'[404]:Post ${event.path.slug} not found'`)
      }
    const renderedContent = renderToString(
        <Container
            site={result.root}
          >
          <Single
            context={context}
            posts={data}
            stage={stage}
            />
        </Container>
    )
    let head = Helmet.rewind()
    const renderedPage = renderFullPage(renderedContent, event, head)

    callback(null, renderedPage)
  })
  .catch((err) => {
      callback(err);
  })
}
