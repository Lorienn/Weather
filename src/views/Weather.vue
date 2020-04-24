<template>
  <div>
    <img v-lazy="'/images/logo.png'" class="logo">
    <h3>天气通</h3>
    <Row>
        <Col span="20" offset="2">
          <Input
      search
      enter-button
      placeholder="你所在的城市..."
      v-model="cityName"
      @on-search="changePage()"
          />
        </Col>
    </Row>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
export default {
  data () {
    return {
      cityName: ''
    }
  },
  methods: {
    changePage () {
      if (!this.cityName) {
        MessageBox('提示', '请输入城市名称')
      } else {
        this.$store.commit('cityNameMutation', encodeURI(this.cityName))
        this.$store.dispatch('queryCity').then(() => {
          if (this.$store.state.cityExist) {
            this.$router.push(`/detail/${encodeURI(this.cityName)}`)
            this.cityName = ''
          } else {
            MessageBox('提示', '抱歉，暂不支持该城市')
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.logo{
  display: block;
  width: 60px;
  margin: 0 auto;
  padding-top: 45%;
}
image[lazy="loading"] {
  display: block;
  width: 60px;
  margin: 0 auto;
  padding-top: 45%;
}
h3{
  height: 40px;
  font-size: 18px;
  text-align: center;
  color: #333;
}
</style>
