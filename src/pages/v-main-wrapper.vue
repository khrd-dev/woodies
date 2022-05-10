<template>
    <div class="v-main-wrapper">
        <div class="logoNav">
            <div @click="toHome" class="logo">
                <img
                    height="30"
                    align="center"
                    src="../assets/img/logo.png"
                    alt="Лого"
                />
                WOODIES
            </div>
            <div class="nav">
                <router-link
                    class="navLink"
                    :class="{ selected: this.pageURL == '/' }"
                    to="/"
                    >Главная</router-link
                >
                <router-link
                    class="navLink"
                    :class="{ selected: this.pageURL == '/about' }"
                    to="/about"
                    >О нас</router-link
                >
                <router-link
                    class="navLink"
                    :class="{ selected: this.pageURL == '/todo' }"
                    to="/todo"
                    >Реализация</router-link
                >
                <router-link
                    class="navLink"
                    :class="{ selected: this.pageURL == '/catalog' }"
                    to="/catalog"
                    >Каталог</router-link
                >
                <router-link
                    class="navLink"
                    :class="{ selected: this.pageURL == '/cart' }"
                    to="/cart"
                    >Корзина</router-link
                >
                <router-link
                    v-if="!name"
                    class="navLink link"
                    :class="{ selected: this.pageURL == '/auth' }"
                    to="/auth"
                    >Войти</router-link
                >
                <p class="navLink">{{ name }}</p>
                <p v-if="name" @click="logOut()" class="navLink link">Выйти</p>
            </div>
        </div>
        <component :is="layout">
            <router-view />
        </component>
        <div class="footer">
            <div class="subscribe">
                <div>
                    <h3 class="p1">Подписывайся на нашу новостную рассылку</h3>
                    <h3 class="p2">
                        Ежемесячный дайджест новых продуктов WOODIES<br />
                        и горячих предложений.
                    </h3>
                </div>
                <form class="inputs subscrInputs">
                    <div>
                        <input
                            required="required"
                            id="emailSubscr"
                            type="text"
                            placeholder=""
                        />
                        <label for="emailSubscr">e-mail</label>
                    </div>
                    <button class="subscr">Подписаться</button>
                </form>
            </div>
            <hr />
            <div class="logoFooterInfo">
                <div class="logoInfo">
                    <div class="logo">
                        <img
                            height="30"
                            align="center"
                            src="../assets/img/logo.png"
                            alt="Лого"
                        />
                        WOODIES
                    </div>
                    <p>(123)123123123</p>
                    <p>woodies@gmail.com</p>
                    <p>Jakarta, Indonesia</p>
                </div>
                <div class="footerInfo">
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
import vAuth from "./v-auth.vue";
import vReg from "./v-reg.vue";
import vAboutUs from "./v-about-us.vue";
import vCart from "./v-cart.vue";
import vCatalog from "./v-catalog.vue";
import vHome from "./v-home.vue";
import messages from "../utils/messages";

export default {
    name: "v-main-wrapper",
    components: {
        vAuth,
        vReg,
        vAboutUs,
        vCart,
        vCatalog,
        vHome,
    },
    props: {},
    data() {
        return {};
    },

    computed: {
        error() {
            return this.$store.getters.error;
        },
        layout() {
            return this.$route.meta.layout;
        },
        pageURL() {
            return this.$route.path;
        },
        name() {
            return this.$store.getters.info.name;
        },
    },
    methods: {
        toHome() {
            if (this.pageURL !== "/") {
                this.$router.push("/");
            }
        },
        async logOut() {
            await this.$store.dispatch("logOut");
            this.$message("Вы вышли из личного кабинета");
        },
    },
    watch: {
        error(fbError) {
            this.$error(
                messages[fbError.code] ||
                    `Что-то пошло не так. Код ошибки: ${fbError.code}`
            );
        },
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400&display=swap");
/* @import "~materialize-css/dist/css/materialize.min.css"; */
.v-main-wrapper {
    justify-content: center; /* ерунда*/
    align-items: center; /* ерунда*/
    margin: 0 auto;
    background: white;
    flex-wrap: wrap; /* ерунда*/
    background: no-repeat url(../assets/img/logoBG.png);
    background-position: 30% 75%;
    background-size: 50%;
}
.logo {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    letter-spacing: 0.25em;
    color: #3e3f43;
    cursor: pointer;
}
.nav {
    display: flex;
    flex: 1 auto;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
}
.logoNav {
    display: flex;
    padding-top: 20px;
    padding-left: 10%;
    padding-right: 10%;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
}
.navLink {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-decoration: none;
    color: #3e3f43;
}
.link {
    font-family: "Nunito";
    text-decoration: none;
    color: #daa520;
    cursor: pointer;
}
a:hover {
    font-size: 18px;
}
a:focus {
    color: #daa520;
}
.header {
    display: flex;
    justify-content: space-between;
    padding-left: 10%;
    padding-right: 10%;
    align-items: center;
}
.headerWordQues {
    display: flex;
    align-items: center;
    font-family: "Nunito";
    font-weight: 700;
    font-size: 36px;
    line-height: 49px;
    color: #3e3f43;
}
.headerWordQues img {
    margin-right: 10px;
}
.headerWord {
    font-family: "Nunito";
    font-weight: 800;
    font-size: 72px;
    line-height: 98px;
    color: rgba(34, 34, 34, 0.1);
    cursor: default;
}
@media (min-width: 280px) and (max-width: 1024px) {
    .headerWordQues {
        display: none;
    }
    .header img {
        display: none;
    }
    .header {
        display: block;
    }
    .headerWord {
        font-size: calc(18px + (72 - 18) * ((100vw - 280px) / (1024 - 480)));
    }
}
.footer {
    display: flex;
    flex-direction: column;
}
.footerInfo {
    display: flex;
    flex: 1 auto;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
}
.logoFooterInfo {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: 10%;
    padding-right: 10%;
    align-items: flex-end;
    background: linear-gradient(to top, transparent, rgb(255, 255, 255)),
        url("../assets/img/bgfooter.png");
}
.img2 {
    display: none;
}
@media (min-width: 1080px) {
    .img2 {
        display: block;
        width: 333px;
        height: 263px;
        background: linear-gradient(to top, transparent, rgb(255, 255, 255)),
            url("../assets/img/table2.png");
        background-size: 333px 263px;
    }
}
@media (max-width: 800px) {
    .logoNav {
        flex-direction: column;
        flex: 1 auto;
    }
    .nav a {
        flex: 1 auto;
        margin: 1%;
    }
    .logoFooterInfo {
        flex: 1 auto;
        flex-direction: column;
        align-items: center;
    }
    .footerInfo div {
        padding-right: 20px;
        padding-left: 20px;
    }
}
.footer p {
    color: #8d8d8d;
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 10px;
}
.footer h4 {
    margin-bottom: 17px;
}
.subscribe {
    padding-left: 10%;
    padding-right: 10%;
    display: flex;
    justify-content: space-between;
    text-align: left;
    align-items: center;
    flex-wrap: wrap;
}
.subscrInputs {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
}
.p1 {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24.55px;
    margin-bottom: 0;
    cursor: default;
}
.p2 {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24.55px;
    margin-top: 0;
    cursor: default;
}
input {
    width: 100%;
    min-width: 150px;
    height: 60px;
    background: #ffffffd2;
    border: 1px solid #daa520;
    border-radius: 6px;
    box-sizing: border-box;
    margin-top: 5px;
    margin-bottom: 5px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 150%;
    color: #a14646;
    padding: 1rem 1rem 0.2rem 1rem;
}

input:focus {
    border-color: #ffb700;
    outline: 0;
    box-shadow: 0 0 0 0.2rem #ffb7006b;
}
.inputs div {
    display: flex;
    width: 80%;
    align-items: flex-start;
    flex-direction: column-reverse;
}
.inputs div label {
    padding-left: 1rem;
    font-family: "Nunito";
    font-size: 150%;
    color: #bdbdbd;
    transform: translateY(3.2rem);
    transform-origin: left top;
    cursor: text;
    transition: all 0.3s;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 80%;
}
.inputs div input:focus ~ label,
.inputs div input:valid ~ label {
    padding: 0;
    color: #212121;
    transform: translateY(2.5rem) translateX(0.3rem) scale(0.6);
    opacity: 0.5;
}
.invalid {
    border-color: rgba(255, 0, 0, 0.808);
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(255, 0, 0, 0.342);
}
.invalid:focus {
    border-color: rgba(255, 0, 0, 0.808);
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(255, 0, 0, 0.342);
}
.inputs small {
    color: red;
    transform: translateY(7rem);
    height: 0.1px;
}
button {
    min-width: 120px;
    width: min-content;
    height: 40px;
    background: #daa520;
    color: #ffffff;
    border-radius: 6px;
    box-shadow: none;
    border: none;
    margin-top: 5px;
    margin-bottom: 5px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.1em;
    color: #ffffff;
    cursor: pointer;
}
button:focus {
    outline: 0;
}
button:active {
    background: rgb(185, 141, 30);
}
.toast {
    display: block;
    position: fixed;
    z-index: 10000;
    border-radius: 10px;
    top: 35px;
    width: auto;
    margin-top: 10px;
    max-width: 100%;
    height: auto;
    min-height: 50px;
    line-height: 1.5em;
    background-color: rgba(185, 141, 30, 0.822);
    padding: 10px 25px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.1em;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: default;
}
.v-item {
    flex-basis: 25%;
    flex-wrap: wrap;
    box-shadow: 0 0 8px 0 gray;
    padding: 8px;
    margin-bottom: 16px;
    background-color: rgba(255, 255, 255, 0.753);
}
.imgItem {
    width: 100px;
    height: 100px;
}
.v-item-in {
    display: flex;
    padding-left: 10%;
    padding-right: 10%;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>
