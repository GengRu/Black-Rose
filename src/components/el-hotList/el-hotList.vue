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
            <div class="elw-consen"><slot name="el-conTime"></slot></div>
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
  padding: 50px 22px;
  overflow: hidden;
}
.elw-conTitle {
  display: flex;
  width:100%;
}
.elw-content {
  float: left;
  width: 84%;
}
.elw-conNent{
    width: 100%;
}
.elw-conImg {
  width: 178px;
  height: 178px;
  padding: 16px 0;
  margin-right: 24px;
  float: left;
}
.elw-stions {
  font-size: 30px;
  float: left;
  margin-right: 18px;
  line-height: 40px;
}
.elw-conImg img {
  width: 100%;
  height: 100%;
}
.elw-conIcon {
  width: 80px;
  height: 40px;
  margin-top: 8px;
  margin-right: 18px;
  background: #ffd930;
  color: #333;
  font-size: 30px;
  float: left;
  text-align: center;
  line-height: 40px;
  font-weight: bold;
  border-radius: 4px;
}
.elw-conTitem {
  flex: 1;
  overflow: hidden;
}
.elw-conName {
  color: #333;
}
.elw-margin {
  margin-top: 38px;
}
.elw-conLable {
  text-align: right;
  flex: 1;
  line-height: 40px;
}
.elw-conLable span {
  border: 2px solid #f1f1f1;
  font-size: 25px;
  color: #999;
  padding: 4px;
  margin: 1px;
}
.elw-conName div {
  font-weight: bold;
  font-size: 46px;
}
.elw-order {
  font-size: 24px;
  float: left;
}
.elw-conLable .elw-backNe {
  background: #3190e8;
  color: #fff;
  border-radius: 4px;
}
.elw-conLable .elw-bordNe {
  border-radius: 4px;
  border: 2px solid #3190e8;
  color: #3190e8;
}
.elw-conNent{
    display: flex;
    font-size: 28px;
}
.elw-conSoat {
    flex: 1;
    color: #666;
}
.elw-conTime {
    flex: 1;
    text-align: right;
    overflow: hidden;
}
.elw-conTime>div{
   float:right;
   font-size: 24px;
   color: #999;
}
.elw-conTime .elw-consen div{
    color: #3190e8;
}
</style>