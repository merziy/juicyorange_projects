<template>
  <div>
    <img class="d-flex pt-5 px-md-5" :src="require('@/assets/images/reeses-ambush.png')" alt="" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'TopNav'
})
</script>

<style scoped lang="scss">
img {
  width: 430px;
  margin: 0 auto;
}

@media only screen and (max-width: 768px) {
  img {
    width: 300px;
  }
}
</style>
