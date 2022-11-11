<template>
  <div class="matb container-fluid">
    <div class="row align-items-center">
      <div class="w-100 col-md-9 col-sm-12 align-items-center">
        <div class="aspectWrapper" v-if="userImg">
          <div class="userImg_container">
            <!-- <h3>{{ image.title }}</h3> -->
            <!-- <img :class="{'userImage': userImg }" :src="image.url" alt="" /> -->
            <!-- <p>{{ image.clue }}</p> -->
            <div class="centerAbsoluteText">
              <h3>SAMPLE CLUE TITLE</h3>
            </div>
            <img
              src="http://source.unsplash.com/random"
              alt=""
              :class="{'userImage': userImg }"
              class="img-fluid"
            >
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.</p>
          </div>
        </div>
        <div v-else class="aspectWrapper">
          <div class="guessingImage">
            <div class="innerGuessingImage">
              <p :class="{'qMark': changeColor}">?</p>
            </div>
          </div>
        </div>
        </div>
      <div class="gameControls col-md-3 col-sm-12 ">
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
        <div class="buttons d-flex">
          <img @click="playSuccess()" :src="require('@/assets/images/green_button.png')" alt="" style="padding:0rem .5rem;" />
          <img @click="playFailure()" :src="require('@/assets/images/red_button.png')" alt="" style="padding:0rem .5rem;" />
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
    color: black;
  }

  .centerAbsoluteText {
    position: relative;
    
    h3 {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }  
  .row {
    height: 100vh;

    .aspectWrapper {
      position: relative;
    
      &:before {
        display: block;
        content: "";
        width: 100%;
        padding-top: (9 / 16) * 100%;
      }

    .userImg_container {
      background-color: #fff;
      padding: 3rem 1rem;
      width: 100%;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      .userImage {
        padding: 0rem;
        height: 100%;
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
      width: 100%;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      .innerGuessingImage {
        background-color: #8BA9AF;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        p {
          color: #000;
          font-weight: 700;
          font-size: 10rem;
          text-align: center;
        }

        .qMark {
          animation: 4s bgcolorchange;
        }

        }
      }
    }
    .gameControls {
      .buttons {
        justify-content: center;
        height: 9rem;
        padding-top: 4rem;
        width: auto;
      }

      .spinMe {
        width: 12rem;
      }

      .wheel {
        margin: 0 auto;
        background: url('@/assets/images/spinner-base.png') no-repeat center center /contain; 
        height: 12rem;

        .spinner {
          height: 10rem;
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
        transform-origin: center 68%;
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
/*
/
/ Only two media query rules!
/ Sorry! Only way I could make it work :(
*/
@media only screen and (max-width: 768px) {
  .matb {
    .row {
      .aspectWrapper {
        .userImg_container {
          .centerAbsoluteText {
            h3 {
              font-size: 1rem;
            }
          }
          p {
            font-size: .8rem;
          }
        }

        .guessingImage {
          .innerGuessingImage {
            p {
              font-size: 5rem;
            }
          }
        }

        .userImg_container {
          .userImage {
            height: 100%;
          }
        }
      }
      .gameControls {
        .buttons {
          height: 8rem;
          padding-top: 2rem;
        }

        .spinMe {
          width: 10rem;
        }

        .wheel {
          margin: 0 auto;
          background: url('@/assets/images/spinner-base.png') no-repeat center center /contain;
          height: 10rem;

          .spinner {
            height: 8rem;
            margin-top: -4rem;
            margin-left: 10px;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 450px) {
  .matb {
    .row {
      .aspectWrapper {
        .userImg_container {
          p {
            font-size: .6rem;
          }
        }
      }
      .gameControls {
        .spinMe {
          width: 12rem;
        }
      }
    }
  }
}
</style>
