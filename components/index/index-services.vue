<template>
  <div class="services bg-anim" id="services">
    <div class="container fd-c ai-c ta-c">
      <app-h2 :text="$t('services.title')" />
      <div class="toggler mt-5">
        <button
          class="h3 t-gray-light"
          :class="{ active: target.category == 'marketing' }"
          @click="target.category = 'marketing'; setPreview()"
        >{{$t('services.marketing.category')}}</button>
        <button
          class="h3 t-gray-light"
          :class="{ active: target.category == 'business' }"
          @click="target.category = 'business'; setPreview()"
        >{{$t('services.business.category')}}</button>
        <button
          class="h3 t-gray-light"
          :class="{ active: target.category == 'service' }"
          @click="target.category = 'service'; setPreview()"
        >{{$t('services.service.category')}}</button>
      </div>
      <div class="row fd-r jc-c ai-s fw-w">
        <template v-if="target.category == 'marketing'">
          <div
            v-for="(item, idx) in marketing"
            :key="idx"
            @click="setTarget(item)"
            :class="{'card-red': item.name === target.name}"
            class="card shadow white"
          >
            <h3 class="p-XL t-b t-red">{{ item.name }}</h3>
            <p
              class="p-L t-b t-gray-light mt-3"
              v-html="item.text ? item.text.substring(0, 52) + '..' : ''"
            ></p>
          </div>
        </template>
        <template v-if="target.category == 'business'">
          <div
            v-for="(item, idx) in business"
            :key="idx"
            @click="setTarget(item)"
            :class="{'card-red': item.name === target.name}"
            class="card shadow white"
          >
            <h3 class="p-XL t-b t-red">{{ item.name }}</h3>
            <p
              class="p-L t-b t-gray-light mt-3"
              v-html="item.text ? item.text.substring(0, 52) + '..' : ''"
            ></p>
          </div>
        </template>
        <template v-if="target.category == 'service'">
          <div
            v-for="(item, idx) in service"
            :key="idx"
            @click="setTarget(item)"
            :class="{'card-red': item.name === target.name}"
            class="card shadow white"
          >
            <h3 class="p-XL t-b t-red">{{ item.name }}</h3>
            <p
              class="p-L t-b t-gray-light mt-3"
              v-html="item.text ? item.text.substring(0, 52) + '..' : ''"
            ></p>
          </div>
        </template>
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
  computed: {
    marketing() {
      return this.$t("services.marketing.items");
    },
    business() {
      return this.$t("services.business.items");
    },
    service() {
      return this.$t("services.service.items");
    },
  },
  data: () => ({
    target: {
      category: "business",
      name: null,
      text: null,
    },
  }),

  methods: {
    setTarget(item) {
      this.target.name = item.name;
      this.target.text = item.text;
    },
    setPreview() {
      if (this.target.category === "business") {
        this.target.name = this.business[0].name;
        this.target.text = this.business[0].text;
      }
      if (this.target.category === "marketing") {
        this.target.name = this.marketing[0].name;
        this.target.text = this.marketing[0].text;
      }
      if (this.target.category === "service") {
        this.target.name = this.service[0].name;
        this.target.text = this.service[0].text;
      }
    },
  },
  created() {
    this.setPreview();
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
        position: relative;
        &:after {
          content: "";
          bottom: -1px;
          left: 0;
          position: absolute;
          width: 100%;
          height: 4px;
          border-radius: 4px;
          z-index: 10;
          transition: 0.2s;
        }
      }
      .active {
        position: relative;
        color: #ea544a;
        transition: 0.2s;

        &:after {
          content: "";
          transition: 0.2s;
          background: #ea544a;
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
        h3 {
          word-break: break-all;
        }
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
    background: #ffffff;
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

@media (max-width: 480px) {
  .services {
    padding: 0 0 40px 0;
    .container {
      .toggler {
        margin-top: 25px;
        button {
          font-size: 14px;
          padding: 10px 5px;
          margin-right: 10px;
        }
      }
      .row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        margin-top: 25px;
        .card {
          padding: 10px 30px;
          margin: 5px;
          width: unset;
          h3 {
            font-size: 14px;
            word-break: normal !important;
          }
          p {
            display: none;
          }
        }
      }
    }
  }
}
</style>