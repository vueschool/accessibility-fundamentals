<template>
  <div class="LearnMore">
    <div>
      Want to Learn More?
      <span class="button-signUp">Sign Up For a Class</span>
    </div>
    
    <p>Learn about WCAG 2.1 <a class="link" href="">here</a></p>
  </div>
</template>

<script>
export default {
  name: "LearnMore"
};
</script>

<style lang="scss">
@import "@/scss/main.scss";
.LearnMore{
  color: black
}
.button-signUp{
  color: $buttonText;
  background-color: $buttonBackground
}
.link{
  color: $links
}
</style>