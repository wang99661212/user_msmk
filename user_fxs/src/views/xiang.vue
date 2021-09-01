<template>
    <div>
        <div class="head_top">
            <img :src="list.avatar" alt="">
            <p>{{list.real_name}}</p>
        </div>
        <div class="tab">
            <van-tabs v-model="active" line-width="25px" line-height="5px" :border="true">
                <van-tab title="讲师介绍" class="laoshi_box">
                    <p class="laoshi">老师简介</p>
                    <p class="laoshi_text">{{list.introduction}}</p>
                </van-tab>
                <van-tab title="主机课程">

                    <div v-for="(item,index) in ke_list" :key="index" class="ke_box" @click="mygo(item.id)">
                        <img :src="item.cover_img" alt="">
                        <div class="ke_right">
                            <p class="ke_rig_top">{{item.title}}</p>
                            <div class="ke_bot">
                                <p class="ke_bot_left">{{item.sales_num}}人已报名</p>
                                <p v-if="item.underlined_price!=0"> <span class="ke_bot_rig_left">{{item.underlined_price |Nums}}</span> <span class="ke_bot_rig_right">{{item.price|Nums}}</span></p>
                                <p class="mianfei" v-if="item.underlined_price==0">免费</p>
                            </div>
                        </div>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import { Xiangid, Xianglist } from "@/http/path_url";
export default {
  components: {},
  data() {
    return {
      id: "",
      list: {},
      active: 0,
      ke_list: []
    };
  },
  computed: {},
  watch: {},
  methods: {
    mygo(id) {
      this.$router.push("/Basis?id="+id);
    },
    async getlist() {
      let res = await Xiangid(this.id);
      console.log(res, "jj");
      this.list = res.data.teacher;
    },
    async getkecheng() {
      let res = await Xianglist({
        page: 1,
        limit: 10,
        teacher_id: this.id
      });
      console.log(res.data.list, "id");
      this.ke_list = res.data.list;
    }
  },
  created() {
    this.id = this.$route.query.id;
    console.log(this.id);
    this.getlist();
    this.getkecheng();
  },
  mounted() {},
  filters: {
    Nums(val) {
      return val / 100;
    }
  }
};
</script>
<style lang='scss' scoped>
.mianfei {
  color: #44a426;
  font-size: 4vw;
}
.ke_bot_rig_right {
  font-size: 4vw;
  color: #ee1f1f;
}
.ke_bot_rig_left {
  text-decoration: line-through;
  color: #999;
  font-size: 2.93333vw;
}
.ke_bot {
  display: flex;
  justify-content: space-between;
}
.ke_bot_left {
  font-size: 3.2vw;
  color: rgba(0, 0, 0, 0.45);
}
.ke_right {
  width: 53.33333vw;
  height: 18.13333vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .ke_rig_top {
    font-size: 3.73333vw;
    color: #20242a;
  }
}
.ke_box {
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  img {
    width: 30.93333vw;
    height: 18.13333vw;
    margin-right: 2.66667vw;
  }
}
.laoshi_text {
  font-size: 3.73333vw;
  padding: 3.46667vw 0;
  color: #20242a;
}
.laoshi_box {
  padding: 0 4vw;
}
.laoshi {
  color: #b7b7b7;
  padding-top: 5.33333vw;
  font-size: 3.2vw;
}
/deep/.van-tab__text {
  font-size: 4vw;
}
.head_top {
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  margin-left: 50px;
  img {
    width: 21.86667vw;
    height: 21.86667vw;
    border-radius: 50%;
  }
  p {
    width: 21.86667vw;
    height: 21.86667vw;
    font-size: 4.26667vw;
    padding-left: 1.33333vw;
    color: #030f09;
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