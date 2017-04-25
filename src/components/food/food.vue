<template>
  <div class="food" v-show="showFlag">
    <div class="food-content">
      <div class="image-header">
        <img :src="food.image">
        <div class="back" @click="hide">
          <i class="icon-arrow_lift"></i>
        </div>
      </div>
      <div class="content">
        <div class="title">{{food.name}}</div>
        <div class="detail">
          <span class="sell-count">月售{{food.sellCount}}份</span><span class="rating">好评率{{food.rating}}%</span>
        </div>
        <div class="price">
          <span class="now"></span><span class="old"></span>
        </div>
        <div class="buy">
          <div>
          </div>
        </div>
      </div>
    </div>
    <div class="info">
      <h1 class="title"></h1>
      <p class="text"></p>
    </div>
    <div class="rating"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      food: {
        type: Object
      },
    },
    data(){
      return {
        showFlag: false,
      }
    },
    methods: {
      show(){
        this.showFlag = true
      },
      hide(){
        this.showFlag = false
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .food
    position: fixed
    left: 0
    top: 0
    bottom: 48px
    width: 100%
    z-index: 30
    background: #fff
    .image-header
      position: relative
      width: 100%
      padding-top: 100%
      height: 0
      img
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
      .back
        position: absolute
        top: 10px
        left: 0
        .icon-arrow_lift
          display: block
          padding: 10px
          font-size: 20px
          color: #fff
    .content
      position:relative
      padding: 18px
      .title
        font-size: 14px
        font-weight:700
        color:rgb(7,17,27)
        line-height: 14px
      .detail
        margin-top: 8px
        //font-size:0
        font-weight:700
        color:rgb(147,153,159)
        line-height:10px
        .sell-count, .rating
          font-size:10px
        .sell-count
          margin-right: 24px
      .price
        .now
          font-size: 14px
          font-weight:700
          color:rgb(240,20,20)
        .old






</style>
