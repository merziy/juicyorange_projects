<template>
  <div>
    <img class="pt-4 pt-md-5 d-flex" :src="require('@/assets/images/reeses-ambush.png')" alt="" />
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
  width: 400px;
  margin: 0 auto;
}

@media only screen and (max-width: 768px) {
  img {
    width: 280px;
  }
}
</style>
