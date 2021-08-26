<template>
  <div>
    <div class="box">
      <router-view />
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/course">课程</van-tabbar-item>
        <van-tabbar-item icon="comment-o" to="/consult">咨询</van-tabbar-item>
        <van-tabbar-item icon="send-gift-o" to="/books">图书</van-tabbar-item>
        <van-tabbar-item icon="manager-o" to="/my">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      active:0,
      list:[]
    };
  },
  computed: {},
  watch: {},
  methods: {
    async getlogo(){
      let res = this.$http.get
    }
  },
  created() {
    this.getlogo()
  },
  mounted() {}
};
</script>
<style lang='scss' scoped>
/deep/.van-tabbar-item__text{
  font-size: 20px;
}
</style>
//                       .::::.
//                     .::::::::.
//                    :::::::::::
//                 ..:::::::::::'
//              '::::::::::::'
//                .::::::::::
//           '::::::::::::::..
//                ..::::::::::::.
//              ``::::::::::::::::
//               ::::``:::::::::'        .:::.
//              ::::'   ':::::'       .::::::::.
//            .::::'      ::::     .:::::::'::::.
//           .:::'       :::::  .:::::::::' ':::::.
//          .::'        :::::.:::::::::'      ':::::.
//         .::'         ::::::::::::::'         ``::::.
//     ...:::           ::::::::::::'              ``::.
//    ```` ':.          ':::::::::'                  ::::..
//                       '.:::::'                    ':'````..
//
//  
//         .............................................  
//                  美女保佑             永无BUG 
//
//          				        程序员之歌      
//                  十年生死两茫茫，写程序，到天亮。  
//                     	千行代码，Bug何处藏。  
//                  纵使上线又怎样，朝令改，夕断肠。  
//
//                  领导每天新想法，天天改，日日忙。  
//                     	相顾无言，惟有泪千行。  
//                  每晚灯火阑珊处，夜难寐，加班狂。                  