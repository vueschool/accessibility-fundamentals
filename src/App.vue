<template>
  <div id="app">
    <div class="container_top">
      <div>
        <h1 class="title">Accessibility with Vue</h1>
      </div>
      <DesignBasics/>
    </div>
    <LearnMore/>
    <Resources/>
    <Footer/>
  </div>
</template>

<script>
import DesignBasics from '@/components/DesignBasics.vue'
import Resources from '@/components/Resources.vue'
import LearnMore from '@/components/LearnMore.vue'
import Footer from "@/components/Footer.vue"

export default {
  name: "App",
  components: {
    DesignBasics,
    Resources,
    LearnMore,
    Footer
  }
};
</script>

<style lang="scss">
@import "@/scss/main.scss";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.title{
  background-color: $darkBlue;	
  color:white;
  padding: 1em 0;
  margin: 0 auto;
}
</style>
