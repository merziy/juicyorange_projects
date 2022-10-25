<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <div class="home container-fluid">
    <router-view />
  </div>
  <SiteFooter />
</template>

<script lang="ts">
import SiteFooter from '@/components/SiteFooter.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  components: {
    SiteFooter
  }
})
</script>

<style lang="scss">
* {
  padding: 0rem;
  margin: 0rem;
}
.home {
  background: url('@/assets/images/reeses-background.png') no-repeat center center;
  background-size: cover;
  min-height: 100vh;
  min-width: 100vw;
 }
</style>
