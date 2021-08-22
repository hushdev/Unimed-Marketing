<template>
  <h1 class="h1 fd-c ai-s" :class="{ 't-white': red }">
    <div class="t-black fd-r ai-c" :class="{ 't-white': red }">
      <img
        v-if="image"
        src="@/assets/images/star.svg"
        class="mr-3"
        alt="Логотип"
      />
      {{ text }}
    </div>
    <span v-if="sub" class="h1-S t-gray-light mt-3">{{ sub }}</span>
  </h1>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    sub: { type: String, required: false },
    red: { type: Boolean, required: false },
    image: { type: Boolean, required: false },
  },
};
</script>

<style lang="scss" scoped>
.t-white {
  color: #ffffff;
  span {
    color: #ebebeb;
    max-width: 346px;
    width: 100%;
  }
}
</style>