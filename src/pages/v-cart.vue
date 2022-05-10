<template>
    <div class="v-cart">
        <section class="header">
            <div class="headerWordQues">
                <img
                    height="30"
                    align="center"
                    src="../assets/img/logobw.png"
                    alt="ЛогоЧБ"
                />
                <div>Интересующие позиции</div>
            </div>
            <img width="10%" src="../assets/img/Line.png" alt="-----" />
            <div class="headerWord">КОРЗИНА</div>
        </section>
        <div class="v-item-in">
            <v-cart-item
                v-for="item in cart"
                :key="item.article"
                :cartData="item"
                @sendArticle="getArticle"
            />
        </div>
    </div>
</template>

<script>
import vCartItem from "./v-cart-item";
import { mapGetters } from "vuex";

export default {
    name: "v-cart",
    data() {
        return {};
    },
    components: {
        vCartItem,
    },
    computed: {
        ...mapGetters(["cart"]),
    },
    methods: {},
};
</script>

<style></style>
