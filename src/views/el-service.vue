<template>
  <div>
    <div class="elw-pos" ref="ent">
      <el_Header>
        <div slot="elw-Left">
          <span @click="ret()" class="el-icon-arrow-left"></span>
        </div>
        <div slot="elw-cont">
          <span class="elg-title">服务中心</span>
        </div>
      </el_Header>
      <div class="elw-continer">
        <div class="elw-conflex">
          <div class="elw-conFla">
            <a href="https://ecs-im.ele.me/">
              <div class="elw-condis">
                <i>和</i>
              </div>
              <div class="elw-condis elw-conmig">在线客服</div>
            </a>
          </div>
          <div class="elw-conFfa">
            <a href="tel:10105757">
              <div class="elw-condis">
                <i>和</i>
              </div>
              <div class="elw-condis elw-conmig">在线客服</div>
            </a>
          </div>
        </div>
        <h4 class="elw-contitle">热门问题</h4>
        <div v-for="(i,$index) in querr" :key="$index" @click="btn(i,$index)">
          <router-link to="/service/questionDetail">
            <sevre>
              <div slot="el-conText">{{i.syc}}</div>
            </sevre>
          </router-link>
        </div>
      </div>
    </div>
    <router-view/>
    <!-- -->
  </div>
</template>

<script>
import sevre from "../components/el-serve/serve";
export default {
  data() {
    return {
      data: "",
      arr: [],
      nerr: [],
      querr: [],
    };
  },
  components: { sevre },
  created() {
    console.log(this.type)
    this.axios.get("http://elm.cangdu.org/v3/profile/explain").then(data => {
      this.data = data.data;
      console.log(this.data);
      for (let as in this.data) {
        var str = as.substring(as.length + 1, as.lastIndexOf("C"));
        if (str == "Caption") {
          this.arr.push(this.data[as]);
        } else if (str == "Content") {
          this.nerr.push(this.data[as]);
        }
      }
      var hysm = "";
      for (var i = 0; i < this.arr.length; i++) {
        var serr = {};
        serr.syc = this.arr[i];
        serr.sent = this.nerr[i];
        this.querr.push(serr);
      }
      for (var n = 0; n < this.querr.length; n++) {
        if (this.querr[n].syc == "会员说明") {
          hysm += this.querr[n].sent;
          this.querr[n].sent = hysm;
        }
      }
      var temp = {}; //用于syc判断重复
      var result = []; //最后的新数组

      this.querr.map(function(item, index) {
        if (!temp[item.syc]) {
          result.push(item);
          temp[item.syc] = true;
        }
      });
      this.querr = result;
    });
  },
  methods: {
    btn(i, d) {
      this.$store.commit('Getpara',{a:this.querr[d].syc,b:this.querr[d].sent})
      this.$refs.ent.style.left=0;
    },
    ret() {
      this.$refs.ent.style.left = "3rem";
      setTimeout(() => {
        this.$router.back();
      }, 100);
    },
  },
  mounted() {
    this.$refs.ent.style.left = 0;
  }
};
</script>

<style scoped>
/* .elw-Pos{
  z-index: 1;
} */
.elw-pos {
  position: relative;
  left: 3rem;
  transition: 0.35s;
}
.el-icon-arrow-left {
  font-size: 0.6rem;
}
.elw-continer {
  width: 100%;
}
.elw-conflex {
  display: flex;
  width: 100%;
}
.elw-conFla,
.elw-conFfa {
  flex: 1;
  border-bottom: 2px solid #f0f0f0;
}
.elw-conFla {
  border-right: 2px solid #f0f0f0;
}
.elw-condis i {
  font-size: 0.52rem;
  text-align: center;
  line-height: 1.6rem;
}
.elw-condis {
  text-align: center;
  font-size: 0.44rem;
  color: #666;
}
.elw-continer {
  padding-top: 1.36rem;
}
.elw-conmig {
  margin-bottom: 0.4rem;
}
.elw-contitle {
  font-size: 0.48rem;
  color: #333;
  line-height: 2.06rem;
  border-bottom: 2px solid #f0f0f0;
  padding-left: 0.4rem;
}
.elw-children{
  position: fixed;
  top: 0;
  left: 2rem;
  transition: .35s;
  z-index: 10;
}
</style>
