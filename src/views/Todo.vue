<template>
  <div class="todo">
    <h1>This is an todo page</h1>
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
  }
}
</script>
