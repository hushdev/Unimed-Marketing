<template>
  <div class="app">
    <app-loader />
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
  .screen {
    position: static;
    top: 0;
    left: 0;
    right: 0;
    z-index: 5;
    background: #ffffff;
  }
}

.bg-anim {
  animation: bg 3.5s ease-in-out infinite;
}
.bg-anim-sm {
  animation: bgSM 3.5s ease-in-out infinite;
}

@keyframes bg {
  0% {
    background-size: 100%;
  }
  50% {
    background-size: 120%;
  }
  100% {
    background-size: 100%;
  }
}
@keyframes bgSM {
  0% {
    background-size: 100%;
  }
  50% {
    background-size: 110%;
  }
  100% {
    background-size: 100%;
  }
}
</style>
