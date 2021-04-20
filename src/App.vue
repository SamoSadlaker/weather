<template>
  <section
    id="Main"
    class="w-screen h-screen bg-main-background bg-center flex items-center justify-center"
  >
    <Container />
  </section>
</template>

<script>
import Container from './components/Container.vue'
export default {
  name: 'App',
  components: {
    Container,
  },
}
</script>
