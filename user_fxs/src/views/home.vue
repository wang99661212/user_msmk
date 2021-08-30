<template>
  <div>
    <div class="head">
      <img src="@/assets/img/page_left.png" alt="" class="left_img">
      <div class="cen">
        <input type="text" placeholder="搜索" class="head_inp">
        <img src="@/assets/search.png" alt="" class="head_img">
      </div>
      <img src="@/assets/img/page_right.png" alt="" class="right_img">
    </div>
    <div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="@/assets/img/banner1.jpg" alt="" class="banner_img">
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/img/banner2.jpg" alt="" class="banner_img">
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/img/banner3.jpg" alt="" class="banner_img">
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/img/banner4.jpg" alt="" class="banner_img">
        </van-swipe-item>
      </van-swipe>
      <div>
        <van-grid :border="false">
          <van-grid-item icon="hot-sale-o" text="大威天龙" />
        </van-grid>
      </div>
      <div>
        <div class="cen_box">
          <div class="top_text">
            <div class="top_box">
              <p>
                {{data_js_name}}
              </p>
              <p @click="tabBar">
                更多>
              </p>
            </div>
          </div>
          <div v-for="(it,key) in data_js.list" :key="key" class="js_box">
            <img :src="it.teacher_avatar" alt="" class="js_img">
            <div class="ms_p">
              <p>{{it.teacher_name}}</p>
              <p>{{it.introduction}}</p>
            </div>
          </div>
        </div>

        <div>
          <div class="top_text">
            <div class="top_box">
              <p>
                {{data_kc_name}}
              </p>
              <p>
                更多>
              </p>
            </div>
          </div>

          <div v-for="(item,index) in data_kc.list" :key="index" class="tjkc">
            <img :src="item.cover_img" alt="" class="tjkc_img">
            <div class="right_box">
              <div class="left_text">
                <p>{{item.title}}</p>
                <p>{{item.sales_num}}人已经报名</p>
              </div>
              <div class="rig_text" v-show="item.price!=0">{{item.price}}</div>
              <div class="rig_text1" v-show="item.price==0">免费</div>
            </div>
          </div>
        </div>
        <div class="top_text">
          <div class="top_box">
            <p>
              {{data_ms_name}}
            </p>
            <p @click="tabBar">
              更多>
            </p>
          </div>
        </div>
        <div v-for="(it,key) in data_ms.list" :key="key" class="js_bot">
          <img :src="it.teacher_avatar" alt="" class="js_img">
          <div class="ms_p">
            <p>{{it.teacher_name}}</p>
            <p>{{it.introduction}}</p>
          </div>
        </div>

      </div>
    </div>
    <div class="foot_box"></div>
  </div>
</template>

<script>
import { Appindex } from "@/http/path_url.js";
export default {
  components: {},
  data() {
    return {
      data_js: {},
      data_js_name: "",
      data_kc: {},
      data_kc_name: "",
      data_ms: {},
      data_ms_name: ""
    };
  },
  computed: {},
  watch: {},
  methods: {
    tabBar() {
      this.$store.commit("tabBar");
      this.$router.push("/course");
    },
    async getlist() {
      let res = await Appindex();
      this.data_js = res.data[0];
      this.data_js_name = this.data_js.channel_info.name;
      this.data_kc = res.data[1];
      this.data_kc_name = this.data_kc.channel_info.name;
      this.data_ms = res.data[2];
      this.data_ms_name = this.data_ms.channel_info.name;
      // console.log(this.data_kc);
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
.js_bot {
  width: 90%;
  margin: 20px auto;
  display: flex;
  align-items: center;
  height: 150px;
  border: 1px solid #cccccc;
  border-radius: 20px;
}
.ms_p {
  p {
    font-size: 30px;
  }
}
.rig_text1 {
  font-size: 4vw;
  margin-top: 80px;
  color: #44a426;
}
.rig_text {
  font-size: 4vw;
  margin-top: 80px;
}
.left_text {
  display: flex;
  height: 120px;
  flex-direction: column;
  justify-content: space-between;
  p:nth-child(1) {
    font-size: 30px;
  }
  p:nth-child(2) {
    font-size: 20px;
    color: rgba(0, 0, 0, 0.45);
  }
}
.right_box {
  width: 70%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
}
.tjkc {
  width: 90%;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 150px;
  border: 1px solid #cccccc;
  border-radius: 20px;
  .tjkc_img {
    width: 100px;
    height: 100px;
    margin-left: 40px;
  }
}
.cen_box {
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  // background-color: rgb(240, 238, 238);
}
.js_box {
  display: flex;
  width: 100%;
  height: 150px;
  align-items: center;
  border-radius: 20px;
  margin: 20px 0px;
  border: 1px solid #cccccc;
}
.js_img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 20px;
}
.top_box {
  padding: 0 20px;
  margin-left: 20px;
  box-sizing: border-box;
  border-left: 10px solid red;
  width: 100%;
  display: flex;
  justify-content: space-between;
  p {
    font-size: 4.26667vw;
    color: #595959;
  }
}
.top_text {
  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;
}
.banner_img {
  width: 100%;
  height: 400px;
}
.right_img {
  width: 50px;
  height: 50px;
}
.cen {
  position: relative;
}
.head_img {
  width: 30px;
  height: 30px;
  position: absolute;
  right: 15px;
  top: 15px;
}
.head_inp {
  width: 580px;
  height: 60px;
  border-radius: 4.4vw;
  border: 1px solid #cccccc;
  padding-left: 20px;
  box-sizing: border-box;
  font-size: 18px;
}
.head {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  box-sizing: border-box;
  .left_img {
    width: 50px;
    height: 50px;
  }
}
.foot_box {
  width: 100%;
  height: 100px;
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