<template>
  <button class="button p-L t-red">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      required: true,
      type: String,
    },
    link: {
      required: false,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  background: #ffffff;
  padding: 12px 40px;
  border-radius: 10px;
  outline: 0;
  border: 2px solid transparent;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background: transparent;
    color: #ffffff;
    border: 2px solid #ffffff;
  }
}

@media (max-width:480px) {
  .button {
    padding: 10px 20px !important ;
    font-size: 14px !important;
  }
}
</style>