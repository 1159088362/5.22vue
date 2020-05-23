<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>首页</template>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>基础管理</template>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>销售</template>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"><i class="el-icon-setting"></i>进货</template>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title"><i class="el-icon-setting"></i>库存</template>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title"><i class="el-icon-setting"></i>系统管理</template>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown"></el-dropdown-menu>
        </el-dropdown>
        <span>{{username}}</span>
      </el-header>
      <el-main>
        <Button />
        <Table />
        <Form />
      </el-main>
    </el-container>
  </el-container>
</template>


<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
import { mapState } from 'vuex'
import Table from '../../components/Table'
import Button from '../../components/Button'
import Form from '../../components/Form'
  export default {
    computed: {
      //获取登录的用户名
    ...mapState('login',['username']),
    },
    components : {
      Table,
      Button,
      Form
    }
  };
</script>