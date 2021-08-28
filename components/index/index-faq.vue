<template>
  <div class="faq" id="faq">
    <div class="container">
      <app-h2 text="Часто задаваемые вопросы" />
      <p class="h3 t-gray">Вспомогательный текст под часто задаваемыми вопросами</p>
      <div class="faq-wrap">
        <div v-for="(item, idx) in faq" :key="idx" class="item">
          <div class="question fd-r jc-b">
            <div class="fd-r ai-c p-L t-black t-b">
              <img src="@/assets/images/faq/question.svg" alt="?" class="decor mr-2" />
              {{ item.name }}
            </div>
            <button @click="item.active = !item.active" :class="{rotate: item.active}">
              <img src="@/assets/images/faq/arrow.svg" alt="Развернуть/Свернуть ответ" />
            </button>
          </div>
          <div v-show="item.active" ref="answer" class="answer p-L t-gray">{{ item.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    faq: [
      {
        name: "Non consectetur a erat nam at lectus urna duis?",
        text: "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
        active: true,
      },
      {
        name: "Non consectetur a erat nam at lectus urna duis?",
        text: "Non consectetur a erat nam at lectus urna duis?",
        active: false,
      },
      {
        name: "Non consectetur a erat nam at lectus urna duis?",
        text: "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
        active: false,
      },
      {
        name: "Non consectetur a erat nam at lectus urna duis?",
        text: "Non consectetur a erat nam at lectus urna duis?",
        active: false,
      },
      {
        name: "Non consectetur a erat nam at lectus urna duis?",
        text: "Non consectetur a erat nam at lectus urna duis?",
        active: false,
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.faq {
  background: url("@/assets/images/faq/bg.svg") no-repeat right top;
  background-size: contain;
  width: 100%;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      text-align: center;
    }
    p {
      max-width: 519px;
      width: 100%;
      text-align: center;
      margin-top: 20px;
    }
    .faq-wrap {
      max-width: 630px;
      width: 100%;
      margin-top: 81px;
      .item {
        border-radius: 10px;
        margin-bottom: 30px;
        background: #ffffff;
        box-shadow: 0 4px 19px rgba(188, 188, 188, 0.28);
        .question {
          padding: 0 20px 0 0 !important;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid #ea544a;
          .decor {
            width: 60px;
            height: 60px;
          }
          button {
            background: transparent;
            transition: 0.4s;
          }
          .rotate {
            transform: rotate(180deg);
          }
        }
        .answer {
          padding: 26px 32px;
        }
      }
    }
  }
}

@media (max-width: 480px) {
  .faq {
    .container {
      .faq-wrap {
        margin-top: 25px;
      }
    }
  }
}
</style>