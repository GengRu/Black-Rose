<template>
  <div>
    <div class="elw-bag">
      <div class="elw-box">
        <div class="elw-bgimg">
          <img :src="'http://elm.cangdu.org/img/' + data.image_path" alt />
        </div>
        <div class="elw-spop">
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
          <div class="elw-Cheader">
            <div class="elw-Csl">
              <span>商品</span>
            </div>
            <div class="elw-Csl">
              <span>评价</span>
            </div>
          </div>
          <div class="elw-Cpont clearfix">
            <div class="elw-Cpole">
              <div class="elw-Cpoles" v-for="(i, $inds) in larr" :key="$inds">
                {{ i.name }}
              </div>
            </div>
            <div class="elw-Cpore">
              <div class="elw-Copcfo" v-for="(a, $inda) in larr" :key="$inda">
                <div class="elw-Cpotop">
                  <span class="elw-cpotitle">{{ a.name }}</span>
                  <span class="elw-cpomin">{{ a.description }}</span>
                </div>
                <div class="elw-modelsk" v-for="(s, $sn) in a.foods" :key="$sn">
                  <div class="elw-modle">
                    <img
                      :src="'http://elm.cangdu.org/img/' + s.image_path"
                      alt=""
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
                      <span class="el-icon-remove-outline"></span
                      ><span class="elw-Mvalue">1</span
                      ><span class="el-icon-circle-plus-outline"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import shopings from "../components/el-shoping/shoping.vue";
export default {
  components: { shopings },
  data() {
    return {
      data: "",
      larr: ""
    };
  },
  created() {
    this.axios
      .get(
        "https://elm.cangdu.org/shopping/restaurant/" +
          this.$route.params.id +
          ""
      )
      .then(data => {
        this.data = data.data;
        console.log(data);
      });
    this.axios
      .get(
        "https://elm.cangdu.org/shopping/v2/menu?restaurant_id=" +
          this.$route.params.id +
          ""
      )
      .then(data => {
        this.larr = data.data;
        console.log(this.larr);
      });
  }
};
</script>

<style scoped>
.elw-Mreg {
  display: block;
  font-size: 0.4rem;
  color: #fff;
  padding: 0.1rem 0.2rem;
  background-color: #3190e8;
  border-radius: 0.2rem;
  border: 1px solid #3190e8;
}
.elw-Mvalue {
  display: inline-block;
  margin: 0 0.2rem;
}
.elw-guige,
.elw-jiajian {
  float: right;
  margin-top: -0.6rem;
  font-size: 0.4rem;
}

.el-icon-remove-outline,
.el-icon-circle-plus-outline {
  font-size: 0.6rem;
  color: #3687e0;
}
.Bgnav {
  background: #fff;
  border-left: 0.06rem solid #3687e0;
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
</style>
