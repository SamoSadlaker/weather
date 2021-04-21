<template>
  <div
    class="w-5/6 h-5/6 p-4 rounded-2xl grid grid-rows-2 grid-cols-2 shadow-md bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm"
  >
    <Temperature class="h-full w-full" />
    <Info class="h-full w-full" />
    <List class="h-full w-full col-span-2" />
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
