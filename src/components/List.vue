<template>
  <ul class="flex flex-row items-center overflow-x-scroll overscroll-x-auto overflow-y-hidden px-6">
    <li v-for="(data, index) in list" :key="index" class="min-h-max min-w-max flex flex-col items-center rounded-xl box-border bg-gray-100 bg-opacity-5 backdrop-filter backdrop-blur-sm p-2 mx-4">
      <img :src="getImage(data.icon)" alt="" class="w-36" />
      <span class="text-white font-bold text-3xl">{{ data.temperature }}&#176;C</span>
      <p class="text-white font-medium">{{ this.getTime(data.time) }}</p>
      <p class="text-white font-medium">{{ this.getDate(data.time) }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'List',
  props: {
    list: {
      type: Object,
    },
  },
  methods: {
    getImage(icon) {
      return 'https://openweathermap.org/img/wn/' + icon + '@4x.png'
    },
    getTime(date) {
      var time = new Date(date * 1000)

      return time.getHours() + ':' + time.getMinutes() + 0
    },
    getDate(date) {
      var time = new Date(date * 1000)

      return time.getDate() + '.' + (time.getMonth() + 1) + '.' + time.getFullYear()
    },
  },
}
</script>
