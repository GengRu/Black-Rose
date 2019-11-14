<template>
  <div>
    <div class="elw-bag">
      <div class="elw-box">
        <div class="elw-bgimg">
          <img :src="'http://elm.cangdu.org/img/' + data.image_path" alt />
        </div>
        <div class="elw-spop" ref="spop">
          <shopings>
            <div slot="el-Timg">
              <img :src="'http://elm.cangdu.org/img/' + data.image_path" alt />
            </div>
            <h4 slot="el-tname">{{ data.name }}</h4>
            <div slot="el-minT">{{ data.category }}</div>
            <div slot="el-pulik">{{ data.promotion_info }}</div>
          </shopings>
        </div>
        <div class="elw-content">
          <div class="elw-Cheader" ref="he">
            <div class="elw-Csl">
              <span
                @click="type = true"
                :class="type == true ? 'elr-active-color' : ''"
                >商品</span
              >
            </div>
            <div class="elw-Csl">
              <span
                @click="type = false"
                :class="type == false ? 'elr-active-color' : ''"
                >评价</span
              >
            </div>
          </div>
          <div class="elw-Cpont clearfix" v-show="type">
            <div class="elw-Cpole">
              <div
                :class="$inds == index ? 'Bgnav' : 'elw-Cpoles'"
                @click="index = $inds"
                v-for="(i, $inds) in larr"
                :key="$inds"
              >
                <a href="javascript:;" @click="btn($inds)">{{ i.name }}</a>
              </div>
            </div>
            <div class="elw-Cpore" @scroll="a1">
              <div class="elw-Copcfo" v-for="(a, $inda) in larr" :key="$inda">
                <div ref="cpo" class="elw-Cpotop" :id="$inda">
                  <span class="elw-cpotitle">{{ a.name }}</span>
                  <span class="elw-cpomin">{{ a.description }}</span>
                </div>
                <div class="elw-modelsk" v-for="(s, $sn) in a.foods" :key="$sn">
                  <div class="elw-modle">
                    <img
                      :src="'http://elm.cangdu.org/img/' + s.image_path"
                      alt
                    />
                  </div>
                  <div class="elw-modre clearfix">
                    <div class="elw-Mname">{{ s.name }}</div>
                    <div class="elw-Mmin">{{ s.description }}</div>
                    <div class="elw-Msc">{{ s.tips }}</div>
                    <div class="elw-MIcon" v-if="s.activity != null">
                      <span class="elw-Micon">{{ s.activity.image_text }}</span>
                    </div>
                    <div class="elw-Mparc" v-if="s.specfoods.length != 0">
                      ￥{{ s.specfoods[0].price }}
                      <span v-if="s.specfoods.length >= 2">起</span>
                    </div>
                    <div class="elw-guige" v-if="s.specfoods.length >= 2">
                      <span class="elw-Mreg">选规格</span>
                    </div>
                    <div class="elw-jiajian" v-if="s.specfoods.length <= 1">
                      <eladd v-model="s.__v"></eladd>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!---------------- 评价 ---------------------------->
          <pingjia v-show="!type"></pingjia>
        </div>
      </div>
    </div>
    <div class="elw-footer">
      <div class="elw-flex">
        <div class="elw-Fla clearfix">
          <div class="elw-bor">
            <p class="el-icon-shopping-cart-2"></p>
          </div>
          <div class="elw-myom">
            <p>￥{{ addPrice }}.00</p>
            <p class="elw-fSz">配送费￥5</p>
          </div>
        </div>
        <div class="elw-Right">
          <p v-show="my < 20">还差￥20起送</p>
          <router-link to="/sureOrder">
            <p v-show="my >= 20" class="elw-bgg">去结算</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import shopings from "../components/el-shoping/shoping.vue";
import pingjia from "../components/el-pingjia/pingjia.vue";
import eladd from "../components/el-add/el-add";
import { mapState, mapGetters } from "vuex";
export default {
  components: { shopings, pingjia, eladd },
  data() {
    return {
      data: "",
      larr: "",
      index: 0,
      boxs: [],
      type: true,
      my: 0,
      sp: []
    };
  },
  created() {
    var a = decodeURI(decodeURI(this.$route.path)).split("/");
    localStorage.shop = JSON.stringify({
      name: a[4],
      img: a[5]
    });

    this.axios
      .get(
        "https://elm.cangdu.org/shopping/restaurant/" +
          this.$route.params.id +
          ""
      )
      .then(data => {
        this.data = data.data;
      });
    this.$loading(true);
    this.axios
      .get(
        "https://elm.cangdu.org/shopping/v2/menu?restaurant_id=" +
          this.$route.params.id +
          ""
      )
      .then(data => {
        this.$loading(false);
        this.larr = data.data;
      });
  },
  methods: {
    a1(ev) {
      // ev.target.scrollTop=0;
      // ev.target.style.transtion='.35s';
      let head = this.$refs.he.offsetHeight;
      let fheader = this.$refs.spop.offsetHeight;
      let aser = head + fheader + 1;
      let ent = ev.target.scrollTop;
      var arr = [];

      arr = this.$refs.cpo;
      // console.log(arr)
      var nerr = [];
      for (var i = 0; i < arr.length; i++) {
        nerr.push(arr[i].offsetTop);
        var ser = nerr[i] - aser;
        // console.log(Math.abs(ser),Math.floor(ent))
        if (Math.abs(ser) <= Math.floor(ent)) {
          this.index = i;
        }
      }
    },
    btn(en) {
      //找到锚点
      var anchorElement = document.getElementById(en);
      // 如果对应id的锚点存在，就跳转到锚点
      if (anchorElement) {
        anchorElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  },
  watch: {
    larr: {
      handler(end) {
        this.sp = [];
        end.forEach(el => {
          el.foods.forEach(ele => {
            if (ele.__v) {
              this.sp.push(ele);
            }
          });
        });
        // 同步到vuex里
        this.$store.commit("Getadd", this.sp);
        this.my = this.addPrice;
      },
      deep: true
    }
  },
  computed: {
    ...mapState(["add"]),
    ...mapGetters(["addPrice"])
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.elw-guige,
.elw-jiajian {
  float: right;
  margin-top: -0.6rem;
  font-size: 0.4rem;
}
.elw-bgg {
  background: #4cd964;
  text-align: center;
}
.elw-Fla {
  flex: 1;
}
.elw-Right {
  width: 3.14rem;
  font-size: 0.5rem;
  color: #fff;
  line-height: 1.4rem;
}
.elw-Right p {
  padding: 0 0.4rem;
}
.elw-myom p {
  margin-top: 0.1rem;
}
.elw-myom .elw-fSz {
  font-size: 0.3rem;
  line-height: 0.6rem;
  margin-top: 0;
}
.elw-myom {
  color: #fff;
  float: left;
  font-size: 0.48rem;
}
.el-icon-shopping-cart-2 {
  color: #fff;
  font-size: 0.87rem;
  line-height: 1.6rem;
}
.elw-bor {
  margin-top: -0.66rem;
  background: #3d3d3f;
  border: 0.1rem solid #444;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  text-align: center;
  float: left;
  margin-right: 0.4rem;
}
.elw-flex {
  display: flex;
}
.elw-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 1.32rem;
  width: 100%;
  background: #3d3c42;
  padding-left: 0.36rem;
  box-sizing: border-box;
}
.elw-Mreg {
  display: block;
  font-size: 0.4rem;
  color: #fff;
  padding: 0.1rem 0.2rem;
  background-color: #3190e8;
  border-radius: 0.2rem;
  border: 1px solid #3190e8;
}
.Bgnav a {
  color: #666;
}
.Bgnav {
  background: #fff;
  border-left: 0.06rem solid #3687e0;
  padding: 0.7rem 0.3rem;
  box-sizing: border-box;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.elw-Mname span {
  float: right;
  border: 1px #f1884f solid;
  padding: 0 0.1rem;
  border-radius: 0.1rem;
  color: #f1884f;
}
.elw-Mparc span {
  color: #666;
}
.elw-Mparc {
  color: #f1884f;
  font-size: 0.4rem;
}
.elw-MIcon {
  height: 0.4rem;
  font-size: 0.14rem;
  margin-bottom: 0.26rem;
}
.elw-Micon {
  border: 1px #f1884f solid;
  margin-left: -0.2rem;
  padding: 0 0.1rem;
  border-radius: 0.1rem;
  color: #f1884f;
}
.elw-Msc {
  font-size: 0.36rem;
  margin-bottom: 0.24rem;
}
.elw-Mmin {
  font-size: 0.34rem;
  color: #939592;
}
.elw-modre {
  width: 68%;
  float: left;
}
.elw-Mname {
  font-size: 0.43rem;
  margin-bottom: 0.1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.elw-modle {
  width: 28%;
  float: left;
  margin-right: 0.2rem;
}
.elw-modle img {
  width: 100%;
  height: 1.4rem;
}
.elw-modelsk {
  background: #fff;
  height: 3.86rem;
  padding-top: 0.4rem;
  padding-left: 0.3rem;
}
.elw-cpomin {
  color: "#949494";
  font-size: 0.3rem;
}
.elw-cpotitle {
  font-size: 0.52rem;
  color: "#606060";
  padding-right: 0.3rem;
}
.elw-Cpotop {
  line-height: 1.34rem;
  height: 1.34rem;
  background: #f6f6f6;
  padding-left: 0.3rem;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-sizing: border-box;
}
.clearfix:after {
  content: "";
  clear: both;
  display: block;
}
.elw-Cpore {
  float: left;
  width: 68%;
  height: 100%;
  overflow-y: auto;
}
.elw-Cpoles {
  padding: 0.7rem 0.3rem;
  box-sizing: border-box;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-left: 0.06rem solid transparent;
}
.elw-Cpoles a {
  display: inline-block;
  width: 100%;
  height: 100%;
  color: #666;
}
.elw-Cpole {
  float: left;
  /* position: relative; */
  width: 30%;
  color: #666;
  height: 100%;
  overflow-y: auto;
  font-size: 0.42rem;
}
.elw-Cpont {
  height: 14.32rem;
  width: 100%;
}
.elw-bgimg {
  filter: blur(9px);
  height: 3rem;
  background: rgba(0, 0, 0, 0.3);
}
.elw-Cheader {
  line-height: 1.4rem;
  font-size: 0.42rem;
  display: flex;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
}
.elw-bgimg img {
  width: 100%;
  height: 98%;
}
.elw-spop {
  top: 0;
  position: absolute;
  width: 100%;
}
.elw-Csl {
  flex: 1;
  text-align: center;
}

.elr-active-color {
  color: #3190e8;
  border-bottom: 0.1rem solid #3190e8;
  padding-bottom: 0.15rem;
}
</style>
