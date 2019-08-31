<template>
  <div class="designBasics">
    <h1 class="designBasics_title">Content Design Basics</h1>
    <ul class="designBasics_ul">
      <li>Always use Meaningful Text Labels / Alt Text in images</li>
      <li>Use legible font-family and font-size (12-14 pixels)</li>
      <li>Clickable areas of 48x48dp (physical size of 9mm)</li>
      <li>Buttons for actions</li>
      <li>Links for navigation</li>
      <li> Use color palettes with good color contrast
        <ul>
          <li>design for keyboard or speech only use</li>
          <li>design with mobile and touch screen in mind</li>
        </ul>
      </li>
      <li>use simple colours</li>
      <li>build simple and consistent layouts</li>
      <li>keep content short, clear and simple</li>
      <li>make buttons descriptive</li>
      <li>use good contrasts and a readable font size</li>
      <li>break up content with sub-headings, images and videos</li>
      <li>structure content using HTML5
        <ul>
          <li>make large clickable actions</li>
          <li>give form fields space</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DesignBasics"
};
</script>

<style lang="scss">
@import "@/scss/main.scss";
  .designBasics{
    background-color: $subBackground1;
  }
  .designBasics_title{
    color: $subHeader1;
    font-family: $subHeaderFont1;
  }
  .designBasics_ul{
    color: $subcontent1;
    font-family: $subcontentFont1;
  }
</style>