<template>
  <div class="faq bg-anim-sm" id="faq">
    <div class="container">
      <app-h2 :text="$t('faq.title')" />
      <div class="faq-wrap">
        <div v-for="(item, idx) in faq" :key="idx" class="item">
          <div class="question fd-r jc-b">
            <div class="fd-r ai-c p-L t-black t-b">
              <span class="decor mr-2">?</span>
              <span class="question-text">{{ item.question }}</span>
            </div>
            <button @click="item.active = !item.active" :class="{rotate: item.active}">
              <img src="@/assets/images/faq/arrow.svg" alt="Развернуть/Свернуть ответ" />
            </button>
          </div>
          <div v-show="item.active" ref="answer" class="answer p-L t-gray">{{ item.answer }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.faq = this.$t("faq.items");
    this.faq.forEach((element) => {
      element.active = false;
    });
    this.faq[0].active = true;
  },
  data: () => ({
    faq: null,
  }),
};
</script>

<style lang="scss" scoped>
.faq {
  background: url("@/assets/images/faq/bg.svg") no-repeat right top;
  // background-size: contain;  
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
        overflow: hidden;

        .question {
          padding: 0 20px 0 0 !important;
          border-radius: 10px;
          border: 1px solid #ea544a;
          .question-text {
            padding: 10px 0;
          }
          .decor {
            min-width: 60px;
            min-height: 60px;
            height: 101%;
            background: #ea544a;
            border-bottom-left-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            font-size: 40px;
          }
          button {
            background: transparent;
            transition: 0.4s;
            margin-left: 10px;
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
        .item {
          margin-bottom: 25px;
          .question {
            padding: 0 15px 0 15px !important;
            div {
              font-size: 14px !important;
            }
            .decor {
              display: none;
            }
            button {
              background: transparent;
              transition: 0.4s;
              img {
                max-width: 15px;
              }
            }
          }
          .answer {
            padding: 26px 32px;
            font-size: 14px !important;
          }
        }
      }
    }
  }
}
</style>