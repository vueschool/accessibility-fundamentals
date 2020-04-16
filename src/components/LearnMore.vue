<template>
  <div class="learnMore">
    <div class="learnMore_resource">
      <a
        class="learnMore_links"
        href="https://www.w3.org/WAI/standards-guidelines/wcag/#versions"
        target="_blank"
        rel="noopener noreferrer"
      >Learn</a>
    </div>
    <div class="learnMore_resource">
      <a
        class="learnMore_links"
        href="https://www.w3.org/TR/WCAG21/"
        target="_blank"
        rel="noopener noreferrer"
      >Explore</a>
    </div>
    <div class="learnMore_resource">
      <a
        class="learnMore_links"
        href="https://a11yproject.com/patterns/"
        target="_blank"
        rel="noopener noreferrer"
      >Help</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "LearnMore"
};
</script>

<style lang="scss">
@import "@/scss/main.scss";

.learnMore {
  max-width: 350px;
  margin: 1em auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  .learnMore_resource {
    .learnMore_links {
      color: $links;
      font-family: $Roboto;

      &:visited {
        color: $linksVisited;
      }

      &:hover,
      &:focus {
        color: $linksHoverFocus;
      }
    }
  }
}
</style>