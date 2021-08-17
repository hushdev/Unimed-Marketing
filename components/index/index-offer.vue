<template>
  <div class="offer fd-r ai-c">
    <div class="container fd-r ai-c jc-b">
      <div class="langs">
        <span class="t-black h3">Uz</span>
        <span class="t-red h3 ml-1">Ru</span>
      </div>
      <div class="card">
        <h1 class="h1 t-black">Маркетинг и аналитика клиник в Узбекистане</h1>
        <p class="h1-S t-gray-light mt-3">
          Гарантированное увеличение <br />
          потока пациентов
        </p>
        <div class="buttons mt-5">
          <btn-primary text="Подробнее" />
          <btn-secondary text="Смотреть видео" class="ml-4" />
        </div>
      </div>
      <img src="@/assets/images/offer/offer-item.svg" class="offer-item" />
    </div>
  </div>
</template> 

<style lang="scss" scoped>
.offer {
  min-height: 100vh;

  .container {
    position: relative;
    min-height: 100vh;

    .langs {
      position: absolute;
      right: 0;
      top: 30px;
      span {
        cursor: pointer;
      }
    }
    .card {
      max-width: 522px;
      width: 100%;
    }
    .offer-item {
      max-width: 722px;
      max-height: 450px;
      width: 100%;
      height: auto;
    }
  }
}
</style>