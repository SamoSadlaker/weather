<template>
  <div class="flex flex-col sm:flex-row items-center sm:justify-around justify-center">
    <ul class="">
      <li class="text-white sm:my-5 my-1 sm:text-xl text-md">
        <strong
          ><box-icon color="white" class="align-middle" name="sun"></box-icon>
          Východ slnka:
        </strong>
        {{ this.getTime(info.sunrise) }}
      </li>
      <li class="text-white sm:my-5 my-1 sm:text-xl text-md">
        <strong
          ><box-icon color="white" class="align-middle" name="bong"></box-icon>
          Vlhkosť:
        </strong>
        {{ info.humidity }}%
      </li>
      <li class="text-white sm:my-5 my-1 sm:text-xl text-md">
        <strong
          ><box-icon color="white" class="align-middle" name="wind"></box-icon>
          Vietor:
        </strong>
        {{ info.wind }}km/hod
      </li>
    </ul>
    <ul class="">
      <li class="text-white sm:my-5 my-1 sm:text-xl text-md">
        <strong
          ><box-icon color="white" class="align-middle" name="sun" type="solid"></box-icon>
          Západ slnka:
        </strong>
        {{ this.getTime(info.sunset) }}
      </li>
      <li class="text-white sm:my-5 my-1 sm:text-xl text-md">
        <strong
          ><box-icon color="white" class="align-middle" name="low-vision"></box-icon>
          Viditeľnosť:
        </strong>
        {{ this.getKilometers(info.visibility) }}km
      </li>
      <li class="text-white sm:my-5 my-1 sm:text-xl text-md">
        <strong
          ><box-icon color="white" class="align-middle" name="arrow-to-bottom"></box-icon>
          Tlak:
        </strong>
        {{ info.pressure }}hPa
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Info',
  props: {
    info: {
      type: Object,
    },
  },
  methods: {
    getTime(date) {
      var time = new Date(date * 1000)

      return time.getHours() + ':' + time.getMinutes()
    },
    getKilometers(meters) {
      return (meters / 1000).toFixed(1)
    },
  },
}
</script>
