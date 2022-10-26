<template>
  <nav class="navbar">
    <div class="navbar__content">
      <ul class="navbar__items">
        <li class="navbar__item" v-for="item in items" :key="item+item.id">
          <a class="navbar__link" href="#">
            {{ item.text }}
          </a>
        </li>
      </ul>
      <app-search/>
    </div>
  </nav>
</template>

<script>
import AppSearch from './ui/AppSearch.vue'

export default {
  components: { AppSearch },
  data () {
    return {
      items: [
        {id: 1, text: "Каталог"},
        {id: 1, text: "Доставка"},
        {id: 1, text: "Оплата"},
        {id: 1, text: "Контакты"},
        {id: 1, text: "О компании"}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  margin: 0 auto;
  width: 100%;
  border-bottom: 1px solid #E1E1E1;

  &__content {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding: 24px 0 24px 0;
    align-items: center;
  }

  &__items {
  width: 100%;
  max-width: 542px;
  display: flex;
  margin-right: 162px;
  }

  &__item {

    &:not(:last-child) {
      margin-right: 48px;
    }
  }

  &__link {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 150%;
    color: #343030;
  }
}
</style>
