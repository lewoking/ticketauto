<template>
  <div>
    <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
      <el-form-item label="工作票类型" prop="field103">
        <el-radio-group v-model="formData.field103" size="small">
          <el-radio-button v-for="(item, index) in field103Options" :key="index" :label="item.value"
            :disabled="item.disabled">{{item.label}}</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="工作负责人" prop="field101">
        <el-input v-model="formData.field101" placeholder="请输入工作负责人" clearable :style="{width: '100%'}">
        </el-input>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      formData: {
        field103: 2,
        field101: undefined,
      },
      rules: {
        field103: [{
          required: true,
          message: '工作票类型不能为空',
          trigger: 'change'
        }],
        field101: [{
          required: true,
          message: '请输入工作负责人',
          trigger: 'blur'
        }],
      },
      field103Options: [{
        "label": "电力监控系统工作票",
        "value": 1
      }, {
        "label": "变电站第二种工作票",
        "value": 2
      }],
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    submitForm() {
      this.$refs['elForm'].validate(valid => {
        if (!valid) return
        // TODO 提交表单
      })
    },
    resetForm() {
      this.$refs['elForm'].resetFields()
    },
  }
}

</script>
<style>
</style>
