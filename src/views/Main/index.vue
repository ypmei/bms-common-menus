<template>
  <div class="main-content">
    <el-container>
      <!-- 顶部 -->
      <!--<el-header>-->
        <!--<router-link to="/home">-->
          <!--<img src="../../assets/logo.png" class="logo" />-->
        <!--</router-link>-->
      <!--</el-header>-->
      <el-container>
        <!-- 左侧导航 -->
        <el-aside>
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            :router="true"
          >
            <el-menu-item index="/home">
              <i class="el-icon-menu"></i>
              <span slot="title">主应用：首页</span>
            </el-menu-item>
            <el-menu-item index="/app/vue">
              <i class="el-icon-document"></i>
              <span slot="title">Vue:首页</span>
            </el-menu-item>
            <el-menu-item index="/app/vue/broker/tokens/tokens">
              <i class="el-icon-document"></i>
              <span slot="title">Vue:币种管理</span>
            </el-menu-item>
            <el-menu-item index="/app/vue/broker/tags">
              <i class="el-icon-document"></i>
              <span slot="title">Vue:币对标签</span>
            </el-menu-item>
            <el-menu-item index="/app/react/web/admin">
              <i class="el-icon-setting"></i>
              <span slot="title">React: 首页</span>
            </el-menu-item>
            <el-menu-item index="/app/react/web/admin/systemAccountMgt/roleMgt">
              <i class="el-icon-setting"></i>
              <span slot="title">React: 角色管理</span>
            </el-menu-item>
            <el-menu-item index="/app/react/web/admin/systemAccountMgt/accountMgt">
              <i class="el-icon-setting"></i>
              <span slot="title">React: 账户管理</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <!-- 内容 -->
          <el-main>
            <router-view></router-view>
            <div id="container"></div>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { start } from "qiankun";

export default {
  name: "Main",
  mounted() {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start();
    }
  }
};
</script>

<style lang="less" scoped>
.main-content {
  height: 100%;
  & > .el-container {
    height: 100%;
    .el-header {
      background-color: #3f4044;
      display: flex;
      align-items: center;
      .logo {
        height: 40px;
        width: auto;
        cursor: pointer;
      }
    }
    & > .el-container {
      height: 100%;
      & > .el-aside {
        background-color: #d3dce6;
        width: 200px !important;
        .el-menu-vertical-demo {
          height: 100%;
        }
      }
      .el-container {
        .el-main {
          margin: 0;
          padding: 0;
          //   background-color: #e9eef3;
          //   color: #333;
        }
      }
    }
  }
}
</style>
