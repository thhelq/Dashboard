<template>
    <el-row class="tac">
        <el-col class="h100">
            <el-menu
                    unique-opened
                    :default-active="activeTag"
                    class="el-menu-vertical-demo h100"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    router
                    :collapse="!isNavMenuOpen"
                    ref="mySidemenu"
            >
                <el-submenu :index="item.name" v-for="item in menu">
                    <template slot="title">
                        <i :class="item.meta.icon"></i>&nbsp;&nbsp;
                        <span>{{ item.meta.title }}</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item
                                v-for="sub in item.sub"
                                :index="sub.meta.index"
                        >{{ sub.meta.title }}</el-menu-item>
<!--                        <el-menu-item index="1-2">选项2</el-menu-item>-->
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
    import Menu from '@/config/menu-config'

    import { mapGetters, mapState } from 'vuex'

    export default {
        name: "NavMenu",
        data() {
            return {
                menu: Menu,
                // isNavMenuOpen: false
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        computed: {
            ...mapState(['isNavMenuOpen']),
            ...mapGetters(['activeTag'])
        },
        watch: {
            /*???*/
            activeTag: function (newValue, oldValue) {
                this.$nextTick(() => {
                    this.$refs.mySidemenu.activeIndex = this.activeTag
                })
            }
        }
    }
</script>

<style scoped>
    .h100 {
        height: 100%;
    }
    .tac {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        z-index: 999;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
    }
</style>