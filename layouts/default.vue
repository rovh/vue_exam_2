<template>
  <div>
    <HeaderComponent />
    <Nuxt />
    <div class="footer__wrapper">
      <FooterComponent />
    </div>
  </div>
</template>
<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
  name: 'DefaultLayout',
  components: {
    HeaderComponent,
    FooterComponent,
  },
}
</script>

<style>
.footer__wrapper {
  position: fixed;
  width: 100%;
  bottom: 0;
}
</style>
