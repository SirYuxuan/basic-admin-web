<template>
  <div>
    home
  </div>
</template>

<script>
import {getCurrentInstance} from "vue";

export default {
  name: "home",
  setup() {
    const {proxy} = getCurrentInstance()
    proxy.$log.info('你好')
  }
}
</script>

<style scoped>

</style>