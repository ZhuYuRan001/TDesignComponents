import tableProps from './props'
import { Switch, TableProps, Table, Input, Select } from 'tdesign-vue-next'
import axios from 'axios'
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'BaseTable',
    props: { ...tableProps },
    emits: ['pageChange'],
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    setup(props, { slots, expose, attrs, emit }) {
        const dataList = ref([])
        const pagination = reactive<TableProps['pagination']>({
            current: 1,
            pageSize: 10,
            total: props.service ? 0 : props.dataList.length,
        })
        const computedTableData = computed(() =>
            props.dataList.slice(
                (pagination.current - 1) * pagination.pageSize,
                (pagination.current - 1) * pagination.pageSize + pagination.pageSize,
            ),
        )

        const columns = computed<TableProps['columns']>(() => {
            const cols = []
            for (let i = 0; i < props.columns.length; i++) {
                const element = props.columns[i]
                const obj = {
                    ...element,
                }
                if (element.zType == 'switch') {
                    if (element.zEdit) {
                        obj['edit'] = {
                            component: Switch,
                            props: element.componentProps,
                        }
                    } else {
                        obj['cell'] = (_h, { row }) => {
                            return (
                                <>
                                    <Switch
                                        size="medium"
                                        modelValue={row[obj.colKey]}
                                        {...obj.componentProps}
                                    />
                                </>
                            )
                        }
                    }
                } else if (element.zType === 'text') {
                    obj['cell'] = (_h, { row }) => {
                        return (
                            <>
                                <Input v-model={row[obj.colKey]} {...obj.componentProps} />
                            </>
                        )
                    }
                } else if (element.zType === 'select') {
                    obj['cell'] = (_h, { row }) => {
                        return (
                            <>
                                <Select v-model={row[obj.colKey]} {...obj.componentProps}></Select>
                            </>
                        )
                    }
                }
                cols.push(obj)
            }
            return cols
        })

        const rehandlePageChange = (e) => {
            emit('pageChange', e)
            pagination.current = e.current
            pagination.pageSize = e.pageSize
            reload()
        }

        const reload = () => {
            if (props.service) {
                axios.post(props.url, pagination).then((res) => {
                    if (res.data) {
                        dataList.value = res.data
                    }
                })
            }
        }
        return () => (
            <div>
                <Table
                    data={props.service ? dataList.value : computedTableData.value}
                    columns={columns.value}
                    row-key={props.rowKey}
                    bordered={true}
                    hover={true}
                    stripe={true}
                    pagination={pagination}
                    onPageChange={rehandlePageChange}
                ></Table>
            </div>
        )
    },
})
