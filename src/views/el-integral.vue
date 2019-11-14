<template>
    <div id="integral">
        <div id="content">
            <h3 class="elj-title">请重新进入</h3>
            <p class="elj-txt">请返回后重新进入积分商城~</p>
            <div class="elj-img">
                <img src="https://yun.duiba.com.cn/webapp/img/retrylogin.png" alt="">
            </div>
        </div>
    </div>  
</template>

<script>
export default {

}
</script>

<style scoped>
#integral{
    background-color: #f0f0f0;
    position: relative;
    height: 100vh;
}
#content{
    width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -25%;
    margin-left: -25%;
    text-align: center;
}
.elj-title{
    font-size: 20px;
    color: #0d7fd5;
    margin-bottom: 15px;
}
.elj-txt{
    font-size: 14px;
}
.elj-img img{
    width: 100%;
}
.elj-img{
    padding: 10px;
    box-sizing: border-box;
}
</style>
