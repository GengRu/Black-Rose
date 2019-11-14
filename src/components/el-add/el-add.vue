<template>
  <div>
    <span class="el-icon-remove-outline" @click="rout()" v-if="val"></span>
    <span class="elw-Mvalue">{{ val }}</span>
    <span class="el-icon-circle-plus-outline" @click="pout()"></span>
  </div>
</template>

<script>
export default {
  props: ["value"],
  computed: {
    val: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit("input", v);
      }
    }
  },
  methods: {
    pout() {
      this.val++;
    },
    rout() {
      this.val--;
    }
  }
};
</script>

<style scoped>
.el-icon-remove-outline,
.el-icon-circle-plus-outline {
  font-size: 0.6rem;
  color: #3687e0;
}
.elw-Mvalue {
  display: inline-block;
  margin: 0 0.2rem;
}
</style>
