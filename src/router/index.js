import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// 城市搜索
const city = () => import("../views/el-city.vue");
// 登录
const login = () => import("../views/el-login.vue");
// 改密
const forget = () => import("../views/el-forget.vue");
// 商品页
const msite = () => import("../views/el-msite.vue");
// 我的主页面
const profile = () => import("../views/el-profile.vue");
// 我的余额
const balance = () => import("../views/el-balance.vue");
// 我的优惠
const benefit = () => import("../views/el-benefit.vue");
// 我的积分
const points = () => import("../views/el-points.vue");
// 会员卡
const vipcard = () => import("../views/el-vipcard.vue");
// 会员特权
const vipDescription = () => import("../components/el-vipDescription/vipDescription.vue");
// 兑换会员
const useCart = () => import("../components/el-useCart/useCart.vue");
// 购买记录
const invoiceRecord = () => import("../components/el-invoiceRecord/invoiceRecord.vue");
// 在线支付
const confirmOrder = () => import("../views/el-confirmOrder.vue");
// 服务
const service = () => import("../views/el-service.vue");
// 下载
const download = () => import("../views/el-download.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    // 首页
    component: Home
  },
  {
    path: "/city/:id/:names",
    name: "city",
    // 城市搜索
    component: city
  },
  {
    path: "/login",
    name: "login",
    // 登录
    component: login
  },
  {
    path: "/forget",
    name: "forget",
    // 改密
    component: forget
  },
  {
    path: "/msite/:mName",
    name: "msite",
    // 商品页
    component: msite
  },
  {
    path: "/profile",
    name: "profile",
    // 我的
    component: profile
  },
  {
    path: "/balance",
    name: "balance",
    // 我的余额
    component: balance
  },
  {
    path: "/benefit",
    name: "benefit",
    // 我的优惠
    component: benefit
  },
  {
    path: "/points",
    name: "points",
    // 我的积分
    component: points
  },
  {
    path: "/vipcard",
    name: "vipcard",
    // 会员卡
    component: vipcard,
	children:[
	  {
	    path: 'vipDescription',
	    name: 'vipDescription',
		//会员说明
	    component:vipDescription
	  },
	  {
	    path: 'useCart',
	    name: 'useCart',
		//兑换会员
	    component:useCart
	  },
	  {
	    path: 'invoiceRecord',
	    name: 'invoiceRecord',
	  		//购买记录
	    component:invoiceRecord
	  }
	]
  },
  {
    path: "/confirmOrder",
    name: "confirmOrder",
    // 在线支付
    component: confirmOrder
  },
  {
    path: "/service",
    name: "service",
    // 服务
    component: service
  },
  {
    path: "/download",
    name: "download",
    // 下载
    component: download
  }
];

const router = new VueRouter({
  routes
});
export default router;
