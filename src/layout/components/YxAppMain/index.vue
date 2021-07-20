<template>
  <div class="app-main-container">
    <router-view :key="key" class="app-main-height" />
  </div>
</template>

<script>
export default {
  name: 'YxAppMain',
  computed: {
    key() {
      return this.$route.path
    },
  }
}
</script>

<style scoped>

</style>