<template>
  <div id="app">
    <app-header></app-header>
    <transition name="slide-left">
      <router-view class="child-view"></router-view>
    </transition>

  </div>
</template>

<script>
  import {backTop} from './components/backTop'
  import header from './components/header'
  export default {
    name: 'app',
    components: {
      "app-header": header,
    }
  }
</script>

<style>
  #app{
    width: 100%;
    height: 100%;
    max-width: 768px;
  }
  * {
    font-weight: 300;
    box-sizing: border-box;
    font-size: 14px;

  }

  html, body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0 auto;
    max-width: 768px;
    font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif !important;
  }
  .child-view {
    position: absolute;
    width:100%;
    transition: all .8s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
  }
  路
  @media only screen {
    html {
      font-size: 30px;
    }
  }

  @media only screen and (max-width: 479px) and (min-width: 321px) {
    html {
      font-size: 15px;
    }
  }

  @media only screen and (max-width: 320px) {
    html {
      font-size: 13px;
    }
  }
</style>
