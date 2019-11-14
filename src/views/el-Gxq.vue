<template>
    <div>
         <el_Header>
            <div slot="elw-Left">
            <span @click="$router.back()" class="el-icon-arrow-left"></span>
            </div>
            <div slot="elw-cont">
            <span class="elg-title">{{$route.params.name}}</span>
            </div>
            <div slot="elr-right"></div>
        </el_Header>
        <div class="elw-imgs">
                <img :src="'http://elm.cangdu.org/img/' +$route.params.img" alt="">
            </div>
        <div class='elw-cont'>
            <div class="elw-title">{{$route.params.name}}</div>
            <div class="elw-pin">
                <span>评分 </span>
                <div class="elw-box">
                    <el-rate v-model="$route.params.num"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}"
                    disabled-void-color="#d1d1d1">
                    </el-rate>
                </div>
            </div>
            <div class="elw-scoe">
                <span>月售 {{this.arr[0]}}单  </span>
                <span class="elw-my">售价 ￥{{$route.params.my}} 起</span>
            </div>
            <div class="elw-lats">
                评论数 {{this.arr[0]}} 好评率 {{$route.params.zhan}}%
            </div>
        </div>
         <div class="elw-footer">
      <div class="elw-flex">
        <div class="elw-Fla clearfix">
          <div class="elw-bor">
            <p class="el-icon-shopping-cart-2"></p>
          </div>
          <div class="elw-myom">
            <p>￥{{addPrice}}.00</p>
            <p class="elw-fSz">配送费￥5</p>
          </div>
        </div>
        <div class="elw-Right">
          <p v-show="my<20">还差￥20起送</p>
          <p v-show="my>=20" class="elw-bgg">去结算</p>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
    export default {
        data(){
            return{
               arr:'',
               my:0,
            }
        },
        created(){
            var so=this.$route.params.pl;
            this.arr=so.split(' ');
            this.my=this.addPrice
        },
        computed: {
        ...mapState(['add']),
        ...mapGetters(['addPrice'])
    },
    }
</script>

<style scoped>
.elw-cont{
    padding-left:.2rem;
}
..el-rate__icon{
    margin-left:0;
}
.elw-title{
    font-size: .5rem;
    color: #333;
    margin-bottom: .1rem;
}
.elw-lats{
     font-size: .4rem;
     color: #666;
}
.elw-pin span{
    font-size: .4rem;
    color: #666;
}
.elw-scoe .elw-my{
    color:#f60;
}
.elw-scoe span{
    font-size: .4rem;
    color: #666;
}
.elw-pin .elw-box{
    display:inline-block;
}
.elw-imgs{
    padding-top:1.3rem;
    width: 100%;
}
.elw-imgs img{
    width:100%;
}
.elw-Right {
  width: 3.14rem;
  font-size: 0.5rem;
  color: #fff;
  line-height: 1.4rem;
}
.elw-Right p {
  padding: 0 0.4rem;
}
.elw-myom p {
  margin-top: 0.1rem;
}
.elw-myom .elw-fSz {
  font-size: 0.3rem;
  line-height: 0.6rem;
  margin-top: 0;
}
.elw-myom {
  color: #fff;
  float: left;
  font-size: 0.48rem;
}
.el-icon-shopping-cart-2 {
  color: #fff;
  font-size: 0.87rem;
  line-height: 1.6rem;
}
.elw-bor {
  margin-top: -0.66rem;
  background: #3d3d3f;
  border: 0.1rem solid #444;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  text-align: center;
  float: left;
  margin-right: 0.4rem;
}
.elw-flex {
  display: flex;
}
.elw-Fla {
  flex: 1;
}
.elw-bgg {
  background: #4cd964;
  text-align: center;
}
.elw-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 1.32rem;
  width: 100%;
  background: #3d3c42;
  padding-left: 0.36rem;
  box-sizing: border-box;
}
</style>