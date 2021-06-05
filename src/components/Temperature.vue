<template>
  <div class="flex xl:flex-col xl:items-start sm:flex-col items-center justify-center flex-row">
    <div class="flex sm:flex-row flex-col items-center xl:p-5 p-1">
      <img class="sm:w-48 w-36 h-auto sm:m-0 -m-8" :src="getImage(temperature.icon)" alt="" />

      <div class="flex flex-col ml-2">
        <span class="text-white font-bold sm:text-7xl text-5xl antialiased">{{ temperature.temperature }}&#176;C</span>
        <span class="ml-3 mt-2 text-white font-medium">
          <box-icon class="align-middle" color="white" type="solid" name="up-arrow-alt"></box-icon>
          {{ temperature.maxTemp }}&#176;C
          <box-icon class="align-middle" color="white" name="down-arrow-alt" type="solid"></box-icon>
          {{ temperature.minTemp }}&#176;C
        </span>
        <p class="ml-4 text-gray-50 font-medium">
          {{ temperature.desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Temperature',
  props: {
    temperature: {
      type: Object,
    },
  },
  methods: {
    getImage(icon) {
      return 'https://openweathermap.org/img/wn/' + icon + '@4x.png'
    },
  },
}
</script>
