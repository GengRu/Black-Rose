<template>
  <div id="el-city">
    <el_Header>
      <div slot="elw-Left">
        <router-link to="/" class="el-icon-arrow-left"></router-link>
      </div>
      <div slot="elw-cont">
        {{ $route.params.names }}
      </div>
      <div slot="elw-right">
        <router-link to="/">切换城市</router-link>
      </div>
    </el_Header>

    <!-- 头部搜索 -->
    <div class="elr-search">
      <input
        type="text"
        placeholder="输入学校、商务楼、地址"
        class="elr-search-ipt"
        v-model="value"
      />
      <div class="elr-search-btn" @click="schBtn">提交</div>
    </div>

    <!-- 搜索历史 -->
    <div v-show="!dataArr">
      <div class="elr-search-ls">搜索历史</div>
      <div v-for="(i, $idx) in listArr" :key="$idx" class="elr-search-jg">
        <router-link :to="'/msite/' + i.a">
          <div class="elr-search-tt">{{ i.a }}</div>
          <div class="elr-search-ct">{{ i.b }}</div>
        </router-link>
      </div>
      <div class="elr-search-removeBtn" v-show="listArr.length != 0" @click="r">
        清空所有
      </div>
    </div>

    <!-- 搜索结果 -->
    <div
      v-for="(i, $idx) in dataArr"
      :key="$idx"
      class="elr-search-jg"
      @click="entBtn(i.name, i.address)"
    >
      <router-link :to="'/msite/' + i.name">
      
        <div class="elr-search-tt">{{ i.name }}</div>
        <div class="elr-search-ct">{{ i.address }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import el_Header from "../components/el-header/el-header";
export default {
  components: { el_Header },
  data() {
    return {
      dataArr: "",
      value: "",
      listArr: []
    };
  },
  methods: {
    // 搜索按钮
    schBtn() {
      if (this.value != "") {
        this.axios
          .get(
            "http://elm.cangdu.org/v1/pois?type=search&city_id=" +
              this.$route.params.id +
              "&keyword=" +
              this.value
          )
          .then(data => {
            this.dataArr = data.data;
          });
      }
    },
    // 点击进入&历史记录
    entBtn(a, b) {
      var type = true;
      if (this.listArr.length != 0) {
        this.listArr.forEach(item => {
          if (item.a == a) {
            type = false;
          }
        });
      }
      if (type == true) {
        this.listArr.push({ a, b });
        sessionStorage.listArr = JSON.stringify(this.listArr.sort().reverse());
      }
    },
    r() {
      this.listArr = [];
      sessionStorage.listArr = "";
    }
  },
  created() {
    if (sessionStorage.listArr) {
      this.listArr = JSON.parse(sessionStorage.listArr);
    }
  }
};
</script>

<style scoped>
#el-city {
  background-color: #f5f7f6;
  padding-top: 1.8rem;
}

/* 搜索 */
.elr-search {
  background-color: #fff;
  padding: 0.28rem 0.55rem;
  font-size: 0.4rem;
  border-top: 0.07rem solid #e3e3e5;
  border-bottom: 0.07rem solid #e3e3e5;
}

/* 搜索input框 */
.elr-search-ipt {
  width: 100%;
  height: 0.95rem;
  line-height: 0.95rem;
  box-sizing: border-box;
  padding-left: 0.2rem;
  border-radius: 0.1rem;
  margin-bottom: 0.25rem;
  font-size: 0.4rem;
}

/* 搜索按钮 */
.elr-search-btn {
  width: 100%;
  height: 0.95rem;
  line-height: 0.95rem;
  background-color: #3690e8;
  color: #ffffff;
  text-align: center;
  border-radius: 0.1rem;
}

/* 搜索历史 */
.elr-search-ls {
  padding: 0.1rem 0.35rem;
  color: #1f1f21;
  font-size: 0.3rem;
  border-bottom: 0.07rem solid #e3e3e5;
}

/* 搜索结果 */
.elr-search-jg {
  padding: 0.28rem 0.56rem;
  border-bottom: 0.07rem solid #e3e3e5;
  font-size: 0.4rem;
  color: #1a1a1a;
  background-color: #ffffff;
}

/* 搜索结果标题 */
.elr-search-tt {
  padding: 0.28rem 0;
  font-weight: bold;
  color: #000000;
}

/* 搜索结果内容 */
.elr-search-ct {
  padding: 0.13rem 0;
  font-size: 0.3rem;
  color: #858585;
}

/* 搜索结果删除按钮 */
.elr-search-removeBtn {
  text-align: center;
  padding: 0.4rem 0;
  font-size: 0.46rem;
  color: #6e6e6e;
  background-color: #ffffff;
}
</style>
