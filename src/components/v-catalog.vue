<template>
  <div class="v-catalog">
    <v-catalog-item></v-catalog-item>
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

<style scoped>
</style>
