<template>
  <div class="layout">
      <!-- 左侧导航 -->
      <Mymenu :isCollapse='isCollapse'/>
      <!-- 右侧内容 -->
      <div class="main-content">
          <div class='top-header'>
              <div class="left">
                  <i class="iconfont" :class="{'icon-right-indent':!isCollapse,'icon-left-indent':isCollapse}" 
                  @click="isCollapse=!isCollapse"></i>
              </div>
              <div class="userinfo">
                  <span>hello {{userinfo.user}}</span>
                  <i class="iconfont icon-tuichu" @click="loginout"></i>
              </div>
          </div>
          <div class="content">
              <router-view></router-view>
          </div>
      </div>
  </div>
</template>

<script>
import Mymenu from '../../components/Mymenu.vue'
import {mapState,mapMutations} from 'vuex'
export default {
    data(){
        return{
            isCollapse:false,
        }
    },
    computed:{
        ...mapState('loginModule',['userinfo'])
    },
    methods:{
        ...mapMutations('loginModule',['clearUser']),
        loginout(){
            /**
             * 退出登录
             * 1. 清空vuex  2. 清空存储数据 3.返回登录界面
             */
            localStorage.removeItem('userinfo')
            this.clearUser()
            this.$router.push('/login')
            //刷新：window.localtion.reload()
        }
    },
    components:{
        Mymenu,
    }

}
</script>

<style lang='scss' scoped>
.layout{
    height: 100%;
    display: flex;
    .main-content{
        flex:1;
        .top-header{
            background: #1e78bf;
            height: 50px;
            line-height: 50px;
            color: #fff;
            display: flex;
            .left{
                flex: 1;
            }
            .iconfont{
                font-size: 24px;
                color: #fff;
                padding-left: 10px;
            }
            .userinfo{
                 color: #fff;
                 vertical-align: middle;
                 padding-right: 20px;
            }
        }
        .content{
            margin: 20px;
        }
    }
}
</style>