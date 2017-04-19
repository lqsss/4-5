<template>
  <div class="header">
    <div class="content-wapper">
      <div class="avator">
        <img width="64" height="64" src="">
      </div>
      <div class="content">
        <div class="title">
          <span class ="brand"></span>
          <span class ="name">粥品香坊(大运村)</span>
        </div>
        <div class="descrpition">
          蜂鸟专送/38分钟送达
        </div>
        <div class="suport"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    position:relative
    overflow:hidden
    background-color:rgba(7,17,27,0.5)
    blur:10px
    .content-wapper
      position:relative
      padding:24px,12px,18px,24px
      .avator
        vertical-align: top
        display:inline-block
        img
          border-radius:4px
      .content
        display:inline-block
        margin-left:16px
        .title
          margin:2px,0px,8px,0px
          .brand
            display:inline-block
            width: 30px
            height 18px
            background-image url("brand@2x.png");
            background-size:30px,18px
            background-repeat:no-repeat
          .name
            display:inline-block
            font-size: 16px
            color:rgb(255,255,255)
            font-weight:bold
            line-height:18px
            .descrpition
              margin-bottom:10px
              font-size:12px
              color:rgb(255,255,255)
              font-weight:200
              line-height:12px






</style>
