<template>
  <div class="global-content">
    <div class="content-banner">
      <div class="banner-detail">
        <img class="img" :src="musicDetail.picUrl">
      </div>
      <div class="text-music-info">
        <p v-text="musicStory.title"></p>
        <p v-text="musicStory.album"></p>
        <p v-text="musicStory.story_author"></p>
      </div>
    </div>
    <div class="content-body">
      <h3 class="content-title" v-text="musicDetail.title"></h3>
      <p class="text-author">文／{{musicDetail.authorName}}    </p>
      <div class="text-content" v-html="musicDetail.content"></div>
      <div class="text-tip">
        <i class="text-editor" v-html="musicDetail.author_introduce"></i>
        <i class="text-editor" v-text="musicDetail.copyright"></i>
      </div>
      <div class="content-author">
        <h4 class="author-title">作者</h4>
        <div class="author-content">
          <img :src="musicDetail.authorImgurl" alt="">
          <div class="author">
            <p class="author-name" v-text="musicDetail.authorName"></p>
            <p class="page-summary" v-text="musicDetail.authorDesc"></p>
          </div>
        </div>
      </div>
    </div>
    <BackTop :height="100" :bottom="30" :right="20">
      <Icon type="arrow-up-c" class="btn-backtop" size="20"></Icon>
    </BackTop>
    <div class="end-tip">
      - END -
    </div>
  </div>

</template>

<script>
  const defaultSrc = 'https://raw.githubusercontent.com/Anonlyy/ONE_Angular/master/src/assets/image/default.jpg';
  import {ReadDetail} from '../api/class'
    export default {
        name: 'music-details',
        data() {
            return {
              musicDetail : new ReadDetail('0','xxxx','xxx',defaultSrc,'xxx','xxx','xxx','xxx','xxx'),
              musicStory:{
                title:'',
                album:'',
                story_author:''
              }
            }
        },
        created(){
          this.getMusicDetails(this.$route.params.id);
        },
        methods:{
          getMusicDetails(id){
            const _this = this;
            console.log(id);
            _this.api.getMusicDetails(id).then(
              result=>{
                let data = result.data.data;
                let artList = [];
                console.log(data);
                for(let i of data.author_list){artList.push(i.user_name);}
                _this.musicDetail = new ReadDetail(data.id,data.story_author.user_name,data.story_author.summary,data.story_author.web_url,data.story_title,data.story,data.charge_edt,data.copyright,data.cover);
                _this.musicStory = {
                  title:data.title,
                  album:data.album,
                  story_author:artList.join('/')
                }
//                console.log(_this.musicDetail);
              })
          }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .global-content{
    padding-top: 4rem;
    .content-banner{
      position: relative;
      .banner-detail{
        position: absolute;
        left: -10rem;
        top: -11rem;
        width: 30rem;
        height: 30rem;
        border-radius: 50%;
        box-shadow: 0 0 20px 5px rgba(230,230,230,0.6);
        margin-bottom: 20px;
        .img{
          position: absolute;
          width: 26.5rem;
          display: block;
          height: 26.5rem;
          bottom: 1.5rem;
          right: 1.5rem;
          z-index: 100;
          max-width: 100%;
          border-radius: 50%;
          overflow: hidden;
        }
      }
      .text-music-info{
        text-align: center;
        padding-top: 20rem;
        font-size: 1rem;
        >p{
          margin: 0;
          height: 1.5rem;
          line-height:1.5rem;
        }
      }
    }
    .content-body{
      padding:0 1rem;
      .content-title{
        font-size: 1.65rem;
        font-weight: bold;
        margin:1rem 0 ;
        &::after{
          content: '';
          display: block;
          width: 80px;
          margin-top: 1rem;
          height: 5px;
          line-height: 10px;
          background-color: black;
        }
      }
      .text-author{
        padding-left:.5rem;
        color: #555;
        font-size: .8rem;
        margin-bottom: 2.5rem;
      }
      .text-content{
        font-size: 1rem;
        >br{
          display: none;
        }
        >p{
          line-height: 1.5rem;
          margin-bottom: 1rem;
        }
        p.fr-ft-ns{
          font-size: .78rem;
        }
        .one-img-container{
          display: none;
        }
        img{
          width: 100%;
          max-width: 100%;
        }
      }
      .text-tip{
        margin-top: 2rem;
        .text-editor{
          display: block;
          font-size: .85rem;
          line-height: 1.8rem;
          height: 1.8rem;
          color: #888;
        }
      }

      .content-author{
        margin-top: 1rem;
        margin-bottom: .5rem;
        .author-title{
          height: 2.5rem;
          line-height: 2.5rem;
          margin:0 0 .8rem 0;
          position: relative;
          &::after{
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            height: 3px;
            width: 100px;
            background-color: black;
          }
        }
        .author-content{
          display: table;
          height: 4rem;
          line-height: 4rem;
          img{
            display: table-cell;
            width: 3rem;
            vertical-align: middle;
            height: 3rem;
            border-radius: 50%;
          }
          .author{
            display: table-cell;
            padding-left:.6rem;
            vertical-align: top;
            >p{
              margin:0;
              line-height: 1.5rem;
            }
            .author-name{
              height:1.5rem;
              font-size: .9rem;
              color: #333;
            }
            .page-summary{
              font-size: .8rem;
              color: #888;
            }
          }
        }
      }
    }
    .btn-backtop{
      background-color: rgba(0,0,0,.5);
      display: inline-block;
      width: 3.5rem;
      text-align: center;
      line-height: 3.5rem;
      height:3.5rem;
      border-radius: 50%;
      padding:0;
      font-size: 1.5rem;
    }
    .end-tip{
      text-align: center;
      height: 3rem;
      line-height:3rem;
      font-size: 1rem;
      color: #888;
    }
  }
</style>
