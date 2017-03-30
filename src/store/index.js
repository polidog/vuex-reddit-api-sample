import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'
import reddit from '../api/reddit'

Vue.use(Vuex)

const state = {
  isFetching: false,
  lastUpdated: null,
  items: [],
  subreddit: null,
  subreddits: [
    'reactjs',
    'vuejs'
  ]
}

const debug = process.env.NODE_ENV !== 'production'

const getters = {
  getSubreddits: (state) => {
    console.log(state)
    state.subreddits
  }
}

const actions = {
  fetchPost ({ commit, state }, subreddit) {
    if (state.isFetching === false && subreddit.length > 0) {
      commit(types.REQUEST_POSTS)
      reddit.fetchPost(subreddit)
        .then(items => commit(types.RECEIVE_POSTS, items, Date.now(), subreddit))
    }
  }
}

const mutations = {
  [types.REQUEST_POSTS] (state) {
    state.isFetching = true
  },
  [types.RECEIVE_POSTS] (state, items, receivedAt, subreddit) {
    state.items = items
    state.isFetching = false
    state.lastUpdated = receivedAt
    state.subreddit = subreddit
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: debug
})
