<template>
  <div class="langs container fd-r jc-r" :class="{'red-langs': red}">
    <a
      v-for="locale in $i18n.locales"
      class="t-black h3 ml-1"
      :class="{active: $i18n.locale === locale.code}"
      :key="locale.code"
      :href="switchLocalePath(locale.code)"
    >{{locale.iso}}</a>
  </div>
</template>

<script>
export default {
  props: {
    red: {
      type: Boolean,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.langs {
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: transparent;
  a {
    text-decoration: none;
    cursor: pointer;
  }
  .active {
    color: #EA544A;
  }
}
.red-langs {
  a {
    text-decoration: none;
    color: #000000;
  }
  .active {
    color: #ffffff;
  }
}
</style>