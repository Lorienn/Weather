<template>
    <nav>
      <ul>
        <router-link to="/weather" tag="li" active-class="active">
          <span><Icon type="ios-cloud" /></span>
          <p>天气</p>
        </router-link>
        <router-link to="/news" tag="li" active-class="active">
          <span><Icon type="ios-eye" /></span>
          <p>发现</p>
        </router-link>
        <router-link to="/center" tag="li" active-class="active">
          <span><Icon type="md-person" /></span>
          <p>我的</p>
        </router-link>
      </ul>
    </nav>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style lang="scss" scoped>
.active {
  color: rgb(44, 180, 240);
}
nav{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background: #fff;
  border-top:1px solid rgb(236,236,236);
  ul{
    list-style: none;
    display: flex;
    height: 100%;
    li{
      flex: 1;
      text-align: center;
      line-height: 10px;
      padding-top: 6px;
      span{
        font-size: 36px;
      }
      p{
        font-size: 12px;
      }
    }
  }
}
</style>
