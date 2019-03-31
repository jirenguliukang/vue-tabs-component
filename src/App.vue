<template>
  <div id="app">
      <tabs :selected.sync="selectedTab" :direction="1">
        <tabs-header>
          <template slot="action">
             <button>设置</button>
          </template>
          <tabs-item>财经</tabs-item>
          <tabs-item disabled>体育</tabs-item>
          <tabs-item>房产</tabs-item>
        </tabs-header>
        <tabs-body>
          <tabs-pane>财经相关资讯</tabs-pane>
          <tabs-pane>体育相关资讯</tabs-pane>
          <tabs-pane>房产相关资讯</tabs-pane>
        </tabs-body>
      </tabs>
  </div>
</template>
<script>

export default {
  
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
