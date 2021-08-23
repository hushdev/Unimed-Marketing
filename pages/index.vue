<template>
  <div class="app">
    <index-offer />

    <div class="screen fd-c ai-c" id="main">
      <index-about />
      <index-services />
      <index-strategy />
      <index-faq />
      <index-contact />
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
};
</script>

<style lang="scss">
.app {
  // overflow-x: hidden;
  .screen {
    position: static;
    top: 0;
    left: 0;
    right: 0;
    z-index: 5;
    // width: 100%;
    background: #ffffff;
  }
}

</style>
