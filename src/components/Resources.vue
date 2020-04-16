<template>
  <div class="resources">
    <h2 class="resources_title" id="resources">Resources</h2>
    <div class="resources_container">
      <div class="resources_content">
        <ul class="resource_list">
          <li>
            <a
              class="resources_link"
              href="https://www.w3.org/WAI/standards-guidelines/#wcag"
              target="_blank"
              rel="noopener noreferrer"
            >W3C (World Wide Web Consortium) Accessibility Standards Overview</a>
          </li>
          <li>
            <a
              class="resources_link"
              href="https://www.w3.org/TR/WCAG21/"
              target="_blank"
              rel="noopener noreferrer"
            >Web Content Accessibility Guidelines (WCAG) 2.1</a>
          </li>
          <li>
            <a
              class="resources_link"
              href="https://webaim.org/standards/wcag/checklist"
              target="_blank"
              rel="noopener noreferrer"
            >WebAIM's WCAG 2 Checklist</a>
          </li>
          <li>
            <a
              class="resources_link"
              href="https://webaim.org/resources/contrastchecker/"
              target="_blank"
              rel="noopener noreferrer"
            >WebAim Color Contrast Tool</a>
          </li>
          <li>
            <a
              class="resources_link"
              href="https://webaim.org/resources/linkcontrastchecker/"
              target="_blank"
              rel="noopener noreferrer"
            >Link Contrast checker</a>
          </li>
          <li>
            <a
              class="resources_link"
              href="https://colororacle.org/"
              target="_blank"
              rel="noopener noreferrer"
            >Color Oracle</a>
          </li>
          <li>
            <a
              class="resources_link"
              href="https://webaim.org/techniques/fonts/"
              target="_blank"
              rel="noopener noreferrer"
            >WebAIM Fonts</a>
          </li>
          <li>
            <a
              class="resources_link"
              href="https://fonts.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >Google Fonts</a>
          </li>
          <li>
            <a
              class="resources_link"
              href="https://webaim.org/techniques/writing/"
              target="_blank"
              rel="noopener noreferrer"
            >Writing Clearly and Simply</a>
          </li>
          <li>
            <a
              class="resources_link"
              href="https://dequeuniversity.com/assets/html/jquery-summit/html5/slides/landmarks.html"
              target="_blank"
              rel="noopener noreferrer"
            >Landmarks</a>
          </li>
          <li>
            <a class="resources_link" href="https://www.w3.org/TR/wai-aria/" target="_blank" rel="noopener noreferrer">ARIA</a>
          </li>
        </ul>
      </div>
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
.resources {
  background-color: $grayLight;
  margin: auto;
}

.resources_title {
  color: $subHeader;
  padding: 1em 0;
  margin: 0 auto;
  font-family: $subHeaderFont;
}

.resources_container {
  padding: 0 1em 1.5em;
  color: $subcontent;
  font-family: $subcontentFont;
}

.resources_lists_title {
  color: $greenLight;
  margin: 1em auto;
  font-weight: 900;
  font-size: 1.3em;
}

.resource_list {
  list-style: none;
  margin: auto;
  padding: 0;
}
</style>