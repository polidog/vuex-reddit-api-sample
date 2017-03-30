<template>
  <span>
    <select @change="fetchPost($event.target.value)">
      <option>--</option>
      <option v-for="subreddit in subreddits" :value="subreddit">
        {{ subreddit }}
      </option>
    </select>
  </span>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'subreddits'
    ])
  },
  methods: {
    fetchPost (subreddit) {
      this.$store.dispatch('fetchPost', subreddit)
    }
  }
}
</script>
