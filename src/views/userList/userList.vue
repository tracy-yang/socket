<template>
    <div class="wrapper">
        <div class="left">
            <div class="header">
                <img src="../../assets/logo.png" alt="">
                <span>张三</span>
            </div>
            <el-input placeholder="输入姓名"></el-input>
            <div class="user-list" >
                <div class="user-item">
                    <img src="../../assets/logo.png" alt="">
                    <span>李四</span>
                </div>
            </div>
        </div>
        <div class="right">

        </div>
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
    

    .left{
        width: 300px;
        padding:18px;
        background:#2E3238;
        position: absolute;
        top: 0;
        bottom: 0;
        box-sizing: border-box;
        

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

        .user-list{
            height: 100%;
            .user-item{
                padding:6px 0;
                color:#fff;
                border-bottom: solid 1px #666;
                img{
                    width: 48px;
                    height:48px;
                    vertical-align: top;
                }

            }
        }
    }
    .right{
        position: absolute;
        top:0;
        left: 300px;
        right: 0;
        bottom: 0;
    }
}
</style>




