<template>
  <div class="elw-children" ref="ch">
    <el_Header>
      <div slot="elw-Left">
        <span @click="ret()" class="el-icon-arrow-left" ref="sent"></span>
      </div>
      <div slot="elw-cont">
        <span class="elg-title" v-for="(s, $s) in data" :key="$s">{{
          s.a
        }}</span>
      </div>
    </el_Header>
    <div class="elw-text" v-for="(i, $index) in data" :key="$index">
      <div v-if="arr" class="dss">
        <img
          :src="ae"
          alt=""
          width="100%"
          v-for="(ae, $ae) in arr"
          :key="$ae"
        />
      </div>
      <section>{{ i.b }}</section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: "",
      arr: []
    };
  },
  created() {
    this.data = this.$store.state.nerr;
  },
  methods: {
    ret() {
      this.$refs.ch.style.left = "3rem";
      setTimeout(() => {
        this.$router.back();
      }, 100);
      this.$store.commit("setclear", []);
    }
  },
  mounted() {
    setTimeout(() => {
      this.$refs.ch.style.left = 0;
    }, 50);
    var arr = [];
    arr = this.data;
  },
  watch: {
    data(s, n) {
      for (let con in s) {
        var str = s[con].b.substring(
          s[con].b.indexOf("(") + 1,
          s[con].b.indexOf(")")
        );
        this.arr.push(str);
      }
    }
  }
};
</script>

<style scoped>
.elw-children {
  position: fixed;
  top: 0;
  left: 3rem;
  transition: 0.35s;
  z-index: 10;
  background: #fff;
  height: 100%;
  width: 100%;
}
.dss {
  width: 100%;
  /* margin: 0 auto; */
}
.dss img {
  width: 100%;
}
.elw-text {
  position: relative;
  top: 1.3rem;
  height: 100%;
  overflow-y: auto;
}
section {
  font-size: 0.6rem;
  padding-bottom:2rem; 
}
</style>
