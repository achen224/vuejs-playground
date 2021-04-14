<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="card-slider">
      <transition-group class="card-slider-items">
        <div class="card-slider-item" v-for="item in imgs" :key="item.id">
          <img :src="item.src">
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgs: [
        { id: 1, src: './images/sc/1.jpg' },
        { id: 2, src: './images/sc/2.jpg' },
        { id: 3, src: './images/sc/3.jpg' },
        { id: 4, src: './images/sc/4.jpg' },
        { id: 5, src: './images/sc/5.jpg' }
      ]
    }
  }
}
</script>
