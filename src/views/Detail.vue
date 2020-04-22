<template>
  <div :style="detail">
    <mt-header title="天气">
      <router-link to="/weather" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div class="container">
      <h2>
        <Icon type="ios-pin-outline" />
        {{cityData.city}}
      </h2>
      <h5>{{myDate}}</h5>
      <h1>{{cityData.realtime.temperature}}</h1>
      <h4>{{cityData.realtime.info}}</h4>
    </div>

    <Row>
        <Col span="6" v-for="item in cityData.future" :key="item.date">
            <p>{{item.date | myDay}}</p>
            <p><img :src="getIcon(item.wid.day)"></p>
            <p>{{item.weather}}</p>
            <p>{{item.temperature}}</p>
        </Col>
    </Row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      detail: {
        height: '100%',
        background: '',
        backgroundSize: '',
        color: '#fff'
      },
      weather: {

      }
    }
  },
  methods: {
    getIcon (wid) {
      wid = parseInt(wid)
      var pic = 0
      if (wid === 0) {
        pic = 0
      } else if (wid === 3 || (wid >= 6 && wid <= 12) || (wid >= 21 && wid <= 25)) {
        pic = 2
      } else if (wid === 4 || wid === 5) {
        pic = 4
      } else if ((wid >= 13 && wid <= 17) || (wid >= 26 && wid <= 28)) {
        pic = 3
      } else if (wid === 20 || (wid >= 29 && wid <= 53)) {
        pic = 5
      } else {
        pic = 1
      }
      return `/images/icon/${pic}.png`
    }
  },
  beforeMount () {
    this.$store.commit('showTabbar', false)
  },
  mounted () {
    var num = Math.floor(Math.random() * 11) + 1
    this.detail.background = `url("/images/background/${num}.jpg") no-repeat`
    this.detail.backgroundSize = 'cover'
    if (this.$store.state.cityData.length === 0) {
      this.$store.dispatch('getCityData')
    }
  },
  beforeDestroy () {
    this.$store.commit('showTabbar', true)
  },
  computed: {
    ...mapState(['cityData']),
    myDate () {
      var d = new Date()
      return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`
    }
  },
  filters: {
    myDay (data) {
      var i = new Date(data).getDay()
      var days = ['日', '一', '二', '三', '四', '五', '六']
      return `星期${days[i]}`
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin resetH {
  text-align: center;
  font-weight: 400;
}
.mint-header {
  background-color: rgb(44, 180, 240);
  height: 50px;
}
.container {
  height: 65%;
  padding-top: 15%;
  h1,
  h2,
  h4,
  h5 {
    @include resetH;
  }
  h2 {
    font-size: 18px;
    .ivu-icon {
      font-size: 24px;
    }
  }
  h5 {
    font-size: 14px;
  }
  h1 {
    font-size: 120px;
  }
  h1::after {
    content: "°";
    position: absolute;
  }
  h4 {
    font-size: 18px;
  }
}
.ivu-row{
  height: 20%;
  p{
  text-align: center;
  img{
    width: 28px;
  }
  }
  p:nth-child(1){
    font-size: 12px;
  }
  p:nth-child(2){
    padding-top: 10px;
  }
  p:nth-child(3){
    padding-top: 10px;
    font-size: 12px;
  }
  p:nth-child(4){
    font-size: 14px;
  }
}
</style>
