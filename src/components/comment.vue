<template>
  <div class="comment">
    <div class="comment-title">
      <p class="page-sparate-title">
        <Icon type="android-chat"></Icon>
        评论内容
      </p>
    </div>
    <div class="comment-content-list">
      <ul class="comment-list">
        <li class="comment-item" v-for="item,index in commentList" v-if="isAll?index<5:true">
          <div class="comment-header">
            <img :src="item.avatar" alt="" class="avatar">
            <span class="user-name" v-text="item.user_name"></span>
            <p class="date" v-text="item.comment_time"></p>
          </div>
          <div class="comment-text" v-text="item.content"></div>
        </li>
      </ul>
      <Button type="success" long @click="isAll=false" v-if="isAll&&commentList.length>5">加载更多</Button>
    </div>
  </div>

</template>

<script>
  const defaultSrc = 'https://raw.githubusercontent.com/Anonlyy/ONE_Angular/master/src/assets/image/default.jpg';
  import { Comment } from '../api/class'
  export default {
    name: 'comment',
    data() {
      return {
        commentDetails:new Comment('0','xx','null','xxx',defaultSrc),
        commentList:[],
        isAll:true
      }
    },
    props:['comment-type'],
    created(){
      this.getCommentDetails();
    },
    methods:{
      getCommentDetails(){
        this.commentList = [];
        this.api.getCommentDetails(this.commentType.type,this.commentType.id).then(
          result=>{
            let data = result.data.data.data;
            for(let item of data){
              this.commentDetails = new Comment(item.id,item.content,item.input_date,item.user.user_name,item.user.web_url);
              this.commentList.push(this.commentDetails);
            }
          }).catch(
            error=>{
              console.log('请求错误:'+error);
            }
        )
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .comment{
    padding:0 1rem;
    margin: 0 0 .8rem 0;
    position: relative;
    .comment-title{
      font-size: 1rem;
      .page-sparate-title{
        height: 3rem;
        line-height: 3rem;
        position: relative;
        &::before{
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          width: 100px;
          background-color: black;
        }
      }
    }
    .comment-content-list{
      .comment-list{
        .comment-item{
          margin:.7rem 0 0;
          border-bottom: 1px solid #eeeeee;
          .comment-header{
            height:2.2rem;
            line-height:2.2rem;
            position: relative;
            .avatar{
              width:1.2rem;
              height:1.2rem;
              vertical-align: middle;
              margin-right: .2rem;
            }
            .user-name{
              font-size: .85rem;
              font-weight:normal;
            }
            .date{
              float: right;
              font-size: .8rem;
            }
          }
          .comment-text{
            margin:1rem;
            font-size: 1rem;
            font-weight:normal;
          }
        }
      }
    }
  }

</style>
