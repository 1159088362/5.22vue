<template>
  <div class="login">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')" >登录</el-button>
        <el-button>注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import "./style.less";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      }  else {
        callback();
      }
    };
    return {
      ruleForm: {
        password: "",
        username: "",
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        username: [{ validator: validatePass2, trigger: "blur" }],
      }
    };
  },
  computed: {
    ...mapState('login',['Status']),
  },
  watch:{
    Status (){
      if(this.Status === 200){
        sessionStorage.setItem('token',true)
        this.$message({
          message: '登录成功',
          type: 'success'
        });
        this.$router.push({path:'/'})
      }
    }
  },
  methods: {
     ...mapActions('login',['FETCH_LOGIN']),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this['FETCH_LOGIN'](this.ruleForm)
        } else {
          return false;
        }
      });
    },
  }
};
</script>

