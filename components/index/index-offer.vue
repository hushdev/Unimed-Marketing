


<template>
  <div class="offer fd-c" id="offer">
    <div class="screen fd-r ai-c bg-anim">
      <app-langs />
      <div class="container fd-r ai-c jc-b fd-c-M ai-t-M">
        <div class="card">
          <app-h1 :text="$t('offer.title1')" :sub="$t('offer.sub1')" />
        </div>
        <img src="@/assets/images/offer/offer-item1.svg" class="offer-item as-c-M" />
      </div>
    </div>
    <div class="screen fd-r ai-c red-offer bg-anim">
      <div class="container fd-r ai-c jc-b fd-c-M ai-t-M">
        <div class="card">
          <app-h1 :text="$t('offer.title2')" :sub="$t('offer.sub2')" red />
        </div>
        <img src="@/assets/images/offer/offer-item2.svg" class="offer-item as-c-M" />
      </div>
    </div>
    <div class="screen fd-r ai-c bg-anim">
      <div class="container fd-r ai-c jc-b fd-c-M ai-t-M">
        <div class="card">
          <app-h1 :text="$t('offer.title3')" />
        </div>
        <img src="@/assets/images/offer/offer-item3.svg" class="offer-item as-c-M" />
      </div>
    </div>
    <div class="screen fd-r ai-c red-offer bg-anim">
      <div class="container fd-r ai-c jc-b fd-c-M ai-t-M">
        <div class="card">
          <div class="title fd-r ai-c">
            <img src="@/assets/images/star.svg" class="mr-1" />
            <svg
              width="160"
              height="40"
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
          </div>

          <div class="buttons mt-6 fd-r ai-c">
            <app-anchor :text="$t('offer.button1')" link="#contact" class="mr-3" />
          </div>
        </div>
        <img src="@/assets/images/offer/offer-item4.svg" class="offer-item last-offer as-c-M" />
        <div class="socials container fd-r ai-c">
          <a href="https://www.instagram.com/unimed_trade/" target="_blank">
            <img src="@/assets/images/instagram.svg" alt="Instagram" />
          </a>
          <a href="https://t.me/Unmdbot" target="_blank">
            <img src="@/assets/images/telegram.svg" alt="Telegram" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template> 
<script>
export default {};
</script>
<style lang="scss" scoped>
.offer {
  position: sticky;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  .screen {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    min-height: 100vh;
    .card {
      width: 440px;
    }
    &:nth-child(1) {
      z-index: 1;
      background: url("@/assets/images/offer/bg1.svg") no-repeat top;
      }
    &:nth-child(2) {
      z-index: 2;
      background: url("@/assets/images/offer/bg2.svg") no-repeat center #EA544A;
      }
    &:nth-child(3) {
      z-index: 3;
      background: url("@/assets/images/offer/bg3.svg") no-repeat center #ffffff;
      }
    &:nth-child(4) {
      z-index: 4;
      background: url("@/assets/images/offer/bg2.svg") no-repeat center #EA544A;
      }
  }
  .socials {
    width: 100%;
    position: absolute;
    left: 50%;
    bottom: 30px;
    transform: translateX(-50%);
    a {
      margin-right: 15px;
    }
  }

  .offer-item {
    max-width: 618px;
    min-width: 100px;
    width: 100% !important;
    height: auto !important;
    &:hover {
      transform: scale(0.95);
    }
  }
  .last-offer {
    max-width: 350px !important;
  }
}

@media (max-width: 834px) {
  .offer {
    .screen {
      .card {
        width: 100%;
      }
      .langs {
        top: 15px;
      }
      .socials {
        display: none;
      }
    }
  }
  .offer-item {
    margin-top: 50px;
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .offer {
    .last-offer {
      max-width: 200px !important;
    }
  }
}
@media (max-width: 350px) {
  .offer {
    .last-offer {
      max-width: 150px !important;
    }
  }
}
</style>