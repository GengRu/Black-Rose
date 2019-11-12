<template>
  <div>
    <div class="elw-contrain clearfix">
      <div class="elw-sention ">
        <div class="elw-Timg">
          <slot name="el-Timg"></slot>
        </div>
        <div class="elw-Tsec">
          <div class="elw-Tname">
            <slot name="el-tname"></slot>
          </div>
          <div class="elw-minT">
            <slot name="el-minT"></slot>
          </div>
          <div class="elw-pulik">
            <slot name="el-pulik"></slot>
          </div>
        </div>
        <div class="elw-rig">
           <router-link to="/"  class="el-icon-arrow-right"></router-link>
        </div>
      </div>
       <div class="elw-Tfoot">
            <div class="elw-Ftop">
                <div class="elw-Fmin">
                    <slot name="el-Icon"></slot>
                    <slot name="el-Text"></slot>
                </div>
            </div>
            <div class="elw-Frot">
                <slot name="el-Frot"></slot>
            </div>
     </div>
    </div>
   
  </div>
</template>

<script>
export default {
    
};
</script>

<style>
.clearfix:after {
  content: "";
  clear: both;
  display: block;
}
.elw-contrain *{
    color: #fff;
}
.elw-pulik div{
    font-size: .26rem;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.elw-minT div{
    font-size: .3rem;
}
.elw-minT{
    margin-bottom:.3rem; 
}
.elw-Tname h4{
    font-size: .5rem;
}
.elw-sention{
    margin-bottom:.44rem; 
}
.elw-contrain {
  padding: 0.26rem;
}
.elw-Frot{
    float: left;
    text-align: right;
    font-size: .44rem;
}
.elw-Ftop{
    font-size: .44rem;
    float: left;
}
.elw-Tfoot{
    width: 100%;
    line-height: 1.18rem;
     overflow: hidden;
}
.elw-sention{
     /* overflow: hidden; */
     margin-bottom: 0.48rem;
}
.elw-Timg {
  width: 2rem;
  height: 2rem;
  float: left;
  padding-right: 0.18rem;
}
.elw-Timg img{
    width: 100%;
    height: 100%;
}
.elw-Tsec{
    float: left;
    width: 4.94rem;
    height: 1.96rem;
}
.elw-Tname{
    margin-bottom:.3rem; 
}
.elw-pulik{
    margin-bottom:.36rem 
}
.elw-rig{
    float: right;
    width:2rem;
}
.elw-rig a{
    display: block;
    text-align: right;
    font-size: .5rem;
    height: 1.96rem;
    line-height: 2.2rem;
}
</style>