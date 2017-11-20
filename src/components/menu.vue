<template>
  <div class="header-sidenav">
    <ul class="list">
      <li class="list-item" >
        <span class="list-text"><i class="czs-home-l"></i> 主页</span>
      </li>
      <li class="list-item">
        <span class="list-text"><i class="{{item.icon}}"></i> {{item.name}}</span>
      </li>
      <li class="list-item">
        <span class="list-text">关于我</span>
      </li>
    </ul>
    <div class="button-overlay" (click)="toList()"></div>
  </div>
</template>

<script>
  export default {
    name: 'menu',
    data() {
      return {
        menuList: [
          {
            icon:'czs-newspaper-l',
            name:'图文',
            link:"0",
          },
          {
            icon:'czs-book-l',
            name:'阅读',
            link:"1",
          },
          {
            icon:'czs-music-note-l',
            name:'音乐',
            link:"4",
          },
          {
            icon:'czs-network-l',
            name:'影视',
            link:"5",
          }
        ]
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
          display: flex;
          width: 100%;
          justify-content: center;
          align-items: center;
          height: 4.2rem;
          line-height: 4.2rem;
          font-size: 1.25rem;
          color: #333;
          > i {
            display: inline-block;
            margin-right: .5rem;
          }
        }
        &:hover, &:active, &:focus {
          background: #29a7e2;
          box-shadow: 0 0 12px #2ad;
          > span {
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
