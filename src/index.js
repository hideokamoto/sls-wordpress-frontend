'use strict';
const WPAPI = require( 'wpapi' );

function renderFullPage(renderedContent, data) {
    data = safeStringify(data)
  return `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500' rel='stylesheet' type='text/css'>
	</head>
	<body>
		<div id="container">${renderedContent}</div>
        <script>
            var props = ${data};
            console.log(props);
        </script>
	</body>
</html>`;
}
function safeStringify(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');
}

function createListHtml(data) {
    let html = "<main>";
    for (var i = 0; i < data.length; i++) {
        html += "<article>"
        html += "<h1>" + data[i].title.rendered  + "</h1>";
        html += data[i].excerpt.rendered;
        html += "</article>";
    }
    html += '</main>';
    return html
}

module.exports.index = (event, context, callback) => {
    const wp = new WPAPI({ endpoint: 'http://wp-kyoto.net/wp-json' });
    wp.posts().then(function( data ) {
      const renderedContent = createListHtml(data)
      const renderedPage = renderFullPage( renderedContent, data );
      callback(null, renderedPage);
    }).catch(function( err ) {
        callback(err);
    });
};
