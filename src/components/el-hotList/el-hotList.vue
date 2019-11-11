<template>
  <div class="elw-continer">
    <div class="elw-conImg">
      <!-- 图片 -->
      <slot name="el-conImg"></slot>
    </div>
    <div class="elw-content">
      <div class="elw-conTitle">
        <div class="elw-conTitem">
          <div class="elw-conIcon">品牌</div>
          <div class="elw-conName">
            <slot name="el-conName"></slot>
          </div>
        </div>
        <div class="elw-conLable">
          <span>保</span>
          <span>准</span>
          <span>票</span>
        </div>
      </div>
      <div class="elw-conTitle elw-margin">
        <div class="elw-conTitem">
          <div class="elw-stions">
            <slot name="el-stater"></slot>
          </div>
          <div class="elw-order">
            <slot name="el-numBer"></slot>
          </div>
        </div>
        <div class="elw-conLable">
          <span class="elw-backNe">蜂鸟专送</span>
          <span class="elw-bordNe">准时达</span>
        </div>
      </div>
      <div class="elw-conTitle elw-margin">
        <div class="elw-conNent">
          <div class="elw-conSoat">
            <slot name="el-conRots"></slot>
          </div>
          <div class="elw-conTime">
            <div class="elw-consen">
              <slot name="el-conTime"></slot>
            </div>
            <slot name="el-conWz"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.elw-continer {
  padding: 0.5rem 0.22rem;
  overflow: hidden;
  background-color: #ffffff;
  border-bottom: 0.03rem solid #f1f1f1;
}
.elw-conTitle {
  display: flex;
  width: 100%;
}
.elw-content {
  float: left;
  width: 77%;
  font-size: 0.36rem;
}
.elw-conNent {
  width: 100%;
}
.elw-conImg {
  width: 20%;
  height: 1.78rem;
  padding: 0.16rem 0;
  margin-right: 0.24rem;
  float: left;
}
.elw-stions {
  font-size: 0.3rem;
  float: left;
  margin-right: 0.1rem;
  line-height: 0.4rem;
}
.elw-conImg img {
  width: 100%;
  height: 100%;
}
.elw-conIcon {
  width: 0.8rem;
  height: 0.4rem;
  margin-top: 0.08rem;
  margin-right: 0.18rem;
  background: #ffd930;
  color: #333;
  font-size: 0.3rem;
  float: left;
  text-align: center;
  line-height: 0.4rem;
  font-weight: bold;
  border-radius: 0.04rem;
}
.elw-conTitem {
  flex: 1;
  overflow: hidden;
}
.elw-conName {
  color: #333;
}
.elw-margin {
  margin-top: 0.38rem;
}
.elw-conLable span {
  border: 0.02rem solid #f1f1f1;
  font-size: 0.3rem;
  color: #999;
  padding: 0.04rem;
  margin: 0.01rem;
}
.elw-conName div {
  font-weight: bold;
  font-size: 0.4rem;
}
.elw-order {
  font-size: 0.24rem;
  float: left;
}
.elw-conLable .elw-backNe {
  background: #3190e8;
  color: #fff;
  border-radius: 0.04rem;
}
.elw-conLable .elw-bordNe {
  border-radius: 0.04rem;
  border: 0.02rem solid #3190e8;
  color: #3190e8;
}
.elw-conNent {
  display: flex;
  font-size: 0.28rem;
}
.elw-conSoat {
  flex: 1;
  color: #666;
}

.elw-conTime > div {
  float: right;
  font-size: 0.3rem;
  color: #999;
}
.elw-conTime .elw-consen div {
  color: #3190e8;
  font-size: 0.3rem;
}
</style>
