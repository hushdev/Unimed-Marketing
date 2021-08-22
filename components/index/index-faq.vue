<template>
  <div class="faq">
    <div class="container">
      <app-h2 text="Часто задаваемые вопросы" />
      <p class="h3 t-gray">
        Вспомогательный текст под часто задаваемыми вопросами
      </p>
      <div class="faq-wrap">
        <div v-for="(item, idx) in faq" :key="idx" class="item">
          <div class="question fd-r jc-b p-L t-black t-b">
            <div class="fd-r ai-c">
              <img
                src="@/assets/images/faq/question.svg"
                alt="?"
                class="decor mr-2"
              />
              {{ item.name }}
            </div>
            <button @click="item.active = !item.active">
              <img
                src="@/assets/images/faq/arrow.svg"
                alt="Развернуть/Свернуть ответ"
              />
            </button>
          </div>
          <transition>
            <div v-show="item.active" ref="answer" class="answer p-L t-gray">
              {{ item.text }}
            </div>
          </transition>
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
  background: url("@/assets/images/faq/bg.svg") no-repeat right center;
  background-size: contain;
  width: 100%;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
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
        box-shadow: 0px 4px 19px rgba(188, 188, 188, 0.28);
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
            &:hover {
              transform: rotate(360deg);
            }
          }
        }
        .answer {
          padding: 26px 32px;
        }
      }
    }
  }
}
</style>