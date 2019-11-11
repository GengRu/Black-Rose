<template>
  <div>
    <el_Header>
      <div slot="elw-Left">
        <span @click="$router.back()" class="el-icon-arrow-left"></span>
      </div>
      <div slot="elw-cont">
        <span class="elg-title">我的优惠</span>
      </div>
    </el_Header>
    <div class="elt-category">
      <div @click="showHide = true">
        <span :class="[showHide ? 'currentClass' : '']">红包</span>
      </div>
      <div @click="showHide = false">
        <span :class="[!showHide ? 'currentClass' : '']">商家代金券</span>
      </div>
    </div>
    <div v-show="showHide">
      <div class="elt-hongbao_container">
        <div class="elt-hongbao_title">
          <div>
            有<span class="elt-hongbaoCount"> {{ hongbaoList.length }} </span
            >个红包即将到期
          </div>
          <div class="elt-hongbao_description">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAvJJREFUSA21Vk1IFVEU/s7MvOd/+U+pkZmEEBXiIgpq06KFYUmLFrZp0S4fFAW1ioi2RU9oFbQJCgoqQYIWEkKQixKK7IfMCnuEYvlSek99M7d77rzRGWfu06Du5s49P98599zzM4QCa3dyumlR2IeFEJ0gbJWiDXnxFATGiGggRuaj4UTNhA6GohjtfVMNcMQlgjghwc0oGY8mjdgCdAsGXRzprUt5dG8PGWjv+95FNt0WEBWe0Fp2As0KUxwf6d3Q75c3/IeO5GQCNj34W3DGUDpSV2H4QJduwJ4zuBQNGPVky+KELVUmZEgw/iOHuQXhsVbs5MAU3d5NlAGOOdnOuyjPK4oIp/aW4+iOEhlm1x/bEbj/OoO+Z3P4vRg25IbLaOM3sZR5+aBR4Ax39VAlOpriGPyYxdNP8zAl8cj2EhzbVYraMgPnBtIrbpAPl8SUjJPkpmLuc1S2dLYV4/LB9XjyIYvzj5eBLBnEuz01aKm20HNnGm8ncyEjnF0xspqNfJ5HpmJ7Y0wp9o9mAgA5Bxj+uqBo2+rcIAQE5IEdZmxDFdFKbv78fiqHh28yGJsOe9i4zvVpJhN+Aw+OsS1VoRqZe6/Y86D3rLxzYwx7NseRzjp4+c29iQca2GX1c0p65R/g6Q4t1Saud1Uq9gX5LrPzGu9cgIbInNeB15cbuNFdhdIYyeyZwfP8O+jkmc4GQv1Dp3BmXwXqy01cGfyFofECoVkGSBncFZfP+q+4fNMDrUWYSOfQP5rVC/o5ElsWJw34abpvLirTIHz5aetEQnTGLlhofg0urjppJCNbw0y24MMqtaVC42Gh+rkfLeK72CK01lpoltW7lsWYjO1mkRwW3KAKKW6q5PSswtn9q48JhSUxGU8Z4K7HwwKQrVazON+HZLMbSa2WPeS4g8edbm7/zYPysHAccU03EzS2fWRyDINOv0jUJz1iwAAT/+vIZAM8iYRptIGMm5wJTCu0lIyUZR1vivnlQzfwM//Fb8sfhhUzHMwI/u8AAAAASUVORK5CYII="
              height="24"
              width="24"
            />
            <span class="elt-hongbao_detail">红包说明</span>
          </div>
        </div>
        <!--红包列表-->
        <div class="elt-hongbaoList">
          <div class="elt-hongbaoBox" v-for="(i, $i) in hongbaoList" :key="$i">
            <el_hongbao :item="i"></el_hongbao>
            <footer v-if="$i == 2" class="elt-list_item_footer">
              <p>
                限品类：快餐便当、特色菜系、小吃夜宵、甜品饮品、异国料理
              </p>
            </footer>
          </div>
        </div>
      </div>
      <div class="elt-check_history">
        查看历史红包<span class="el-icon-arrow-right"></span>
      </div>
      <div class="elt-hongbaoFooter">
        <div>兑换红包</div>
        <div>推荐有奖</div>
      </div>
    </div>
  </div>
</template>

<script>
import el_hongbao from "../components/el-profile/el-hongbao";
export default {
  components: {
    el_hongbao
  },
  data() {
    return {
      showHide: true,
      hongbaoList: []
    };
  },
  created() {
    var loginInfo = JSON.parse(localStorage.loginInfo);
    this.axios
      .get(
        "http://elm.cangdu.org/promotion/v2/users/" +
          loginInfo.user_id +
          "/hongbaos?limit=20&offset=0"
      )
      .then(data => {
        console.log(data.data);
        this.hongbaoList = data.data;
      });
  }
};
</script>

<style scoped>
.elt-category {
  margin-top: 1.4rem;
  background-color: #fff;
  display: flex;
  height: 1.5rem;
  line-height: 1.5rem;
  font-size: 0.4rem;
  justify-content: space-around;
}
.elt-category span {
  display: inline-block;
  line-height: 1rem;
}
.currentClass {
  border-bottom: 1px solid #3190e8;
  color: #3190e8;
}
.elt-hongbao_container {
  padding: 0 0.5rem;
}
.elt-hongbao_title {
  font-size: 0.36rem;
  height: 1.5rem;
  line-height: 1.5rem;
  display: flex;
  justify-content: space-between;
}
.elt-hongbaoCount {
  color: red;
  padding: 0 0.05rem;
}
.elt-hongbao_description {
  display: flex;
  align-items: center;
}
.elt-hongbao_description img {
  width: 0.4rem;
  height: 0.4rem;
  margin-right: 0.1rem;
}
.elt-hongbao_detail {
  color: #3190e8;
}
.elt-list_item_footer {
  margin-top: -0.5rem;
  background-color: #f9f9f9;
  padding: 0.4rem;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
.elt-list_item_footer p {
  list-style-type: disc;
  font-size: 0.4rem;
  color: #999;
  margin-left: 0.4rem;
}
.elt-hongbaoBox {
  background: #fff
    url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAIBAMAAAALs8LeAAAABGdBT…RBVAjXY5gJBwzEMScHNXpCmQIMDMwQ5jQGIKgEMyeBmJIAtqcnWdDMwKsAAAAASUVORK5CYII=")
    repeat-x;
  background-size: 0.5rem 0.2rem;
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.4rem;
}
.elt-check_history {
  text-align: center;
  font-size: 0.36rem;
  padding-top: 0.5rem;
}
.elt-hongbaoFooter {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  font-size: 0.6rem;
  line-height: 1.5rem;
  background-color: #fff;
}
</style>
