<template>
  <div>
    <!-- 1. 搜索框 -->
    <div class="header"></div>

    <!-- 2. 表格数据 -->
    <el-table :data="tableData">
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="id" label="商品ID" width="100"> </el-table-column>
      <el-table-column prop="title" label="商品名称" width="120">
      </el-table-column>
      <el-table-column prop="price" label="商品价格" width="100">
      </el-table-column>
      <el-table-column prop="num" label="商品数量" width="100">
      </el-table-column>
      <el-table-column prop="category" label="规格类目"> </el-table-column>
      <el-table-column prop="image" label="商品图片" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="sellPoint" label="商品卖点" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="descs" label="商品描述" show-overflow-tooltip>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- 3分页. 表格数据 -->
    <div class='pagination'>
      <Pagination
      :pageSize="pageSize"
      :total="total"
      @changeCurrent="changeCurrent"
    />
    </div>
  </div>
</template>

<script>
import Pagination from "../../components/Pagination.vue";
export default {
  components: {
    Pagination,
  },
  data() {
    return {
      tableData: [], //表格数据 {name,xxx,}
      pageSize: 10,
      total: 100,
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    //获取点击页码
    changeCurrent(val) {
      console.log(val);
      this.http(val);
    },
    /**
     * 网络请求
     */
    http(page){
      this.$api
      .getProductList({
        page,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          this.tableData = res.data;
          //显示每天条数
          this.pageSize = res.pageSize;
          this.total = res.total;
        }
      });
    }
  },
  //网络请求
  created() {
    this.http(1);
  },
};
</script>

<style lang='scss' scoped>
.pagination{
  text-align: center;
  margin-top: 20px;
}
</style>