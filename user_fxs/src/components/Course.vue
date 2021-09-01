<template>
    <div class="box">
        <div class="box_center" v-for="(item,index) in data_ms.list" :key="index" @click="go(item.teacher_id)">
            <img :src="item.teacher_avatar" alt="">
            <div class="right_text">
                <p>{{item.teacher_name}}</p>
                <p></p>
                <p>{{item.introduction}}</p>
            </div>
        </div>
        <div class="foot">到底了没有了</div>
    </div>
</template>

<script>
import { Appindex } from "@/http/path_url";
export default {
  components: {},
  data() {
    return {
      data_ms: {},
      data_ms_name: ""
    };
  },
  computed: {},
  watch: {},
  methods: {
    go(id){
      this.$router.push("/xiang?id="+id)
    },
    async getlist() {
      let res = await Appindex();
      this.data_ms = res.data[2];
      this.data_ms_name = this.data_ms.channel_info.name;
    //   console.log(this.data_ms);
      // console.log(this.data_ms);
    }
  },
  created() {
    this.getlist();
  },
  mounted() {}
};
</script>
<style lang='scss' scoped>
.foot{
    color: #595959;
    font-size: 20px;
    text-align: center;
    width: 100%;

}
.right_text{
    margin-left: 20px;
    width: 400px;
    p:nth-child(1){
        font-size: 4vw;
        color: #595959;
    }
    p:nth-child(2){
        height: 15px;
        width: 100%;
    }
    p:nth-child(3){
        font-size: 3.2vw;
        color: #b7b7b7;
    }
}
.box {
  width: 100%;
  height: 100%;
  background: #f7f8fa;
  overflow: hidden;
}
.box_center {
  width: 90%;
  height: 150px;
  border-radius: 20px;
  margin: 40px auto;
  background: white;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  box-sizing: border-box;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
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