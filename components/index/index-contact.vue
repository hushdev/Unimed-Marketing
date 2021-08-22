<template>
  <div class="contact red" id="contact">
    <div class="container fd-r ai-b jc-b">
      <div class="card">
        <app-h2 text="Связаться" />
        <p class="h3 t-white mt-1">
          дополнительная информация под разделом связаться
        </p>
        <ul class="info">
          <li>
            <a class="p-XL t-white t-b" href="">
              <img src="@/assets/images/contact/geo.svg" alt="Адрес" />
              г. Ташкент, Юнусабадский р-н, Малая кольцевая дорога, 26
            </a>
          </li>
          <li>
            <a class="p-XL t-white t-b" href="mailto:info@unimedtrade.uz">
              <img src="@/assets/images/contact/mail.svg" alt="Адрес" />
              info@unimedtrade.uz
            </a>
          </li>
          <li>
            <a class="p-XL t-white t-b" href="tel:+998971500955">
              <img src="@/assets/images/contact/phone.svg" alt="Адрес" />
              +998 (97) 150-09-55
            </a>
          </li>
        </ul>
        <div class="socials fd-r ai-c">
          <a href=""
            ><img src="@/assets/images/facebook.svg" alt="Facebook"
          /></a>
          <a href=""
            ><img src="@/assets/images/instagram.svg" alt="Instagram"
          /></a>
          <a href=""
            ><img src="@/assets/images/telegram.svg" alt="Telegram"
          /></a>
        </div>
      </div>
      <form @submit.prevent="" class="white fd-c ai-c">
        <input type="text" placeholder="Ваше имя" class="p-L t-sb" />
        <input
          type="email"
          placeholder="Ваш email (опционально)"
          class="p-L t-sb"
        />
        <input type="tel" placeholder="Номер телефона" class="p-L t-sb" />
        <textarea
          type="text"
          placeholder="Сообщение"
          class="p-L t-sb"
        ></textarea>
        <button class="p-L t-sb ta-c t-white">Отправить</button>
      </form>
    </div>
    <div class="container map">
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A12d7b74f622bf778838e54df31a9fe3829e6da5b592a29d1590bcf4505e53e66&amp;source=constructor"
        width="100%"
        height="420"
        frameborder="0"
      ></iframe>
    </div>
    <div class="container credentials fd-r jc-b p-L t-white t-sb">
      <a href="https://www.instagram.com/an.ildar/"
        >Developed by <span>an.ildar</span></a
      >
      <span class="copyright">
        © {{ year }} UnimedTrade. Все права защищены
      </span>
      <a href="https://www.instagram.com/an.ildar/"
        >Design: <span>Zednight</span></a
      >
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    year: new Date().getFullYear(),
  }),
};
</script>

<style lang="scss" scoped>
.contact {
  width: 100%;
  background: url("@/assets/images/contact/bg.svg") no-repeat right #ea544a;
  margin-top: 230px;
  position: relative;
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 213px;
    background: url("@/assets/images/contact/after.svg") no-repeat center;
    background-size: cover;
    position: absolute;
    top: -200px;
    left: 0;
  }
  .container {
    .card {
      h2 {
        color: #ffffff;
      }
      p {
        max-width: 519px;
        width: 100%;
      }
      .info {
        list-style-type: none;
        margin-top: 90px;
        li {
          margin-top: 48px;
          max-width: 433px;
          width: 100%;
          &:first-child {
            margin-top: 0;
          }
          a {
            text-decoration: none;
            display: flex;
            align-items: center;
            img {
              width: 60px;
              height: 60px;
              margin-right: 30px;
            }
          }
        }
      }
      .socials {
        margin-top: 160px;
        a img {
          width: 25px;
          height: 25px;
          margin-right: 20px;
        }
      }
    }
    form {
      border-radius: 15px;
      box-shadow: 0px 4px 19px rgba(188, 188, 188, 0.28);
      padding: 52px 50px;
      max-width: calc(522px - 100px);
      width: 100%;
      input,
      textarea {
        width: 100%;
        border: 2px solid #ea544a;
        border-radius: 15px;
        padding: 20px;
        margin-bottom: 25px;
      }
      textarea {
        height: 100px;
      }
      button {
        width: calc(100% + 40px);
        border: 2px solid #ea544a;
        background: #ea544a;
        border-radius: 15px;
        padding: 20px;
      }
    }
  }
  .map {
    margin-top: 54px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0px 4px 19px rgba(188, 188, 188, 0.28);
  }
  .credentials {
    padding: 36px 0;
    a,
    .copyright {
      margin: 0 10px;
    }
    a {
      text-decoration: none;
      color: #ffffff;
      span {
        text-decoration: underline;
      }
    }
  }
}
</style>