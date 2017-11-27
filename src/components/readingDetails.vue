<template>
  <div class="global-content">
    <div class="content-body">
      <h3 class="content-title" v-text="storyDetail.title">
      </h3>
      <p class="text-author">文／{{storyDetail.authorName}}</p>
      <div class="text-content"  v-html="storyDetail.content"></div>

      <div class="text-tip">
        <i class="text-editor" v-text="storyDetail.author_introduce"></i>
        <i class="text-editor">本文经作者授权转载。</i>
      </div>

      <div class="content-author">
        <h4 class="author-title">
          <Icon type="android-person"></Icon>作者</h4>
        <div class="author-content">
          <img :src="storyDetail.authorImgurl" alt="">
          <div class="author">
            <p class="author-name" v-text="storyDetail.authorName">{{}}</p>
            <p class="page-summary" v-text="storyDetail.authorDesc"></p>
          </div>
        </div>
      </div>
    </div>
    <comment :comment-type="commentType"></comment>
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
  import {ReadDetail} from '../api/class';
  import comment from './comment.vue';
    export default {
        name: 'reading-details',
        data() {
            return {
              storyDetail : new ReadDetail('0','xxxx','xxx',defaultSrc,'xxx','xxx','xxx','xxx','xxx'),
              commentType:{
                type:'essay',
                id:0
              },
            }
        },
        components:{
          comment
        },
        created(){
          this.getReadingDetails(this.$route.params.id);
          this.commentType.id = this.$route.params.id;
        },
        methods:{
          getReadingDetails(id){
            const _this = this;
            console.log(id);
            _this.api.getReadingDetails(id).then(
              result=>{
                let data = result.data.data;
                let artList = [];
                for(let i of data.author){artList.push(i.user_name);}
                _this.storyDetail = new ReadDetail(data.content_id,artList.join('/'),data.author[0].summary,data.author[0].web_url,data.hp_title,data.hp_content,data.hp_author_introduce);
                 console.log(_this.storyDetail);
              })
          }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .global-content{
    padding-top:4rem;
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
        >p{
          line-height: 1.5rem;
          margin-bottom: 1rem;
        }
        .one-img-container{
          display: none;
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
        //margin-bottom: 2rem;
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
