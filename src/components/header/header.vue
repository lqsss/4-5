<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="support-count" v-if="seller.supports" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper"  @click="showDetail">
      <span class="bulletin-icon"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%">    <!-- 撑满-->
    </div>
    <div v-show="detailShow" class="detail">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <h1 class="name">{{seller.name}}</h1>
        </div>
      </div>
      <div class="detail-close">
        <i class="icon-close"></i>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">


  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        detailShow: false
      };
    },
    methods: {
      showDetail() {
        this.detailShow = true;
      },
      hideDetail() {
        this.detailShow = false;
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    },
    components: {}
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  //@import "../../common/stylus/mixin";
  //@import "../../common/stylus/icon"
  .header
    position: relative
    overflow: hidden
    color: #fff
    background: rgba(7, 17, 27, 0.5)
    .content-wrapper
      position: relative
      padding: 24px 12px 18px 24px
      font-size: 0
      .avatar
        display: inline-block
        vertical-align: top
        img
          border-radius: 2px
      .content
        display: inline-block
        margin-left: 16px
        .title
          margin: 2px 0 8px 0
          .brand
            display: inline-block
            vertical-align: top
            width: 30px
            height: 18px
            background-image: url(brand@2x.png)
            //bg-image('brand')
            background-size: 30px 18px
            background-repeat: no-repeat
          .name
            margin-left: 6px
            font-size: 16px
            line-height: 18px
            font-weight: bold
        .description
          margin-bottom: 10px
          line-height: 12px
          font-size: 12px
        .support
          .icon
            display:inline-block
            vertical-align: top
            width:12px
            height:12px
            margin:0 4px 2px 0
            background-size:12px, 12px
            background-repeat:no-repeat
            &.decrease
              background-image: url(decrease_1@2x.png)
            &.discount
              background-image: url(decrease_1@2x.png)
            &.special
              background-image: url(special_1@2x.png)
            &.invoice
              background-image: url(invoice_1@2x.png)
            &.guarantee
              background-image: url(guarantee_1@2x.png)
          .text
            display:inline-block
            line-height: 12px
            font-size: 10px
            font-weight 200
            color:rgb(255,255,255)

      .support-count
        position:absolute
        right:12px
        bottom: 14px
        height:24px
        padding:0 8px
        background rgba(0, 0, 0, 0.2)
        text-align:center
        border-radius:14px
        .count
          vertical-align: top
          font-size: 10px
          color:rgb(255,255,255)
          line-height:24px
          font-weight:200
        .icon-keyboard_arrow_right
          padding-left:2px
          line-height:24px
          font-size:10px

    .bulletin-wrapper
      position:relative
      height:28px
      padding: 0 22px 0 12px
      background-color:rgba(7,17,27,0.2)
      white-space: nowrap   //必须在同一行显示 除非遇到</br>
      overflow: hidden      //超出部分隐藏
      text-overflow: ellipsis //超出样式
      .bulletin-icon
        display:inline-block
        vertical-align:top
        margin-top: 8px
        width: 22px
        height: 12px
        background-image:url("bulletin@2x.png")
        background-size:22px,12px
        background-repeat no-repeat
      .bulletin-text

        margin-left:4px
        line-height:28px
        font-weight 200
        font-size: 10px
        color:rgb(255,255,255)
      .icon-keyboard_arrow_right
        position: absolute
        font-size: 10px
        right: 12px
        top: 8px

    .background
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: -1
      filter: blur(10px)

    .detail
      position:fixed   //相对浏览器
      z-index :1
      top:0
      left:0
      width: 100%
      height:100%
      overflow:auto
      background:rgba(7,17,27,0.8)
      .detail-wrapper
        min-height:100%   //一个块元素的最小高度 如果再写 块元素就不会再自动变小 而保持此最小高度
        width: 100%
      .clearfix
        display:inline-block
        &:after
          display:block
          content:'.'
          height:0
          line-height:0
          clear:both
          visibility:hidden
        .detail-main
            margin-top:64px
            padding-bottom:64px
          .name
            line-height: 16px
            text-align:center
            font-size:16px
            font-weight:700
      .detail-close
        position:relative
        width: 32px
        height: 32px
        //margin: 0px auto 64px auto
        margin: -64px auto 0px auto
        //clear:both
        font-size:32px

/*
    class="a b"

    stylus
    .a
      //a的style内容;
    .b
*/
</style>
