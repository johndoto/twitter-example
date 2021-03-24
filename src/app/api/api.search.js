import { call } from 'redux-saga/effects'
import { Search, GET } from './config'

const handleSearchParams = ({ search, hashtag }) =>
  `${hashtag ? encodeURIComponent(search + ' #' + hashtag) : encodeURIComponent(search)}`

const search = {
  getTweets: ({ search, popular = true, hashtag = '', maxId = '', count = '' }) =>
    call(
      GET,
      `${Search}?q=${handleSearchParams({ search, hashtag })}${maxId ? `&max_id=${maxId}` : ''}${
        count ? `&count=${count}` : ''
      }${popular ? `&result_type=popular` : ''}`,
      {}
    )
}

export default search
