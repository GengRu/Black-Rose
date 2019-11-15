<template>
  <div>
    <el_Header>
      <div slot="elw-Left">
        <span @click="$router.back()" class="el-icon-arrow-left"></span>
      </div>
      <div slot="elw-cont">
        <span class="elg-title">食品监督安全公示</span>
      </div>
      <div slot="elr-right"></div>
    </el_Header>
    <div class="deanger">
      <div class="top_box">
        <p>食品监督安全公示</p>
      </div>
      <div class="bot_box">
        <div class="bot_le">
          <img
            style="width:100%"
            src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=421499709,716754848&fm=15&gp=0.jpg"
            alt
          />
        </div>
        <div class="bot_ri">
          <p>结果</p>
          <p>日期</p>
        </div>
      </div>
    </div>
    <div class="message">
      <p>工商登记信息</p>
      <ul>
        <li v-for="(i, $index) in arr" :key="$index">{{ i }}</li>
      </ul>
    </div>
    <div class="message">
      <p>餐饮许可证</p>
      <ul>
        <li v-for="(i, $index) in arr2" :key="$index">{{ i }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      arr: [
        "企业名称",
        "工商职业注册号",
        "注册资本",
        "注册地址",
        "属地监管所",
        "法定代表人",
        "经营范围"
      ],
      arr2: ["营业范围", "许可证有效期", "许可证号", "发证时间", "发证机关"]
    };
  }
};
</script>

<style scoped>
.sure {
  min-height: 7rem;
  background: white;
  padding: 0 0.4rem;
  overflow: hidden;
}
.sure p {
  line-height: 1.5rem;
  font-size: 0.5rem;
  color: #767676;
  padding: 0 0.4rem;
}
.sure_pic {
  min-height: 4.5rem;
  background: #f5f5f5;
  display: flex;
}
.pic-l,
.pic-r {
  padding: 0.3rem 0.4rem;
  overflow: hidden;
  /* background:red; */
  flex: 1;
}
.message {
  min-height: 2rem;
  background: white;
  padding: 0 0.4rem;
  box-sizing: border-box;
  margin-bottom: 0.4rem;
}
.bot_box {
  display: flex;
  padding-top: 0.5rem;
  box-sizing: border-box;
  overflow: hidden;
}
.bot_le {
  flex: 2;
  background: red;
  height: 1.4rem;
  width: 1.4rem;
  margin-right: 0.4rem;
  border-radius: 50%;
}
.bot_ri {
  flex: 8;
}
.bot_ri p {
  font-size: 0.4rem;
  color: #767676;
  line-height: 0.8rem;
}
.deanger {
  min-height: 3.55rem;
  padding: 0 0.4rem;
  box-sizing: border-box;
  background: white;
  margin-bottom: 0.3rem;
}
.top_box p {
  line-height: 1.17rem;
  font-size: 0.5rem;
  color: #484848;
  border-bottom: 0.05rem solid #f5f5f5;
}
.message p {
  line-height: 1.17rem;
  font-size: 0.5rem;
  color: #484848;
  border-bottom: 0.05rem solid #f5f5f5;
}
.message li {
  font-size: 0.4rem;
  color: #464646;
  line-height: 0.9rem;
}
</style>
