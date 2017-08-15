<template>
  <div id="app">
    <router-link to="/">
      <!-- <div class="vux-demo">
         <img class="logo" src="./assets/vux_logo.png"> 
        <h2>返回主页</h2>
      </div> -->
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  
  export default {
    name: 'app'
  }

</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  body {
    background-color: #fbf9fe;
  }

  a {
    color: #999999;
  }

  .vux-demo {
    text-align: center;
  }

  .logo {
    width: 100px;
    height: 100px
  }
</style>