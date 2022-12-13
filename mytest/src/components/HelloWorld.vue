<template>
  <div class="container">
    <van-sticky>
      <van-dropdown-menu active-color="#1989fa">
        <van-dropdown-item v-model="data.search.project" :options="data.project_list"  @change="changeProject" />
        <van-dropdown-item v-model="data.search.grade" :options="data.grade_list" @change="changeGrade" />
      </van-dropdown-menu>
    </van-sticky>
    <table class="table_flex">
      <tr>
        <th>项目</th>
        <th>年级</th>
        <th>成绩</th>
        <th>分数</th>
      </tr>
      <tr v-for="(item, ind) in data.list" :key="ind">
        <td>{{ item.subject_name }}</td>
        <td>{{ item.grade_name }}</td>
        <td v-if="item.subject_name!=='BMI'">{{ item.result }}</td>
        <td v-if="item.subject_name==='BMI'">{{Number(item.result).toFixed(1)}}</td>
        <td>{{ item.score }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
// import '@/assets/base.scss';
// import zt_sports from '@/api/zt_sports.js';
// import 'datejs';
// import baseJs from '@/assets/baseJs';

export default defineComponent({
  setup() {
    const data = ref({
      search: {
        grade: '',
        project: '',
      },
      project_list: [],
      grade_list: [],
      list: [],
      active: '',
    });

    const changeProject = (val) => {
      data.value.search.project = val;
      loadData();
    };
    const changeGrade = (val) => {
      data.value.search.grade = val;
      loadData();
    };
    const loadData = () => {
      const postData = {
        subject_id: data.value.search.project,
        grade_objid: data.value.search.grade,
      };
      zt_sports.constitution.search_dp(postData, (res) => {
        if (res.code != 0) {
          window.easyj.$message.error(res.msg);
          data.value.list.is_finish = true;
        } else {
          data.value.list = res.r.rs;
        }
      });
    };

    // 获取年级
    function getGradeList() {
      baseJs.getGrade({}).then((res) => {
        const list = [];
        res.forEach((e) => {
          const obj = {
            text: e.grade_name,
            value: e.grade_objid,
          };
          list.push(obj);
        });
        list.push({
          text:'重置',
          value:''
        })
        data.value.grade_list = list;
      });
    }
    // 获取科目
    function getSubjectList() {
      baseJs.getSubject({}).then((res) => {
        const arr = [];
        res.forEach((e) => {
          const obj2 = {
            text: e.subject_name,
            value: e.subject_id,
          };
          arr.push(obj2);
        });
        data.value.project_list = arr;
      });
    }
    onMounted(() => {
      loadData();
      getGradeList();
      getSubjectList();
    });
    return {
      data,
      loadData,
      changeProject,
      changeGrade,
      getGradeList,
      getSubjectList,
    };
  },
});
</script>


