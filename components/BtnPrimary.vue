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
  background: #ea544a;
  padding: 12px 40px;
  border-radius: 10px;
  outline: 0;
  border: 2px solid transparent;
  font-weight: 600;
  &:hover {
    background: transparent;
    color: #ea544a;
    border: 2px solid #ea544a;
  }
}
</style>