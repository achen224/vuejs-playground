<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="change(now-1)">Prev</button>
    <button @click="change(now+1)">Next</button>
    <div class="card-slider">
      <transition-group class="card-slider-items" name="flip-list">
        <div class="card-slider-item" v-for="item in showImages" :key="item.id" :data-id="item.id">
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
      now: 0,
      imgs: [
        { id: 1, src: './images/sc/1.jpg' },
        { id: 2, src: './images/sc/2.jpg' },
        { id: 3, src: './images/sc/3.jpg' },
        { id: 4, src: './images/sc/4.jpg' },
        { id: 5, src: './images/sc/5.jpg' }
      ]
    }
  },
  computed: {
    allImages () {
      // 5 + 4
      const ary = []
      const total = this.imgs.length
      let count
      if (total > 0) {
        while (ary.length < 5 + 4) {
          count = Math.floor(ary.length / total)
          for (let i = 0; i < total; i++) {
            ary.push({ id: count + '-' + this.imgs[i].id, src: this.imgs[i].src })
            console.log(count + '-' + this.imgs[i].id)
          }
        }
      }
      return ary
    },
    showImages () {
      const start = this.now - 4
      return this.allImages.slice(start).concat(this.allImages.slice(0, start))
    }
  },
  methods: {
    change (index) {
      const limit = this.allImages.length - 1
      this.now = index < 0 ? limit : index > limit ? 0 : index
      // if (index < 0) {
      //   this.now = limit
      // } else if (index > limit) {
      //   this.now = 0
      // } else {
      //   this.now = index
      // }
    }
  }
}
</script>

<style scoped>

.card-slider{
  display: flex;
  width: 100%;
  overflow: hidden;
}
.card-slider-items{
  display: flex;
  width: 100%;
  margin-left: calc(-1 * 25% * 2.5);
}
.card-slider-item{
  z-index: 1;
  flex: calc(25% - 20px) 0 0;
  margin: 10px;
  background-color: #eee;
}
.card-slider-item:first-child,.card-slider-item:last-child{
  z-index: -1;
  visibility: hidden;
}

img{
  width: 100%;
}

.flip-list-move {
  transition: transform 0.5s;
}
</style>
