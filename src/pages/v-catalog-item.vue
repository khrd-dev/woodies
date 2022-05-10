<template>
    <div class="v-catalog-item v-item">
        <img
            class="imgItem"
            :src="require('../assets/img/products/' + productData.image)"
            alt="img"
        />
        <p>{{ productData.name }}</p>
        <p>Цена: {{ productData.price }} ₽</p>
        <button @click="sendItemToCart">В корзину</button>
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
            this.$emit("sendArticle", this.productData);
        },
    },
};
</script>

<style></style>
