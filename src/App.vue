<template>
  <div id="app">
    <v-header>
    </v-header>
    <div class="tab">   <!--导航-->
      <div class="tab-item">商品</div>
      <div class="tab-item">评价</div>
      <div class="tab-item">商家</div>
      I am tab!
    </div>
    <div class="content">
      I am content!
    </div>
  </div>
</template>

<script>

  import header from './components/header/header.vue'

export default {
  name: 'app',
  components:{
     'v-header':header
  }
}
</script>

<style>

</style>
