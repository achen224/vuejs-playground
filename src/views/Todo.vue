<template>
  <div class="todo">
    <h1>This is an todo page</h1>
    <router-link to="/todo" replace>All</router-link>｜
    <router-link to="/todo?filter=active" replace>Active</router-link>｜
    <router-link :to="{ name: 'Todo', query:{ filter: 'done'} }" replace>Done</router-link>
    <!-- <p>show: {{ filter }}</p>
    <div>{{ list }}</div> -->
    <ul>
      <!-- <li v-for="item of list" :key="item.tid+''+item.todo.content">
        <template v-if="edit!==item.tId">
          <input type="checkbox" v-model="item.todo.done">{{ item.todo.content }}
        </template>
        <template v-else>
          <input type="text" v-model="item.todo.content">
        </template>
      </li> -->
      <TodoItem
        v-for="item of list"
        :key="item.tId+''+item.todo.content"
        :todo="item.todo"
        :edit="item.tId===edit"
        @check="value => checkHandler(item.tId,value)"
        @editThis="edit = item.tId"
        @editComplete="value => editCompleteHandler(item.tId,value)"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from '../components/TodoItem'
export default {
  data () {
    return {
      filter: 'all', // all,active,done
      edit: null
    }
  },
  mounted () {
    this.$store.dispatch('READ_TODOS')
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
        this.edit = null
        // check query => redirect
        this.filter = route.query.filter || 'all'
      }
    }
  },
  methods: {
    checkHandler (tId, done) {
      this.$store.dispatch('CHECK_TODO', { tId, done })
    },
    editCompleteHandler (tId, content) {
      this.edit = null
      this.$store.dispatch('UPDATE_TODO', { tId, content })
    }
  },
  components: {
    TodoItem
  }
}
</script>

<style scoped>

.todo a{
  color: black;
  text-decoration: none;
}
.todo .router-link-exact-active{
  color: green;
  font-weight: bold;
}

</style>
