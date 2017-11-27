<template>
  <div class="music-content">
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
        <h4 class="author-title">
          <Icon type="android-person"></Icon>
          作者</h4>
        <div class="author-content">
          <img :src="musicDetail.authorImgurl" alt="">
          <div class="author">
            <p class="author-name" v-text="musicDetail.authorName"></p>
            <p class="page-summary" v-text="musicDetail.authorDesc"></p>
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
  import comment  from './comment';
    export default {
        name: 'music-details',
        components:{
          comment
        },
        data() {
            return {
              commentType:{
                type:'music',
                id:0
              },
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
          this.commentType.id = this.$route.params.id;
        },
        methods:{
          getMusicDetails(id){
            const _this = this;
            console.log(id);
            _this.api.getMusicDetails(id).then(
              result=>{
                let data = result.data.data;
                let artList = [];
//                console.log(data);
                for(let i of data.author_list){artList.push(i.user_name);}
                _this.musicDetail = new ReadDetail(data.id,data.story_author.user_name,data.story_author.summary,data.story_author.web_url,data.story_title,data.story,data.charge_edt,data.copyright,data.cover);
                _this.musicStory = {
                  title:data.title,
                  album:data.album,
                  story_author:artList.join('/')
                }
              })
          }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
