<template>
  <div class="v-main-wrapper">
    <v-auth></v-auth>
    <v-about-us></v-about-us>
    <v-cart></v-cart>
    <v-catalog></v-catalog>
  </div>
</template>

<script>
  import vAuth from "./v-auth.vue"
  import vAboutUs from "./v-about-us.vue"
  import vCart from "./v-cart.vue"
  import vCatalog from "./v-catalog.vue"

export default{
  name: "v-main-wrapper",
  components: {
    vAuth,
    vAboutUs,
    vCart,
    vCatalog,
  },
  props: {},
  data(){
    return{}
  },
  computed: {},
  methods: {},
  watch: {},
  
}
</script>

<style >
.v-main-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1152px;
  margin: 0 auto;
  background: white;
}
</style>
