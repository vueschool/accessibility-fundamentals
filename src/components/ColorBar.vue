<template>
  <div class="colorBar">
    <div
      class="colors"
      v-for="index in 12"
      :key="index"
    />
  </div>
</template>

<script>
export default {
  name: "ColorBar"
};
</script>

<style lang="scss">
  @import "@/scss/main.scss";

  .colorBar{
    display: grid;
    grid-template-columns: repeat(12, 1fr)
  }
  
  @for $i from 1 through length($colorBar) {
      .colors:nth-child(#{length($colorBar)}n+#{$i}) {
          background: nth($colorBar, $i);
          height: 2em;
      }
  }

</style>