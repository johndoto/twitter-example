import { call } from 'redux-saga/effects'
import { Search, GET } from './config'

const search = {
  getTweets: ({ search, popular = true, hashtag = '' }) =>
    call(
      GET,
      `${Search}?q=${
        hashtag ? encodeURIComponent(search + ' #' + hashtag) : encodeURIComponent(search)
      }${popular ? `&result_type=popular` : ''}`,
      {}
    ),
  getNextTweets: ({ nextQuery }) => call(GET, `${Search}${nextQuery}`, {})
  // example:
  // next_results: "?max_id=1373621733698240512&q=%40potus&include_entities=1&result_type=popular"
}

export default search
