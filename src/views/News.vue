<template>
  <div class="news">
    <mt-header fixed title="看点">
      <router-link to="/weather" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <ul>
      <li v-for="item in topNews" :key="item.uniquekey">
        <Row :gutter="2" type="flex" justify="space-around" class="code-row-bg">
          <div v-if="!item.thumbnail_pic_s03 && !item.thumbnail_pic_s02">
            <Col span="8">
              <img v-lazy="item.thumbnail_pic_s" />
            </Col>
            <Col span="8">
              <img v-lazy="item.thumbnail_pic_s" />
            </Col>
            <Col span="8">
              <img v-lazy="item.thumbnail_pic_s" />
            </Col>
          </div>
          <div v-else-if="!item.thumbnail_pic_s03">
            <Col span="8">
              <img v-lazy="item.thumbnail_pic_s" />
            </Col>
            <Col span="8">
              <img v-lazy="item.thumbnail_pic_s02" />
            </Col>
            <Col span="8">
              <img v-lazy="item.thumbnail_pic_s" />
            </Col>
          </div>
          <div v-else>
            <Col span="8">
              <img v-lazy="item.thumbnail_pic_s" />
            </Col>
            <Col span="8">
              <img v-lazy="item.thumbnail_pic_s02" />
            </Col>
            <Col span="8">
              <img v-lazy="item.thumbnail_pic_s03" />
            </Col>
          </div>
        </Row>
        <h2>{{item.title}}</h2>
        <p>{{item.author_name}}</p>
        <Divider />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Indicator } from 'mint-ui'
export default {
  mounted () {
    if (this.$store.state.topNews.length === 0) {
      Indicator.open()
      this.$store.dispatch('getTopNews')
      setTimeout(() => {
        Indicator.close()
      }, 1000)
    }
  },
  computed: {
    ...mapState(['topNews'])
  }
}
</script>

<style lang="scss" scoped>
.news {
  padding-top: 50px;
  margin-bottom: 62px;
  img {
    width: 100%;
  }
  image[lazy="loading"] {
    width: 100%;
  }
  .mint-header {
  background-color: rgb(44, 180, 240);
  height: 50px;
  }
  .ivu-divider-horizontal {
    margin: 15px 0 10px 0;
  }
  ul {
    li {
      h2 {
        width: 95%;
        padding-left: 10px;
        font-size: 16px;
        font-weight: 400;
        color: #000;
        line-height: 24px;
      }
      p {
        padding: 5px 0 0 10px;
        font-size: 14px;
        color: #aaaaaa;
      }
    }
  }
}
</style>
