<template>
  <div id="search">
    <el_Header>
      <div slot="elw-Left">
        <span @click="$router.back()" class="el-icon-arrow-left"></span>
      </div>
      <div slot="elw-cont">
        搜索
      </div>
      <div slot="elw-right"></div>
    </el_Header>
    <el_Footer></el_Footer>

    <div class="elr-search">
      <el-input
        placeholder="请输入商家或美食名称"
        v-model="input"
        clearable
        class="elr-search-input"
      ></el-input>
      <el-button type="primary" class="search-elr-search-btn" @click="searchBtn"
        >搜索</el-button
      >
    </div>

    <div class="elr-conts" v-show="type" v-if="losArr.length != 0">
      <p>搜索历史</p>

      <div class="elr-conts-cont" v-for="(i, $idx) in losArr" :key="$idx">
        {{ i }}
        <span
          class="el-icon-close elr-conts-cont-removeBtn"
          @click="removeBtn($idx)"
        ></span>
      </div>

      <div class="elr-conts-removeAll" @click="removeAll">清空搜索历史</div>
    </div>

    <div v-show="!type" class="elr-err">{{ err }}</div>
  </div>
</template>

<script>
import el_Header from "./../components/el-header/el-header";
import el_Footer from "../components/el-footer/el-footer";
export default {
  components: {
    el_Header,
    el_Footer
  },
  data() {
    return {
      input: "",
      err: "",
      losArr: [],
      type: true
    };
  },
  watch: {
    input(a, b) {
      if (a.length == 0) {
        this.type = true;
      }
    }
  },
  methods: {
    searchBtn() {
      if (this.input != "") {
        this.axios
          .get(
            "http://elm.cangdu.org/v4/restaurants?extras[]=restaurant_activity&geohash=31.22299,121.36025&keyword=" +
              this.input +
              "&type=search"
          )
          .then(data => {
            this.err = "很抱歉！无搜索结果";
            this.type = false;

            var type = true;
            if (this.losArr.length != 0) {
              this.losArr.forEach(item => {
                if (item == this.input) {
                  type = false;
                }
              });
            }

            if (type == true) {
              this.losArr.push(this.input);
              localStorage.losArr = JSON.stringify(this.losArr);
            }
          });
      }
    },
    removeBtn(a) {
      this.losArr.splice(a, 1);
      localStorage.losArr = JSON.stringify(this.losArr);
    },
    removeAll() {
      this.losArr.splice(0);
      localStorage.losArr = JSON.stringify(this.losArr);
    }
  },
  created() {
    this.losArr = JSON.parse(localStorage.losArr);
  }
};
</script>

<style>
#search {
  background-color: #f5f7f6;
  padding-top: 1.4rem;
}

.elr-search {
  padding: 0.35rem;
  background-color: #ffffff;
  display: flex;
}

.elr-search-input {
  margin-right: 0.1rem;
}

.elr-search-input input {
  background-color: #f1f3f2;
  font-size: 0.46rem;
  font-weight: bold;
  color: #69676a;
}

.elr-conts p {
  padding: 0.44rem 0.36rem;
  font-size: 0.4rem;
  color: #646263;
}

.search-elr-search-btn {
  font-size: 0.46rem;
  padding: 0.25rem 0.66rem;
  font-weight: bold;
}

.elr-err {
  margin: 0 auto;
  font: 0.45rem/1.05rem Microsoft YaHei;
  color: #333;
  background-color: #fff;
  text-align: center;
  margin-top: 0.125rem;
}

.elr-conts-cont {
  background-color: #ffffff;
  padding: 0.36rem 0.22rem;
  margin-bottom: 0.05rem;
  font-size: 0.44rem;
  color: #393738;
  overflow: hidden;
}

.elr-conts-cont-removeBtn {
  float: right;
  padding-top: 0.1rem;
}

.elr-conts-removeAll {
  background-color: #ffffff;
  padding: 0.36rem 0.22rem;
  margin-bottom: 0.05rem;
  font-size: 0.48rem;
  color: #2593de;
  text-align: center;
  font-weight: bold;
}
</style>
