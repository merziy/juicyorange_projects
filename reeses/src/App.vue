<template>
  <div class="p-0 container-fluid">
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
.inputForm {

  p {
    font-family: "Helvetica";
    color: rgb(255, 237, 59);
    font-weight: bold;
    width: 40%;
    margin: 0 auto;
    margin-top: 10rem;
    font-size: 16px;
    text-transform: uppercase;
    text-align: center;
    text-shadow: -1px 1px 0 #000,
      1px 1px 0 #000,
      1px -1px 0 #000;
  }

  span {
    font-weight: bold;
    display: block;
    margin: 0 auto;
    width: 70%;
  }

  form {
    margin: 0 auto;

    input {
      border-width: 3px;
      border-color: rgb(59, 34, 34);
      border-style: solid;
      border-radius: 5px;
      background-color: rgb(255, 237, 59);
    }

    input::placeholder {
      color: black;
      text-align: center;
      font-size: 15px;
    }
  }
  button {
    font-family: "Helvetica Neue";
    color: rgb(255, 237, 59);
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    border-radius: 5px;
    background-color: rgb(64, 32, 33);
    width: 20%;
    margin: 5px;
    margin-top: 1rem;
  }
}
</style>
