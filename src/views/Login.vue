<template>
    <el-container>
        <el-header></el-header>
        <el-main class="main">
            <h1>V3 Admin</h1>
            <el-form rel="form" :model="form">
                <el-form-item>
                    <el-input v-model="form.username" placeholder="email"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.password" placeholder="password"></el-input>
                </el-form-item>
                <el-form-item style="text-align: right">
                    <el-button @click="login" type="primary">登录</el-button>
                </el-form-item>
            </el-form>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "Login",
        data: function () {
            return {
                form: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            login: function () {
                this.$router.push('/Home')
            }
        }
    }
</script>

<style scoped>
    h1 {
        text-align: center;
        color: #606266;
    }
    form {
        padding: 20px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 4px rgba(0,0,0,.12), 0 0 6px rgba(0,0,0,.04);
    }
    .main {
        width: 400px;
        margin: 0px auto;
    }
</style>