<template>
  <div class="home">
    <TopNav />
    <div class="inputForm d-flex flex-column align-center">
      <p>Enter your code from the breakfastverse here for a chance to WIN</p>
      <form @submit.prevent="submit">
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
      this.$router.push({ path: '/form' })
    },
    debug (event: any) {
      console.log(event.target.name)
    },
    submit () {
      this.submitted = true
    }
  },
  data () {
    return {
      breakfastCode: '',
      submitted: false
    }
  }
})
</script>

<style scoped lang="scss">
.home {
  background: url('@/assets/images/reeses-background.jpeg') no-repeat center center /cover;

  input {
    margin-top: .5rem;
  }
}
</style>
