// /**
//  *
//     Fetching Posts - Write functions for fetching posts from the API.
//     - Use async/await for handling asynchronous operations.
//     - Use fetch with async/await to get posts
//     from https://jsonplaceholder.typicode.com/posts.
//     - Display these posts in the application.
//     Adding a New Post
//     - Capture user input for the new post title and body.
//     - Implement a function called addPost function to add new posts using the API.
//     - Use fetch with a POST request to send this data to the API.
//     - Manipulate the DOM to reflect changes (addition of posts).
//     - Update the UI to include the new post without reloading the page.

//  */

const form = document.querySelector('#post-form')
const postTitle = document.querySelector('#new-post-title')
const textArea = document.querySelector('#new-post-body')
const addPostButton = document.querySelector('#add-post')
const contentContainer = document.querySelector('#posts')
const BASE_URL = `https://jsonplaceholder.typicode.com/posts`

function createPost(item) {
    const el = document.createElement('div')
    el.innerHTML = `<h2>${item.title}</h2>
                     <p>${item.body}</p>`
    return el
}

async function fetchingPosts() {
    const result = await fetch(BASE_URL)
    const data = await result.json()
    data.forEach((item) => {
        const el = createPost(item)
        contentContainer.appendChild(el)
    })
}

async function addPost(e) {
    e.preventDefault()
    const headers = new Headers({ 'content-type': 'application/json' })
    const postContent = textArea.value
    const postHeader = postTitle.value
    try {
        const result = await fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify({
                body: postContent,
                title: postHeader,
                userId: 1,
            }),
            headers,
        })
        if (result.ok) {
            const newPost = await result.json()
            const newEl = createPost(newPost)
            contentContainer.innerHTML =
                newEl.innerHTML + contentContainer.innerHTML
        } else {
            // throw new Error(`error: ${}`)
            console.dir(result)
        }
    } catch (e) {
        console.log(e)
    }
}

form.addEventListener('submit', addPost)
fetchingPosts()
