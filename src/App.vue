<template>
  <div id="app">
    <!-- <navtop></navtop> Mui bug太多 -弃用  -->
    <header id="header" class="mui-bar mui-bar-transparent">
      <!-- <header id="header" class="mui-bar mui-bar-nav"> -->
      <router-link to="/" class="mui-icon mui-icon-home mui-icon-left-nav mui-pull-left"></router-link>
      <h1 class="mui-title"></h1>
      <a class="mui-icon mui-icon-bars mui-pull-right" @click="value1 = true" type="primary"></a>
      <Drawer class="cehua" title="菜单" :closable="false" v-model="value1">

        <router-link to="/" style="color: white;"><Button type="success" class="chxx">首页</Button></router-link>
        <router-link to="/bowen" style="color: white;"><Button type="success" class="chxx">博文</Button></router-link>
        <router-link to="/suibi" style="color: white;"><Button type="success" class="chxx">随笔</Button></router-link>
        <!-- <router-link to="/liuyan" style="color: white;"><Button type="success" class="chxx">留言</Button></router-link> -->
        <router-link to="/sousuo" style="color: white;"><Button type="success" class="chxx">搜索</Button></router-link>
        <router-link to="/denglu" style="color: white;"><Button type="success" class="chxx">登录</Button></router-link>

      </Drawer>
      <!-- <Dropdown class="mui-icon mui-icon-bars mui-pull-right">

      <DropdownMenu slot="list">
                  <a href="javascript:void(0)">
                  </a>
                  <DropdownItem> <router-link to="/">首页</router-link></DropdownItem>
                  <DropdownItem> <router-link to="/bowen">博文</router-link></DropdownItem>
                  <DropdownItem disabled>随笔</DropdownItem>
                   <DropdownItem><router-link to="/suibi">随笔</router-link></DropdownItem>
                  <DropdownItem><router-link to="/liuyan">留言</router-link></DropdownItem>
                  <DropdownItem divided>留言</DropdownItem>
                  <DropdownItem><router-link to="/sousuo">搜索</router-link></DropdownItem>
              </DropdownMenu>
          </Dropdown> -->
    </header>
    <!-- <nav1></nav1> -->
    <!-- 侧面导航 -->
    <transition>
      <router-view />
    </transition>
		<Back-top></Back-top>
  </div>
</template>

<script>
  

 
  export default {
    name: 'App',
    data() {
      return {
        value1: false, // 侧滑菜单
      }
    },
    components: {
    
    }
  }
</script>

<style>
  body {
    background: #455159;
  }

  #app {
    overflow-x: hidden;
    background: #455159;
  }

  .cehua {
    text-align: center;
  }

  .chxx {
    width: 100%;
    border-radius: 3px;
    margin: 5px;
    text-align: center;
    font-size: 16px;
  }

 

  .v-enter,
  .v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }

  .v-enter-active,
  .v-leave-active {

    transition: all 0.6s ease;
  }
</style>
