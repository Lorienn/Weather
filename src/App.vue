<template>
  <div id="app">
    <tabbar v-if="isTabbarShow"></tabbar>
    <router-view/>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
import { mapState } from 'vuex'
export default {
  components: {
    Tabbar
  },
  computed: {
    ...mapState(['isTabbarShow'])
  }
}
</script>

<style lang="scss">
html, body{
  //高度自适应
  width: 100%;
  height: 100%;
  overflow: scroll;
}
//隐藏滚动条
html::-webkit-scrollbar,body::-webkit-scrollbar{
  width: 0px;
  height: 0px;
}
#app{
  width: 100%;
  height: 100%;
  background: rgb(245,245,245);
}
nav{
  z-index: 999;
}
</style>
