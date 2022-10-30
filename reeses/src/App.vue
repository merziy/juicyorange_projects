<template>
  <div class="container-fluid p-0">
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
    font-size: 16px;
    text-transform: uppercase;
    text-align: center;
    text-shadow: -1px 1px 0 #000,
      1px 1px 0 #000,
      1px -1px 0 #000;
  }

  span {
    font-weight: bold;
  }

  form {

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
  }
}
.home {
  background: url('@/assets/images/reeses-background.png') no-repeat center center /cover;
  height: 770px;
  .inputForm {
    p {
      width: 70%;
      margin: 0 auto;
      padding-top: 7rem;
    }
    span {
      width: 70%;
    }
    form {
      margin: 0 auto;
    }
  }
}
// Responsive Rules
@media only screen and (min-width: 700px) and (max-width: 767px) {
  .home {
    .inputForm {
      p {
        width: 50%;
        padding-top: 9rem;
      }
    }
  }
}
@media only screen and (min-width: 768px) {
  .home {
    height: 1000px;
    .inputForm {
      p {
        padding-top: 7rem;
        font-size: 1.75rem;
        width: 50%;
        margin: 0 auto;
      }
    }
  }
}
</style>
