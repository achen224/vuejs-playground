<template>
      <li>
        <template v-if="!edit">
          <input type="checkbox" v-model="done">{{ todo.content }}
          <button @click="$emit('editThis')">編輯</button>
        </template>
        <template v-else>
          <input type="text" v-model="editContent" v-focus="editContent">
          <button @click="$emit('editComplete',editContent)">完成</button>
        </template>
      </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    edit: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      editContent: ''
    }
  },
  mounted () {
    this.editContent = this.todo.content
  },
  computed: {
    // content: {
    //   get () {
    //     return this.todo.content
    //   },
    //   set (value) {
    //     this.editContent = value
    //   }
    // },
    done: {
      get () {
        return this.todo.done
      },
      set (value) {
        this.$emit('check', value)
      }
    }
  }
//   data () {
//     return {
//       editingTodo: {
//         content: '',
//         done: false
//       }
//     }
//   },
//   mounted () {
//     this.editingTodo.content = this.todo.content
//     this.editingTodo.done = this.todo.done
//   }
}
</script>
