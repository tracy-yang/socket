<template>
    <div class="bg">
        <div class="form-wrapper">
            <div  class="title">登陆</div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  label-position="left">
                <el-form-item label="" prop="userName">
                    <el-input v-model="ruleForm.userName" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="" prop="password">
                    <el-input v-model="ruleForm.password" type="password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="submit" @click="login('ruleForm')">登陆</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import {login} from '../../api/user'
import { mapState , mapActions } from 'vuex'

export default {
    data(){
        return {
            ruleForm:{
                userName:'' , // 用户名
                password:'' , // 密码
            },
            rules:{
                userName:[
                    {required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password:[
                     {required: true, message: '请输入密码', trigger: 'blur' }
                ]
            },
            name:''
        }
    },
    created(){
        console.log(typeof globalLogin) // object
        this.name = globalLogin.test;
    },
    computed:{
        userId(){
            console.log(this.$store.state.user,888)
            return this.$store.stateuserId;
        }
        // ...mapState({
        //     userId: state => state.user.userId,
        // }),
    },
    methods:{
        ...mapActions([
            'USERID',
            'USERNAME',
            'HEADERIMG'
        ]),
        login(formName){
            console.log(this.$store.state.user.userId);
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    login(this.ruleForm.userName,this.ruleForm.password).then(data =>{
                        console.log(data,3333);
                        this.$store.dispatch('USERID',data.data.id);
                        this.$router.push({ name: 'home'});
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
             });
        },

    }
}
</script>

<style>
    .bg{
        background: #f2f2f2;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
    .title{
        font-size: 24px;
        color: #999;
        padding-bottom: 20px;
        
    }
    .form-wrapper{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 360px;
        padding:20px;
        background:#fff;
        border:solid 1px #ebebeb;
        border-radius: 4px;
    }
    .form-wrapper form{
        width: 100%;
    }
    .submit{
        width: 100%;
    }

</style>
