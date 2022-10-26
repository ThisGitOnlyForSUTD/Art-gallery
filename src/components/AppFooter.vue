<template>
  <footer class="footer">
    <div class="footer__content container">
      <ul class="footer__items">
        <li class="footer__item" v-for="item in items" :key="item+item.id">
          <a class="footer__link" href="#">
            {{ item.text }}
          </a>
        </li>
      </ul>
      <a href="tel:+78125555555" class="footer__phone">
        <img src="@/assets/img/phone.svg" alt="phone" class="footer__phone-svg">
        +7 (812) 555-55-55
      </a>
      <a 
        href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%95%D1%84%D0%B8%D0%BC%D0%BE%D0%B2%D0%B0,+3,+%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3,+190031/data=!4m2!3m1!1s0x46963101c7c878af:0x3849951a11d37622?sa=X&ved=2ahUKEwjPn8bA6fv6AhUQiYsKHQhaCLsQ8gF6BAgJEAE" 
        class="footer__place">
        <img src="@/assets/img/place.svg" alt="place" class="footer__place-svg">
        г. Санкт-Петербург, ул. Ефимова, 3
      </a>
    </div>
  </footer>
</template>

<script>
export default {
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
.footer {
  margin: 0 auto;
  width: 100%;
  background: #ECEAEA;
  position:fixed;
  bottom:0;
  left:0;

  &__content {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding: 37px 0 38px 0;
    align-items: center;
  }

  &__items {
  width: 100%;
  max-width: 542px;
  display: flex;
  margin-right: 127px;
  }

  &__item {
   list-style-type: none;

    &:not(:last-child) {
      margin-right: 48px;
    }
  }

  &__link {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 150%;
    color: #555555;
    text-decoration: none;
  }
  
  &__phone, &__place {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 150%;
    color: #555555;
    text-decoration: none;
    
    &-svg {
      padding-right: 9px;
    }
  }

  &__place {
    margin-left: 54px;
  }
}
</style>
