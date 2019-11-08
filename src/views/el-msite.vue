<template>
    <div id="msite">
         <el_Header>
           <div slot="elw-Left">
         	<router-link to="/" class="el-icon-arrow-left"></router-link>
           </div>
           <div  slot="elw-cont">
         	 {{$route.params.mName}}
           </div>
           <div slot="elw-right">
         	 <router-link to="/">切换城市</router-link>
           </div>
         </el_Header>
			 
		 <lunbo></lunbo>
    </div>
</template>

<script>
import el_Header from './../components/el-header/el-header'
import lunbo from './../components/el-lunbo/el-lunbotu'
export default {
    components:{el_Header,lunbo}
}
</script>

<style>
	#msite{
		padding-top: 138px;
	}
	
    .el-icon-arrow-left{
        font-size: 42px;
    }
</style>