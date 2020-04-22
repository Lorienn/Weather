<template>
    <div id="setting">
      <mt-header fixed title="设置">
        <router-link to="/weather" slot="left">
        <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>

        <Row class="before" v-if="!isLogin">
          <Col span="10" offset="1">
            <img src="/images/icon/pic.png">
          </Col>
          <Col span="12" offset="1">
            <h2>前往登陆账户</h2>
            <ul>
              <li>- 无广告</li>
              <li>- 分钟级降雨通知</li>
              <li>- 全球各大数据源可选</li>
            </ul>
            <router-link tag="button" to="/login" class="ivu-btn ivu-btn-info">登录</router-link>
            <router-link tag="button" to="/register" class="ivu-btn ivu-btn-warning">注册</router-link>
          </Col>
        </Row>

        <Row class="after"  v-else>
          <Col span="4" offset="1">
            <Avatar icon="ios-person" size="50"/>
          </Col>
          <Col span="14">
            <p>{{username}}</p>
          </Col>
          <Col span="5">
            <Button type="error" @click="logOut()">注销</Button>
          </Col>
        </Row>

        <p>天气设置</p>
        <mt-cell title="单位" is-link></mt-cell>
        <mt-cell title="天气数据源" is-link></mt-cell>
        <mt-cell title="消息推送" is-link></mt-cell>
        <mt-cell title="定位设置" value="已启用"></mt-cell>

        <p>界面管理</p>
        <mt-cell title="天气背景" is-link></mt-cell>
        <mt-cell title="语言设置" is-link></mt-cell>

        <p>挂件管理</p>
        <mt-cell title="挂件管理" is-link></mt-cell>
        <mt-cell title="添加Siri捷径" is-link></mt-cell>

        <p>帮助与支持</p>
        <mt-cell title="好评鼓励" is-link></mt-cell>
        <mt-cell title="意见反馈" is-link></mt-cell>
        <mt-cell title="关于" is-link></mt-cell>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { MessageBox } from 'mint-ui'
export default {
  methods: {
    logOut () {
      MessageBox.confirm('确认退出登陆？').then(action => {
        this.$store.commit('loginMutation', {
          isLogin: false,
          username: ''
        })
        sessionStorage.removeItem('username')
      })
    }
  },
  mounted () {
    var name = sessionStorage.username
    if (name) {
      this.$store.commit('loginMutation', {
        isLogin: true,
        username: name
      })
    }
  },
  computed: {
    ...mapState(['isLogin', 'username'])
  }
}
</script>

<style lang="scss">
#setting{
  padding-top: 65px;
  margin-bottom: 64px;
  .mint-header {
      background-color: rgb(44, 180, 240);
      height: 50px;
  }
  .ivu-row.before{
      width: 95%;
      height: 170px;
      margin: 0 auto;
      background: #fff;
      border-radius: 15px;
      box-shadow: 2px 8px 8px rgba(200,200,200,0.2);
      img{
        width: 100%;
        height: 100%;
        padding-top: 15px;
      }
      h2{
        padding-top: 15px;
        font-size: 20px;
        color: #000;
        font-weight: 400;
      }
      ul{
        padding-top: 5px;
        list-style: none;
        li{
          font-size: 14px;
          color: #aaa;
        }
      }
      .ivu-btn{
        margin-top: 5px;
      }
      .ivu-btn:last-child{
        margin-left: 10px;
      }
    }
  .ivu-row.after{
      width: 100%;
      height: 75px;
      background: #fff;
      border-top: 1px solid rgb(219,219,219);
      border-bottom: 1px solid rgb(219,219,219);
  .ivu-avatar{
        margin-top: 10px;
      }
      p{
        font-size: 16px;
        color: #000;
        padding-top: 25px;
      }
  .ivu-btn{
        margin-top: 20px;
      }
    }
  p{
      padding: 15px 0 5px 10px;
      font-size: 12px;
      color: #aaa;
    }
  .mint-cell-text{
    color: #000;
  }
  }
</style>
