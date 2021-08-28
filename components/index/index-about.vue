<template>
  <div class="about fd-c jc-c" id="about">
    <div class="container fd-r ai-c">
      <img
        src="@/assets/images/about/item.svg"
        alt="Информация о нас"
        class="about-item"
      />
      <div class="card fd-c">
        <h2 class="h2-S t-black fd-c">
          <span class="h3 t-red mb-1">О нас</span>
          Мы точно знаем какая информация необходима для вашей целевой аудитории
        </h2>
        <p class="t-gray p my-4">
          Компания Unimed Group была основана специалистами в области
          интернет-маркетинга и медицины с опытом активного продвижения более 5
          лет. С момента основания до сегодняшнего дня команда выросла до 15
          высокопрофессиональных специалистов, обладающих всеми необходимыми
          компетенциями для реализации эффективного продвижения клиник.
        </p>
        <div class="info fd-r red">
          <div class="info-item t-white p-S t-b">Новые эффективные методы</div>
          <div class="info-item t-white p-S t-b">Только комплексный подход</div>
          <div class="info-item t-white p-S t-b">
            Ориентированность на множество показателей
          </div>
        </div>
        <a
          href="#services"
          v-smooth-scroll
          class="more p-L t-red mt-5 as-r fd-r ai-c t-b"
        >
          Подробнее
          <img
            src="@/assets/images/about/arrow.svg"
            alt="Подробнее"
            class="ml-1"
          />
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
          justify-content: space-between  ;
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
  }
}
</style>