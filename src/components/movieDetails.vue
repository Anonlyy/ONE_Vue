<template>
  <div class="movie-content">
    <div class="content-banner">
      <img class="img" :src="photoList.bannerUrl">
    </div>
    <div class="content-body">
      <h3 class="content-title" v-text="movieDetail.title">
      </h3>
      <p class="text-subtitle">
        ——{{photoList.subTitle}}
      </p>
      <p class="text-author">
        文／{{movieDetail.authorName}}
      </p>
      <div class="text-content" v-html="movieDetail.content" >
      </div>
      <div class="text-tip">
        <i class="text-editor" v-text="movieDetail.author_introduce"></i>
        <i class="text-editor" v-text="movieDetail.copyright"></i>
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
  import { MovieDetail } from '../api/class';
  import  comment  from './comment';
    export default {
        name: 'movie-details',
        data() {
            return {
              movieDetail : new MovieDetail('0','xxxx','xxx','xxx','xxx','xxx'),
              photoList : {
                subTitle:'',
                bannerUrl:defaultSrc,
              },
              commentType:{
                type:'movie',
                id:0
              },
            }
        },
        components:{
          comment
        },
        created(){
          this.getMovieDetails(this.$route.params.id);
          this.getPhotoList(this.$route.params.id);
          this.commentType.id = this.$route.params.id;
        },
        methods:{
          getMovieDetails(id){
            const _this = this;
            console.log(id);
            _this.api.getMovieDetails(id).then(
              result=>{
                let data = result.data.data.data[0];
                _this.movieDetail = new MovieDetail(data.movie_id,data.user.user_name,data.title,data.content,data.charge_edt,data.copyright);
              })
          },
          getPhotoList(id){
            const _this = this;
            _this.api.getMovieDetailsByPhoto(id).then(
              result=>{
                let data = result.data.data;
                _this.photoList = {
                  subTitle:data.title,
                  bannerUrl:data.detailcover,
                }
              })
          }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  img{
    width: 100%;
    max-width:100%;
  }
</style>
