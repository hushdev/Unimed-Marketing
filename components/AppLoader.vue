<template>
  <div class="loader" :class="{hide: loaded}">
    <div class="animation-wrap">
      <div class="star-wrap">
        <svg
          width="45"
          height="45"
          viewBox="0 0 61 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="star"
        >
          <path
            d="M40.7905 45.8926L30.49 37.3774L19.7773 45.4806V58.116L30.49 49.7381L40.7905 58.2533V45.8926Z"
            fill="white"
          />
          <path
            d="M49.2568 24.7893L37.9528 31.9189L42.309 44.625L54.3136 48.5674L49.6965 35.7756L61.0004 28.646L49.2568 24.7893Z"
            fill="white"
          />
          <path
            d="M31.7451 10.3304L34.8926 23.319L48.3245 23.2473L55.8931 13.1295L42.2967 13.4212L39.1492 0.432598L31.7451 10.3304Z"
            fill="white"
          />
          <path
            d="M12.4979 22.819L25.6112 23.5401L29.8741 10.8024L22.2491 0.157676L18.5409 12.9304L5.08146 12.381L12.4979 22.819Z"
            fill="white"
          />
          <path
            d="M18.209 44.4699L23.1552 32.0544L12.1574 24.3428L0.130778 28.2175L11.39 35.8449L6.44387 48.2604L18.209 44.4699Z"
            fill="white"
          />
        </svg>
      </div>
      <span>
        <svg
          width="120"
          height="25"
          viewBox="0 0 144 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="text"
        >
          <path d="M61.1306 0.919434H57.3142V27.8157H61.1306V0.919434Z" fill="white" />
          <path
            d="M0.614063 1.01079L4.70299 0.919922C4.70299 0.919922 4.52126 8.6435 4.52126 18.1844C7.51983 27.3041 16.7881 23.9998 18.0602 18.2753L18.0603 1.01079H21.9675L22.0947 17.2757C22.0947 20.8195 18.878 27.907 10.9727 27.907C3.18616 27.907 0.614063 20.1834 0.614063 18.1844V1.01079Z"
            fill="white"
          />
          <path
            d="M28.6915 27.7248V0.919434H32.5079L46.4103 19.456V0.919434H50.3175V27.7248H46.4103L32.5079 9.00647V27.7248H28.6915Z"
            fill="white"
          />
          <path
            d="M72.1252 27.7247H68.218V1.01025H72.1252L80.5757 16.3665L88.8445 1.01025H92.9335V27.7247H89.0262V11.0963L81.8479 24.2719H79.3036L72.1252 11.0963V27.7247Z"
            fill="white"
          />
          <path d="M115.559 5.09907H99.1124V1.28271H115.559V5.09907Z" fill="white" />
          <path d="M115.559 12.2775H99.1124V16.4573H115.559V12.2775Z" fill="white" />
          <path d="M115.559 23.7265H99.1124V27.5429H115.559V23.7265Z" fill="white" />
          <path
            d="M120.557 1.10107V5.28089H130.007C144 5.55349 140.365 22.5647 131.642 23.454H124.373V12.3684H120.557V27.7247H131.461C136.549 27.3612 144 23.9992 144 13.6405C144 5.62818 136.731 1.28281 131.461 1.10107H120.557Z"
            fill="white"
          />
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loaded: false,
  }),
  mounted() {
    document.onreadystatechange = () => {
      setTimeout(() => {
        this.loaded = true;
      }, 3500);
    };
  },
};
</script>


<style lang="scss">
.loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #ea544a;
  z-index: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.7s;

  .animation-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    .star-wrap {
      transform: scale(100) translateX(100px);
      opacity: 0;
      animation: start 1s ease-in-out forwards;

      .star {
        animation: rotate 1s 1.5s infinite;
      }
    }
    .text {
      margin-left: 7px;
      margin-top: 3px;
      transform: translateX(-50px);
      opacity: 0;
      animation: show 0.4s .9s ease-in-out forwards;
    }
  }
}
.hide {
  opacity: 0;
  transition: 0.7s;
  z-index: -5;
}
@keyframes start {
  0% {
    transform: scale(100);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes show {
  0% {
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>