<template>
  <div class="header-sidenav" :class="{'nav-show':menuShow}">
    <ul class="list">
      <li class="list-item" @click="toIndex">
        <span class="list-text">
            <Icon type="ios-home" size="20"></Icon> 主页
        </span>
      </li>
      <li class="list-item" v-for="item in menuList" @click="toDetails(item.link)">
        <span class="list-text">
          <Icon :type="item.icon" size="20"></Icon>
          {{item.name}}</span>
      </li>
      <li class="list-item">
        <span class="list-text">
          <a href="http://www.xposean.xin/about" target="_blank">关于我</a>
        </span>
      </li>
    </ul>
    <div class="button-overlay" @click="toList"></div>
  </div>
</template>

<script>
  export default {
    name: 'menu',
    data() {
      return {
        menuList: [
          {
            icon:'images',
            name:'图文',
            link:"0",
          },
          {
            icon:'android-bookmark',
            name:'阅读',
            link:"1",
          },
          {
            icon:'ios-musical-note',
            name:'音乐',
            link:"4",
          },
          {
            icon:'ios-film',
            name:'影视',
            link:"5",
          }
        ]
      }
    },
    props:['menuShow'],
    methods:{
      toList(){
//        this.menuShow = false;
        this.$emit('menuHide',false);
      },
      toDetails(key){
        this.$router.replace({name:'list',params:{type:key}});
        this.$emit('menuHide',false);
      },
      toIndex(){
        this.$router.push('/index');
        this.$emit('menuHide',false);
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .header-sidenav {
    top: 0;
    bottom: 0;
    width: 60%;
    height: 100%;
    left: -100%;
    opacity: 0;
    transition: all .42s;
    position: fixed;
    background-color: white;
    z-index: 10001;
    .list {
      margin: 0;
      padding: 2rem 0 0;
      width: 100%;
      list-style: none;
      > .list-item {
        margin: 0 0 .2rem 0;
        padding: 0 .8rem;
        > span {
          border-bottom: 1px solid #eeeeee;
          box-shadow: 0 5px 5px rgba(0, 0, 0, .05);
          width: 100%;
          height: 4.2rem;
          line-height: 4.2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          a{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            font-size: 1.25rem;
            color: #333;
          }
          > i {
            margin-right: .5rem;
          }
        }
        &:hover, &:active, &:focus {
          background: #29a7e2;
          box-shadow: 0 0 12px #2ad;
          > span,a {
            color: white;
          }
        }
      }
      &:after {
        content: '- END - ';
        display: block;
        font-size: .85rem;
        color: #888;
        text-align: center;
        margin-top: 1.2rem;
      }
    }
    .button-overlay {
      position: absolute;
      right: -10rem;
      width: 10rem;
      top: 0;
      bottom: 0;
    }
  }
  .nav-show {
    opacity: 1;
    left: 0;
  }
</style>
