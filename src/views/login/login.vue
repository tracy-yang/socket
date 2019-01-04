<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
            <el-form-item label="用户名" prop="userName">
                <el-input v-model="ruleForm.userName"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="ruleForm.password" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login">登陆</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import {login} from '../../api/user'

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
            }
        }
    },
    methods:{
        login(){
            login(this.ruleForm.userName,this.ruleForm.password).then(data =>{
                
            })
        },

    }
}
</script>

<style>

</style>
