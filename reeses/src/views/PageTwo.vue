<template>
  <div class="home">
    <TopNav />
    <div class="inputForm">
      <form class="text-center d-flex flex-column align-items-center" @submit.prevent="submit">
        <p class="">Enter for a chance to win</p>
        <span>Enter your information below so we can can deliver your prize through space and time to your dimension if you are
        chosen.</span>
        <AddressForm
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
import AddressForm from '@/components/AddressForm.vue'
import TopNav from '@/components/TopNav.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FormPage',
  components: {
    TopNav,
    AddressForm
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
      email: '',
      submitted: false
    }
  },
  methods: {
    switchPage () {
      this.$router.push({ path: '/ThankYou' })
    },
    submit () {
      this.submitted = true
    }
  }
})
</script>

<style scoped lang="scss">
.home {
  background: url('@/assets/images/reeses-background-2.jpeg') no-repeat center /cover;
  .inputForm {
    p {
      padding-top: 6rem;
      margin-top: 1rem;
    }
  }
}
@media only screen and (min-width: 768px) and (max-width: 900px) {
  .home {
      .inputForm {
        p {
          margin-top: 3rem;
        }
      }
    }
}
</style>
