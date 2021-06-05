<template>
  <div class="w-full h-full xl:w-11/12 xl:h-5/6 p-4 rounded-2xl grid xl:grid-rows-2 xl:grid-cols-2 grid-cols-1 grid-rows-4 shadow-md bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm">
    <Temperature v-bind:temperature="current" class="h-full w-full" />
    <Info v-bind:info="info" class="h-full w-full" />
    <List v-bind:list="hours" class="h-full w-full xl:col-span-2 col-span-full row-span-2" />
  </div>
</template>

<script>
import Temperature from './Temperature.vue'
import List from './List.vue'
import Info from './Info.vue'

import axios from 'axios'

export default {
  name: 'Container',
  components: {
    Temperature,
    List,
    Info,
  },
  data() {
    return {
      APIKEY: import.meta.env.VITE_API_KEY,
      current: {
        temperature: '',
        icon: '',
        minTemp: '',
        maxTemp: '',
        desc: '',
      },
      info: {
        pressure: '',
        wind: '',
        humidity: '',
        visibility: '',
        sunrise: '',
        sunset: '',
      },
      hours: [],
    }
  },
  created() {
    this.getWeather()
    this.getForecast()
  },
  methods: {
    async getWeather() {
      await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Nova%20Bana&appid=${this.APIKEY}&lang=sk&units=metric`).then((res) => {
        this.current.temperature = res.data.main.temp.toFixed(1)
        this.current.minTemp = res.data.main.temp_min.toFixed(1)
        this.current.maxTemp = res.data.main.temp_max.toFixed(1)
        this.current.desc = res.data.weather[0].description.charAt(0).toUpperCase() + res.data.weather[0].description.slice(1)
        this.current.icon = res.data.weather[0].icon

        this.info.visibility = res.data.visibility
        this.info.pressure = res.data.main.pressure
        this.info.humidity = res.data.main.humidity
        this.info.wind = res.data.wind.speed
        this.info.sunset = res.data.sys.sunset
        this.info.sunrise = res.data.sys.sunrise

        console.log(res.data)
      })
    },
    async getForecast() {
      await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=48.4231&lon=18.6404&exclude=current,minutely,daily&appid=${this.APIKEY}&units=metric&lang=sk`).then((res) => {
        var data = res.data.hourly

        data.forEach((item) => {
          var info = {
            icon: item.weather[0].icon,
            temperature: item.temp.toFixed(1),
            time: item.dt,
          }
          this.hours.push(info)
        })
      })
    },
  },
}
</script>
