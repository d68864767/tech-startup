// Array of blog posts
let blogPosts = [
    {
        title: "Post 1",
        image: "post1.jpg",
        content: "This is the content for post 1.",
        date: "01-01-2022"
    },
    {
        title: "Post 2",
        image: "post2.jpg",
        content: "This is the content for post 2.",
        date: "02-01-2022"
    },
    // Add more blog posts as needed
];

// Function to create a blog post
function createBlogPost(post) {
    // Create elements
    let postDiv = document.createElement('div');
    let title = document.createElement('h2');
    let image = document.createElement('img');
    let content = document.createElement('p');
    let date = document.createElement('p');

    // Add classes for styling
    postDiv.classList.add('blog-post');
    title.classList.add('blog-title');
    image.classList.add('blog-image');
    content.classList.add('blog-content');
    date.classList.add('blog-date');

    // Set content
    title.textContent = post.title;
    image.src = post.image;
    content.textContent = post.content;
    date.textContent = post.date;

    // Append elements
    postDiv.appendChild(title);
    postDiv.appendChild(image);
    postDiv.appendChild(content);
    postDiv.appendChild(date);

    return postDiv;
}

// Function to initialize blog
function initBlog() {
    // Get blog section
    let blogSection = document.getElementById('blog');

    // Create and append blog posts
    for (let post of blogPosts) {
        let blogPost = createBlogPost(post);
        blogSection.appendChild(blogPost);
    }
}

// Call initBlog function
initBlog();
