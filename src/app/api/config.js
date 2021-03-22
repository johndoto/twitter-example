import axios from 'axios'

// configure defaults:
const axiosDefaults = {
  headers: { 'Content-Type': 'application/json' }
  // withCredentials: true
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
export const twitterApiBase = `https://api.twitter.com/1.1`

export const Search = `${twitterApiBase}/search/tweets.json`
