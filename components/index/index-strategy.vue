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
        <div class="strategy-wrap mt-5">
          <div class="row fd-r ai-c">
            <div class="cards">
              <div class="card">
                <h3 class="h3 t-red">
                  Разработка предложения по сегментации услуг клиники
                </h3>
                <ul class="p-XL t-black">
                  <li>Анализ рынка медицинских услуг</li>
                  <li>Прогноз и динамика</li>
                  <li>Доли различных сегментов</li>
                  <li>Динамика по сегменту</li>
                  <li>Экспертное мнение по выбранным</li>
                  <li>сегментам (привлечение специалистов по Public Health)</li>
                </ul>
              </div>
              <div class="card">
                <h3 class="h3 t-red">
                  Разработка предложения по сегментации услуг клиники
                </h3>
                <ul class="p-XL t-black">
                  <li>Работники общественного питания, торговли</li>
                  <li>Сотрудники строительных, нефтяных компаний</li>
                  <li>
                    Спортсмены и спортивные учреждения Динамика по сегменту
                  </li>
                  <li>
                    Сотрудники торговых и дипломатических миссий в Республики
                    Узбекистан
                  </li>
                </ul>
              </div>
            </div>
            <img src="@/assets/images/strategy/item1.svg" alt="Стратегия" />
          </div>
          <div class="row fd-r ai-c">
            <img src="@/assets/images/strategy/item2.svg" alt="Стратегия" />

            <div class="cards">
              <div class="card">
                <h3 class="h3 t-red">Сервис менеджмент</h3>
                <ul class="p-XL t-black">
                  <li>
                    Выявление потребностей в тренинге медицинских представителей
                    и торговых агентов
                  </li>
                  <li>
                    Разработка ключевых преимуществ клиники с учетом местного
                    рынка здравоохранения
                  </li>
                </ul>
              </div>
              <div class="card">
                <h3 class="h3 t-red">Маркетинг</h3>
                <ul class="p-XL t-black">
                  <li>Разработка акций</li>
                  <li>Digital Marketing</li>
                  <li>Многоязычный сайт (узб, рус, тадж, афг.)</li>
                  <li>Запуск -Call - центра</li>
                  <li>Повышение лояльности к клинике в целом (PR компания)</li>
                  <li>Рекламная кампания в соседних республиках</li>
                </ul>
              </div>
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
      background: url("@/assets/images/strategy/bg.svg") no-repeat left;
      background-size: contain;
      .row {
        justify-content: space-between;
        &:nth-child(2) {
          margin-top: 228px;
          .cards {
            .card {
              h3 {
                &::before {
                  top: -15px;
                  left: -123px;
                }
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
          width: 100%;
        }
      }
    }
  }
}
</style>