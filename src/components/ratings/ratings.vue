<template>
<div class="ratings">
  <div class="ratings-content">
    <div class="overview">
      <div class="overview-left">
        <h1 class="score">{{seller.score}}</h1>
        <div class="title">综合评分</div>
        <div class="rank">高于周边商家{{seller.rankRate}}%</div>
      </div>
      <div class="overview-right">
        <div class="score-wrapper">
          <span class="title">服务态度</span>
          <star :size="36" :score="seller.serviceScore"></star>
          <span class="score">{{seller.serviceScore}}</span>
        </div>
        <div class="score-wrapper">
          <span class="title">商品评分</span>
          <star :size="36" :score="seller.foodScore"></star>
          <span class="score">{{seller.foodScore}}</span>
        </div>
        <div class="delivery-wrapper">
          <span class="title">送达时间</span>
          <span class="delivery">{{seller.deliveryTime}}分钟</span>
        </div>
      </div>
    </div>
    <ratingselect @select="selectRating" @toggle="toggleContent" :selectType="selectType" :onlyContent="onlyContent"
                   :ratings="ratings"></ratingselect>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
  import star from '../star/star.vue'
  import ratingselect from '../ratingselect/ratingselect'
  import split from '../split/split'
  import BScroll from 'better-scroll'
  const POSITIVE = 0
  const NEGATIVE = 1
  const ALL = 2
  const   ERR_OK =0
  export default{
    props:{
        seller:{
              type:Object
          }
    },
    data(){
      return {
        ratings:[],
        selectType: ALL,
        onlyContent: true,
      }
    },
    created(){
        this.$http.get('api/ratings').then((response)=>{
          response=response.body
          if(response.errno===ERR_OK){
            this.ratings=response.data
            this.$nextTick(() => {
              this.scroll = new BScroll(this.$refs.ratings, {
                click: true
              })
            })
          }
      })
    },
    components:{
      star,
      ratingselect,
      split
    },
    methods:{
      needShow(type, text) {
        if (this.onlyContent && !text) {
          return false;
        }
        if (this.selectType === ALL) {
          return true;
        } else {
          return type === this.selectType;
        }
      },
      selectRating(type) {
        this.selectType = type;
        this.$nextTick(() => {
          this.scroll.refresh();
        });
      },
      toggleContent() {
        this.onlyContent = !this.onlyContent;
        this.$nextTick(() => {
          this.scroll.refresh();
        });
      }
    },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .ratings
    position:absolute
    top: 174px
    bottom: 0px
    overflow:hidden
    width:100%
    .overview
      display:flex
      padding:18px 0
      .overview-left
        flex:0 0 137px
        padding:6px 0
        width: 137px
        border-right:1px solid rgba(7,17,27,0.1)
        text-align:center
        .score
          margin-bottom:6px
          font-size:24px
          color:rgb(255,153,0)
          line-height:28px
        .title
          margin-bottom: 8px
          font-size: 12px
          color:rgb(7,17,27)
          line-height:12px
        .rank
          font-size: 10px
          color:rgb(147,153,159)
          line-height: 10px
      .overview-right
        flex:1
        padding: 6px,0,6px,24px
        .score-wrapper
          margin-bottom: 8px
          font-size: 0
          .title
            font-size: 12px
            color:rgb(7,17,27)
            line-height: 18px
          .star
            display:inline-block
            margin:0 12px
            vertical-align:top
          .score
            display:inline-block
            line-height: 18px
            vertical-align:top
            font-size: 12px
            color:rgb(255,153,0)
        .delivery-wrapper
          font-size: 0
          .title
            line-height: 18px
            font-size: 12px
            color: rgb(7, 17, 27)
          .delivery
            margin-left: 12px
            font-size: 12px
            color: rgb(147, 153, 159)
</style>
