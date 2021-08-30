<template>
    <div class="tabbar">
        <router-link v-for="(item,index) in tabbar_list" :key="index" :to="item.url">
            <p @click="tab(index)">
                <img :src="$store.state.num==index?item.nav_img_checked:item.nav_img" alt="" class="tab_img">
                <span class="tab_text" :style="{'num':true,color:$store.state.num==index?'red':''}">{{item.name}}</span>
            </p>

        </router-link>
    </div>
</template>

<script>
import {Bottm} from '@/http/path_url.js'
export default {
  components: {},
  data() {
    return {
      tabbar_list: [],
      
    };
  },
  computed: {},
  watch: {},
  methods: {
      tab(index){
          this.$store.commit('tab',index)
      },
    async gittabbar() {
      let { data: index } = await Bottm()
      let url = ["/home", "/course", "/consult", "/books", "/my"];
      let data = index.index;
      data.forEach((item, key) => {
        item.url = url[key];
      });
      // console.log(data);
      this.tabbar_list = data;
    }
  },
  created() {
    this.gittabbar();
  },
  mounted() {}
};
</script>
<style lang='scss' scoped>
.tabbar {
  background: white;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
}
.tab_img {
  width: 50px;
  height: 50px;
}
.tab_text {
  display: block;
  font-size: 20px;
  color: #ccc;
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