<template>
   <el-button @click="onClick">添加供货商</el-button>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations([
     'FETCH_SHOW',
     'FETCH_EDIT',
    ]),
    onClick () {
      this['FETCH_SHOW'](0)
      this['FETCH_EDIT'](null)
    }
  }
}
</script>