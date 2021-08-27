<template>
  <div class="offer fd-c" id="offer">
    <div class="screen fd-r ai-c">
      <div class="langs container fd-r jc-r white">
        <span class="t-black h3">Uz</span>
        <span class="t-red h3 ml-1">Ru</span>
      </div>
      <div class="container fd-r ai-c jc-b fd-c-M ai-t-M">
        <div class="card">
          <app-h1 text="Аналитика" sub="Тенденция и прогноз" />
        </div>
        <img src="@/assets/images/offer/offer-item1.svg" class="offer-item as-c-M" />
      </div>
    </div>
    <div class="screen fd-r ai-c red-offer">
      <div class="langs container fd-r jc-r">
        <span class="t-black h3">Uz</span>
        <span class="t-red h3 ml-1">Ru</span>
      </div>
      <div class="container fd-r ai-c jc-b fd-c-M ai-t-M">
        <div class="card">
          <app-h1 text="Маркетинг и стратегия " sub="Формирование маркетинг-стратегии " red />
        </div>
        <img src="@/assets/images/offer/offer-item2.svg" class="offer-item as-c-M" />
      </div>
    </div>
    <div class="screen fd-r ai-c">
      <div class="langs container fd-r jc-r">
        <span class="t-black h3">Uz</span>
        <span class="t-red h3 ml-1">Ru</span>
      </div>
      <div class="container fd-r ai-c jc-b fd-c-M ai-t-M">
        <div class="card">
          <app-h1 text="Гарантированный результат" />
        </div>
        <img src="@/assets/images/offer/offer-item3.svg" class="offer-item as-c-M" />
      </div>
    </div>
    <div class="screen fd-r ai-c red-offer">
      <div class="langs container fd-r jc-r">
        <span class="t-black h3">Uz</span>
        <span class="t-red h3 ml-1">Ru</span>
      </div>
      <div class="container fd-r ai-c jc-b fd-c-M ai-t-M">
        <div class="card">
          <app-h1 text="UNIMED" sub="Лучшие решения для частных клиник" red image />
          <div class="buttons mt-6 fd-r ai-c">
            <app-anchor text="Подробнее" link="#main" class="mr-3" />
            <btn-secondary text="Смотреть видео" />
          </div>
        </div>
        <img src="@/assets/images/offer/offer-item4.svg" class="offer-item last-offer as-c-M" />
        <div class="socials container fd-r ai-c">
          <a href>
            <img src="@/assets/images/facebook.svg" alt="Facebook" />
          </a>
          <a href>
            <img src="@/assets/images/instagram.svg" alt="Instagram" />
          </a>
          <a href>
            <img src="@/assets/images/telegram.svg" alt="Telegram" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template> 

<style lang="scss" scoped>
.offer {
  position: sticky;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  .red-offer {
    .langs {
      span:nth-child(1) {
        color: #404040;
      }
      span:nth-child(2) {
        color: #ffffff;
      }
    }
  }
  .screen {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    // width: calc(100%);
    min-height: 100vh;
    .card {
      width: 440px;
    }
    &:nth-child(1) {
      z-index: 1;
      background: url("@/assets/images/offer/bg1.svg") no-repeat top;
      background-size: contain 100%;
    }
    &:nth-child(2) {
      z-index: 2;
      background: url("@/assets/images/offer/bg2.svg") no-repeat center #ea544a;
      background-size: cover !important;
    }
    &:nth-child(3) {
      z-index: 3;
      background: url("@/assets/images/offer/bg3.svg") no-repeat center #ffffff;
      background-size: cover !important;
    }
    &:nth-child(4) {
      z-index: 4;
      background: url("@/assets/images/offer/bg2.svg") no-repeat center #ea544a;
      background-size: cover !important;
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
  .langs {
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    background: transparent;
    span {
      cursor: pointer;
    }
  }

  .offer-item {
    max-width: 618px;
    min-width: 100px;
    width: 100% !important;
    height: auto !important;
    transition: 0.5s ease-in-out;
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
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4) {
        background-size: contain !important;
      }
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
@media (max-width:350px) {
  .offer {
    .last-offer {
      max-width: 150px !important;
    }
  }
}
</style>