<template>
  <div class="container">
    <!-- <div > -->
      <DesignBasics/>
      <Resources/>
    <!-- </div> -->
    <LearnMore/>
  </div>
</template>

<script>
import DesignBasics from '@/components/DesignBasics.vue'
import Resources from '@/components/Resources.vue'
import LearnMore from '@/components/LearnMore.vue'

export default {
  name: 'Home',
  components: {
    DesignBasics,
    Resources,
    LearnMore
  }
}
</script>