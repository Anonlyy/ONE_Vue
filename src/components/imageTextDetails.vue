<template>
  <div class="content-detail">
    <img class="item-picture-img" :src="indexImageText.picUrl" alt="首页图">
    <p class="text-author">
      <span>{{indexImageText.volume}}</span>{{indexImageText.pic_info}}
    </p>
    <p class="day">{{indexImageText.date | dayPipe}}</p>
    <p class="month">{{indexImageText.date | datePipe}}</p>
    <div class="separate-line"></div>

    <p class="text-content" v-text="indexImageText.title"></p>
  </div>
</template>

<script>
  import {IndexImageText} from '../api/class';
  const defaultSrc = 'https://raw.githubusercontent.com/Anonlyy/ONE_Angular/master/src/assets/image/default.jpg';
  export default {
        name: 'imageTextDetails',
        data() {
            return {
              indexImageText:new IndexImageText('0', '0', '2017-10-26 06:00:00', defaultSrc, 'VOL.1846', 'xxx')
            }
        },
        created(){
          this.getImageTextDetails(this.$route.params.id);
        },
        methods:{
          getImageTextDetails(id){
            const _this = this;
            _this.api.getImageTextDetail(id).then(
              result=> {
                let data = result.data.data.content_list[0];
                _this.indexImageText = new IndexImageText(data.id,data.content_id,data.post_date,data.img_url,data.volume,data.forward,data.words_info,data.title+" | "+data.pic_info);
                console.log(_this.indexImageText);
              }
            )
          }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
  .content-detail{
    padding-top:3.4rem;
    padding-bottom: 2rem;
    min-height: 100%;
    .item-picture-img{
      max-width: 100%;
    }
    .text-author{
      margin:.8rem 0;
      color: #000;
      text-align: right;
      font-size: .85rem;
      padding:0 1rem;
      >span{
        float: left;
      }
    }
    .day{
      text-align: center;
      margin-top:1rem;
      margin-bottom: 0;
      font-size: 3rem;
      font-family: Serif;
    }
    .month{
      text-align: center;
      margin:.5rem 0 1.5rem;
      font-size: 1rem;
      color: #000;
    }
    .separate-line{
      margin: 0 auto;
      width: 30%;
      border-bottom: 1px solid #eeeeee;
    }
    .text-content{
      margin-top: 1rem;
      font-size: 1.05rem;
      color: #333;
      line-height: 1.5rem;
      padding:.5rem 2.5rem;
    }
  }
</style>
