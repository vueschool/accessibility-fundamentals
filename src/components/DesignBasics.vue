<template>
  <div class="designBasics">
    <img class="logo" src="@/assets/A11Y.svg" />
    <div>
      <h2 class="designBasics_title" id="title">Content Design Basics</h2>
      <ul class="designBasics_ul">
        <li>Meaningful Text Labels</li>
        <li>Meaningful Alt Text in images</li>
        <li>Legible font-family</li>
        <li>Font-size (.75em - 0.875em)</li>
        <li>Large Font-size (1.2 bold or 1.5 em)</li>
        <li>Clickable areas are 9mm in size</li>
        <li>Descripvite buttons for actions</li>
        <li>Descripvite links for navigation</li>
        <li>Color Contrast</li>
        <li>Desing keyboard or speech only use</li>
        <li>Responsive Desing</li>
        <li>Simple and consistent layouts</li>
        <li>Content is short, clear and simple</li>
        <li>Semantic HTML</li>
        <li>Provide enough spacing</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "DesignBasics"
};
</script>

<style lang="scss">
@import "@/scss/main.scss";
.designBasics {
  padding: 0.5em 1.5em;
  max-width: 400px;
  margin: auto;
}

.logo {
  margin: 2em auto 1em;
}

.designBasics_title {
  color: $subHeader;
  font-family: $subHeaderFont;
  font-size: 2em;
}

.designBasics_ul {
  color: $subcontent;
  font-family: $subcontentFont;
  margin: auto;
  padding: 0;
  text-align: left;
}
</style>