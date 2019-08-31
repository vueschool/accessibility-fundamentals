<template>
  <div>
    <ColorBar></ColorBar>
    <p>Vue School</p>
    <p>Web Accessibility Fundamentals</p>
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