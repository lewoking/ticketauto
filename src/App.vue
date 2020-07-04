<template>
  <div>
    <el-row :gutter="18">
      <el-form ref="elForm" :model="formData" :rules="rules" size="small" label-width="108px">
        <el-col :span="23">
          <el-form-item label-width="-1px" label="票类型" prop="field103">
            <el-radio-group v-model="formData.field103" size="small">
              <el-radio-button v-for="(item, index) in field103Options" :key="index" :label="item.value"
                :disabled="item.disabled">{{item.label}}</el-radio-button>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="工作负责人" prop="field101">
            <el-input v-model="formData.field101" placeholder="负责人" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="票号" prop="field109">
            <el-input v-model="formData.field109" placeholder="请输入票号" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="工作签发人" prop="field107">
            <el-input v-model="formData.field107" placeholder="签发人" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="地点" prop="field112">
            <el-input v-model="formData.field112" placeholder="请输入地点" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="厂站" prop="field111">
            <el-input v-model="formData.field111" placeholder="请输入厂站" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="设备双重名称" prop="field113">
            <el-input v-model="formData.field113" placeholder="请输入设备双重名称" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="工作内容" prop="field114">
            <el-input v-model="formData.field114" placeholder="请输入工作内容" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label-width="0" prop="field115">
            <el-input v-model="formData.field115" placeholder="分工1" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="18">
          <el-form-item label-width="0" prop="field116">
            <el-input v-model="formData.field116" placeholder="任务1" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label-width="0" prop="field118">
            <el-input v-model="formData.field118" placeholder="分工2" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="18">
          <el-form-item label-width="0" prop="field119">
            <el-input v-model="formData.field119" placeholder="任务2" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label-width="0" prop="field120">
            <el-input v-model="formData.field120" placeholder="分工3" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="18">
          <el-form-item label-width="0" prop="field121">
            <el-input v-model="formData.field121" placeholder="任务3" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label-width="0" prop="field122">
            <el-input v-model="formData.field122" placeholder="分工4" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="18">
          <el-form-item label-width="0" prop="field123">
            <el-input v-model="formData.field123" placeholder="任务4" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="现场危险点分析" prop="field124">
            <el-input v-model="formData.field124" type="textarea" placeholder="请输入现场危险点分析"
              :autosize="{minRows: 2, maxRows: 6}" :style="{width: '100%'}"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="计划时间" prop="field127">
            <el-date-picker type="datetimerange" v-model="formData.field127" format="yyyy-MM-dd HH:mm:ss"
              value-format="yyyy-MM-dd HH:mm:ss" :style="{width: '100%'}" start-placeholder="开始日期"
              end-placeholder="结束日期" range-separator="至" clearable></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="安全注意事项" prop="field129">
            <el-cascader v-model="formData.field129" :options="field129Options" :props="field129Props"
              :style="{width: '100%'}" placeholder="请选择安全注意事项" filterable clearable></el-cascader>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item size="large">
            <el-button type="primary" @click="submitForm">提交</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
        <form>
      <input type="text" name="username" v-model="userName"> <br>
      <input type="text" name="age" v-model="age"> <br>
      <a href="javascript:;" @click="addUser">提交</a>
    </form>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {
              msg: 'Welcome to Your Vue.js App',
      userName: '',
      age: '',
      formData: {
        field103: 2,
        field101: undefined,
        field109: undefined,
        field107: undefined,
        field112: undefined,
        field111: undefined,
        field113: undefined,
        field114: undefined,
        field115: undefined,
        field116: undefined,
        field118: undefined,
        field119: '',
        field120: undefined,
        field121: undefined,
        field122: undefined,
        field123: undefined,
        field124: undefined,
        field127: null,
        field129: [1, 2]
      },
      rules: {
        field103: [{
          required: true,
          message: '票类型不能为空',
          trigger: 'change'
        }],
        field101: [{
          required: true,
          message: '负责人',
          trigger: 'blur'
        }],
        field109: [{
          required: true,
          message: '请输入票号',
          trigger: 'blur'
        }],
        field107: [{
          required: true,
          message: '签发人',
          trigger: 'blur'
        }],
        field112: [{
          required: true,
          message: '请输入地点',
          trigger: 'blur'
        }],
        field111: [{
          required: true,
          message: '请输入厂站',
          trigger: 'blur'
        }],
        field113: [{
          required: true,
          message: '请输入设备双重名称',
          trigger: 'blur'
        }],
        field114: [{
          required: true,
          message: '请输入工作内容',
          trigger: 'blur'
        }],
        field115: [{
          required: true,
          message: '分工1',
          trigger: 'blur'
        }],
        field116: [{
          required: true,
          message: '任务1',
          trigger: 'blur'
        }],
        field118: [{
          required: true,
          message: '分工2',
          trigger: 'blur'
        }],
        field119: [{
          required: true,
          message: '任务2',
          trigger: 'blur'
        }],
        field120: [{
          required: true,
          message: '分工3',
          trigger: 'blur'
        }],
        field121: [{
          required: true,
          message: '任务3',
          trigger: 'blur'
        }],
        field122: [{
          required: true,
          message: '分工4',
          trigger: 'blur'
        }],
        field123: [{
          required: true,
          message: '任务4',
          trigger: 'blur'
        }],
        field124: [{
          required: true,
          message: '请输入现场危险点分析',
          trigger: 'blur'
        }],
        field127: [{
          required: true,
          message: '计划时间不能为空',
          trigger: 'change'
        }],
        field129: [{
          required: true,
          type: 'array',
          message: '请至少选择一个field129',
          trigger: 'change'
        }]
      },
      field103Options: [{
        "label": "电力监控系统工作票",
        "value": 1
      }, {
        "label": "变电站第二种工作票",
        "value": 2
      }],
      field129Options: [],
      field129Props: {
        "multiple": true
      }
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
    getField129Options() {
      // TODO 发起请求获取数据
      this.field129Options
    },    
    addUser() {
      var name = this.userName;
      var age = this.age;
      this.$http.post('/api/user/addUser', {
        username: name,
        age: age
      },{}).then((response) => {
        console.log(response);
      })
    },
  }
}

</script>
<style>
</style>
