<template>
  <div class="box">
    <div class="box">
      <router-view />
      <Tabbar />
    </div>
  </div>
</template>

<script>
import Tabbar from "@/components/tabbar"
export default {
  components: {Tabbar},
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
.box{
  height: 100%;
}
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