<template>
  <div>
    <el-row :gutter="18">
      <el-form ref="elForm" :model="formData" :rules="rules" size="small" label-width="108px">
        <el-col :span="23">
          <el-form-item label-width="-1px" label="票类型" prop="plx">
            <el-radio-group v-model="formData.plx" size="small">
              <el-radio-button
                v-for="(item, index) in plxOptions"
                :key="index"
                :label="item.value"
                :disabled="item.disabled"
              >{{item.label}}</el-radio-button>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="工作负责人" prop="fzr">
            <el-input v-model="formData.fzr" placeholder="负责人" clearable :style="{width: '100%'}"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="票号" prop="ph">
            <el-input v-model="formData.ph" placeholder="请输入票号" :style="{width: '100%'}"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="工作签发人" prop="qfr">
            <el-input v-model="formData.qfr" placeholder="签发人" clearable :style="{width: '100%'}"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="地点" prop="dd">
            <el-input v-model="formData.dd" placeholder="请输入地点" clearable :style="{width: '100%'}"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="厂站" prop="cz">
            <el-input v-model="formData.cz" placeholder="请输入厂站" clearable :style="{width: '100%'}"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="设备双重名称" prop="mc">
            <el-input
              v-model="formData.mc"
              placeholder="请输入设备双重名称"
              clearable
              :style="{width: '100%'}"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="工作内容" prop="nr">
            <el-input
              v-model="formData.nr"
              placeholder="请输入工作内容"
              clearable
              :style="{width: '100%'}"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="计划时间" prop="jh">
            <el-date-picker
              type="datetimerange"
              v-model="formData.jh"
              format="yyyy-MM-dd HH:mm:ss"
              value-format="yyyy-MM-dd HH:mm:ss"
              :style="{width: '100%'}"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              range-separator="至"
              clearable
            ></el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :span="3">
          <el-form-item size="large">
            <el-button type="primary" @click="submitForm">提交</el-button>
          </el-form-item>
        </el-col>

        <el-col :span="3">
          <el-form-item size="large">
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-autocomplete
            v-model="state"
            :fetch-suggestions="querySearchAsync"
            :style="{width: '100%'}"
            placeholder=" 危 险 点 分 析 及 安 全 注 意 事 项 "
            @select="handleSelect"
          ></el-autocomplete>
        </el-col>

        <el-col :span="3">
          <el-form-item size="large">
            <el-button @click="addwork">增加工作任务</el-button>
          </el-form-item>
        </el-col>

        <el-col :span="3">
          <el-form-item size="large">
            <el-button @click="addwxd">增加危险点分析</el-button>
          </el-form-item>
        </el-col>

        <el-col :span="3">
          <el-form-item size="large">
            <el-button @click="addzy">增加安全事项</el-button>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-table :data="zytable" stripe style="width: 100%">
            <el-table-column prop="zy" label="工作注意事项" width="550"></el-table-column>
            <el-table-column fixed="right" label="操作" width="60">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="deleteRow(scope.$index, zytable)"
                  type="text"
                  size="small"
                >移除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>

        <el-col :span="12">
          <el-table :data="fgtable" stripe style="width: 100%">
            <el-table-column prop="fg" label="工作班人员" width="100"></el-table-column>
            <el-table-column prop="rw" label="任务" width="450"></el-table-column>
            <el-table-column fixed="right" label="操作" width="60">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="deleteRow(scope.$index, fgtable)"
                  type="text"
                  size="small"
                >移除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>

        <el-col :span="12">
          <el-table :data="wxdtable" stripe style="width: 100%">
            <el-table-column prop="wxd" label="危险点分析" width="550"></el-table-column>
            <el-table-column fixed="right" label="操作" width="60">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="deleteRow(scope.$index, wxdtable)"
                  type="text"
                  size="small"
                >移除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-form>
    </el-row>
  </div>
</template>
<script>
export default {
  name: app,
  components: {},
  props: [],
  data() {
    return {
      restaurants: [],
      state: "",
      timeout: null,
      fgtable: [
        {
          fg: "2016-05-02",
          rw: "王小虎"
        },
        {
          fg: "2016-05-04",
          rw: "王小虎"
        }
      ],
      wxdtable: [
        {
          wxd: "上海市普陀区金沙江路 1518 弄"
        },
        {
          wxd: "上海市普陀区金沙江路 1517 弄"
        }
      ],
      zytable: [
        {
          zy: "上海市普陀区金沙江路9999 弄"
        },
        {
          zy: "上海靠普陀区金沙江路 1517 弄"
        }
      ],
      formData: {
        plx: 2,
        fzr: "",
        ph: "",
        qfr: "",
        dd: "",
        cz: "",
        mc: "",
        nr: ""
      },
      rules: {
        plx: [
          {
            required: true,
            message: "票类型不能为空",
            trigger: "change"
          }
        ],
        fzr: [
          {
            required: true,
            message: "负责人",
            trigger: "blur"
          }
        ],
        ph: [
          {
            required: true,
            message: "请输入票号",
            trigger: "blur"
          }
        ],
        qfr: [],
        dd: [
          {
            required: true,
            message: "请输入地点",
            trigger: "blur"
          }
        ],
        cz: [
          {
            required: true,
            message: "请输入厂站",
            trigger: "blur"
          }
        ],
        mc: [
          {
            required: true,
            message: "请输入设备双重名称",
            trigger: "blur"
          }
        ],
        nr: [
          {
            required: true,
            message: "请输入工作内容",
            trigger: "blur"
          }
        ]
      },
      plxOptions: [
        {
          label: "电力监控系统工作票",
          value: 1
        },
        {
          label: "变电站第二种工作票",
          value: 2
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    axios
      .get("api/ticket/getAllList")
      .then(response => {
        this.list = response.data;
        this.total = response.data.length;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    loadAll() {
      return [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号"
        },
        { value: "新旺角茶餐厅" }
      ];
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return state => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
  submitForm() {
    var ph = this.formData.ph;
    var plx = this.formData.plx;
    var fzr = this.formData.fzr;
    var nr = this.formData.nr;
    var qfr = this.formData.qfr;
    var dd = this.formData.dd;
    var cz = this.formData.cz;
    var mc = this.formData.mc;

    axios
      .post("/api/ticket/addList", {
        ph: ph,
        plx: plx,
        fzr: fzr,
        qfr: qfr,
        dd: dd,
        cz: cz,
        mc: mc,
        nr: nr
        //      jhkg:jhkg,
        //      jhwg:jhwg
      })
      .then(function(response) {
        alert("成功更新" + title + "");
        this.dialogFormVisible = false;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  resetForm() {
    this.$refs["elForm"].resetFields();
  },
  getZyOptions() {
    // TODO 发起请求获取数据
    this.zyOptions;
  }
};
</script>
<style>
</style>

