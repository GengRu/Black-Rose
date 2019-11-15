<template>
  <div id="chooseAddress" @click="btn">
    <div class="elj-choose">
      <div class="elj-choose-item">
        <div class="elj-l">
          <span class="iconfont biao">&#xe606;</span>
        </div>
        <div class="elj-r">
          <div class="elj-choose-item-t">
            <p class="elj-name">
              {{ data.name }}
              <span class="elj-names">
                {{ data.sex == "1" ? "先生" : "女士" }}
              </span>
              <span>{{ data.phone }}</span>
            </p>
          </div>
          <div class="elj-choose-item-b">
            <p class="elj-con">
              <span class="elj-ff">{{ data.tag }}</span>
              <span class="elj-fz">{{ data.address_detail }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["json"],
  data() {
    return {
      data: this.json
    };
  },
  methods: {
    btn() {
      // this.$emit("sureAdd", this.data);
    }
  }
};
</script>

<style scoped>
#chooseAddress {
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}
.elj-l {
  float: left;
  align-items: center;
  display: flex;
  margin-right: 0.2rem;
}
.elj-r {
  float: left;
}
.elj-choose-item-t {
  margin-bottom: 0.3rem;
}
.elj-choose-item {
  overflow: hidden;
  align-items: center;
  display: flex;
}
.elj-choose {
  padding: 0.3rem;
}
.elj-name {
  font-size: 0.46rem;
}
.elj-names {
  font-size: 0.35rem;
  margin-left: 0.2rem;
}
.elj-ff {
  padding: 0.02rem 0.2rem;
  background: #f8622d;
  font-size: 0.24rem;
  float: left;
  border-radius: 0.1rem;
  color: white;
  margin-right: 0.4rem;
}
.elj-con {
  overflow: hidden;
  display: flex;
}
.biao {
  font-size: 0.53rem;
}
.elj-fz {
  font-size: 0.4rem;
}
</style>
