<template>
  <div class="nav white shadow fd-c ai-c">
    <div class="logo">
      <img :src="Logo" alt />
    </div>
    <a v-for="(item, idx) in items" :key="idx" :href="item.anchor" v-smooth-scroll>
      <img :src="item.img" />
    </a>
  </div>
</template>
<script>
import Logo from "@/assets/images/sidebar/logo.png";
//Icons
import Home from "@/assets/images/sidebar/home.svg";
import Info from "@/assets/images/sidebar/info.svg";
import Coin from "@/assets/images/sidebar/coin.svg";
import Target from "@/assets/images/sidebar/target.svg";
import Question from "@/assets/images/sidebar/question.svg";
import Phone from "@/assets/images/sidebar/phone.svg";
export default {
  data: () => ({
    Logo,
    items: [
      { img: Home, anchor: "#offer" },
      { img: Info, anchor: "#about" },
      { img: Coin, anchor: "#services" },
      { img: Target, anchor: "#strategy" },
      { img: Question, anchor: "#faq" },
      { img: Phone, anchor: "#contact" },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.nav {
  width: 87px;
  border-radius: 10px;
  overflow: hidden;
  position: fixed;
  z-index: 20;
  left: 39px;
  bottom: 50%;
  transform: translateY(50%);
  .logo {
    padding: 12px 0;
    background: #ea544a;
  }
  a {
    padding: 27px 0;
    &:hover {
      transform: scale(0.9);
    }
    &:first-child {
      padding-top: 55px;
    }
  }
}
@media (max-width: 1640px) {
  .nav {
    left: 15px;
    width: 77px;
    a {
      padding: 20px 0;
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
}
@media (max-width: 1500px) {
  .nav {
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: row;
    height: 60px;
    max-width: 360px;
    min-width: 300px;
    width: 100%;
    align-items: center;
    justify-content: center;
    .logo {
      img {
        width: 60px;
      }
    }
    a {
      padding: 0 15px;
      img {
        width: 20px;
        height: 20px;
      }
      &:first-child {
        padding: 0 20px 0 55px;
      }
    }
  }
}
@media (max-width: 395px) {
  .nav {
    width: calc(100% - 30px);
    max-width: 100%;
    min-width: unset;
    height: 50px;
    bottom: 15px;
    display: flex;
    justify-content: space-between;
    padding-right: 5px;
    overflow-x: scroll;
    .logo {
      min-width: 50px;
      min-height: 50px;
      background: url("@/assets/images/star.svg") no-repeat center #ea544a;
      background-size: 50%;
      border-radius: 10px;
      img {
        display: none;
      }
    }
    a {
      padding: 0 10px;
      img {
        width: 19px;
        height: 19px;
      }
    }
  }
}
</style>