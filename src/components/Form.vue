<template>
  <el-dialog 
  :title="title" 
  :center=true 
  :visible.sync="dialogFormVisible"
  :show-close=false 
  :close-on-click-modal=false>
    <el-form :model="form = opt === null ? form : opt">
      <el-form-item label="供应商名称" :label-width="formLabelWidth" prop = 'supplierName'>
        <el-input v-model="form.supplierName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="供应商联系人" :label-width="formLabelWidth" prop = 'supplierContact'>
        <el-input v-model="form.supplierContact" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" :label-width="formLabelWidth" prop = 'phone'>
        <el-input v-model="form.phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="详细地址" :label-width="formLabelWidth">
        <el-input v-model="form.address" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="状态" :label-width="formLabelWidth">
        <template>
          <el-radio v-model="form.status" label="1">启用</el-radio>
          <el-radio v-model="form.status" label="0">禁用</el-radio>
        </template>
      </el-form-item>
      <el-form-item label="备注信息" :label-width="formLabelWidth">
        <el-input v-model="form.description" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="add(context)">{{context}}</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {
      formLabelWidth: '120px',
      form: {
        supplierName: '',
        supplierContact: '',
        phone: '',
        address: '',
        status: '1',
        description: '',
      }
    }
  },
  computed: {
    ...mapState(['dialogFormVisible','title','context','opt'])
  },
  methods: {
    ...mapMutations([
      'FETCH_SHOW'
    ]),
    ...mapActions(['FETCH_ADD','FETCH_UPDATE']),
  //取消操作
    close () {
      this['FETCH_SHOW'](0)
    },
  //确认添加
    add (context) {
      this['FETCH_SHOW'](0)
      if ( context === '立即添加') {
        this['FETCH_ADD'](this.form)
      } else {
          this['FETCH_UPDATE'](this.form)
      }
    }
  }
};
</script>