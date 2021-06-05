<template>
  <div class="h-auto w-auto p-7 rounded-2xl bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm flex flex-col items-center justify-around">
    <h1 class="text-3xl font-medium text-white">Error! {{ this.message }}</h1>
    <router-link to="/" class="center text-lg text-white font-regular px-4 py-1 bg-blue-500 hover:bg-blue-700 transition-colors rounded-lg flex flex-row mt-4" v-if="this.backToHome"
      ><box-icon class="mr-1" name="home" type="solid" animation="tada" color="#ffffff"></box-icon> Back to home</router-link
    >
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: {
    message: {
      type: String,
      default: 'Something wrong',
    },
    backToHome: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
