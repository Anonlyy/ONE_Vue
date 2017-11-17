<template>
  <div id="app" class="app-container">
    <div class="app-banner" :style="{height:bannerHeight+'px'}" >
      <img class="banner" src="http://image.wufazhuce.com/Fj09FuBxJrMw0UD3fPSIfKej-Rr9" alt="">
      <div class="banner-inner">
        <h3 class="inner-day">17</h3>
        <p class="inner-date">VOL.1868 | Nov. 2017 </p>
        <p class="inner-title">我上美术院的时候，因为舍不得用颜料，所以就用一点点，你知道后来怎么样了吗？中途它凝固了，都没用到一半就扔了。颜料和心都一样，不要省着，那样会凝固掉。 </p>
        <span class="icon">
        <i class="czs-angle-down-l"></i>
      </span>
      </div>
    </div>
    <div class="app-body">
      <ul class="content-list">
        <li class="content-item">
          <div class="item-heading">
            <a > 「阅 读」 </a>
          </div>
          <div class="item-body">
            <h3 class="title" >天空之城在哭泣</h3>
            <p class="artist">作者／周云蓬</p>
            <div class="text-content">这些民谣歌手火起来的原因究竟是什么？我才不相信他们在媒体采访上说的鬼话呢。</div>
            <a href="#" class="more-link">阅读全文 ></a>
          </div>
        </li>
        <li class="content-item">
          <div class="item-heading">
            <a href="#"> 「阅 读」 </a>
          </div>
          <div class="item-body">
            <h3 class="title">天空之城在哭泣</h3>
            <p class="artist">作者／周云蓬</p>
            <div class="text-content">这些民谣歌手火起来的原因究竟是什么？我才不相信他们在媒体采访上说的鬼话呢。</div>
            <a  class="more-link">阅读全文 ></a>
          </div>
        </li>
        <li class="content-item">
          <div class="item-heading">
            <a href="#"> 「阅 读」 </a>
          </div>
          <div class="item-body">
            <h3 class="title">天空之城在哭泣</h3>
            <p class="artist">作者／周云蓬</p>
            <div class="text-content">这些民谣歌手火起来的原因究竟是什么？我才不相信他们在媒体采访上说的鬼话呢。</div>
            <a  class="more-link">阅读全文 ></a>
          </div>
        </li>
      </ul>
      <p class="tip">END</p>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        bannerHeight:0
      }
    },
    created() {
      this.api.getIdList().then(
        res => {
          this.spinShow = false;
          this.results = res.data.data;
        }
      )
    },
    mounted(){
      this.bannerHeight = window.screen.height;
    },
    methods: {
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .app-container{
    width: 100%;
    overflow-x: hidden;
    .app-banner{
      height: 100%;
      width: 100%;
      position: relative;
      &::before{
        content: '';
        position: absolute;
        top:3.4rem;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 100;
        background:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.6));
      }
      .banner{
        padding-top:3.4rem;
        //max-width: 100%;
        height: 100%;
        width: 160%;
        position: absolute;
        z-index: -1;
        transform: translateX(-15%);
      }
      .banner-inner{
        z-index: 1001;
        color: white;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding:0 1rem;
        .inner-day{
          margin:0 0 .5rem 0;
          font-weight: normal;
          font-size: 3rem;
          font-family: Serif;
        }
        .inner-date{
          margin:0 0 .5rem 0;
          font-size: 1.2rem;
        }
        .inner-title{
          margin:0 0 1rem 0;
          font-size: 1.1rem;

          overflow : hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
        .icon{
          display: block;
          height:2.5rem;
          line-height:2.5rem;
          color: white;
          font-size: 2rem;
          text-align: center;
        }
      }

    }
    .app-body{
      padding:1.2rem .8rem 0;
      .content-list{
        margin: 0;
        width: 100%;
        display: block;
        padding: 0;
        .content-item{
          list-style:none;
          margin-bottom:1rem;
          padding-bottom:1rem;
          border-bottom: 1px solid #eeeeee;
          .item-heading{
            a{
              color: #29a7e2;
              font-size: .8rem;
            }
          }
          .item-body{
            .title{
              font-size: 1.8rem;
              color: #000;
              font-weight: bold;
              margin:.8rem 0 1rem;
              overflow : hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
            .artist{
              padding-left:1rem;
              color: #555;
            }
            .text-content{
              font-size: 1rem;
              color: #333;
              line-height: 1.5rem;
              margin-bottom: .8rem;
              overflow : hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
            }
          }
        }
      }
      .tip{
        text-align: right;
        color: #999;
      }
    }
  }

</style>
