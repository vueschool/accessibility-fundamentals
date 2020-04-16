<template>
  <div class="footer">
    <p>Vue School <br> Web Accessibility Fundamentals</p>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
@import "@/scss/main.scss";
.footer{
  padding: 1em 0;
  font-family: $Roboto;
  background-color: $darkBlue;	
  color:white;
}
</style>