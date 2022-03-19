<template>
  <div class="v-catalog">
    <section class="header">
      <div class="headerWordQues">
        <img height="30" align=center src="../assets/img/logobw.png" alt="ЛогоЧБ">
        <div>Что мы имеем</div>
      </div>
      <img width="10%" src="../assets/img/Line.png" alt="-----">
      <div class="headerWord">КАТАЛОГ</div>
    </section>
    <div class="v-item-in-catalog">
      <v-catalog-item />
      <v-catalog-item />
      <v-catalog-item />
      <v-catalog-item />
      <v-catalog-item />
      <v-catalog-item />
      
    </div>
  </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item.vue"

export default{
  name: "v-catalog",
  components: {
    vCatalogItem,
  },
  data(){
    return{}
  },
  methods:{
  }
}
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
