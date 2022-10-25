<template>
  <div class="B">
    <BackGround />
  </div>
</template>

<script lang="ts">
import BackGround from '@/components/BackGround.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    BackGround
  }
})
</script>
