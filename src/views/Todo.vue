<template>
  <div class="todo">
    <h1>This is an todo page</h1>
    <router-link to="/todo" replace>All</router-link>｜
    <router-link to="/todo?filter=active" replace>Active</router-link>｜
    <router-link :to="{ name: 'Todo', query:{ filter: 'done'} }" replace>Done</router-link>｜
    <p>show: {{ filter }}</p>
    <div>{{ list }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      filter: 'all' // all,active,done
    }
  },
  computed: {
    list () {
      return this.$store.getters.filterList(this.filter)
    }
  },
  watch: {
    // $route: function (route) {
    //   // check query
    //   this.filter = route.query.filter || 'all'
    // }
    $route: {
      immediate: true,
      handler: function (route) {
        // check query => redirect
        this.filter = route.query.filter || 'all'
      }
    }
  }
}
</script>
