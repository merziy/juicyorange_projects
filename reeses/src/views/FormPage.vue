<template>
  <div class="home">
    <TopNav />
    <div class="inputForm">
      <form class="text-center d-flex flex-column align-items-center" v-on:submit.prevent="">
        <p>Enter for<br/> a chance to win</p>
        <span>Enter your information below so we can can deliver your prize through space and time to your dimension if you are
        chosen.</span>
        <CodeForm
          v-model:firstName="firstName"
          v-model:lastName="lastName"
          v-model:addressOne="addressOne"
          v-model:addressTwo="addressTwo"
          v-model:city="city"
          v-model:state="state"
          v-model:zipcode="zipcode"
          v-model:email="email"
        />
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import CodeForm from '@/components/CodeForm.vue'
import TopNav from '@/components/TopNav.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FormPage',
  components: {
    TopNav,
    CodeForm
  },
  data () {
    return {
      firstName: '',
      lastName: '',
      addressOne: '',
      addressTwo: '',
      city: '',
      state: '',
      zipcode: '',
      email: ''
    }
  },
  methods: {
    switchPage () {
      this.$router.push({ path: '/ThankYou' })
    }
  }
})
</script>

<style scoped lang="scss">
.home {
  background: url('@/assets/images/reeses-background-2.png') no-repeat center /cover;
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
