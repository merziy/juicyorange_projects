<template>
  <GuessingGame />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import GuessingGame from "./components/GuessingGame.vue"

export default defineComponent({
  name: "App",
  components: {
    GuessingGame
},
});
</script>

<style lang="scss">
// Bootstrap 4.5
@import '@/assets/stylesheets/bootstrap.min.css';
* {
  margin: 0rem;
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: url(./assets/images/soundwave-2.jpg) no-repeat fixed center;
    background-size: cover;
    height: 100vh;
  }
}
@media only screen and (max-width: 768px) {
  #app {
    background-attachment: scroll;
  }
}
@font-face {
  font-family: GothicMedium;
  src: url('@/assets/fonts/Gotham-Medium.otf');
}
</style>
