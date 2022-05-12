<template>
    <div class="v-cart-item v-item">
        <img
            class="imgItem"
            :src="require('../assets/img/products/' + cartData.image)"
            alt="img"
        />
        <p>{{ cartData.name }}</p>
        <p>Цена: {{ cartData.price }} ₽</p>
        <div class="quantity">
            <p class="link" @click="quantityDown">-</p>
            <p>{{ cartData.quantity }}</p>
            <p class="link" @click="cartData.quantity++">+</p>
        </div>
        <button @click="delItemFromCart">Удалить</button>
    </div>
</template>

<script>
export default {
    name: "v-cart-item",
    props: {
        cartData: {
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
        delItemFromCart() {
            this.$emit("delItemFromCart");
        },
        quantityDown() {
            this.cartData.quantity--;
            if (this.cartData.quantity <= 0) {
                this.delItemFromCart();
            }
        },
    },
    mounted() {},
};
</script>

<style></style>
