<template>
  <div class="flex flex-row items-center justify-around">
    <ul class="">
      <li class="text-white my-5 text-xl">
        <strong
          ><box-icon color="white" class="align-middle" name="sun"></box-icon>
          Východ slnka:
        </strong>
        {{ this.getTime(info.sunrise) }}
      </li>
      <li class="text-white my-5 text-xl">
        <strong
          ><box-icon color="white" class="align-middle" name="bong"></box-icon>
          Vlhkosť:
        </strong>
        {{ info.humidity }}
      </li>
      <li class="text-white my-5 text-xl">
        <strong
          ><box-icon color="white" class="align-middle" name="wind"></box-icon>
          Vietor:
        </strong>
        {{ info.wind }}
      </li>
    </ul>
    <ul class="">
      <li class="text-white my-5 text-xl">
        <strong
          ><box-icon color="white" class="align-middle" name="sun" type="solid"></box-icon>
          Západ slnka:
        </strong>
        {{ this.getTime(info.sunset) }}
      </li>
      <li class="text-white my-5 text-xl">
        <strong
          ><box-icon color="white" class="align-middle" name="low-vision"></box-icon>
          Viditeľnosť:
        </strong>
        {{ info.visibility }}
      </li>
      <li class="text-white my-5 text-xl">
        <strong
          ><box-icon color="white" class="align-middle" name="arrow-to-bottom"></box-icon>
          Tlak:
        </strong>
        {{ info.pressure }}
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
  },
}
</script>
