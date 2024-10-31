<script setup lang="ts">
import Table, { TableProps } from './components/Table'

const columns: TableProps['columns'] = [
    { colKey: 'row-select', type: 'multiple' },
    {
        colKey: 'name',
        title: '学生姓名',
        zType: 'text',
    },
    {
        colKey: 'schoolName',
        title: '学校',
    },
    {
        colKey: 'classCode',
        title: '班级代码',
    },
    {
        colKey: 'cardId',
        title: '身份证号',
    },
    {
        colKey: 'singUpIndex',
        title: '报名序号',
    },
    {
        colKey: 'pwd',
        title: '密码',
    },
    {
        colKey: 'isGetPwd',
        title: '是否已查看账密',
        zType: 'switch',
        componentProps: {
            customValue: [1, 2],
        },
    },
    {
        colKey: 'operation',
        title: '操作',
    },
]

const data = ref([
    {
        id: 1,
        name: '刘朋宇',
        schoolName: '河南职业技术学院',
        schoolCode: '0147',
        cardId: '410526200311100214',
        classCode: '01474701',
        singUpIndex: '0147D7300001',
        pwd: 'gk3wdwd2',
        isGetPwd: 1,
    },
    {
        id: 2,
        name: '曹诗敏',
        schoolName: '河南职业技术学院',
        schoolCode: '0147',
        cardId: '410703200312081023',
        classCode: '01474701',
        singUpIndex: '0147D7300002',
        pwd: '69mt5hfu',
        isGetPwd: 1,
    },
    {
        id: 3,
        name: '陈思',
        schoolName: '河南职业技术学院',
        schoolCode: '0147',
        cardId: '411081200502268368',
        classCode: '01474701',
        singUpIndex: '0147D7300003',
        pwd: 'adzysyr8',
        isGetPwd: 1,
    },
    {
        id: 4,
        name: '杜秋林',
        schoolName: '河南职业技术学院',
        schoolCode: '0147',
        cardId: '411602200107123529',
        classCode: '01474701',
        singUpIndex: '0147D7300004',
        pwd: 'szeete6q',
        isGetPwd: 1,
    },
    {
        id: 5,
        name: '付堃',
        schoolName: '河南职业技术学院',
        schoolCode: '0147',
        cardId: '412722200302037337',
        classCode: '01474701',
        singUpIndex: '0147D7300005',
        pwd: 'g8icmxuq',
        isGetPwd: 1,
    },
    {
        id: 6,
        name: '洪梓傲',
        schoolName: '河南职业技术学院',
        schoolCode: '0147',
        cardId: '411481200406268116',
        classCode: '01474701',
        singUpIndex: '0147D7300006',
        pwd: 'xxybjj6b',
        isGetPwd: 1,
    },
    {
        id: 7,
        name: '刘佳佳',
        schoolName: '河南职业技术学院',
        schoolCode: '0147',
        cardId: '411623200311116846',
        classCode: '01474701',
        singUpIndex: '0147D7300007',
        pwd: 'bduaw6iq',
        isGetPwd: 1,
    },
    {
        id: 8,
        name: '张乐',
        schoolName: '河南职业技术学院',
        schoolCode: '0147',
        cardId: '410305200402194524',
        classCode: '01474701',
        singUpIndex: '0147D7300008',
        pwd: 'zb7kttfv',
        isGetPwd: 1,
    },
    {
        id: 9,
        name: '孙琪煜',
        schoolName: '河南职业技术学院',
        schoolCode: '0147',
        cardId: '41100220030828203X',
        classCode: '01474701',
        singUpIndex: '0147D7300009',
        pwd: 'vhgdi7ev',
        isGetPwd: 1,
    },
    {
        id: 10,
        name: '王琰林',
        schoolName: '河南职业技术学院',
        schoolCode: '0147',
        cardId: '360723200309250915',
        classCode: '01474701',
        singUpIndex: '0147D7300010',
        pwd: 'pe69xgbx',
        isGetPwd: 1,
    },
])
</script>

<template>
    <div>
        <Table :service="false" :data-list="data" :columns="columns" row-key="id" />
    </div>
</template>

<style scoped></style>
