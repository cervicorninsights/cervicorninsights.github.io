document.addEventListener("DOMContentLoaded", function() {
    fetch('posts/example-post.md')
        .then(response => response.text())
        .then(data => {
            const content = document.getElementById('content');
            const article = document.createElement('article');
            article.innerHTML = marked(data);
            content.appendChild(article);
        });
});
4. server.js
This is a simple Node.js server to serve the static files.

JavaScript
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('.'));

app.listen(port, () => {
    console.log(`Blogging website running at http://localhost:${port}`);
});
5. package.json
This file contains the dependencies for the Node.js server.

JSON
{
  "name": "blogging-website",
  "version": "1.0.0",
  "description": "A simple blogging website",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.17.1",
    "marked": "^4.0.0"
  }
}
