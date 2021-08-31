<template>
  <div class="box">
    <div class="head" >
      <div v-show="!token" class="login_top" @click="login">
        <img src="@/assets/img/my2.png" alt="" class="head_img">
        <p class="login">登录/注册</p>
      </div>
      <div v-show="token" class="login_bot" @click="login">
        <img src="@/assets/img/blue.jpg" alt="" class="head_img">
        <p class="login1">{{data}}</p>
      </div>
      <p class="qiandao" @click="go">已签到</p>
    </div>

    <div class="nav">
      <div class="nav_box">
        <p>0</p>
        <p>我的学习</p>
      </div>
      <div class="nav_box1">
        <p>0</p>
        <p>本周课时</p>
      </div>
      <div class="nav_box2">
        <p>0</p>
        <p>我的积分</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      data:JSON.parse(localStorage.getItem("data")) || "",
      token: ""
    };
  },
 created() {
    this.token = this.$store.state.token
    
  },
  computed: {
    menusList() {
      return [
        [
          {
            name: "我的作业",
            icon: "description",
            url: "Homework"
          },
          {
            name: "我的社区",
            icon: "friends-o",
            url: "MyCommunity"
          }
        ],
        [
          {
            name: "课程订单",
            icon: "newspaper-o",
            url: "Order"
          },
          {
            name: "图书订单",
            icon: "idcard",
            url: "Order"
          }
        ],
        [
          {
            name: "优惠券",
            icon: "coupon-o",
            url: "Coupon"
          },
          {
            name: "学习卡",
            icon: "debit-pay",
            url: "Card"
          },
          {
            name: "分销中心",
            icon: "peer-pay",
            url: "Distribute"
          }
        ],
        [
          {
            name: "消息中心",
            icon: "comment-o",
            url: "Message"
          },
          {
            name: "地址管理",
            icon: "location-o",
            url: "Address"
          },
          {
            name: "关于我们",
            icon: "friends-o",
            url: "About"
          },
          {
            name: "意见反馈",
            icon: "records",
            url: "Feedback"
          },
          {
            name: "设置",
            icon: "setting-o",
            url: "Options"
          }
        ]
      ];
    }
  },
  watch: {},
  methods: {
    go(){
      this.$router.push("/sign")
    },
    login() {
      this.$router.push("/login");
    }
  },
  
  mounted() {}
};
</script>
<style lang='scss' scoped>
.qiandao{
    position: absolute;
    right: 00px;
    top: 100px;
    width: 170px;
    height: 50px;
    background-color: #5bb8f5;
    border-radius: 20px 0px 0px 20px;
    margin-left: 200px;
    text-align: right;
    font-size: 30px;
    line-height: 50px;
    padding-right: 20px;
    box-sizing: border-box;
    color: white;
  }
.nav_box {
  text-align: center;
  :nth-child(1) {
    color: #5bb8f5;
    font-size: 5.6vw;
  }
  :nth-child(2) {
    font-size: 3.73333vw;
    color: #595959;
  }
}
.nav_box1 {
  text-align: center;
  :nth-child(1) {
    color: #e60012;
    font-size: 5.6vw;
  }
  :nth-child(2) {
    font-size: 3.73333vw;
    color: #595959;
  }
}
.nav_box2 {
  text-align: center;
  :nth-child(1) {
    color: #e74d3d;
    font-size: 5.6vw;
  }
  :nth-child(2) {
    font-size: 3.73333vw;
    color: #595959;
  }
}
.nav {
  margin-top: 40px;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
}
.head {
  background: url("../assets/img/my1.png");
  width: 100%;
  height: 400px;
  background-size: cover;
}
.login_top {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login_bot{
  display: flex;
  align-items: center;
  margin-left: 50px;
  .login1{
    margin-left: 40px;
    color: white;
    margin-top: 20px;
    font-size: 4.53vw;
  }
}
.head_img {
  margin-top: 100px; 
  width: 120px;
  height: 120px;
}
.login {
  color: white;
  margin-top: 20px;
  font-size: 35px;
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