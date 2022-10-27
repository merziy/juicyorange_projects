<template>
  <div class="home">
    <TopNav />
    <div class="inputForm d-flex flex-column align-center">
      <p>Enter your code from the breakfastverse here for a chance to WIN</p>
      <form v-on:submit.prevent="">
        <input
          id="breakfastCode"
          type="text"
          placeholder="XXXXXXXXXXXXXXX"
          v-model="breakfastCode"
          @keyup.enter="switchPage()"
        />
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from '@/components/TopNav.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EnterCode',
  components: {
    TopNav
  },
  methods: {
    switchPage () {
      this.$router.push({ path: '/FormPage' })
    },
    debug (event: any) {
      console.log(event.target.name)
    }
  },
  data () {
    return {
      breakfastCode: ''
    }
  }
})
</script>

<style scoped lang="scss">
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
