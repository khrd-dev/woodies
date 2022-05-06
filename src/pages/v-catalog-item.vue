<template>
    <div class="v-catalog-item">
        <img
            class="imgItem"
            :src="require('../assets/img/products/' + productData.image)"
            alt="img"
        />
        <p>{{ productData.name }}</p>
        <p>Цена: {{ productData.price }} ₽</p>
        <button @click="sendItemToCart">Добавить в корзину</button>
    </div>
</template>

<script>
export default {
    name: "v-catalog-item",
    props: {
        productData: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    data() {
        return {};
    },
    methods: {
        sendItemToCart() {
            this.$emit("sendArticle", this.productData.article);
        },
    },
};
</script>

<style>
.v-catalog-item {
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
</style>
