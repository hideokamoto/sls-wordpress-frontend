"use strict";
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
  // AMD
  define([], factory);
  } else if (typeof exports === 'object') {
  // commonjs
  module.exports = factory();
  }
})(this, function () {

  function safeStringify(obj) {
    return JSON.stringify(obj)
    .replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
  }

  function renderFullPage(renderedContent, context, head) {
    context = safeStringify(context)

    return `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://unpkg.com/purecss@0.6.2/build/pure-min.css" integrity="sha384-UQiGfs9ICog+LwheBSRCt1o5cbyKIHbwjWscjemyBMT9YCUMZffs6UqUTd0hObXD" crossorigin="anonymous">
      <link rel="stylesheet" href="https://unpkg.com/purecss@0.6.2/build/grids-responsive-min.css">
      ${head.style}
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
  return renderFullPage;
});
