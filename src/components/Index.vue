<template>
  <div class="index_box">

    <div class="header">
      <router-link to="/">
        <h1 class="header_title">Perpekura的博客</h1>
      </router-link>

      <p class="header_title_bottom">坚持理想，热爱生活，珍惜现在</p>
    </div>
    <!-- 导航栏组件 -->


    <div class="article-box">
      <div class="article-title">
        <h1>{{article_title}}</h1>
      </div>
      <div class="acticle-content">
        <p class="acticle-info">
          <span>发布时间：{{createTime}}</span>
          <span>浏览量:{{looktimes}}</span>

        </p>
        <p v-html="article"></p>
      </div>
    </div>
  </div>
</template>
<script>

  import article from '../bowen/1.md'
  export default {
    data() {
      return {
        article_title: '为什么编程是独一无二的职业',
        looktimes: 10,
        createTime: '2019.10.4',
        article:this.md2html(article)
      }
    },
    components:{
      
    }
  }
</script>
<style lang="scss" scoped>
  .index_box {
    margin: 22px;
    

    .header {

      .header_title {
        width: 200px;
        border-bottom: 3px solid #3485b4;
        margin: 0 auto;
        color: white;
        text-align: center;
        font-size: 24px;
        padding-top: 20px;
        padding-bottom: 5px;


      }

      .header_title_bottom {
        color: #888888;
        text-align: center;
        margin-top: 10px;
        font-style: italic;
      }
    }
  }

  .article-box {
    margin: 0 auto;
    background: #fff;
    padding: 10px;
    margin-top: 10px;
    border-radius: 5px;

    .article-title {

      text-align: center;

      h1 {
        font-size: 20px;
        font-family: "微软雅黑"；
      }
    }


    .acticle-info {
      color: darkgray;
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px ;
    }
    .acticle-content{
      margin: 15px;
    }

  }


</style>
