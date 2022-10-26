<template>
  <div class="search">
    <input 
    class="search__input" 
    placeholder="Поиск по названию картины" 
    type="search" 
    v-model="searchValue"
    id="search" 
    name="search">
    <app-button @click="searchPosition(searchValue)">Найти</app-button>
  </div>
</template>

<script>
import AppButton from './AppButton.vue'
export default {
  components: {AppButton},

  data () {
    return {
      searchValue: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .search {
    width: 100%;
    max-width: 416px;
    max-height: 48px;
    display: flex;
    flex-wrap: nowrap;

    &__input {
      border-radius: 0;
      border: solid 1px #E1E1E1;
      padding: 13px 0 14px 16px;
      width: 100%;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 150%;
      color: #9F9F9F;

      &:active, &:focus {
        border: 1px solid #B5B5B5;
      }
    }
  }
</style>