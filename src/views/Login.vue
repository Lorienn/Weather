<template>
  <div>
    <mt-header title="登陆">
      <router-link to="/center" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button slot="right" @click="postHost">完成</mt-button>
    </mt-header>
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
  </div>
</template>

<script>
import axios from 'axios'
import { MessageBox } from 'mint-ui'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    postHost () {
      var data = new FormData()
      data.append('username', this.username)
      data.append('password', this.password)
      axios.post('/weather/login.php', data).then(res => {
        var obj = res.data
        if (obj.code) {
          // 登录失败
          MessageBox.alert(obj.message).then(action => {
            this.username = ''
            this.password = ''
          })
        } else {
          // 登陆成功
          const session = window.sessionStorage
          session.username = this.username
          this.$store.commit('loginMutation', {
            isLogin: true,
            username: this.username
          })
          this.username = ''
          this.password = ''
          this.$router.push('/center')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.mint-header {
  background-color: rgb(44, 180, 240);
  height: 50px;
}
</style>
