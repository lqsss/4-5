<template>
  <div class="food" v-show="showFlag" ref="food">
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
          <span class="now">￥{{food.price}}</span><span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
        </div>
        <div class="cartcontrol-wrapper">
          <cartcontrol :food="food"></cartcontrol>
        </div>
        <transition name="fade">
          <div @click.stop.prevent="addFirst" class="buy" v-show="!food.count || food.count===0">
            加入购物车
          </div>
        </transition>
      </div> <!--没count这个属性 或者count为0-->
      <div class="info" v-show="food.info">
        <h1 class="title">商品介绍</h1>
        <p class="text">{{food.info}}</p>
      </div>
      <div class="rating">
        <h1 class="title">商品评价</h1>
        <ratingselect @select="selectRating" @toggle="toggleContent" :selectType="selectType" :onlyContent="onlyContent"
                      :desc="desc" :ratings="food.ratings"></ratingselect>
        <div class="rating-wrapper">
          <ul v-show="food.ratings&&food.ratings.length">
            <li class="rating-item" v-for="rating in food.ratings" v-show="needShow(rating.rateType,rating.text)">
              <div class="user">
                <span class="name">{{rating.username}}</span>
                <img class="avatar" :src="rating.avatar" width="12px" height="12px">
              </div>
              <!--<div class="time">{{rating.rateTime | formatDate}}</div> -->
              <p class="text">
                <span :class="{'icon-thumb_up':rating.rateType===0,'icon-thumb_down':rating.rateType===1}"></span>{{rating.text}}
               </p>
            </li>
          </ul>
          <div class="no-rating" v-show="!food.ratings || !food.ratings.length">暂无评价</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import BScroll from 'better-scroll'
  import cartcontrol from '../cartcontrol/cartcontrol'
  import ratingselect from '../ratingselect/ratingselect'
  import {formatDate} from   '../../common/js/date.js'
  const POSITIVE = 0
  const NEGATIVE = 1
  const ALL = 2
  export default{
    props: {
      food: {
        type: Object
      },
    },
    data(){
      return {
        showFlag: false,
        selectType: ALL,
        onlyContent: true,
        desc: {
          all: '全部',
          positive: '推荐',
          negative: '吐槽'
        },
      }
    },
    methods: {
      show(){
        this.showFlag = true
        this.selectType = ALL
        this.onlyContent = true
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.food, {
              click: true
            });
          } else {
            this.scroll.refresh();
          }
        });
      },
      hide(){
        this.showFlag = false
      },
      addFirst(event){
        if (!event._constructed)
          return
        Vue.set(this.food, 'count', 1)
        this.$emit('add', event.target)
      },
      selectRating(type){
        this.selectType = type
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      },
      toggleContent(){
        this.onlyContent = !onlyContent
        this.$nextTick(() => {
          this.scroll.refresh();
        });
      },
      needShow(rateType, text){
        if (this.onlyContent && !text)
          return false
        if (this.selectType === ALL) {
          return true
        } else {
        	return rateType === this.selectType
        }
      },
      filters: {
        formatDate(time) {
          let date = new Date(time);
          return formatDate(date, 'yyyy-MM-dd hh:mm');
        }
      },
    },
    components: {
      cartcontrol,
      ratingselect
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
      position: relative
      padding: 18px
      .title
        font-size: 14px
        font-weight: 700
        color: rgb(7, 17, 27)
        line-height: 14px
      .detail
        margin-top: 8px
        margin-bottom: 18px
        font-weight: 700
        color: rgb(147, 153, 159)
        line-height: 10px
        .sell-count, .rating
          font-size: 10px
        .sell-count
          margin-right: 24px
      .price
        font-weight: 700
        line-height: 24px
        .now
          font-size: 14px
          margin-right: 8px
          color: rgb(240, 20, 20)
        .old
          text-decoration: line-through
          font-size: 10px
          color: rgb(147, 153, 159)
      .cartcontrol-wrapper
        position: absolute
        right: 12px
        bottom: 12px
      .buy
        position: absolute
        right: 18px
        bottom: 18px
        z-index: 10
        height: 24px
        line-height: 24px
        padding: 0 12px
        box-sizing: border-box
        border-radius: 12px
        font-size: 10px
        color: #fff
        background: rgb(0, 160, 220)
    .info
      position: relative
      padding: 18px
      .title
        line-height: 14px
        font-size: 14px
        margin-bottom: 6px
        color: rgb(7, 17, 27)
      .text
        padding: 0 8px
        line-height: 24px
        font-size: 12px
        font-weight: 200
        color: rgb(77, 85, 93)
    .rating
      padding-top: 18px
      .title
        line-height: 14px
        font-size: 14px
        margin-left: 18px
        color: rgb(7, 17, 27)
      .rating-wrapper
        padding:0 18px
        .rating-item
          position:relative
          padding:16px 0
          border-bottom:1px solid rgba(7,17,27,0.1)
          .user
            position:absolute
            right: 0px
            top: 16px
            .name
              display:line-block
              vertical-align: top
              margin-right:6px
              font-size: 10px
              color:rgb(147,153,159)
              line-height:12px
            .avatar
              border-radius:50%
          .time
            font-size: 10px
            color:rgb(147,153,159)
            line-height:12px
          .text
            margin:6px 0 0 0
            font-size:12px
            color: rgb(7, 17, 27)
            .icon-thumb_up, .icon-thumb_down
              display:line-block
              margin-right: 4px
              line-height: 24px
            .icon-thumb_up
              color:rgb(0,160,220)
            .icon-thumb_down
              color:rgb(147,153,159)


        .no-rating
          padding: 16px 0
          font-size: 12px
          color: rgb(147, 153, 159)
</style>
