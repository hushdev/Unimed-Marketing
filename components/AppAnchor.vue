<template>
  <a
    :href="link"
    v-smooth-scroll
    class="button p-L t-red"
    :class="{ 'btn-red': red }"
  >
    {{ text }}</a
  >
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    red: {
      type: Boolean,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-red {
  background: #EA544A !important;
  color: #ffffff !important;
  &:hover {
    background: transparent !important;
    border: 2px solid #EA544A !important;
    color: #EA544A !important;
  }
}
.button {
  background: #ffffff;
  padding: 12px 40px;
  border-radius: 10px;
  outline: 0;
  border: 2px solid transparent;
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
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