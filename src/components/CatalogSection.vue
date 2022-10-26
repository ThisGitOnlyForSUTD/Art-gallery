<template>
<section class="catalog">
  <div class="catalog__content container">
    <h2 class="catalog__title">
      Картины эпохи Возрождения
    </h2>
    <div class="catalog__cards">
      <app-card 
      :card_data="card"
      v-for="card in cards" 
      :key="card.id"/>
    </div>
  </div>
</section>
</template>

<script>
import { cards } from '@/cards'
import AppCard from './ui/AppCard.vue'
export default {
  data () {
    return {
      cards
    }
  },

  components: {
    AppCard
  },
}
</script>

<style lang="scss" scoped>
.catalog {
  width: 100%;
  margin: 0 auto;

  &__content {
    margin-top: 45px;
  }

  &__title {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 150%;
    color: #343030;
    margin-bottom: 39px;
  }

  &__cards {
    display: flex;
  }
}
</style>