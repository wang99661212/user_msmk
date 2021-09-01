<template>
    <div>
        <div class="head_top">
            <img :src="info.cover_img" alt="">
        </div>
        <div class="cen">
            <p class="tit">{{info.title}}</p>
            <p>
                共{{info.is_free}}课时|{{info.sales_num}}人已报名
            </p>
            <p>
                开课时间:2021/07/08 00:00 - 2021/07/09 00:00
            </p>
            <p>
                <span v-if="info.price==0">免费</span>
                <span v-else>{{info.price}}</span>
            </p>
        </div>
        <div class="bg"></div>
        <div class="fuwu" @click="show=true">
            <div class="fuwu_left">
                <p>服务:</p>
                <p>课程售后</p>
            </div>
            <div class="fuwu_rig">
                详情<p></p>
            </div>
        </div>
        <div class="bg"></div>
        <div class="jiaoxue">
            <p>教学团队</p>
            <ul class="uls">
                <li v-for="(item,index) in teachers_list" :key="index" @click="go(item.teacher_id)">
                    <img :src="item.avatar" alt="">
                    <span>{{item.teacher_name}}</span>
                </li>
            </ul>
        </div>
        <div class="bg"></div>
        <div class="nav">
            <p>
                <span :class="{'active':myactive==0}" @click="myactive=0">课程介绍</span>
                <span :class="{'active':myactive==1}" @click="myactive=1">课程大纲</span>
                <span :class="{'active':myactive==2}" @click="myactive=2">课程评价</span>
            </p>
            <div class="kecheng_box">
                <div class="kecheng_top">课程介绍</div>
                <div v-html="info.course_details" class="kecheng_bot">

                </div>
            </div>
        </div>
        <div class="bg"></div>
        <div class="kc_cen">
            <p class="kec_dg">课程大纲</p>
            <van-collapse v-model="activeNames" :border='false'>
                <van-collapse-item v-for="(item,index) in Chapter_list" :key="index" :title="index+1+'、'+item.title" name="2" :border='false'>
                    <div v-for="(it,ind) in item.child" :key="ind" @click="addChapter">
                        <p class="Chapter_top">
                            <span>回放</span>
                            <span>{{it.periods_title}}</span>
                        </p>
                        <div class="Chapter_bot">
                            <p v-for="(data,key) in it.teachers" :key="key" class="p1">
                                {{data.teacher_name}}
                            </p>
                            <p class="p2">{{it.total_start_play}} - {{it.total_end_play}}</p>
                        </div>
                    </div>

                </van-collapse-item>
            </van-collapse>
        </div>
        <div class="bg"></div>
        <div class="foot">
            <p>课程评论</p>
            <div class="foot_bot">
                <img src="http://120.53.31.103:86/img/empty.0d284c2e.png" alt="">
                <p>暂无评论</p>
            </div>
        </div>
        <div class="foor_box">
            <div class="fiex_foor" @click="add">
                立即报名
            </div>
        </div>
        <van-popup v-model="show" round close-icon="close" position="bottom" :style="{ height: '60%' }">
            <img @click="show=false" class="rig_guan" src="data:image/png;base64,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" alt="">
            <p class="kefw_top">课程服务</p>
            <div v-for="(item,index) in service_list" :key="index" class="kefw_box">
                <p class="kefw_cen">{{item.name}}</p>
                <p class="kefw_bot">{{item.description}}</p>
            </div>
        </van-popup>
    </div>
</template>

<script>
import { Basis, Chapter } from "@/http/path_url";
export default {
  components: {},
  data() {
    return {
      myactive: 1,
      id: "",
      info: {},
      teachers_list: [],
      activeNames: ["1"],
      Chapter_list: [],
      show: false,
      service_list: []
    };
  },
  computed: {},
  watch: {},
  methods: {
    addChapter() {
        this.$toast("请先报名");
    },
    add() {
      this.$toast("你来晚了哦,名额已经没有了");
    },
    go(id) {
      this.$router.push("/xiang?id=" + id);
    },
    async Chapter() {
      console.log(this.id);
      let res = await Chapter({ id: this.id });
      console.log(res, "字符");
      this.Chapter_list = res.data;
    },
    async getlist() {
      let res = await Basis(this.id);
      console.log(res);
      this.info = res.data.info;
      this.teachers_list = res.data.teachers;
      this.service_list = res.data.info.service;
    }
  },
  created() {
    this.id = this.$route.query.id;
    this.getlist();
    this.Chapter();
  },
  mounted() {}
};
</script>
<style lang='scss' scoped>
.Chapter_bot {
  display: flex;
  .p1 {
    font-size: 3.2vw;
    font-weight: 400;
    color: #8c8c8c;
    padding-left: 6.66667vw;
  }
  .p2 {
    padding-left: 2.66667vw;
    font-size: 3.2vw;
    font-weight: 400;
    color: #8c8c8c;
  }
}
.Chapter_top {
  padding-left: 4vw;
  line-height: 8vw;
  font-size: 3.2vw;
  font-weight: 400;
  color: #595959;
  span:nth-child(1) {
    background: #ea7a2f;
    margin-right: 1.33333vw;
    padding: 0 1.33333vw;
    height: 4.8vw;
    border-radius: 0.53333vw;
    font-size: 3.2vw;
    line-height: 4.8vw;
    text-align: center;
    color: hsla(0, 0%, 100%, 0.85);
  }
  span:nth-child(2) {
    margin-right: 1.33333vw;
    padding: 0 1.33333vw;
    height: 4.8vw;
    border-radius: 0.53333vw;
    font-size: 3.2vw;
    line-height: 4.8vw;
    text-align: center;
  }
}
.kefw_box {
  padding: 3.33333vw 4vw;
  box-sizing: border-box;
  p:nth-child(1) {
    font-size: 3.73333vw;
    font-weight: 500;
    color: #262626;
    line-height: 5.33333vw;
    padding-bottom: 2.13333vw;
  }
  p:nth-child(2) {
    font-size: 3.73333vw;
    font-weight: 400;
    color: #5b6066;
    line-height: 5.33333vw;
  }
}
.kefw_top {
  font-size: 4.53333vw;
  font-weight: 400;
  color: #262626;
  text-align: center;
  height: 13.33333vw;
  line-height: 13.33333vw;
}
.rig_guan {
  width: 4.26667vw;
  height: 4.26667vw;
  position: absolute;
  top: 20px;
  right: 20px;
}
.foor_box {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 13.33333vw;
  background-color: white;
  box-sizing: border-box;
}
.fiex_foor {
  width: 91.73333vw;
  height: 9.86667vw;
  border-radius: 4.93333vw;
  background: #e60012;
  font-size: 3.46667vw;
  font-weight: 500;
  color: #fff;
  text-align: center;
  line-height: 9.86667vw;
  margin: 1.73333vw auto;
}
.foot {
  width: 100%;
  padding: 1.33333vw 2.66667vw;
  padding-bottom: 13.33333vw;
  box-sizing: border-box;
  p {
    font-size: 4vw;
    font-weight: 500;
    color: #262626;
    padding-top: 2.66667vw;
  }
  .foot_bot {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      width: 40vw;
      height: 40vw;
    }
    p {
      font-size: 4vw;
      color: #8c8c8c;
      margin-top: 5.33333vw;
    }
  }
}
.kc_cen {
  padding: 1.33333vw 2.66667vw;
  box-sizing: border-box;
}
/deep/.van-cell__title {
  font-size: 4vw;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.85);
  span {
    font-size: 100%;
  }
}
.kec_dg {
  font-size: 4vw;
  font-weight: 500;
  color: #262626;
  padding-top: 2.66667vw;
}
.kecheng_box {
  padding: 1.33333vw 2.66667vw;
  .kecheng_top {
    font-weight: 500;
    color: #262626;
    font-size: 4vw;
    padding-top: 2.66667vw;
  }
  /deep/ .kecheng_bot {
    margin: 20px 0px;
    font-size: 3.73333vw;
    line-height: 4.8vw;
    p {
      margin-left: 10px;
      font-size: 3.73333vw;
    }
  }
}
.active {
  color: #e60012;
}
.nav {
  width: 100%;
  p:nth-child(1) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 11.73333vw;
    border-bottom: 1px solid #f0f2f5;
    span {
      font-size: 4vw;
      font-weight: 400;
    }
  }
}
.uls {
  display: flex;
  justify-content: space-around;
  li {
    padding: 2.66667vw 0;
    width: 20%;
    height: 24vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    img {
      width: 10.4vw;
      height: 10.4vw;
      border-radius: 50%;
    }
    span {
      width: 100%;
      box-sizing: border-box;
      padding: 2.13333vw 0.8vw 0;
      padding-top: 2.13333vw;
      font-size: 3.2vw;
      font-weight: 400;
      color: #595959;
      text-align: center;
    }
  }
}
.jiaoxue {
  padding: 1.33333vw 2.66667vw;
  p {
    font-size: 4vw;
    font-weight: 500;
    color: #262626;
    padding-top: 2.66667vw;
  }
}
.fuwu {
  display: flex;
  justify-content: space-between;
  padding: 30px;
  box-sizing: border-box;
  .fuwu_left {
    display: flex;
    p:nth-child(1) {
      width: 9.6vw;
      font-weight: 400;
      color: #8c8c8c;
      font-size: 2.66667vw;
    }
    p:nth-child(2) {
      font-size: 3.2vw;
      font-weight: 400;
      color: #595959;
    }
  }
  .fuwu_rig {
    font-size: 3.2vw;
    font-weight: 400;
    color: #8c8c8c;
    display: flex;
    align-items: center;
    p {
      width: 30px;
      height: 25px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAYAAABmMXGeAAAAAXNSR0IArs4c6QAAAxpJREFUSA2tlc1rE1EQwLubxEIliR9BLxEvlnoShBxCMGBoYpJD1WKFnmwRDyLiwY9/QPTmFwoKguJFKyjSgzZtkrZC9GQOnvSQFhHqQWwVSVBCSOJvtrshX02zWQde3s7mzW/nzcyb19eHVKtVReb/JUo2mx1YXV3NAlRtNttoJBL5bBWu5vP5HUAG8XaoXC5nksmkzzI0FAqtKIpyFlAF8E7AC7OzsyErYFWMo9HoI6Zx4CVmJ/DE3NzccfmvF9GgYhiPx18wHWX8ZfRXKpWXgCd4Ni0tWU+lUocIwWu8deN5FeLFWCx2xwy55qlhRPbfUQUS0x+AFcZtYnzV+L+bucVTw4it7ycEKXSv/u4+Hp/XvTeWtZ03hMrq+fn5vaVSKY23+0QH+Mzj8Uz6fD5J6IbSESpW6XR6N+AkjwdEB/zG5XKdDAQCktC2silUrDKZzPZCoTDDo190wBniPkL8f4veLC2Jal4gejAY/KWqahhYWnTCEaRC3hL3XaI3S1eeGka5XK5/eXn5OVDtYPCRnMPhiAwPD3811shsCioGAG14+Jj5lOjIit1uP1LfiLra/rrt+i/elTnWk2j39PdeQtHQiExDBQS4yrG+QJyviY7XDY3I9PYFUi+ctktAb+jv/vDBPT15Wg8FKP2hJsRXsQTVe8JNIeJhgXCMhMPhNVvtEyYecE7x+/13MbkiZgDXpAKQ96Lb5ceMANRKChujpL4JEA8/GRxTiZLiX1pamsJ4VAB4aK34KfiteDnNCOvAj3gYw8PvotdLV4laXFzcBixlAAFIIz/cDijwTbff3PqwmXG73WOdWl/HROlNWrr/oOaBokzRpCd6btKJRGIIkLQ67TohKQ8483KdVOQDnaRtTLlRD2KUYRjA69xP57oBysdatm9c0fynXdEk5zLAW7K4W2lIFFuOYviKMcAoM87QjZ4wm5IalDoc40p+ivUWRpFzPE4Mp03R9MUaFOBpgA95ZyNuBcYxgAu9AMVGobC9xWLxC7GzA5PGEKeoP/QKFDu70+n8KVCAZYAn6huDFbBcB21Lq1foPyCGSbcBwh/rAAAAAElFTkSuQmCC)
        no-repeat 100%;
    }
  }
}
.bg {
  width: 100%;
  height: 30px;
  background-color: #f0f2f5;
}
.cen {
  padding: 4vw;
  background: #fff;
  position: relative;
  p:nth-child(1) {
    font-size: 4.26667vw;
    font-family: PingFangSC-Medium;
    font-weight: 400;
    color: #333;
    padding-right: 10.66667vw;
    line-height: 6.13333vw;
  }
  p:nth-child(2) {
    font-size: 3.73333vw;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.45);
    line-height: 8vw;
  }
  p:nth-child(3) {
    font-size: 3.73333vw;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.45);
    line-height: 8vw;
  }
  p:nth-child(4) {
    span {
      color: #e60012;
      font-size: 4.53333vw;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      line-height: 8.53333vw;
    }
  }
}
.head_top {
  width: 100%;
  height: 58.66667vw;
  background-color: #f0f2f5;
  img {
    height: 100%;
    display: block;
  }
}
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
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