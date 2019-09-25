<template>
  <div>
    <ColorBar></ColorBar>
    <div class="footer">
      <p>Vue School</p>
      <p>Web Accessibility Fundamentals</p>
    </div>
  </div>
</template>

<script>
import ColorBar from '@/components/ColorBar.vue'

export default {
  name: 'Footer',
  components: {
    ColorBar
  }
}
</script>

<style lang="scss">
@import "@/scss/main.scss";
.footer{
  background-color: $footer_background;
  color:white;
  padding: 1em 0;
}

</style>