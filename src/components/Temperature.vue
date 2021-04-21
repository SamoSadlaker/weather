<template>
  <div>
    <div class="flex flex-row items-center p-5">
      <img
        class="w-48 h-auto"
        src="https://www.accuweather.com/images/weathericons/3.svg"
        alt=""
      />

      <div class="flex flex-col ml-2">
        <span class="text-white font-bold text-7xl antialiased"
          >10.8&#176;C</span
        >
        <span class="ml-3 mt-2 text-white font-medium">
          <box-icon
            class="align-middle"
            color="white"
            type="solid"
            name="up-arrow-alt"
          ></box-icon>
          5&#176;C
          <box-icon
            class="align-middle"
            color="white"
            name="down-arrow-alt"
            type="solid"
          ></box-icon>
          4&#176;C
        </span>
      </div>
    </div>
    <p class="mt-3 ml-6 text-gray-50 font-medium">
      Očakávajte daždivé počasie nedeľa ráno – pondelok poobede
    </p>
  </div>
</template>

<script>
export default {
  name: 'Temperature',
}
</script>
