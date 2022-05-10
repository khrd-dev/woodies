<template>
    <div class="v-cart-item v-item">
        <img
            class="imgItem"
            :src="require('../assets/img/products/' + cartData.image)"
            alt="img"
        />
        <p>{{ cartData.name }}</p>
        <p>Цена: {{ cartData.price }} ₽</p>
        <button @click="delItemFromCart">Удалить</button>
    </div>
</template>

<script>
export default {
    name: "v-cart-item",
    props: {
        cartData: {
            type: Array,
            default() {
                return [];
            },
        },
    },
    data() {
        return {};
    },
    methods: {
        delItemFromCart() {},
    },
};
</script>

<style></style>
