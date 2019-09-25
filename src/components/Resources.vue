<template>
  <div class="resources">
    <h1 class="resources_title">Web Accessibility REOSOURCES</h1>
    <div class="resources_content">
      <a
        href="https://www.w3.org/WAI/standards-guidelines/#wcag"
        target="_blank"
        rel="noopener noreferrer"
      >W3C (World Wide Web Consortium) Accessibility Standards Overview</a>
      <a
        href="https://www.w3.org/TR/WCAG21/"
        target="_blank"
        rel="noopener noreferrer"
      >Web Content Accessibility Guidelines (WCAG) 2.1</a>
      <a
        href="https://webaim.org/standards/wcag/checklist"
        target="_blank"
        rel="noopener noreferrer"
      >WebAIM's WCAG 2 Checklist</a>
      <a
        href="https://webaim.org/resources/contrastchecker/"
        target="_blank"
        rel="noopener noreferrer"
      >WebAim Color Contrast Tool</a>
      <a
        href="https://webaim.org/resources/linkcontrastchecker/"
        target="_blank"
        rel="noopener noreferrer"
      >Link Contrast checker</a>
      <a href="https://colororacle.org/" target="_blank" rel="noopener noreferrer">Color Oracle</a>
      <a
        href="https://webaim.org/techniques/fonts/"
        target="_blank"
        rel="noopener noreferrer"
      >WebAIM Fonts</a>
      <a href="https://fonts.google.com/" target="_blank" rel="noopener noreferrer">Google Fonts</a>
      <a href="here" target="_blank" rel="noopener noreferrer">Writing Clearly and Simply</a>
      <a href="here" target="_blank" rel="noopener noreferrer">Landmarks</a>
      <a href="here" target="_blank" rel="noopener noreferrer">ARIA</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Resources"
};
</script>

<style lang="scss">
@import "@/scss/main.scss";
.resources_title {
  color: $subHeader2;
  font-family: $subHeaderFont2;
}
.resources_content {
  color: $subcontent2;
  font-family: $subcontentFont2;
}
</style>