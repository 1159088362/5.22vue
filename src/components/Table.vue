<template>
  <div>
    <el-table :data="data">
      <el-table-column align="center" prop="supplierName" label="供应商" >
      </el-table-column>
      <el-table-column align="center" prop="supplierContact" label="联系人" >
      </el-table-column>
      <el-table-column align="center" prop="phone" label="联系电话" >
      </el-table-column>
      <el-table-column align="center" label="预付款" >
        0
      </el-table-column>
      <el-table-column align="center"  label="应付款" >
        0
      </el-table-column>
      <el-table-column align="center" prop="status" label="状态" >
         <template slot-scope="scope">
            <el-tag :type="scope.row.status === '0' ? 'primary' : 'success'"
              disable-transitions>{{ scope.row.status | capitalize }}</el-tag>
          </template>
      </el-table-column>
      <el-table-column align="center" prop="address" label="地址">
      </el-table-column>
      <el-table-column
          label="操作"
          style="width: 25%">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text">删除</el-button>
          <el-button type="text" @click="handDate(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <span>确认删除这条数据吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="okDelete">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      dialogVisible: false,
      delDate:{}
    };
  },
  methods: {
      ...mapActions(['FETCH_LIST_DATA','FETCH_DEIETE']),
      ...mapMutations([
    'FETCH_SHOW',
    'FETCH_EDIT',
      ]),
      handleClick (opt) {
        this.delDate=opt
        this.dialogVisible=true
      },
      handDate (opt) {
        this['FETCH_SHOW'](1)
        this['FETCH_EDIT'](opt)
      },
      okDelete () {
        var obj={id:this.delDate.supplierId}
        this.dialogVisible=false
        this['FETCH_DEIETE'](obj)
      }
  },
  created () {
    this['FETCH_LIST_DATA']()
  },
  computed: {
    ...mapState(['data'])
  },
  filters: {
    capitalize: function (value) {
      if ( parseInt(value)===1){
        return "启用"
      } else {
          return "禁用"
      }
    }
  }
}
</script>