<template>
  <div class="nav white shadow fd-c ai-c">
    <div class="logo"><img :src="Logo" alt="" /></div>
    <a v-for="(item, idx) in items" :key="idx"><img :src="item.img" /></a>
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
      { img: Home, anchor: "#" },
      { img: Info, anchor: "#" },
      { img: Coin, anchor: "#" },
      { img: Target, anchor: "#" },
      { img: Question, anchor: "#" },
      { img: Phone, anchor: "#" },
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
  top: 50%;
  transform: translateY(-50%);
  .logo {
    padding: 12px 0;
    background: #ea544a;
  }
  a {
    padding: 27px 0;
    &:hover {
      transform: scale(.9);
    }
    &:first-child {
      padding-top: 55px;
    }
  }
}
</style>