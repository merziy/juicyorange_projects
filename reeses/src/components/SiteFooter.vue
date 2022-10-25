<template>
  <div class="footer p-4">
    <p>Legal Mumbo Jumbo: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum blandit tellus, et luctus mi
    blandit non. Phasellus gravida mi ac tristique posuere. Aliquam tincidunt lorem dui, lacinia mollis dui aliquet id. In
    quis pretium nulla, sed scelerisque dui. Aliquam a commodo ante. Vestibulum pulvinar ullamcorper dapibus. Proin velit
    urna, ullamcorper quis est at, cursus accumsan orci. Suspendisse sit amet malesuada ligula. Vestibulum non dolor
    bibendum, finibus leo at, congue nisl. Curabitur in efficitur libero, at dictum diam.</p>
    <p>Quisque tincidunt sapien ut sagittis sodales. Aliquam congue diam eget sem tempus, in malesuada magna semper. Sed
    pharetra urna elementum nunc suscipit cursus eget in leo. Nullam at metus ut nisi porta placerat at vel massa. Phasellus
    ac justo lectus. Curabitur facilisis mi at fermentum gravida. Suspendisse potenti. Aliquam ut fringilla sapien.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SiteFooter'
  // props: {
  //   msg: String
  // }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  p {
    bottom: 0px;
  }
  .footer {
    color: #fff;
    background-color: #000;
  }
</style>
