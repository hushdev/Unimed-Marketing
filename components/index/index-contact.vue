<template>
  <div class="contact red bg-anim-sm" id="contact">
    <div class="container">
      <app-h2 :text="$t('contact.title')" />
    </div>
    <div class="container fd-r ai-b jc-b">
      <div class="card">
        <ul class="info">
          <div class="list">
            <li>
              <a class="p-XL t-white t-b" href="https://yandex.ru/maps/-/CCUuvQr4tD">
                <img src="@/assets/images/contact/geo.svg" alt="Адрес" />
                {{$t('contact.adress')}}
              </a>
            </li>
            <li>
              <a class="p-XL t-white t-b" href="mailto:info@unimedtrade.uz">
                <img src="@/assets/images/contact/mail.svg" alt="Адрес" />
                info@unimedtrade.uz
              </a>
            </li>
            <li>
              <a class="p-XL t-white t-b" href="tel:+998712004404">
                <img src="@/assets/images/contact/phone.svg" alt="Адрес" />
                {{$t('contact.phone')}}
              </a>
            </li>
          </div>
          <div class="socials fd-r ai-c">
            <a href="https://www.instagram.com/unimed_trade/" target="_blank">
              <img src="@/assets/images/instagram.svg" alt="Instagram" />
            </a>
            <a href="https://t.me/Unmdbot" target="_blank">
              <img src="@/assets/images/telegram.svg" alt="Telegram" />
            </a>
          </div>
        </ul>
      </div>
      <form @submit.prevent="submit" class="white fd-c ai-c">
        <input
          v-model="form.name"
          type="text"
          :placeholder="$t('contact.form.name')"
          class="p-L t-sb"
        />
        <input
          v-model="form.mail"
          type="email"
          :placeholder="$t('contact.form.mail')"
          class="p-L t-sb"
        />
        <input
          v-model="form.phone"
          type="tel"
          :placeholder="$t('contact.form.number')"
          class="p-L t-sb"
        />
        <textarea
          v-model="form.message"
          type="text"
          :placeholder="$t('contact.form.message')"
          class="p-L t-sb"
        ></textarea>
        <button :disabled="$v.$invalid" class="p-L t-sb ta-c t-white">{{$t('contact.form.send')}}</button>
      </form>
    </div>
    <div class="container map">
      <iframe
        v-lazy-load
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A12d7b74f622bf778838e54df31a9fe3829e6da5b592a29d1590bcf4505e53e66&amp;source=constructor"
        width="100%"
        height="420"
        frameborder="0"
      ></iframe>
    </div>
    <div class="container credentials fd-r jc-b p-L t-white t-sb">
      <a class="p-S" href="https://www.upwork.com/freelancers/~01aa7aa6602c9494dc">
        {{$t('contact.developer')}}
        <span>an.ildar</span>
      </a>
      <span class="copyright p-S">© {{ year }} UnimedTrade. {{$t('contact.copyright')}}</span>
      <a class="p-S" href="https://www.behance.net/zednight/moodboards">
        {{$t('contact.designer')}}
        <span>Zednight</span>
      </a>
    </div>
  </div>
</template>

<script>
import {
  email,
  required,
  minLength,
  maxLength,
  numeric,
} from "vuelidate/lib/validators";

export default {
  data: () => ({
    year: new Date().getFullYear(),
    form: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  }),
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
        const formData = {
          // name: this.name,
          phone: this.phone,
          email: this.email,
          message: this.message,
        };

        this.$axios.$post("https://unimedtrade.uz/send_marketing/", formData, {
          headers: {
            crossorigin:true
          },
        });
        // .then(() => {
        //   alert("success");
        // })
        // .catch((error) => {
        //   alert(error);
        // });
      }
    },
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(50),
      },
      email: {
        email,
      },
      phone: {
        required,
        numeric,
        minLength: minLength(5),
        maxLength: maxLength(17),
      },
      message: {
        minLength: minLength(1),
        maxLength: maxLength(200),
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.contact {
  width: 100%;
  background: url("@/assets/images/contact/bg.svg") no-repeat right 20px #EA544A;
  margin-top: 230px;
  position: relative;
  padding-top: 30px;
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 213px;
    background: url("@/assets/images/contact/after.svg") repeat-x center;
    position: absolute;
    top: -205px;
    left: 0;
  }
  .container {
    h2 {
      color: #ffffff;
    }
    p {
      max-width: 519px;
      width: 100%;
    }
    .card {
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
        .socials {
          margin-top: 160px;
          a img {
            width: 25px;
            height: 25px;
            margin-right: 20px;
          }
        }
      }
    }
    form {
      border-radius: 15px;
      box-shadow: 0 4px 19px rgba(188, 188, 188, 0.28);
      padding: 52px 50px;
      max-width: calc(522px - 100px);
      width: 100%;
      input,
      textarea {
        width: 100%;
        border: 2px solid #EA544A;
        border-radius: 15px;
        padding: 20px;
        margin-bottom: 25px;
        box-shadow: 0;
      }
      textarea {
        height: 100px;
      }
      button {
        width: calc(100%);
        border: 2px solid #EA544A;
        background: #EA544A;
        border-radius: 15px;
        padding: 20px;
        transition: 0.2s;
        cursor: pointer;
        &:hover {
          background: transparent;
          color: #EA544A;
        }
      }
    }
  }
  .map {
    margin-top: 54px;

    iframe {
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 4px 19px rgba(188, 188, 188, 0.28);
    }
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
@media (max-width: 1500px) {
  .contact {
    padding-bottom: 60px;
  }
}
@media (max-width: 834px) {
  .contact {
    .container {
      form {
        max-width: 370px !important;
        width: 100%;
        padding: 30px 20px;
        margin-left: 20px;
        input,
        textarea {
          padding: 10px 20px;
          margin-bottom: 20px;
          font-size: 14px;
        }
        textarea {
          height: 150px;
          font-size: 14px;
        }
        button {
          padding: 10px 20px;
        }
      }
      .card {
        .info {
          margin-top: 60px;
          li {
            margin-top: 40px;
            max-width: 238px;
            a {
              img {
                width: 35px;
                height: 35px;
                margin-right: 23px;
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 700px) {
  .contact {
    margin-top: 80px;
    &::before {
      height: 76px;
      top: -75px;
      background-size: cover;
    }
    .credentials {
      flex-direction: column;
      text-align: center;
      font-weight: 100;
      font-size: 14px;
    }
  }
}
@media (max-width: 520px) {
  .contact {
    .container {
      &:nth-child(2) {
        flex-direction: column-reverse;
        align-items: center;
      }
      form {
        margin-top: 50px;
        margin-left: 0;
      }
      .card {
        width: 100%;

        .info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 50px;
          .socials {
            margin-top: 0 !important;
            display: flex;
            flex-direction: column;
            a {
              margin-top: 30px;
              img {
                margin-right: 0;
              }
              &:first-child {
                margin-top: 0;
              }
            }
          }
        }
      }
    }
  }
  .map {
    margin-top: 50px;
  }
}
</style>