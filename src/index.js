import React, {Component} from 'react'
import {renderToString} from 'react-dom/server'
const WPAPI = require('wpapi')

const App = () => {
  return (
    <div id="container">
      <LambdaInfo context={this.props.context} />
      <WPPosts posts={this.props.posts} />
    </div>
  )
}

class LambdaInfo extends Component {
    constructor(props, context){
        super(props)
    }
    render() {
        const context = this.props.context
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
}

class WPPost extends Component {
    constructor(props, context) {
        super(props)
    }
    render() {
        const post = this.props.post
        return (
            <archive key={post.id}>
                <h2>{post.title.rendered}</h2>
                <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
            </archive>
        )
    }
}

class WPPosts extends Component {
    constructor(props, context) {
        super(props)
    }
    render() {
        const postList = this.props.posts.map( post => {
            return <WPPost post={post} />
        })
        return (
            <main>
                <h1>WP Postlist</h1>
                {postList}
            </main>
        )
    }
}

function safeStringify(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}

function renderFullPage(renderedContent, context) {
  context = safeStringify(context)
  return `<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500' rel='stylesheet' type='text/css'>
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
  const wp = new WPAPI({endpoint: 'https://api.wp-app.org/wp-json'})
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
