<template>
  <div class="about fd-c jc-c  bg-anim" id="about">
    <div class="container fd-r ai-c">
      <img src="@/assets/images/about/item.svg" alt="Информация о нас" class="about-item" />
      <div class="card fd-c">
        <h2 class="h2-S t-black fd-c">
          <span class="h3 t-red mb-1">{{$t('about.underTitle')}}</span>
          {{$t('about.title')}}
        </h2>
        <p class="t-gray p my-4">{{$t('about.p')}}</p>
        <div class="info fd-r red">
          <div class="info-item t-white p-S t-b">{{$t('about.item1')}}</div>
          <div class="info-item t-white p-S t-b">{{$t('about.item2')}}</div>
          <div class="info-item t-white p-S t-b">{{$t('about.item3')}}</div>
        </div>
        <a href="#services" v-smooth-scroll class="more p-L t-red mt-5 as-r fd-r ai-c t-b">
          {{$t('about.button')}}
          <img src="@/assets/images/about/arrow.svg" alt="Подробнее" class="ml-1" />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  padding: 100px 0;
  min-height: calc(100vh - 200px);
  width: 100%;
  background: url("@/assets/images/about/bg.svg") no-repeat;
  background-size: 100%;
  background-position: center left;
  z-index: 10;
  box-shadow: 10px -15px 10px #4e4e4e1a;
  .container {
    img.about-item {
      max-width: 548px;
      min-width: 200px;
      width: 100%;
      &:hover {
        transform: scale(0.95);
      }
    }
    .card {
      width: 100%;
      .info {
        border-radius: 14px;
        padding: 14px 0;
        box-shadow: 4px 4px 8px rgba(128, 128, 128, 0.33);
        .info-item {
          padding: 0 28px;
          max-width: 221px;
          min-width: 100px;
          width: auto;
          display: flex;
          align-items: center;
          &:nth-child(2) {
            border-left: 1px solid rgba(255, 255, 255, 0.28);
            border-right: 1px solid rgba(255, 255, 255, 0.28);
          }
        }
      }
      .more {
        text-decoration: none;
        img {
          transform: translateY(2px);
        }
        &:hover {
          img {
            transform: translateX(10px) translateY(2px);
          }
        }
      }
    }
  }
}

@media (max-width: 1420px) {
  .about {
    .container {
      flex-direction: row-reverse;
      .card {
        margin-right: 20px;
        .info {
          .info-item {
            padding: 5px 10px;
          }
        }
        .more {
          align-self: flex-start;
        }
      }
    }
  }
}

@media (max-width: 834px) {
  .about {
    background-position: bottom left;

    .container {
      flex-direction: column-reverse;
      img.about-item {
        max-width: 508px;
      }
      .card {
        margin: 0 0 34px 0;
        .info {
          display: flex;
          justify-content: space-between;
          .info-item {
            font-size: 14px;
            text-align: center;
          }
        }
      }
    }
  }
}

@media (max-width: 480px) {
  .about {
    padding: 40px 0;
    .container {
      .card {
        .info {
          // display: flex;
          // flex-direction: column;
          // align-items: center;
          .info-item {
            min-width: unset;
            font-size: 12px;
            padding: 0;
          }
        }
      }
    }
  }
}

@media (max-width: 350px) {
  .about {
    .container {
      .card {
        .info {
          .info-item {
            font-size: 10px;
          }
        }
      }
    }
  }
}
</style>