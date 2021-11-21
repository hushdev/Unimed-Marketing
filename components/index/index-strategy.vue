<template>
  <div class="strategy" id="strategy">
    <div class="container">
      <div class="heading">
        <app-h2 :text="$t('strategy.title')" />
        <p class="p t-black mt-4">{{$t('strategy.subTitle')}}</p>
      </div>
      <div class="strategy-wrap mt-5">
        <div class="row fd-r ai-c">
          <div class="cards">
            <div v-for="(item, idx) in items" :key="idx" class="card">
              <h3 class="h3 t-red">{{item.title}}</h3>
              <ul class="t-black">
                <li v-for="(li, idx) in item.ul" :key="idx" class="p-XL">{{li}}</li>
              </ul>
            </div>
          </div>
          <img src="@/assets/images/strategy/item1.svg" alt="Стратегия" />
        </div>
        <div class="row fd-r jc-b ai-c">
          <img src="@/assets/images/strategy/item2.svg" alt="Стратегия" />

          <div class="cards">
            <div v-for="(item, idx) in items2" :key="idx" class="card">
              <h3 class="h3 t-red">{{item.title}}</h3>
              <ul class="t-black">
                <li v-for="(li, idx) in item.ul" :key="idx" class="p-XL">
                  {{li}}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$t("strategy.items");
    },
    items2() {
      return this.$t("strategy.items2");
    },
  },
};
</script>


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
          margin-top: 100px;
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
            transform: scale(0.95);
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
            padding-right: 20px;
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