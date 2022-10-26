<template>
  <div id="app">
    <app-navbar/>
    <catalog-section/>
    <app-footer/>
  </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue'
import AppNavbar from './components/AppNavbar.vue'
import CatalogSection from './components/CatalogSection.vue'


export default {
  name: 'App',
  components: {
    AppNavbar,
    CatalogSection,
    AppFooter
    
  }
}
</script>

<style>
</style>
