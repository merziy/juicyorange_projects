<template>
  <div class="matb">
    <div class="guessingImage">
      <div class="innerGuessingImage">
        <p>?</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GuessingGame",
});
</script>

<style lang="scss">
.matb {

  .guessingImage {
    background-color: #fff;
    padding: 1rem 1rem;
    width: 70%;
    height: 80vh;
    display: flex;
    align-items: center;
    
    .innerGuessingImage {
      background-color: #8BA9AF;
      height: 90%;
      width: 100%;
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
}
</style>
