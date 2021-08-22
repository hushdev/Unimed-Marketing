<template>
  <button class="button p-L t-white">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  background: transparent;
  color: #ffffff;
  border-radius: 10px;
  padding: 12px 40px;
  border-radius: 10px;
  outline: 0;
  font-weight: 600;
  border: 2px solid #ffffff;
  &:hover {
    background: #ffffff;
    color: #EA544A;
  }
}
</style>