<template>
<div class="home text-center">
  <TopNav />
  <div class="inputForm">
    <p>Good Luck.</p>
    <span>We will contact you if you've won. If you don't feel
    like waiting you can purchase right now.</span>
    <button @click="goToUrl">Buy Now</button>
  </div>
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

<style scoped lang="scss">
.home {
  background: url('@/assets/images/reeses-background.jpeg') no-repeat center /cover;

    .inputForm {
      p {
        padding-top: 6rem;
      }
      span {
        width: 70%;
      }
      button {
        margin: 0 auto;
        display: block;
        margin-top: .5rem;
        width: 30%;
      }
    }
  }
@media only screen and (min-width: 768px) and (max-width: 900px) {
  .home {
    .inputForm {
      p {
        margin-top: 2rem;
      }
    }
  }
}
</style>
