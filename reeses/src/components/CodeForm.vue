<template>
  <input
    type="text"
    id="firstName"
    @input="$emit('update: firstName', $event.target.value)"
    placeholder="FIRST NAME"
  />
  <input
    type="text"
    id="lastName"
    @input="$emit('update: lastName', $event.target.value)"
    placeholder="LAST NAME"
  />
  <input
    type="text"
    id="addressOne"
    @input="$emit('update: addressOne', $event.target.value)"
    placeholder="ADDRESS 1"
  />
  <input
    type="text"
    id="addressTwo"
    @input="$emit('update: addressTwo', $event.target.value)"
    placeholder="ADDRESS 2 (OPTIONAL)"
  />
  <input
    type="text"
    id="city"
    @input="$emit('update: city', $event.target.value)"
    placeholder="CITY"
  />
   <input
    type="text"
    id="state"
    @input="$emit('update: state', $event.target.value)"
    placeholder="STATE"
  />
   <input
    type="text"
    id="zipcode"
    @input="$emit('update: zipcode', $event.target.value)"
    placeholder="ZIPCODE"
  />
   <input
    type="text"
    id="email"
    @input="$emit('update: city', $event.target.value)"
    placeholder="EMAIL"
  />
  <button @click="switchPage">Submit</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'CodeForm',
    props: {
      firstName: {
        type: String,
        required: true
      },
      lastName: {
        type: String,
        required: true
      },
      addressOne: {
        type: String,
        required: true
      },
      addressTwo: {
        type: String,
        required: false
      },
      city: {
        type: String,
        required: true
      },
      state: {
        type: String,
        required: true
      },
      zipcode: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      }
    },
    emits: [
      'update: firstName',
      'update: lastName',
      'update: addressOne',
      'update: addressTwo',
      'update: firstName',
      'update: city',
      'update: state',
      'update: zipcode',
      'update: email'
    ],
    methods: {
      // submit () {
      //   this.$emit('submit')
      // }
      switchPage () {
        this.$router.push({ path: '/ThankYou' })
      }
    }
  })
</script>

<style scoped lang="scss">
input {
  margin-top: 1rem;
  width: 50%;
}
</style>
