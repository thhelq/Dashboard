<template>
    <el-row>
        <el-col :span="2" class="head-wrap">
            <el-button
                :icon="iconName"
                @click="toggleMenuOpen"
                class="no-b"
            >
            </el-button>
        </el-col>
        <el-col :span="2" :offset="20" class="head-wrap text-r">
            <el-dropdown>
                <el-button class="no-b">
                    <i class="fa fa-user-circle"></i>
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                        <i class="fa fa-address-card-o"></i>
                        查看个人信息
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <i class="fa fa-power-off"></i>
                        登出
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <i class="fa fa-wrench"></i>
                        修改密码
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-col>
    </el-row>
</template>

<script>
    import { mapState } from 'vuex'
    import store from '@/store'

    export default {
        name: "Header",
        computed: {
            ...mapState(['isNavMenuOpen']),
            iconName() {
                return this.isNavMenuOpen ? 'fa fa-outdent' : 'fa fa-indent'
            }
        },
        methods: {
            toggleMenuOpen() {
                store.commit('toggleMenuOpen')
            }
        }
    }
</script>

<style scoped>
    .no-b {
        border: 0;
    }
    .text-r {
        text-align: right;
    }
    .head-wrap {
        height: 40px;
        border-bottom: 1px solid #eee;
    }
</style>