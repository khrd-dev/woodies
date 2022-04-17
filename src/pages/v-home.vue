<template>
    <div class="v-home">
        <div class="v-home_content">
            <p>В поиске <b>деревянной мебели</b> для дома?</p>
            <h3>Мы знаем о ней всё.</h3>
            <button @click="toCatalog">Посмотреть каталог</button>
        </div>
        <div class="v-home_table"></div>
    </div>
</template>

<script>
export default {
    name: "v-home",
    data() {
        return {};
    },
    methods: {
        toCatalog() {
            this.$router.push("catalog");
        },
    },
};
</script>

<style>
.v-home {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: no-repeat url(../assets/img/bg.png);
    background-size: 15rem 25rem;
    background-position: 100%;
}
.v-home_table {
    margin-top: 50px;
    width: 50%;
    background: no-repeat url(../assets/img/table.png);
    background-size: auto 100%;
    background-position: 100%;
}
.v-home_content {
    margin-top: 50px;
    font-family: "Nunito";
    font-style: normal;
    padding-left: 10%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.v-home_content p {
    font-weight: 600;
    font-size: 36px;
    line-height: 49px;
    color: #3e3f43;
    text-align: start;
    margin-bottom: 0;
}
.v-home_content b {
    font-weight: 800;
}
.v-home_content h3 {
    font-weight: 700;
    font-size: 72px;
    line-height: 72px;
    text-align: start;
    margin: 2rem 0 0 0;
    color: #313235;
}
.v-home_content button {
    align-self: flex-end;
}
@media (max-width: 1080px) {
    .v-home_table {
        display: none;
    }
}
@media (min-width: 400px) and (max-width: 1080px) {
    .v-home_content {
        padding-right: 30%;
    }
}
@media (min-width: 280px) and (max-width: 1024px) {
    .v-home_content p,
    b {
        font-size: calc(24px + (36 - 24) * ((100vw - 280px) / (1024 - 480)));
    }
}
@media (min-width: 280px) and (max-width: 1024px) {
    .v-home_content h3 {
        font-size: calc(36px + (72 - 36) * ((100vw - 280px) / (1024 - 480)));
    }
}
</style>
