<template>
  <div class="matb container-fluid ml-lg-4">
    <div class="row align-items-center">
      <div class="guessingImage w-100 col-lg-9 col-sm-12 align-items-center">
        <div class="innerGuessingImage">
          <p>?</p>
        </div>
      </div>
      <div class="gameControls col-lg-3 col-sm-12 ">
        <img :src="require('@/assets/images/spin-me-text.png')" alt="" />
        <div class="wheel mb-sm-1 d-flex justify-content-center align-items-center"
        @click="changeIsOpen" :class="{'rotateIcon': isOpen, 'isntOpen': true}">
          <img :src="require(`@/assets/images/spinner.png`)" class="spinner" alt="" />
        </div>
        <div class="buttons pt-md-4 d-flex justify-content-md-around">
          <img :src="require('@/assets/images/green_button.png')" alt="" />
          <img :src="require('@/assets/images/red_button.png')" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GuessingGame",
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    changeIsOpen() {
      this.isOpen = !this.isOpen
    }
  }
});
</script>

<style lang="scss">
.matb {

  .row {
    height: 100vh;

    .guessingImage {
      background-color: #fff;
      padding: 1rem 1rem;
      height: 95vh;
      // display: flex;
      // align-items: center;

      .innerGuessingImage {
        background-color: #8BA9AF;
        height: 90vh;
        display: flex;
        align-items: center;
        justify-content: center;

        p {
          color: #000;
          font-weight: 700;
          font-size: 15rem;
          text-align: center;
        }
      }
    }

    .gameControls {
      .buttons {
        justify-content: center;
      }

      .wheel {
        // background: url('../assets/images/wheel-dark.jpg') no-repeat center center;
        background-color: #FFF;
        width: 12rem;
        height: 12rem;
        margin: 0 auto;
        border-radius: 50%;
        box-shadow: 0 0 50px #8BA9AF;

        .spinner {
          height: 17rem;
          margin-top: -5rem;
        }
      }

      .rotateIcon {
        transform: rotate(45deg);
      }
    }
  }
}

@media only screen and (max-width: 1200px) {
  .matb {

    .row {

      .guessingImage {
        height: 45vh;

        .innerGuessingImage {
          background-color: #8BA9AF;
          height: 40vh;

        }
      }
    }
  }
}
</style>
