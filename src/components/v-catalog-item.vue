<template>
  <div class="v-catalog-item">
    <img class="imgItem" src="../assets/img/table.png" alt="icon">
    <p>Позиция 1</p>
    <p>Цена: 100$</p>
    <button>Добавить в корзину</button>
  </div>
</template>

<script>

export default{
  name: "v-catalog-item",
  data(){
    return{}
  },
  methods:{
  }
}
</script>

<style>
  .v-catalog-item {
    flex-basis: 25%;
    flex-wrap: wrap;
    box-shadow: 0 0 8px 0 gray;
    padding: 8px;
    margin-bottom: 16px;
  }
  .imgItem {
    width: 100px;
    height: 100px;
  }
</style>
