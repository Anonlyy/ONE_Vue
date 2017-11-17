<template>
  <div id="app-main">
    {{results}}
    <Spin size="large" fix v-if="spinShow"></Spin>
  </div>
</template>

<script>
  import {getIdList} from '../api/getData'
  export default {
    name: 'index',
    data() {
      return {
        results:[],
        spinShow:true
      }
    },
    created() {
      this.api.getIdList().then(
        res=>{
          console.log(res.data.data);
        }
      )
    },
    methods:{
      start () {
        this.$Loading.start();
      },
      finish () {
        this.$Loading.finish();
      },
      error () {
        this.$Loading.error();
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  #app-main{
    padding-top:3.4rem;
  }
</style>
