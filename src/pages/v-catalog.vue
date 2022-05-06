<template>
    <div class="v-catalog">
        <section class="header">
            <div class="headerWordQues">
                <img
                    height="30"
                    align="center"
                    src="../assets/img/logobw.png"
                    alt="ЛогоЧБ"
                />
                <div>Что мы имеем</div>
            </div>
            <img width="10%" src="../assets/img/Line.png" alt="-----" />
            <div class="headerWord">КАТАЛОГ</div>
        </section>
        <div class="v-item-in-catalog">
            <v-catalog-item
                v-for="product in products"
                :key="product.article"
                :productData="product"
                @sendArticle="getArticle"
            />
        </div>
    </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item.vue";
import { mapActions, mapGetters } from "vuex";

export default {
    name: "v-catalog",
    components: {
        vCatalogItem,
    },
    data() {
        return {};
    },
    computed: {
        ...mapGetters(["products"]),
    },
    methods: {
        getArticle(data) {
            console.log(data);
        },
        ...mapActions(["getProducts"]),
    },
    mounted() {
        this.getProducts();
    },
};
</script>

<style>
.v-item-in-catalog {
    display: flex;
    padding-left: 10%;
    padding-right: 10%;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>
