<template>
  <div class="box">
    <div class="head_bg">
      <div class="head_top">
        <div class="head_lfet">
          <img src="@/assets/img/blue.jpg" alt="" class="head_img">
          <div class="head_p">
            <p>{{data}}</p>
            <p>积分:21</p>
          </div>
        </div>
        <div class="head_rig" @click="dialog">
          签到规则
        </div>
      </div>
    </div>
    <div class="calendar">
      <!-- <van-calendar 
            :show-title="false"
            row-height="30" 
            :show-mark="false" 
            :poppable="false" 
            :show-confirm="false" 
            :style="{ height: '300px' }" /> -->
      <Calender />
    </div>
    <div class="bg">
    </div>
    <div class="footr">
      <div class="foot_box">

        <div class="top_box">
          <p>好课推荐</p>
          <p>更多></p>
        </div>
        <div v-for="item in haokelist" :key="item.id" class="haoke">
          <img :src="item.cover_img" alt="" class="haoke_img">
          <div class="haoke_rig">
            <p>{{item.course_name}}</p>
            <p>
              <span>{{item.exchange_price}}积分</span>
              <span>去兑换</span>
            </p>
          </div>
        </div>

        <div class="top_box">
          <p>热门图书</p>
          <p>更多></p>
        </div>
        <div v-for="item in tushulist" :key="item.id" class="tushu">
          <img :src="item.cover_img" alt="" class="haoke_img">
          <div class="haoke_rig">
            <p>{{item.book_name}}</p>
            <p>
              <span>{{item.exchange_price}}积分</span>
              <span>去兑换</span>
            </p>
          </div>
        </div>

      </div>

    </div>
  </div>

</template>

<script>
import { Sign, Haoke, Tushu } from "@/http/path_url.js";
import Calender from "@/components/Calender";
export default {
  components: { Calender },
  data() {
    return {
      data: JSON.parse(localStorage.getItem("data")) || "",
      text: "",
      haokelist: [],
      tushulist: []
    };
  },
  computed: {},
  watch: {},
  methods: {
    async gettushu() {
      let res = await Tushu();
      this.tushulist = res.data.list;
    },
    async gethaoke() {
      let res = await Haoke();
      this.haokelist=res.data.list
      console.log(res);
    },
    async gitsgin() {
      let res = await Sign();
      this.text = res.data.sign_rules.point_sign_rule_info;
      //   console.log(res.data);
    },
    dialog() {
      console.log(this.text);
      this.$dialog
        .alert({
          title: "签到规则",
          message: this.text,
          confirmButtonText: "我知道了",
          messageAlign: "left"
        })
        .then(() => {
          // on close
        });
    }
  },
  created() {
    this.gitsgin();
    this.gettushu();
    this.gethaoke();
  },
  mounted() {}
};
</script>
<style lang='scss' scoped>
.haoke {
  width: 100%;
  height: 200px;
  border-radius: 20px;
  background-color: white;
  display: flex;
  align-items: center;
  .haoke_img {
    width: 30.93333vw;
    height: 18.13333vw;
    margin-left: 20px;
  }
  .haoke_rig {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80%;
    margin-left: 20px;
    p:nth-child(1) {
      font-size: 3.73333vw;
      color: #20242a;
    }
    p:nth-child(2) {
      width: 370px;
      display: flex;
      justify-content: space-between;
      span:nth-child(1) {
        color: #ee1f1f;
        font-size: 3.2vw;
      }
      span:nth-child(2) {
        height: 5.6vw;
        width: 13.86667vw;
        background: hsla(0, 0%, 100%, 0.1);
        border-radius: 2.93333vw;
        border: 1px solid #b7b7b7;
        text-align: center;
        font-size: 3.2vw;
        font-weight: 400;
        color: #595959;
        line-height: 5.6vw;
      }
    }
  }
}
.tushu {
  width: 100%;
  height: 40vw;
  border-radius: 20px;
  background-color: white;
  display: flex;
  align-items: center;
  .haoke_img {
    width: 22.93333vw;
    height: 32.26667vw;
    margin-left: 20px;
  }
  .haoke_rig {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80%;
    margin-left: 20px;
    p:nth-child(1) {
      font-size: 3.73333vw;
      color: #20242a;
    }
    p:nth-child(2) {
      width: 430px;
      display: flex;
      justify-content: space-between;
      span:nth-child(1) {
        color: #ee1f1f;
        font-size: 3.2vw;
      }
      span:nth-child(2) {
        height: 5.6vw;
        width: 13.86667vw;
        background: hsla(0, 0%, 100%, 0.1);
        border-radius: 2.93333vw;
        border: 1px solid #b7b7b7;
        text-align: center;
        font-size: 3.2vw;
        font-weight: 400;
        color: #595959;
        line-height: 5.6vw;
      }
    }
  }
}
.foot_box {
  width: 90%;
  height: 100%;
  .top_box {
    border-left: 5px solid red;
    padding-left: 10px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 20px 0px;
    p:nth-child(1) {
      font-size: 4.26667vw;
      color: #595959;
    }
    p:nth-child(2) {
      font-size: 3.73333vw;
      color: #b7b7b7;
    }
  }
}
.footr {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f1f1f1;
}
.bg {
  width: 100%;
  height: 300px;
  background-color: #f1f1f1;
}
/deep/.van-calendar {
  border-radius: 20px;
}
.calendar {
  width: 700px;
  height: 700px;
  border-radius: 20px;
  position: absolute;
  top: 200px;
  right: 25px;
}
.box {
  width: 100%;
  height: 100%;
  position: relative;
}
.head_p {
  margin-left: 30px;
  p:nth-child(1) {
    font-size: 30px;
    color: white;
  }
  p:nth-child(2) {
    font-size: 20px;
    color: white;
  }
}
.head_bg {
  background-color: rgb(218, 84, 84);
  height: 500px;
}
.head_top {
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .head_lfet {
    display: flex;
    align-items: center;
  }
  .head_rig {
    width: 160px;
    height: 45px;
    font-size: 30px;
    border: 1px solid #cccccc;
    color: white;
    border-radius: 30px;
    text-align: center;
    line-height: 45px;
  }
}
.head_img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
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