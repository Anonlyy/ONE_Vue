<template>
  <div id="app">
    <app-header></app-header>
      <router-view></router-view>
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
    background-color: rgba(0,0,0,0);
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
