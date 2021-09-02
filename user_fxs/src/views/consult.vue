<template>
    <div class="box">
        <van-tabs line-width="20px">
            <van-tab v-for="(item,index) in head_list" :key="index">
                <template #title>
                    <p class="head_text" @click="tab(item.id)">
                        {{item.name}}
                    </p>
                </template>
                <div v-show="ind!=0">
                    <div v-for="(item,index) in mydata" :key="index" class="box_cen">
                        <img :src="item.thumb_img" alt="">
                        <div class="ps">
                            <p>{{item.title}}</p>
                            <p>{{item.description}}</p>
                            <p>
                                <span>
                                    <van-icon name="browsing-history-o" />{{item.click_rate}}</span>
                                <span>
                                    <van-icon name="underway-o" />{{item.data}}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div v-show="ind==0">
                    <div v-for="(item,index) in list" :key="index" class="box_cen" @click="go(item.id)">
                        <img :src="item.thumb_img" alt="">
                        <div class="ps">
                            <p>{{item.title}}</p>
                            <p>{{item.description}}</p>
                            <p>
                                <span>
                                    <van-icon name="browsing-history-o" />{{item.click_rate}}</span>
                                <span>
                                    <van-icon name="underway-o" />{{item.data}}</span>
                            </p>
                        </div>
                    </div>
                </div>

            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import { Classify, Infor } from "@/http/path_url.js";
export default {
  components: {},
  data() {
    return {
      head_list: [],
      list: [
        {
          click_rate: 10,
          created_at: "1625475434",
          description: "高考作文",
          id: 22,
          thumb_img:
            "http://120.53.31.103:84/uploads/image/2021-07-05/tgJdgQnHEGzoW6AEeIUK3lLmQ99CurRKHsRP6hWk.png",
          title: "高中语文",
          data: "",
          parent_id: 41
        },
        {
          click_rate: 2,
          created_at: "1625475384",
          description: "中考作文分析",
          id: 21,
          thumb_img:
            "http://120.53.31.103:84/uploads/image/2021-07-05/Hk8ZUtDcwcUsTTKRNQLkb5QMZifZWnkmANVGPzJb.png",
          title: "中考作文",
          data: "",
          parent_id: 33
        },
        {
          click_rate: 3,
          created_at: "1625446538",
          description: "人工智能-大疆无人飞行机",
          id: 20,
          thumb_img:
            "http://120.53.31.103:84/uploads/image/2021-07-05/5TBPnPigSAqwLPpWZB8w7PcPiIffL9DVF8cFIYyr.png",
          title: "人工智能",
          data: "",
          parent_id: 10
        },
        {
          click_rate: 1,
          created_at: "1625220605",
          description: "八强无弱旅。四强花落谁家",
          id: 19,
          thumb_img:
            "http://120.53.31.103:84/uploads/image/2021-07-02/iHTjTV9W44PifcYMiYY2eTDn6vBKkBF33qrCScQy.png",
          title: "欧洲杯八进四",
          data: "",
          parent_id: 9
        },
        {
          click_rate: 1087,
          created_at: "1594451975",
          description: "加热 加热 再加热  锤  锤 锤",
          id: 12,
          thumb_img:
            "http://120.53.31.103:84/uploads/image/2020-07-11/sfB9Nyr0ID9bIOBKSnIoOqqV0l2NhD2lOeRUoxFf.jpeg",
          title: "钢铁是怎样练成的",
          data: "",
          parent_id: 10
        }
      ],
      ind: 0
    };
  },
  computed: {
    mydata() {
      let goods = this.list;
      goods = goods.filter(item => {
        return item.parent_id == this.ind;
      });
      return goods;
    }
  },
  watch: {},
  methods: {
    go(ind){
      this.$router.push({path:"/booksdetail",query:{_id:ind}})
    },
    tab(id) {
      this.ind = id;
    },
    async getlist() {
      let res = await Classify();

      let obj = {
        id: 0,
        name: "全部",
        parent_id: 0
      };
      res.data.unshift(obj);
      this.head_list = res.data;
      console.log(res.data);
    },
    getdata() {
      let data = new Date();
      let nian = data.getFullYear();
      let yue = data.getMonth() + 1;
      if (yue <= 10) {
        yue = "0" + yue;
      }
      let ri = data.getDate();
      if (ri <= 10) {
        ri = "0" + ri;
      }
      let shi = data.getHours();
      let fen = data.getSeconds();
      if (fen <= 10) {
        fen = "0" + fen;
      }
      let mydata = `${nian}/${yue}/${ri} ${shi}:${fen}`;
      this.list.forEach(item => {
        item.data = mydata;
      });
    }
  },
  created() {
    this.getlist();
    this.getdata();
  },
  mounted() {}
};
</script>
<style lang='scss' scoped>
.ps {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  margin-left: 10px;
  p:nth-child(1) {
    font-size: 3.73333vw;
    color: #333;
  }
  p:nth-child(2) {
    color: #999;
    font-size: 3.2vw;
  }
  p:nth-child(3) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    span:nth-child(1) {
      font-size: 2.93333vw;
      color: #999;
    }
    span:nth-child(2) {
      font-size: 2.93333vw;
      color: #999;
    }
  }
}
.box_cen {
  display: flex;
  width: 90%;
  height: 180px;
  margin: 20px auto;
  background: white;
  border-radius: 20px;
  align-items: center;
  img {
    margin-left: 20px;
    width: 27.73333vw;
    height: 17.2vw;
  }
}
/deep/.van-tabs__wrap {
  border-bottom: 1px solid #f1f1f1;
}
.head_text {
  font-size: 30px;
  color: #646566;
}
.box {
  height: 100%;
  background: #f7f8fa;
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