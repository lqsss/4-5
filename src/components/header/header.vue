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
          <div class="star-wrapper">

            <star :size="48" :score="seller.score"></star>
          </div>
          <div class="title">   <!-- flex布局-->
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul v-if="seller.supports" class="supports">
            <li class="support-item" v-for="(item,index) in seller.supports">
              <span class="icon" :class="classMap[item.type]"></span>
              <span class="text" >{{item.description}}</span>
            </li>
          </ul>
          <div class="title">   <!-- flex布局-->
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">
            <p class="content">{{seller.bulletin}}</p>
          </div>
        </div>
      </div>
      <div class="detail-close" @click="hideDetail">

        <i class="icon-close"></i>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
import star from '../star/star.vue'

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
    components: {
    	star:star
    }
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
          .star-wrapper
            text-align:center
            margin-top:16px
          .title
            display:flex
            width:80%
            margin: 28px auto 24px auto
            .line
              flex:1
              position: relative
              top:-6px
              border-bottom:1px solid rgba(255,255,255,0.2)
            .text
              padding:0 12px
              //line-height:14px
              font-size: 14px
              font-weight:700
          .supports
            width:80%
            //margin-bottom: 28px
            margin:0 auto
            .support-item
              margin-bottom: 12px
              font-size: 0px
              &:last-child
                margin-bottom: 0px
              .icon
                display:inline-block
                width: 16px
                height: 16px
                vertical-align:top
                margin-right: 6px
                background-repeat:no-repeat
                background-size: 16px 16px
                &.decrease
                  background-image:url('decrease_1@2x.png')
                &.discount
                  background-image:url('discount_1@2x.png')
                &.guarantee
                  background-image:url('guarantee_2@2x.png')
                &.invoice
                  background-image:url('invoice_2@2x.png')
                &.special
                  background-image:url('special_2@2x.png')
              .text
                line-height: 16px
                font-size: 12px

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
          .bulletin
            width:80%
            margin:0 auto
            .content
              padding:0 12px
              line-height: 24px
              font-size: 12px
      .detail-close
        position:relative
        width: 32px
        height: 32px
        //margin: 0px auto 64px auto
        margin: -64px auto 0px auto
        //clear:both
        font-size:32px

</style>
