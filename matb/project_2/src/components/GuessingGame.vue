<template>
  <div class="matb container-fluid">
    <div class="row align-items-center">
      <div class="w-100 col-md-9 col-sm-12 align-items-center">
        <div v-if="userImg" class="backgroundWrapper">
          <h3>TITLE HERE</h3>
          <div class="userImg_container">
            <!-- <h3>{{ image.title }}</h3> -->
            <!-- <img :class="{'userImage': userImg }" class="img-fluid" :src="image.url" alt="" /> -->
            <!-- <p>{{ image.clue }}</p> -->
            <img
              src="http://source.unsplash.com/random"
              alt=""
              :class="{'userImage': userImg }"
              class="img-fluid"
            >
          </div>
          <p class="clue">Clue question here! Ces ut etus. Solupta aribus. Lescit licieni hicium, volores sequaes Solupta aribus. Lescit licieni
          ces ut etus. Solupta aribus. Lescit etionem et, ni rem?</p>
        </div>
        <div v-else class="backgroundWrapper">
          <h3>TITLE HERE</h3>
          <div class="guessingImage">
            <div class="innerGuessingImage">
              <p :class="{'qMark': changeColor}">?</p>
            </div>
          </div>
          <p class="clue">Clue question here! Ces ut etus. Solupta aribus. Lescit licieni hicium, volores sequaes Solupta aribus. Lescit licieni
          ces ut etus. Solupta aribus. Lescit etionem et, ni rem?</p>
        </div>
      </div>
      <div class="gameControls col-md-3 col-sm-12 ">
        <img class="spinMe" :src="require('@/assets/images/spin-me-text-3.png')" alt="" />
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

  h3,
  p {
    font-family: GothicMedium;
    font-weight: bold;
    color: black;
  }

  h3 {
    font-size: 2.75rem;
    transform: scale(0.7, 1);
  }

  .row {

    .backgroundWrapper {
      background-color: #fff;
      padding: 5px 0rem;
      margin-top: 1.5rem;

      .userImg_container {
        width: 100%;
        position: relative;
        padding-top: (9 / 16) * 100%;

        .userImage {
          height: 100%;
          width: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
      }
      p {
        font-size: 1.25rem;
      }

      .guessingImage {
        width: 100%;
        position: relative;
        padding-top: (9 / 16) * 100%;

        .innerGuessingImage {
          height: auto;
          width: 100%;
          background-color: #8BA9AF;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;

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
      .clue {
        margin: 0px;
        padding: 5px 10px;
      }
    }

    .gameControls {
      margin-top: 4rem;
      
      .buttons {
        justify-content: center;
        padding-top: 4rem;

        img {
          width: 6rem;
          height: 5rem;
          padding: 0rem .5rem;
        }
      }

      .spinMe {
        width: 10rem;
        margin-left: 1rem;
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

      .rotate {
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
@media only screen and (max-width: 1376px) {
  .centerAbsoluteText {
    p {
      margin: 0rem;
    }
  }
}
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
              font-size: 4rem;
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
        margin-top: 5px;
        
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

@media only screen and (max-width: 540px) {
  .matb {
    .row {
      .backgroundWrapper {
        .userImg_container {
          p {
            font-size: .7rem;
            margin: .2rem 0rem;
          }
        }
        .guessingImage {
          .innerGuessingImage {
            p {
              font-size: 4rem;
              margin: 0rem;
            }
          }
        }
      }

      .gameControls {
        .spinMe {
          width: 10rem;
        }
      }
    }
  }
}
</style>
