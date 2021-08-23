<template>
  <div class="services" id="services">
    <div class="container fd-c ai-c ta-c">
      <app-h2 text="Наши услуги" />
      <div class="toggler mt-5">
        <button
          class="h3 t-gray-light"
          :class="{ active: target.category == 'marketing' }"
          @click="target.category = 'marketing'"
        >
          Маркетинг
        </button>
        <button
          class="h3 t-gray-light"
          :class="{ active: target.category == 'business' }"
          @click="target.category = 'business'"
        >
          Бизнес-аналитика
        </button>
        <button
          class="h3 t-gray-light"
          :class="{ active: target.category == 'service' }"
          @click="target.category = 'service'"
        >
          Сервис
        </button>
      </div>
      <div class="row fd-r jc-c ai-s fw-w">
        <div
          v-for="(item, idx) in items"
          :key="idx"
          v-show="item.category === target.category"
          @click="setTarget(item)"
          :class="{'card-red': item === target}"
          class="card shadow white"
        >
          <h3 class="h3 t-b t-red">{{ item.name }}</h3>
          <p class="p-L t-b t-gray-light mt-3">
            {{ item.text ? item.text.substring(0, 52) + ".." : "" }}
          </p>
        </div>
      </div>
      <div class="info fd-r ai-b jc-b">
        <div class="card">
          <h3 class="h2-S t-b t-red">{{ target.name }}</h3>
          <p v-html="target.text" class="p t-black mt-4"></p>
        </div>
        <app-anchor text="Связаться" v-smooth-scroll red link="#contact" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    target: {
      category: "business",
      name: null,
      text: null,
    },
    items: [
      //business
      {
        name: "Исследование до открытия",
        text: "До открытия клиники или нового филиала сети медцентров проводятся исследования по выяснению спроса на услуги медцентра, определение профиля услуг, позиционирования будущей клиники. Важно определить реальных конкурентов в той локации, где планируется открытие клиники и составить оптимальный список специальностей врачей Полученные данные используются в бизнес-плане и позволяют планировать выручку будущего медицинского центра.",
        category: "business",
      },
      {
        name: "Оценка конкурентоспособности",
        text: "Цели и задачи: исследование конкурентной среды в зоне охвата клиники. <br/>- Оценка доли коммерческих медицинских центров в разрезе с потоком пациентов.<br/>- Сопоставления рекламной активности медицинских центров в зоне охвата.<br/>- Глубокий анализ. В случае, когда есть необходимость изучить один из направлений, возможно изучение потока пациентов в рамках данной специализации. <br/>- Выяснение уровня осведомленности о клинике позволяет оценить результат рекламной активности и сравнить этот показатель клиники с конкурентами.",
        category: "business",
      },
      {
        name: "",
      },
      //marketing
      { name: "Сайт", text: "брендинг", category: "marketing" },
      { name: "Брендбук", text: "брендинг", category: "marketing" },
      { name: "Брендинг", text: "брендинг", category: "marketing" },
      { name: "SEO", text: "брендинг", category: "marketing" },
      { name: "SMM", text: "брендинг", category: "marketing" },
      { name: "Копирайтинг", text: "брендинг", category: "marketing" },
      { name: "Фото - видео съемки", text: "брендинг", category: "marketing" },
      { name: "Ребрендинг", text: "брендинг", category: "marketing" },
    ],
  }),
  methods: {
    setTarget(item) {
     this.target = item
    },
  },
  created() {
    this.target = this.items[0]
  },
};
</script>

<style lang="scss" scoped>
.services {
  width: 100%;
  padding-bottom: 100px;
  background: url("@/assets/images/services/bg.svg") no-repeat right center;
  .container {
    .toggler {
      position: relative;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: -50%;
        display: block;
        width: 200%;
        height: 2px;
        background: #dbdbdb;
      }
      button {
        background: transparent;
        cursor: pointer;
        outline: 0;
        border: 0;
        text-align: center;
        padding: 15px 7.5px;
        margin-right: 25px;
        transition: 0.2s;
      }
      .active {
        position: relative;
        color: #ea544a;

        &:after {
          content: "";
          bottom: -1px;
          left: 0;
          position: absolute;
          width: 100%;
          height: 4px;
          border-radius: 4px;
          background: #ea544a;
          z-index: 10;
        }
      }
    }
    .row {
      margin-top: 35px;
      .card {
        max-width: calc(350px - 76px);
        width: 100%;
        border-radius: 20px;
        padding: 32px 38px;
        margin: 20px;
        &:hover {
          background: #ea544a;
          * {
            color: #ffffff;
          }
        }
      }
      .card-red {
        background: #ea544a;
        * {
          color: #ffffff;
        }
      }
    }
    .info {
      margin-top: 35px;
      width: 100%;
      .card {
        max-width: 700px;
        width: 100%;
      }
    }
  }
}
@media (max-width: 834px) {
  .services {
    .container {
      .row {
        .card {
          padding: 30px 25px;
          margin: 10px;
        }
      }
      .info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        a {
          align-self: center;
          margin-top: 30px;
        }
      }
    }
  }
}
</style>