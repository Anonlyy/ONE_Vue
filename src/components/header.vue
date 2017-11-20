<template>
  <div class="global-header">
    <div class="header-left" >
    <span class="button-menu clearfix">
      <Icon type="navicon" size="25"></Icon>
    </span>
    <header-side></header-side>
    </div>
    <div class="header-center">一个</div>
    <div class="header-right">
      <Icon type="ios-search" size="25"></Icon>
    </div>
  </div>
</template>

<script>
  import headerSide from './menu'
    export default {
        name: 'header',
        components:{
          "header-side":headerSide
        },
        data() {
            return {}
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .global-header{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1001;
    background-color: white;
    height:3.4rem;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eeeeee;
    box-shadow: 0 0 5px rgba(0,0,0,.15);
    //padding:0 .8rem;
    .header-center{
      font-size: 1.2rem;
    }
    .header-left{
      .button-menu{
        height: 3.4rem;
        line-height:3.4rem;
        display: block;
        >i{
          position: relative;
          top: 50%;
          transform: translateY(-50%);
          display: block;
          margin-left: .7em;
        }
      }
    }
    .header-right{
      >i{
        display: block;
        margin-right: .8rem;
      }
    }
  }
</style>
