<template>
    <div>
        <NavMenu></NavMenu>
        <div class="v3-main" :style="{ 'margin-left': isNavMenuOpen ? '200px' : '65px' }">
            <div class="v3-header"> <Header /> </div>
            <div class="v3-tabs"> <TopNav /> </div>
            <el-main class="v3-content-main">
                <!--加和没加include 关闭标签后输入的内容还在不在-->
                <keep-alive :include="navTagIndexs">
                    <router-view></router-view>
                </keep-alive>
            </el-main>
        </div>

    </div>
</template>

<script>
    import { mapGetters, mapState } from 'vuex'
    import NavMenu from '../components/NavMenu'
    import Header from '../components/Header'
    import TopNav from '../components/TopNav'

    export default {
        name: "Layout.vue",
        components: {
            NavMenu, Header, TopNav
        },
        computed: {
            ...mapState(['isNavMenuOpen']),
            ...mapGetters(['navTagIndexs'])
        }
    }
</script>

<style scoped>
    .v3-main {
        margin-left: 200px;
    }
    .v3-header {
        height: 40px;
        background-color: #fff;
        border-bottom: 1px solid #eee;
    }
    .v3-content-main {
        background: #ffffff;
        margin: 10px;
    }
    .v3-tabs {
        background-color: #fff;
    }
</style>