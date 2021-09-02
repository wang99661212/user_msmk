<template>
    <div>
        <div class="head_top">
            <img :src="get_list.thumb_img" alt="">
        </div>
        <div class="text">
            {{get_list.title}}
        </div>
        <div class="click_rate">
            <span>{{get_list.click_rate}}次浏览</span>
            <span>{{mydata}}</span>
        </div>
        <div class="description">
            {{get_list.description}}
        </div>
        <div class="foort" v-html="get_list.content">

        </div>
    </div>
</template>

<script>
import { Datail } from "@/http/path_url";
export default {
  components: {},
  data() {
    return {
      _id: "",
      get_list: {},
      mydata: ""
    };
  },
  computed: {},
  watch: {},
  methods: {
    async getdata() {
      let res = await Datail({ information_id: this._id });
      console.log(res);
      this.get_list = res.data;
      let data = new Date(this.get_list.created_at * 1000);
      let y = data.getMonth() + 1;
      if (y <= 10) {
        y = "0" + y;
      }
      let r = data.getDate();
      if (r <= 10) {
        r = "0" + r;
      }
      let mydata = y + "-" + r;
      this.mydata = mydata;
    }
  },
  created() {
    this._id = this.$route.query._id;
    this.getdata();
  },
  mounted() {}
};
</script>
<style lang='scss' scoped>
/deep/ .foort {
  padding: 0 5.33333vw 5.33333vw;
  margin-top: 7.33333vw;
  font-size: 4.53333vw;
  box-sizing: border-box;
  p{
      font: inherit;
  }
}
.description {
  border-bottom: 1px solid #ededed;
  width: 26vw;
  color: #999;
  height: 100px;
  font-size: 4.26667vw;
  text-align: center;
  margin: 60px auto;
}
.click_rate {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.66667vw 5.33333vw;
  box-sizing: border-box;
  span {
    font-size: 3.2vw;
    color: #b7b7b7;
    line-height: 3.2vw;
  }
}
.head_top {
  width: 100%;
  img {
    width: 100%;
    display: block;
  }
}
.text {
  font-size: 6vw;
  color: #222;
  line-height: 8.8vw;
  padding: 2.66667vw 5.33333vw;
  box-sizing: border-box;
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