<template>
  <ul>
    <li v-for="item in items">
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      items: state => state.items
    })
  }
}
</script>
