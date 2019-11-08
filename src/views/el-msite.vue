<template>
    <div>
        <el_Header></el_Header>
        <el_Footer></el_Footer>
    </div>
</template>

<script>
import el_Header from '../components/el-header/el-header'
import el_Footer from '../components/el-footer/el-footer'
export default {
    components:{el_Header,el_Footer}
}
</script>

<style>
    .el-icon-arrow-left{
        font-size: 42px;
    }
</style>