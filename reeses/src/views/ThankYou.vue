<template>
<div class="home inputForm text-center">
  <TopNav />
  <p>Good Luck.</p>
  <span>We will contact you if you’ve won. If you don’t feel
  like waiting you can purchase right now.</span>
  <button @click="goToUrl">Submit</button>
</div>
</template>

<script lang="ts">
import TopNav from '@/components/TopNav.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ThankYou',
  components: {
    TopNav
  },
  methods: {
    goToUrl () {
      window.location.href = 'https://cereals.generalmills.com/products/reeses-puffs/'
    }
  }
})
</script>

<style lang="scss">
.home {
  background: url('@/assets/images/reeses-background.png') no-repeat center /cover;
  min-width: 100%;
  width: 100vw;
  height: 100vh;
}

@media only screen and (min-width: 1000px) {
  .home {
    width: 1000px;
    height: 1000px;
  }
}
</style>
