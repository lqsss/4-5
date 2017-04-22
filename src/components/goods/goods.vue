<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="item in goods">
          <span class="text">
            <span class="icon" v-show="item.type>0" :class="classMap[item.type]"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="food-wrapper"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  const ERR_OK=0
  export default{
    props: {
      seller: {
        type: Object
      }
    },
    data(){
      return {
          goods:[]
      }
    },
    created(){
      this.$http.get('/api/goods').then((response) => {
        response = response.body
        if (response.errno === ERR_OK) {
          this.goods = response.data
          console.log( response.data)
        }
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .goods
    display: flex
    position: absolute
    width: 100%
    top: 174px
    bottom: 46px
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
    .food-wrapper
      flex: 1
</style>
