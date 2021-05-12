<template>
  <div class="about">
    <h1>This is an Post Number page</h1>
    <template v-if="disSelect !== null">
      {{ districts[disSelect].zip }}
    </template>
    <select v-model="citySelect">
      <option :value="null">請選擇</option>
      <option v-for="(city,index) of cities" :value="index" :key="city">{{ city }}</option>
    </select>
    <select v-model="disSelect">
      <option :value="null">請選擇</option>
      <!-- <option v-for="dis of districts" :value="dis.zip" :key="dis.name">{{ dis.name }}</option> -->
      <option v-for="(dis,index) of districts" :value="index" :key="dis.name">{{ dis.name }}</option>
    </select>
  </div>
</template>

<script>
const postDataCH = require('@/assets/post.json')
const postDataEN = require('@/assets/postEN.json')
export default {
  data () {
    return {
      lang: 0, // 0=> 中文,1=>英文
      citySelect: null,
      disSelect: null
    }
  },
  computed: {
    postData () {
      return this.lang === 0 ? postDataCH : postDataEN
    },
    // cityComputed: {
    //   get () {
    //     return this.citySelect
    //   },
    //   set (val) {
    //     this.citySelect = val
    //     // this.disSelect = null
    //     if (this.disSelect >= postData[val].districts.length) this.disSelect = 0
    //   }
    // },
    cities () {
      return this.postData.map((item) => {
        return item.name
      })
    },
    districts () {
      let districts = []
      if (this.citySelect !== null) {
        districts = this.postData[this.citySelect].districts
      }
      return districts
    }
  },
  watch: {
    citySelect (nVal, oVal) {
      // this.disSelect = null
      if (this.disSelect >= this.postData[this.citySelect].districts.length) this.disSelect = 0
    }
  }
}
</script>
