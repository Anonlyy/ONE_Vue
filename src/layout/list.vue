<template>
  <div class="global-list" id="app-list">
    <Spin size="large" fix v-if="spinShow"></Spin>
    <div class="content-list">
      <div class="content" v-for="item in contentList">
        <div class="content-body">
          <p class="content-tag">- {{item.category}} -</p>
          <div class="content-title">
            <a class="title-link">{{item.title}}</a>
            <p class="text-author">著/ {{item.authorName}}</p>
          </div>
          <div :class="listType==4?'text-music-cover':''">
            <img class="cover-img" :src="item.picUrl">
          </div>
          <p class="text-content-short">{{item.content}}</p>
          <p class="date">
            <Icon type="clock"></Icon>
            {{item.date}}</p>
        </div>
        <!--<div class="image-content-body " v-if="listType==0">-->
          <!--<div class="content-header">-->
            <!--<p class="date"> {{item.date.slice(0, 4)}} / {{item.date.slice(5, 7)}} / {{item.date.slice(8, 10)}} </p>-->
            <!--<span>{{item.volume}}</span>-->
          <!--</div>-->
          <!--<img class="cover-img" :src="item.picUrl">-->
          <!--<div class="content-text">-->
            <!--<span>{{item.pic_info}}</span>-->
            <!--<p class="text-content-short">{{item.title}}</p>-->
          <!--</div>-->
          <!--<p class="content-footer">-->
            <!--—— {{item.words_info}}-->
          <!--</p>-->
        <!--</div>-->
      </div>
    </div>
    <!--<div class="tip" *ngIf="listType==0">- END -</div>-->
    <!--<div class="footer-bar">-->
      <!--<span class="btn-backtop" (click)="backTop()">-->
        <!--<i class="czs-arrow-up-l"></i>-->
      <!--</span>-->
    <!--</div>-->
  </div>

</template>

<script>
  const defaultSrc = 'https://raw.githubusercontent.com/Anonlyy/ONE_Angular/master/src/assets/image/default.jpg';
  import {IndexCategory} from '../api/class';
  export default {
    name: 'list',
    data() {
      return {
        listType: -1,
        spinShow:true,
        contentList:[],
        lastId:'-1',
        reading:new IndexCategory('0', '0', '2017-10-26 06:00:00', defaultSrc, 'VOL.1846','null'),
        music:new IndexCategory('0', '0', '2017-10-26 06:00:00', defaultSrc, 'VOL.1846','null'),
        movie:new IndexCategory('0', '0', '2017-10-26 06:00:00', defaultSrc, 'VOL.1846','null'),
      }
    },
    created() {
      this.fetchData();
    },
    watch: {
      '$route': 'fetchData'
    },
    methods:{
      fetchData(){
        this.$Loading.finish();
        this.listType = parseInt(this.$route.params.type);
        this.contentList = [];
        switch (this.listType){
          case 1:
            this.getReadingList();
            break;
          case 4:
            this.getMusicList();
          case 5:
            this.getMovieList();
        }
      },
      getReadingList(id='0'){
        this.api.getReadings(id).then(
          result=>{
            let data = result.data.data;
            for (let item of data) {
              this.reading = new IndexCategory(item.id, item.content_id, '阅读', item.img_url, item.author.user_name, item.title, item.forward, item.post_date.slice(0, 10));
              this.contentList.push(this.reading);
            }
            this.spinShow = false;
            this.lastId = '-1';
            this.lastId = this.contentList[this.contentList.length - 1].id;
          }
        );
      },
      getMusicList(id='0'){
        this.api.getMusics(id).then(
          result=>{
            let data = result.data.data;
            for (let item of data) {
              this.music = new IndexCategory(item.id, item.content_id, '音乐', item.img_url, item.author.user_name, item.title, item.forward, item.post_date.slice(0, 10));
              this.contentList.push(this.music);
            }
            this.spinShow = false;
            this.lastId = '-1';
            this.lastId = this.contentList[this.contentList.length - 1].id;
          }
        );
      },
      getMovieList(id='0'){
        this.api.getMovies(id).then(
          result=>{
            let data = result.data.data;
            for (let item of data) {
              this.movie = new IndexCategory(item.id, item.content_id, '影视', item.img_url, item.author.user_name, item.title, item.forward, item.post_date.slice(0, 10));
              this.contentList.push(this.movie);
            }
            this.spinShow = false;
            this.lastId = '-1';
            this.lastId = this.contentList[this.contentList.length - 1].id;
          }
        );
      }
    }

  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .global-list {
    width: 100%;
    height: 100%;
    overflow: auto;
    padding-top: 3.4rem;
    background-color: #F6F6F6;
    .content-list {
      width: 100%;
      free-loading {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        text-align: center;
      }
      .content {
        box-shadow: 0 5px 5px rgba(0, 0, 0, .03);
        margin-bottom: .6rem;
        background-color: white;
        > .content-body {
          padding: .8rem 1.2rem .5rem;
          .content-tag {
            color: rgba(0, 0, 0, 0.6);
            line-height: 1.85em;
            font-size: 0.875rem;
            text-align: center;
            margin: 0;
          }
          .content-title {
            margin: 1rem 0;
            .title-link {
              color: #000;
              font-weight: normal;
              font-size: 1.5rem;
            }
            .text-author {
              font-size: 1rem;
              padding-left: .5rem;
              margin: .8rem 0 1rem;
            }
          }
          .text-content-short {
            margin: .5rem 0 0;
            line-height: 1.5rem;
            font-size: .95rem;
            color: rgba(0, 0, 0, 0.6);
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .cover-img {
            width: 100%;
            border-radius: .2rem;
            max-width: 100%;
          }
          .date {
            font-size: 0.75rem;
            line-height: 1.4rem;
            color: #808080;
            text-align: left;
            margin-top:.5rem;
          }
          &:last-child {
            margin-bottom: 0;
          }
          //音乐
          .text-music-cover {
            position: relative;
            text-align: center;
            height: 15.125em;
            line-height: 15.125em;
            z-index: 10;

            &::before {
              content: '';
              position: absolute;
              left: -1.5rem;
              top: 0;
              width: 20em;
              height: 15.125em;
              border-radius: 0 9.9em 10em 0;
              z-index: -1;
              box-shadow: 0 0 0.625em 0.125em rgba(230, 230, 230, 0.5);
            }
            &::after {
              content: '';
              position: absolute;
              right: 0;
              width: 2rem;
              top: 0;
              bottom: 0;
              background: url(http://image.wufazhuce.com/music-list-right.png) no-repeat center right 100%;
            }
            .cover-img {
              width: 13.5rem;
              height: 13.5rem;
              z-index: 100;
              vertical-align: middle;
              border-radius: 50%;
              border: 1px solid #ccc;
            }
          }
        }
        > .image-content-body {
          text-align: center;
          overflow: hidden;
          .content-header {
            margin-top: 1rem;
            .date {
              font-family: 'Courier New';
              font-size: 1.2rem;
              letter-spacing: .1rem;
              color: black;
              opacity: 0.6;
              margin: 0;
            }
            > span {
              color: #555;
              font-size: .85rem;
              margin: .4rem 0;
              display: block;
            }
          }
          .content-text {
            > span {
              display: block;
              margin: .8rem 0 0;
              font-size: .85rem;
              color: #666;
            }
            .text-content-short {
              text-align: left;
              padding: 1rem 2rem 0 2rem;
              font-size: .95rem;
              color: #999;
              margin: 0;
            }
          }
          .cover-img {
            max-width: 100%;
          }
          .content-footer {
            font-size: .8rem;
            color: rgba(0, 0, 0, .7);
          }
        }
        &:last-child {
          margin-bottom: 0;
        }

      }
    }
    .tip {
      text-align: center;
      font-size: 1rem;
      height: 2.5rem;
      line-height: 2.5rem;
      color: #888;
      background: linear-gradient(rgba(243, 243, 243, .1), rgba(243, 243, 243, 1));
    }
    .footer-bar {
      position: fixed;
      right: 1.5rem;
      bottom: 2rem;
      z-index: 1000;
      .btn-backtop {
        background-color: white;
        display: inline-block;
        width: 3.5rem;
        text-align: center;
        line-height: 3.5rem;
        font-weight: bold;
        font-size: 1.3rem;
        height: 3.5rem;
        border-radius: 50%;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, .15);
      }
    }
  }
</style>
