<template>
  <div id="chooseAddress">
    <div class="elj-choose">
      <div class="elj-choose-item">
        <div class="elj-l">
          <span class="iconfont biao">&#xe606;</span>
        </div>
        <div class="elj-r">
          <div class="elj-choose-item-t">
            <p class="elj-name">天天<span class="elj-names">先生</span></p>
          </div>
          <div class="elj-choose-item-b">
            <p class="elj-con"><span class="elj-ff">11</span></p>
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
.elj-l {
  float: left;
  align-items: center;
  display: flex;
  margin-right: 0.2rem;
}
.elj-r {
  float: left;
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
}
.elj-con {
  overflow: hidden;
}
.biao {
  font-size: 0.53rem;
}
</style>
