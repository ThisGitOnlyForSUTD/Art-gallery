<template>
<div
  class="card" 
  :style="(card_data.active === false) ? 'opacity: 30%; cursor: not-allowed' : 'opacity: 100%;'">
    <img :src="require('../../assets/img/'+card_data.img)" 
      alt="cartina" 
      class="card__img">
    <h4
      class="card__name">
      {{ card_data.name }}
    </h4>
    <div class="card__buy" v-if="card_data.active === true">
      <p class="card__price">
      <span class="card__price_old">
        {{ card_data.oldPrice }}
      </span>
      <br>
      {{ card_data.price }}
    </p>
      <app-button>
        Купить
      </app-button>
    </div>
    <p class="card__empty" v-else>
      Продана на аукционе
    </p>
</div>
</template>

<script>
import AppButton from './AppButton.vue'

export default {

  data () {
    return {
    }
  },
  components: {
    AppButton
  },

  props: {
    card_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>
 .card {
    width: 100%;
    max-width: 280px;
    border: solid 1px #E1E1E1;

    &__empty {
      margin: 34px 0 0 24px;
      min-width: 186px;
    }

    &:not(:last-child) {
      margin-right: 32px;
    }

    &__img {
      border-bottom: solid 1px #E1E1E1;
      cursor: pointer;
    }

    &__name {
      margin: 20px 36px 22px 24px;
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 150%;
      color: #343030;
      cursor: pointer;
    }

    &__buy {
      margin: 0 24px 24px 24px;
      display: flex;
    }

    &__price, &__empty {
      width: 100%;
      max-width: 95px;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: #343030;
      margin-right: 21px;

      &_old {
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 150%;
        text-decoration-line: line-through;
        color: #A0A0A0;
      }
    }
  }
</style>