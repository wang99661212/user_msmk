<template>
  <div>
    <div>
      <img src="@/assets/切图/arrow-left-bold.png" alt="" class="head_left" @click="go">
    </div>
    <div class="head_cen">
      <img src="@/assets/切图/head.png" class="head_img">
    </div>
    <div class="foot">
      <div class="foot_box">
        <div class="foot_inp" v-show="logflag">
          <div class="inp_top">
            <img src="@/assets/切图/head_hod.png" alt="" style="width:25px;height:30px;">
            <div class="inp_box">
              <input type="text" placeholder="请输入手机号" class="inp" v-model="phone">
            </div>
            <button class="foot_top_but" @click="numder">获取验证码</button>
          </div>
          <div class="inp_bot">
            <img src="@/assets/切图/images/A_07.png" alt="" style="width:30px;height:30px;">
            <div class="inp_box">
              <input type="text" placeholder="请输入验证码" class="inp" v-model="phone_number">
            </div>
          </div>
        </div>
        <div class="foot_inp" v-show="!logflag">
          <div class="inp_top">
            <img src="@/assets/切图/head_hod.png" alt="" style="width:25px;height:30px;">
            <div class="inp_box">
              <input type="text" placeholder="请输入手机号" class="inp" v-model="phone">
            </div>
          </div>
          <div class="inp_bot">
            <img src="@/assets/切图/images/A_07.png" alt="" style="width:30px;height:30px;">
            <div class="inp_box">
              <input type="password" placeholder="请输入密码" class="inp" v-model="pwd">

            </div>
          </div>
        </div>
        <button class="logo_bot" @click="login">登录</button>
        <div class="but_bot">
          <div class="text">
            找回密码
          </div>
          <div class="text" @click="logflag =!logflag" v-show="logflag">
            密码登录
          </div>
          <div class="text" @click="logflag =!logflag" v-show="!logflag">
            注册/验证码登录
          </div>
        </div>
        <div>
          <img src="@/assets/切图/images/A.png" alt="" class="foot_img_bot">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      phone: "",
      phone_number: "",
      pwd: "",
      num: 4,
      logflag: true
    };
  },
  computed: {},
  watch: {},
  methods: {
    go(){
      this.$router.go(-1)
    },
    async numder() {
      let res = await this.$http.post(
        "http://120.53.31.103:84/api/app/smsCode",
        {
          mobile: this.phone,
          sms_type: "login"
        }
      );
      let text = document.querySelector(".foot_top_but");
      let time = setInterval(() => {
        this.num--;
        text.innerHTML = this.num + "秒";
        if (this.num == 0) {
          clearInterval(time);
          this.num = 4;
          text.innerHTML = "获取验证码";
        }
      }, 1000);
    },
    async login() {
      if (this.logflag) {
        let res = await this.$http.post(
          "http://120.53.31.103:84/api/app/login",
          {
            mobile: this.phone,
            sms_code: this.phone_number,
            type: "2",
            client: "1"
          }
        );
        console.log(res.remember_token);
        if (res.code == "200") {
          this.$toast.success("登录成功");
          localStorage.setItem('token',JSON.stringify(res.data.remember_token))
          localStorage.setItem('data',JSON.stringify(res.data.nickname))
          this.$router.push('/my')
        } else {
          this.$toast.fail("登录失败");
        }
      }else{
        let res = await this.$http.post(
          "http://120.53.31.103:84/api/app/login",
          {
            mobile: this.phone,
            sms_code: this.phone_number,
            password:this.pwd,
            type: "1",
            client: "1"
          }
        );
         
        if (res.code == "200") {
          this.$toast.success("登录成功");
          console.log(res.data);
          localStorage.setItem('token',JSON.stringify(res.data.remember_token))
          localStorage.setItem('data',JSON.stringify(res.data.nickname))
           this.$router.push('/my')
        } else {
          this.$toast.fail("登录失败");
        }
        
      }
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang='scss' scoped>
.foot_img_bot {
  margin-top: 215px;
  width: 100%;
}
.text {
  font-size: 20px;
  color: #989898;
}
.but_bot {
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.logo_bot {
  width: 100%;
  height: 90px;
  margin-top: 117px;
  font-size: 29px;
  color: white;
  background-color: #eb6100;
  border-radius: 10px;
  border: 0;
}
.foot_top_but {
  position: absolute;
  width: 160px;
  height: 48px;
  background: #eb6100;
  border: 0;
  color: white;
  font-size: 24px;
  border-radius: 3px;
  right: 0px;
  top: 0px;
}
.inp_bot {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 75px;
}
.inp_top {
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: relative;
}
.inp_box {
  width: 545px;
  height: 80px;
  border-bottom: 1px solid #eaeaea;
}
.inp {
  border: 0;
  padding-left: 10px;
  box-sizing: border-box;
}
.foot_box {
  width: 615px;
}
.foot {
  width: 100%;
  display: flex;
  justify-content: center;
}
.head_cen {
  margin-top: 116px;
  margin-bottom: 105px;
}
.head_left {
  width: 60px;
  height: 60px;
  margin-top: 23px;
  margin-left: 26px;
}
.head_img {
  width: 100%;
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