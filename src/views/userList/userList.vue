<template>
    <div class="wrapper">
        <div class="header">
            <img src="../../assets/logo.png" alt="">
            <span>张三</span>
        </div>
        <Input v-model="value" placeholder="输入您要查询的姓名" />
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    }
    
}
</script>

<style lang="scss" scoped>
.wrapper{
    padding:18px;
    background:#2E3238;

    .header{
        img{
            width: 40px;
            height: 40px;
        }
        span{
            display: inline-block;
            font-weight: 400;
            width: 156px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
            color: #fff;
            font-size: 18px;
            vertical-align: top;
            line-height: 31px;
            text-align: left;
        }
    }
}
</style>




