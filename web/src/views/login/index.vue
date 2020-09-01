<template>
 <div class="container" flex="main: center cross: center">
     <div class="form">
         <div class="logo">
             <!--<div :class="{'mask': true, 'show-mask': showPsdMask === 'show', 'close-mask': showPsdMask === 'close'}"></div>-->
             <span>BOOKLINK</span>
         </div>
         <!--登录注册tab切换-->
         <div class="nav" flex="main: center">
             <el-tabs v-model="type" @tab-click="changeTab">
                <el-tab-pane label='登录' name='login'></el-tab-pane>
                <el-tab-pane label='注册' name='sign'></el-tab-pane>
             </el-tabs>
         </div>
         <!--登录-->
         <div flex="main: center" v-show="type==='login'" class="login-form form-filed">
            <el-form :model='loginForm' :rules='loginRules' ref='loginForm'>
                <el-form-item prop="name">
                    <el-input clearable placeholder='请输入用户名' v-model='loginForm.name'></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input clearable placeholder='请输入密码' type='password' v-model="loginForm.password"></el-input>
                </el-form-item>
                <el-form-item prop="validateCode">
                    <el-input clearable class='validate-code' placeholder="验证码" v-model="loginForm.validateCode"></el-input>
                    <div class="validate-source" @click='createCode'></div>
                </el-form-item>
                <el-form-item>
                    <el-button class='submit-btn' @click="loginSubmit" type="primary">登录</el-button>
                </el-form-item>
            </el-form>
         </div>
         <!--注册-->
         <div class="sign-form form-filed" flex="main: center" v-show="type='sign'">
             <el-form :model='signForm' :rules='signRules' ref='signForm'>
                <el-form-item prop="name">
                    <el-input clearable placeholder='请输入用户名' v-model='signForm.name'></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input clearable placeholder='请输入密码' type='password' v-model="signForm.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class='submit-btn' @click="signSubmit" type="primary">注册</el-button>
                </el-form-item>
            </el-form>
         </div>
     </div>
 </div>
</template>

<script>
import { Tabs, TabPane, Form, FormItem, Input, Button } from 'element-ui'
import { setToken } from '@/utils/auth'
import { register } from '@/api/user'
export default {
 data(){
    return {
        type: 'login',
        loginForm: {
            name: '',
            password: '',
            validateCode: ''
        },
        loginRules: {
            name: [
                { 
                    required : true,
                    message: '请输入用户名',
                    trigger: 'blur'
                },
                {
                    min: 3,
                    message: '最少3个字符',
                    trigger: 'blur'
                }
            ],
            password: [
                { 
                    required : true,
                    message: '请输入密码',
                    trigger: 'blur'
                },
                {
                    min: 5,
                    message: '最少5个字符',
                    trigger: 'blur'
                }
            ],
            validateCode: [
                { 
                    required : false,
                    message: '请输入验证码',
                    trigger: 'blur'
                },
                {
                    len: 4,
                    message: '必须4个个字符',
                    trigger: 'blur'
                }
            ]
        },
        signForm: {
            name: '',
            password: ''
        },
        signRules: {
            name: [
                { 
                    required : true,
                    message: '请输入用户名',
                    trigger: 'blur'
                },
                {
                    min: 3,
                    message: '最少3个字符',
                    trigger: 'blur'
                }
            ],
            password: [
                { 
                    required : true,
                    message: '请输入密码',
                    trigger: 'blur'
                },
                {
                    min: 5,
                    message: '最少5个字符',
                    trigger: 'blur'
                }
            ]
        }
    }
 },
 components: { 
     'el-tabs': Tabs, 
     'el-tab-pane': TabPane, 
     'el-form': Form, 
     'el-form-item': FormItem, 
     'el-input': Input, 
     'el-button': Button 
},
 methods:{
     changeTab() {},
     createCode() {},
     loginSubmit() {
         this.$ref.loginForm.validate((valid) => {
             if(valid) {
                 this.$store.dispatch('user/login', this.loginForm).then(success => {
                     if(success) {
                         this.$message({
                             message: '登陆成功，正在重新跳转',
                             type: 'success',
                             duration: 1500
                         });
                         setTimeout(() => {
                             this.$router.replace('/');
                         }, 1500);
                     }
                 })
             }
         })
     },
     signSubmit() {
         this.$ref.signForm.validate((valid) => {
             if(valid) {
                 register(this.signForm).then((res) => {
                     this.$messageBox.alert('注册成功', '提示', {
                         confirmButtonText: '确定',
                         type: 'success'
                     }).then(() => {
                         const data = res.data;
                         this.$store.commit('user/setLoginState', true);
                         setToken(data.token);
                         this.$router.push('/');
                     })
                 })
             }
         })
     }
 },
}
</script>
<style scoped>
</style>