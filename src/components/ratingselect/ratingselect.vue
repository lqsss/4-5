<template>
  <div class="ratingselect">
    <div class="rating-type">
      <span @click="select(2,$event)" class="block positive" :class="{'active':selectType===2}">{{desc.all}}<span class="count">{{ratings.length}}</span></span>
      <span @click="select(0,$event)" class="block positive" :class="{'active':selectType===0}">{{desc.positive}}<span class="count">{{ratings.length}}</span></span>
      <span @click="select(1,$event)" class="block negative" :class="{'active':selectType===1}">{{desc.negative}}<span class="count">{{ratings.length}}</span></span>
    </div>
    <div class="switch">
      <span @click="toggleContent" class="icon-check_circle" :class="{'on':onlyContent}"></span>
      <span class="text">只看有内容的评价</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const POSITIVE = 0
  const NEGATIVE = 1
  const ALL = 2
  export default{
    props: {
      ratings: {
        type: Array,
        default(){     //数组。对象 都要返回一个函数
          return []
        }
      },
      selectType: {
        type: Number,
        dafault: ALL
      },
      onlyContent:{
        type:Boolean,
        default:false
      },
      desc:{
        type:Object,
        default:{
          all:'全部',
          positive:'满意',
          negative:'不满意'
        }
      }
    },
    methods:{
      select(type,event){
      	if(!event._constructed)
      		return
        this.$emit('select',type)
      },
      toggleContent(){
        if(!event._constructed)
          return
        this.$emit('toggle')
      },
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .rating-type
    margin:0 18px
    padding:18px 0
    border-bottom:1px solid rgba(7, 17, 27, 0.1)
    .block
      display:inline-block
      padding: 8px 12px
      margin-right: 8px
      font-size: 12px
      line-height: 16px
      font-color:rgb(77,85,93)
      border-radius:1px
      .count
        margin-left: 2px
        font-size: 8px
      &.positive
        background-color:rgba(0,160,220,0.2)
        &.active
          color: #fff
          background-color:rgb(0,160,220)
      &.negative
        background-color:rgba(77,85,93,0.2)
        &.active
          color: #fff
          background: rgb(77, 85, 93)
  .switch
    padding: 12px 18px
    line-height: 24px
    color:rgb(147,153,159)
    font-size:0
    border-bottom:1px solid rgba(7,17,27,0.1)
    &.on
      .icon-check_circle
        color: #00c850
    .icon-check_circle
      display:inline-block
      vertical-align:top
      font-size: 24px
      margin-right: 4px
    .text
      display:inline-block
      font-size:12px
</style>
