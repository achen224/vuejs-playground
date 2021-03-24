<template>
    <div>
        <transition-group tag="div" class="container" :name="transitionName">
            <div class="page" v-for="(img,index) of imgs" :key="index" v-show="index === show">
                <img :src="img.src">
            </div>
        </transition-group>
        <button @click="setShow(show-1)">←</button>
        <span>
            <button v-for="num in imgs.length" :key="num-1" @click="setShow(num-1)">{{num}}</button>
        </span>
        <button @click="setShow(show+1)">→</button>
    </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
let timer
const interval = 5000
export default {
  data () {
    return {
      transitionName: 'left-in',
      show: 0,
      imgs: [
        { src: './images/sc/1.jpg' },
        { src: './images/sc/2.jpg' },
        { src: './images/sc/3.jpg' },
        { src: './images/sc/4.jpg' },
        { src: './images/sc/5.jpg' }
      ]
    }
  },
  mounted () {
    timer = setInterval(this.nextShow, interval)
  },
  methods: {
    setShow (index) {
      this.show = index
    },
    nextShow () {
      this.show++
    }
  },
  watch: {
    show (nVal, oVal) {
      if (nVal < 0) {
        this.show = this.imgs.length - 1
      } else if (nVal > this.imgs.length - 1) {
        this.show = 0
      } else {
        if (oVal < 0) this.transitionName = 'left-in'
        else if (oVal > this.imgs.length - 1) this.transitionName = 'right-in'
        else this.transitionName = nVal > oVal ? 'right-in' : 'left-in'
      }
    }
  }
}
</script>

<style scoped>
    .right-in-enter{
        left:100%
    }
    .right-in-enter-active,.right-in-leave-active{
        transition: left 0.5s;
    }
    .right-in-enter-to,.right-in-leave{
        left:0%
    }
    .right-in-leave-to{
        left:-100%
    }
    .left-in-enter{
        left:-100%
    }
    .left-in-enter-active,.left-in-leave-active{
        transition: left 0.5s;
    }
    .left-in-enter-to,.left-in-leave{
        left:0%
    }
    .left-in-leave-to{
        left:100%
    }
    .container{
        position: relative;
        width: 320px;
        height: 480px;
        margin: 0 auto;
        overflow: hidden;
    }
    .page{
        position: absolute;
        width: 320px;
        height: 480px;
    }
</style>
