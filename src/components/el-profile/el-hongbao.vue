<template>
  <div>
    <div class="elt-listItem">
      <div class="elt-listItem_left">
        <div class="elt-lTop">
          <span>￥</span>
          <span v-for="(i, $i) in newAmount" :key="$i"> {{ i }}</span>
        </div>
        <div class="elt-lbottom">
          {{ json.description_map.sum_condition }}
        </div>
      </div>
      <div class="elt-listItem_center">
        <div class="elt-listItem_center-name">
          {{ json.name }}
        </div>
        <div>{{ json.end_date }}到期</div>
        <div class="elt-listItem_center-phone">
          {{ json.description_map.phone }}
        </div>
      </div>
      <div class="elt-listItem_right">
        {{
          json.description_map.validity_delta.length > 4 ? "已过期" : "剩3日"
        }}
      </div>
    </div>
    <footer class="elt-list_item_footer" v-if="json.limit_map">
      <p>
        {{ json.limit_map.restaurant_flavor_ids }}
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      json: this.item
    };
  },
  computed: {
    newAmount() {
      var num = this.json.amount.toFixed(1);
      var arr = num.split("");
      return arr;
    }
  }
};
</script>

<style scoped>
.elt-listItem {
  padding: 0.6rem 0.3rem;
  display: flex;
}
.elt-listItem_left {
  padding-right: 0.3rem;
  border-right: 1px dotted #ccc;
}
.elt-listItem_left .elt-lTop {
  color: red;
  font-weight: bold;
}
.elt-listItem_left .elt-lTop span:nth-of-type(1) {
  margin-right: -0.2rem;
}
.elt-listItem_left .elt-lTop span:nth-of-type(2) {
  font-size: 0.8rem;
  margin-right: -0.05rem;
}
.elt-lbottom {
  font-size: 0.36rem;
  color: #999;
}
.elt-listItem_center {
  padding-left: 0.4rem;
}
.elt-listItem_center-name {
  font-size: 0.45rem;
}
.elt-listItem_center-phone {
  font-size: 0.36rem;
}
.elt-listItem_right {
  font-size: 0.5rem;
  color: red;
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
</style>
