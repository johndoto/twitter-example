import { call } from 'redux-saga/effects'
import { Search, GET } from './config'

const search = {
  getTweets: (searchText) => call(GET, `${Search}?searchText=${searchText}`, {})
}

export default search
