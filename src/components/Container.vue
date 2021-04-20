<template>
  <div
    class="w-5/6 h-5/6 p-4 rounded-2xl grid grid-rows-2 grid-cols-2 shadow-md bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm"
  >
    <Temperature class="h-full w-full bg-green-300" />
    <Info class="h-full bg-blue-300 w-full" />
    <List class="h-full bg-pink-300 w-full col-span-2" />
  </div>
</template>

<script>
import Temperature from './Temperature.vue'
import List from './List.vue'
import Info from './Info.vue'

export default {
  name: 'Container',
  components: {
    Temperature,
    List,
    Info,
  },
}
</script>
