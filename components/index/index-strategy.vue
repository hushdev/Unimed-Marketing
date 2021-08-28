<template>
  <div class="strategy" id="strategy">
    <div class="container">
      <div class="heading">
        <app-h2 text="Стратегия развития" />
        <p class="p t-black mt-4">
          До открытия клиники или нового филиала сети медцентров проводятся
          исследования по выяснению спроса на услуги медцентра, определение
          профиля услуг, позиционирования будущей клиники. Важно определить
          реальных конкурентов в той локации, где планируется открытие клиники и
          составить оптимальный список специальностей врачей Полученные данные
          используются в бизнес-плане и позволяют планировать выручку будущего
          медицинского центра.
        </p>
      </div>
      <div class="strategy-wrap mt-5">
        <div class="row fd-r ai-c">
          <div class="cards">
            <div class="card">
              <h3 class="h3 t-red">Разработка предложения по сегментации услуг клиники</h3>
              <ul class="t-black">
                <li class="p-XL">Анализ рынка медицинских услуг</li>
                <li class="p-XL">Прогноз и динамика</li>
                <li class="p-XL">Доли различных сегментов</li>
                <li class="p-XL">Динамика по сегменту</li>
                <li class="p-XL">Экспертное мнение по выбранным</li>
                <li class="p-XL">сегментам (привлечение специалистов по Public Health)</li>
              </ul>
            </div>
            <div class="card">
              <h3 class="h3 t-red">Разработка предложения по сегментации услуг клиники</h3>
              <ul class="t-black">
                <li class="p-XL">Работники общественного питания, торговли</li>
                <li class="p-XL">Сотрудники строительных, нефтяных компаний</li>
                <li class="p-XL">Спортсмены и спортивные учреждения Динамика по сегменту</li>
                <li class="p-XL">
                  Сотрудники торговых и дипломатических миссий в Республики
                  Узбекистан
                </li>
              </ul>
            </div>
          </div>
          <img src="@/assets/images/strategy/item1.svg" alt="Стратегия" />
        </div>
        <div class="row fd-r jc-b ai-c">
          <img src="@/assets/images/strategy/item2.svg" alt="Стратегия" />

          <div class="cards">
            <div class="card">
              <h3 class="h3 t-red">Сервис менеджмент</h3>
              <ul class="t-black">
                <li class="p-XL">
                  Выявление потребностей в тренинге медицинских представителей и
                  торговых агентов
                </li>
                <li class="p-XL">
                  Разработка ключевых преимуществ клиники с учетом местного
                  рынка здравоохранения
                </li>
              </ul>
            </div>
            <div class="card">
              <h3 class="h3 t-red">Маркетинг</h3>
              <ul class="t-black">
                <li class="p-XL">Разработка акций</li>
                <li class="p-XL">Digital Marketing</li>
                <li class="p-XL">Многоязычный сайт (узб, рус, тадж, афг.)</li>
                <li class="p-XL">Запуск -Call - центра</li>
                <li class="p-XL">Повышение лояльности к клинике в целом (PR компания)</li>
                <li class="p-XL">Рекламная кампания в соседних республиках</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.strategy {
  padding-bottom: 100px;
  max-width: 1280px !important;
  width: 100%;
  .container {
    .heading {
      p {
        max-width: 700px;
        width: 100%;
      }
    }
    .strategy-wrap {
      padding: 0 0 0 81px;
      background: url("@/assets/images/strategy/bg.svg") no-repeat;
      background-size: 100%;
      background-position-y: center;
      .row {
        justify-content: space-between;
        &:nth-child(2) {
          margin-top: 228px;
          .cards {
            .card {
              h3 {
                &::before {
                  top: -15px;
                  left: calc(100% - 32px);
                }
              }
              ul {
                padding-right: 40px;
              }
            }
          }
        }
        .cards {
          max-width: 434px;
          width: 100%;
          .card {
            h3 {
              position: relative;
              &::before {
                content: "";
                display: block;
                width: 60px;
                height: 60px;
                background: #ea544a;
                position: absolute;
                left: -107px;
                top: 0;
                border-radius: 50%;
              }
            }
            &:first-child {
              margin-bottom: 45px;
            }
            ul {
              padding-top: 15px;
              transform: translateX(25px);
              li {
                font-size: 22px;
                margin-top: 15px;
              }
            }
          }
        }
        img {
          max-width: 550px;
          min-width: 100px;
          width: 100%;
          height: auto;
          &:hover {
            transform: scale(.95);
          }
        }
      }
    }
  }
}
@media (max-width: 1330px) {
  .strategy {
    .container {
      .strategy-wrap {
        background: url("@/assets/images/strategy/max-bg.svg") no-repeat;
        background-size: 100%;
        background-position-y: center;
        .row {
          &:nth-child(2) {
            .cards {
              margin-right: 0 !important;
              margin-left: 40px;
              .card {
                h3 {
                  &::before {
                    left: calc(100% - 20px);
                  }
                }
              }
            }
          }
          .cards {
            max-width: 319px;
            margin-right: 40px;
            .card {
              h3 {
                &::before {
                  width: 30px;
                  height: 30px;
                  left: -92px;
                }
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 834px) {
  .strategy {
    .container {
      .strategy-wrap {
        padding: 0 0 0 30px;
        .row:nth-child(1) {
          .cards {
            .card {
              h3 {
                &::before {
                  top: 0 !important;
                  left: -41px !important;
                }
              }
            }
          }
        }
        .row:nth-child(2) {
          .cards {
            .card {
              h3 {
                &::before {
                  top: 0 !important;
                  left: calc(100% - 18px) !important;
                }
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 700px) {
  .strategy {
    .container {
      .strategy-wrap {
        padding: 0 0 0 30px;
        background: url("@/assets/images/strategy/mini-bg.svg") no-repeat;
        background-size: 100% cover !important;
        .row {
          flex-direction: column;
          align-items: flex-start;
          &:nth-child(2) {
            flex-direction: column-reverse;
            margin-top: 40px;
            .cards {
              margin-left: 0;
              .card {
                h3 {
                  &::before {
                    top: 0 !important;
                    left: -41px !important;
                  }
                }
              }
            }
          }
          img {
            max-width: 350px;
            align-self: center;
            margin-top: 40px;
          }
        }
      }
    }
  }
}

@media (max-width: 480px) {
  .strategy {
    padding: 0 0 40px 0;
    .container {
      .strategy-wrap {
        .cards {
          .card {
            ul li {
              font-size: 16px !important;
            }
          }
        }
      }
    }
  }
}
</style>