<template>
  <div id="app" class="app-container">
    <Spin size="large" fix v-if="spinShow"></Spin>
    <div class="app-banner" :style="{height:bannerHeight+'px'}" @click="toDetails(currentId,3)">
      <img class="banner" :src="indexImageText.picUrl" alt="">
      <div class="banner-inner">
        <h3 class="inner-day">{{indexImageText.date | dayPipe}}</h3>
        <p class="inner-date">{{indexImageText.volume}} | {{ indexImageText.date | datePipe }} </p>
        <p class="inner-title" v-text="indexImageText.title"></p>
        <span class="icon">
       <Icon type="chevron-down" size="25"></Icon>
      </span>
      </div>
    </div>
    <div class="app-body">
      <ul class="content-list">
        <li class="content-item" v-for="item in contentList">
          <div class="item-heading">
            <router-link :to="{ name:'list',params:{ type: item.category } }">「 {{item.category|category}} 」</router-link>
          </div>
          <div class="item-body">
            <h3 class="title"  v-text="item.title" @click="toDetails(item.content_id,item.category)"></h3>
            <p class="artist" v-text="'作者／'+item.authorName"></p>
            <div class="text-content" v-text="item.content"></div>
            <a href="#" class="more-link" @click.prevent="toDetails(item.content_id,index)">阅读全文 ></a>
          </div>
        </li>
      </ul>
      <p class="tip">END</p>
    </div>
  </div>

</template>

<script>
  import {IndexImageText , IndexCategory} from '../api/class';
  export default {
    name: 'index',
    data() {
      return {
        bannerHeight:0,
        idList:[],
        currentId:-1,
        spinShow:true,
        contentList:[],
        link:[1,1,4,5],
        indexImageText:new IndexImageText('null','null','null','null','null','null'),
        reading:new IndexCategory('null','null','null','null','null','null'),
        music:new IndexCategory('null','null','null','null','null','null'),
        movie:new IndexCategory('null','null','null','null','null','null'),
      }
    },
    created() {
      this.api.getIdList().then(
        res => {
          this.currentId = res.data.data[0]
          return this.currentId;
        }
      ).then((id)=>{
        this.id = id;
        this.spinShow = false;
        this.api.getImageTextDetail(id).then(
          result=>{
            let data = result.data.data;
            console.log(data.content_list);
            for(let item of data.content_list){
              switch (item.category){
                case "0":
                  this.indexImageText = new IndexImageText(item.id,item.content_id,data.date,item.img_url,item.volume,item.forward,item.pic_info,item.words_info);
                  break;
                case "1":
                  this.reading = new IndexCategory(item.id,item.content_id,1,item.img_url,item.author.user_name,item.title,item.forward,item.post_date);
                  this.contentList.push(this.reading);
                  break;
                case "4":
                  this.music = new IndexCategory(item.id,item.content_id,4,item.img_url,item.author.user_name,item.title,item.forward,item.post_date);
                  this.contentList.push(this.music);
                  break;
                case "5":
                  this.movie = new IndexCategory(item.id,item.content_id,5,item.img_url,item.author.user_name,item.title,item.forward,item.post_date);
                  this.contentList.push(this.movie);
                  break;
              }
            }
            console.log(this.contentList);
          }
        );

      })
    },
    filters:{
      category:function (value) {
        switch (value){
          case 1:
            return "阅读";
            break;
          case 4:
            return "音乐";
            break;
          case 5:
            return "影视";
            break;
        }
      }
    },
    mounted(){
      this.bannerHeight = window.screen.height;
    },
    methods: {
      toDetails(id, category) {
        switch (category) {
          case 1:
            this.$router.push({name: 'reading', params: {id: id}});
            break;
          case 4:
            this.$router.push({name: 'music', params: {id: id}});
            break;
          case 5:
            this.$router.push({name: 'movie', params: {id: id}});
            break;
          case 0:
            this.$router.push({name: 'imageText', params: {id: id}});
            break;
        }
      },
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
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
        z-index: 100;
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



