import axios from 'axios'

// configure defaults:
const axiosDefaults = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAAI4OHgEAAAAAlbk0HSIAqcc3havrrU9j2NeAQ34%3DzJmzwHuQerd8JJ2TeuHfqwKgBt6bK4tk93w3ocBB2vPuKMF3cG`
  }
}
const axiosConfig = axios.create({
  ...axiosDefaults
})

// Methods
export const GET = axiosConfig.get
export const PUT = axiosConfig.put
export const POST = axiosConfig.post
export const PATCH = axiosConfig.patch
export const DELETE = axiosConfig.delete

// Definitions
// export const twitterApiBase = `https://api.twitter.com/1.1`
export const twitterApiBase = `http://localhost:8080`

export const Search = `${twitterApiBase}/search/tweets.json`
