const API_BASE_URL = 'https://www.reddit.com/r'

const createJsonUri = (subreddit) => {
  return `${API_BASE_URL}/${subreddit}.json`
}

const receivePosts = (json) => {
  return json.data.children.map(child => child.data)
}

export default {
  fetchPost (subreddit) {
    let url = createJsonUri(subreddit)
    console.log(url)
    return fetch(url)
      .then(response => response.json())
      .then(json => receivePosts(json))
  }
}
