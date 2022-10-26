<template>
  <button
  class="button"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .button {
    width: 122px;
    background: #403432;
    height: 48px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #FFFFFF;

    &:hover {
      background: #776763;
    }
  }
</style>