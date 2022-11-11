<template>
  <div class="matb container-fluid">
    <div class="row align-items-center">
      <div class="w-100 col-lg-9 col-sm-12 align-items-center">
        <div class="userImg_container" v-if="userImg">
          <!-- <h3>{{ image.title }}</h3> -->
          <!-- <img :class="{'userImage': userImg }" :src="image.url" alt="" /> -->
          <!-- <p>{{ image.clue }}</p> -->
          <h3>SAMPLE CLUE TITLE</h3>
          <img
            src="http://source.unsplash.com/random"
            alt=""
            :class="{'userImage': userImg }"
          >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.</p>
        </div>
        <div v-else class="guessingImage">
          <div class="innerGuessingImage">
            <p :class="{'qMark': changeColor}">?</p>
          </div>
        </div>
      </div>
      <div class="gameControls col-lg-3 col-sm-12 ">
        <img class="spinMe" :src="require('@/assets/images/spin-me-text-2.png')" alt="" />
        <div
          class="wheel mb-sm-1 d-flex justify-content-center align-items-center"
        >
          <img
            :src="require(`@/assets/images/spinner.png`)"
            class="spinner"
            alt=""
            @click="changeImage();"
            :class="{'rotate': isOpen}"
          />
        </div>
        <div class="buttons pt-md-5 d-flex">
          <img @click="playSuccess()" :src="require('@/assets/images/green_button.png')" alt="" />
          <img @click="playFailure()" :src="require('@/assets/images/red_button.png')" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent } from "vue"

let audio1 = require('@/assets/audio/tada-fanfare-a-6313.mp3')
let audio2 = require('@/assets/audio/failure-drum-sound-effect-2-7184.mp3')
let audio3 = require('@/assets/audio/clock-ticking-103687.mp3')

export default defineComponent({
  name: "GuessingGame",
  data() {
    return {
      changeColor: false,
      isOpen: false,
      userImg: false,
      image: {
        title: String,
        clue: String,
        url: String
      } 
    }
  },
  setup() {
    const success = new Audio(audio1)
    const failure = new Audio(audio2)
    const clock = new Audio(audio3)
    const playSuccess = () => {
      success.play()
    }
    const playFailure = () => {
      failure.play()
    }
    const playClock = () => {
      clock.play()
    }
    return {playSuccess, playFailure, playClock}
  },
  methods: {
    changeImage() {
      this.userImg = false;
      this.changeColor = true;
      this.isOpen = !this.isOpen
      this.playClock()
      setTimeout(() => {
        this.changeColor = false;
        this.userImg = true
        this.isOpen = !this.isOpen
      }, 4000);
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

  h3,p {
    font-family: GothicMedium;
    font-weight: bold;
  }

  .row {
    height: 100vh;

    .userImg_container {
      background-color: #fff;
      padding: 1rem 1rem;

      .userImage {
        padding: 0rem;
        height: 80vh;
        width: 100%;
        object-fit: cover;
      }

      p {
        margin: 0rem;
      }
    }

    .guessingImage {
      background-color: #fff;
      padding: 3rem 1rem;

      .innerGuessingImage {
        background-color: #8BA9AF;
        height: 80vh;
        display: flex;
        align-items: center;
        justify-content: center;

        p {
          color: #000;
          font-weight: 700;
          font-size: 15rem;
          text-align: center;
        }

        .qMark {
          animation: 4s bgcolorchange;
        }
        
      }
    }

    .gameControls {
      .buttons {
        justify-content: space-evenly;
      }

      .spinMe {
        width: 15rem;
      }

      .wheel {
        margin: 0 auto;
        background: url('@/assets/images/spinner-base.png') no-repeat center center /contain; 

        .spinner {
          height: 17rem;
          margin-top: -4rem;
          margin-left: 10px;
        }
      }

      .rotateIcon {
        transform: rotate(45deg);
      }

      .rotate  {
        animation: rotation 1s linear;
        animation-iteration-count: 4;
        transform-origin: center 62%;
      }

      @keyframes rotation {
        from {
          transform: rotate(0deg);
        }

        to {
          transform: rotate(359deg);
        }
      }
      @keyframes bgcolorchange {
        25% {
          color: white;
        }

        50% {
          color: black;
        }

        75% {
          color: white;
        }

        100% {
          color: black;
        }
      }
    }
  }
}

@media only screen and (max-width: 990px) {
  .matb {

    .row {

      .guessingImage, .userImg_container {
        height: auto;

        .innerGuessingImage {
          background-color: #8BA9AF;
          height: 32vh;
        }

        .userImage {
          height: 32vh;
        }
      } 
    }
  }
}
</style>
