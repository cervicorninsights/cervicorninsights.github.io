document.addEventListener("DOMContentLoaded", function() {
    const postForm = document.getElementById('postForm');
    const postsDiv = document.getElementById('posts');

    postForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        fetch('/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, content })
        })
        .then(response => response.json())
        .then(post => {
            const article = document.createElement('article');
            article.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
            postsDiv.prepend(article);
            postForm.reset();
        });
    });

    fetch('/posts')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const article = document.createElement('article');
                article.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
                postsDiv.appendChild(article);
            });
        });
});
