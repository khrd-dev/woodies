<template>
  <div class="v-main-wrapper">
    <div class="nav">
      <div class="logo">
        <img height="30" align= center src="../assets/img/logo.png" alt="Лого">
        WOODIES
      </div>
      <a href="/">Главная</a>
      <a href="/about">О нас</a>
      <a href="/todo">Реализация</a>
      <a href="/catalog">Каталог</a>
      <a href="/auth">Войти</a>
      <a href="/cart">Корзина</a>
    </div>
    <!-- <v-auth></v-auth>
    <v-about-us></v-about-us>
    <v-cart></v-cart> -->
    <v-catalog></v-catalog>
    <div class="footer">
      <div class="subscribe">
        <div>
          <h3 class="p1">Подписывайся на нашу новостную рассылку</h3>  
          <h3 class="p2">Ежемесячный дайджест новых продуктов WOODIES<br>
            и горячих предложений.
          </h3>  
        </div>  
        <div>
          <input type="text" placeholder="Введи email">
          <button class="subscr">Подписаться</button>
        </div>      
      </div>
      <hr>
      <div>
        <div class="footerInfo">  
          <div>
            <div class="logo">
              <img height="30" align= center src="../assets/img/logo.png" alt="Лого">
              WOODIES
            </div>
            <p>(123)123123123</p>
            <p>woodies@gmail.com</p>
            <p>Jakarta, Indonesia</p>
          </div>
          <div>
            <h4>Продукция</h4>
            <p>Розница</p>
            <p>Комплекс</p>
            <p>Сервис</p>
          </div>
          <div>
            <h4>Источники</h4>
            <p>Блог</p>
            <p>Вопрос/ответ</p>
            <p>Контакты</p>
          </div>
          <div>
            <h4>Компания</h4>
            <p>О нас</p>
            <p>Вакансии</p>
            <p>Команда</p>
          </div>
          <div>
            <h4>Мы тут</h4>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
          </div>
          <div class="img2"></div>
        </div>  
      </div>
      <p>© 2022 WOODIES</p>
    </div>
  </div>
</template>

<script>
  // import vAuth from "./v-auth.vue"
  // import vAboutUs from "./v-about-us.vue"
  // import vCart from "./v-cart.vue"
  import vCatalog from "./v-catalog.vue"

export default{
  name: "v-main-wrapper",
  components: {
    // vAuth,
    // vAboutUs,
    // vCart,
    vCatalog,
  },
  props: {},
  data(){
    return{}
  },
  computed: {},
  methods: {},
  watch: {},
  
}
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400&display=swap');
.v-main-wrapper {
  justify-content: center;
  align-items: center;
  min-width: 1152px;
  margin: 0 auto;
  background: white;
}
.logo {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: 0.25em;
  color: #3E3F43;
}
.nav {
  display: flex;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 20px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}
.nav a {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-decoration: none;
  color: #3E3F43;
}
a:hover {
  font-size: 22px;
}
a:focus {
  color: #DAA520;
}
.footer {
  display: flex;
  flex-direction: column;
}
.footerInfo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 100px;
  padding-right: 100px;
  align-items: flex-end;
  background: linear-gradient(to top, transparent, rgb(255, 255, 255)),
    url("../assets/img/bgfooter.png");
}
.img2 {
  width: 333px;
  height: 263px;
  background: linear-gradient(to top, transparent, rgb(255, 255, 255)),
    url("../assets/img/table2.png");
  background-size: 333px 263px;
}
.footer p {
  color: #8D8D8D;
  font-size: 14px;
}
.subscribe {
  padding-left: 100px;
  padding-right: 100px;
  display: flex;
  justify-content: space-between;
  text-align: left;
  align-items: center;
}
.p1 {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24.55px;
  margin-bottom: 0;
}
.p2 {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24.55px;
  margin-top: 0;
}
input {
  width: 328px;
  height: 40px;
  background: #FFFFFF;
  border: 1px solid #DAA520;
  border-radius: 6px;
  box-sizing: border-box;
}
button {
  width: 120px;
  height: 40px;
  background: #DAA520;
  color: #FFFFFF;
  border-radius: 6px;
  box-shadow: none;
  border: none;
}
</style>
