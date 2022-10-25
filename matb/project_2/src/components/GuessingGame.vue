<template>
  <div class="matb container-fluid ml-lg-4">
    <div class="row align-items-center">
      <div class="guessingImage w-100 col-lg-9 col-sm-12 align-items-center">
        <div class="innerGuessingImage">
          <p>?</p>
        </div>
      </div>
      <!-- <img class="userImage" :src="image.url" alt=""/> -->
      <div class="gameControls col-lg-3 col-sm-12 ">
        <img :src="require('@/assets/images/spin-me-text.png')" alt="" />
        <div class="wheel mb-sm-1 d-flex justify-content-center align-items-center" @click="changeIsOpen"
          :class="{'rotate': isOpen}">
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
import axios from 'axios';
import { defineComponent } from "vue";

// export interface Image {
//   url: String,
//   title: String,
//   clue: String
// }

export default defineComponent({
  name: "GuessingGame",
  data() {
    return {
      isOpen: false,
      image: {
        title: String,
        clue: String,
        url: String
      } 
    }
  },
  methods: {
    changeIsOpen() {
      this.isOpen = !this.isOpen
    }
  },
  mounted() {
    axios
      .get('http://localhost:8080/data/sampleData.json')
      .then((response) => (this.image = response.data.images
    ))
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

    // .userImage {
    //   padding: 1rem 1rem;
    //   height: 95vh;
    //   width: 10vh;
    // }

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
          margin-top: -4rem;
        }
      }

      .rotateIcon {
        transform: rotate(45deg);
      }

      .rotate  {
        animation: rotation 1s linear;
        animation-iteration-count: 4;
      }

      @keyframes rotation {
        from {
          transform: rotate(0deg);
        }

        to {
          transform: rotate(359deg);
        }
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
