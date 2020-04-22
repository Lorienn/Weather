<template>
  <div>
    <mt-header title="注册">
      <router-link to="/center" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button slot="right" @click="postHost">完成</mt-button>
    </mt-header>
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <mt-field label="确认密码" placeholder="请再次输入密码" type="password" v-model="repassword"></mt-field>
  </div>
</template>

<script>
import axios from 'axios'
import { MessageBox } from 'mint-ui'
export default {
  data () {
    return {
      username: '',
      password: '',
      repassword: ''
    }
  },
  methods: {
    postHost () {
      var data = new FormData()
      data.append('username', this.username)
      data.append('password', this.password)
      data.append('repassword', this.repassword)
      axios.post('/weather/register.php', data).then(res => {
        var obj = res.data
        if (obj.code) {
          // 注册失败
          MessageBox.alert(obj.message)
          this.username = ''
          this.password = ''
        } else {
          MessageBox.alert('注册成功').then(action => {
            const session = window.sessionStorage
            session.username = this.username
            this.$store.commit('loginMutation', {
              isLogin: true,
              username: this.username
            })
            this.username = ''
            this.password = ''
            this.$router.push('/center')
          })
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
