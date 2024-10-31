import { PropType } from 'vue'
import { TablePropsType } from './type'
export default {
    url: {
        type: String,
    },
    service: {
        required: true,
        default() {
            return true
        },
        type: Boolean as PropType<TablePropsType['service']>,
    },
    dataList: {
        type: Array as PropType<TablePropsType['dataList']>,
    },
    columns: {
        required: true,
        type: Array as PropType<TablePropsType['columns']>,
    },
    options: {
        type: Object as PropType<TablePropsType['options']>,
    },
    rowKey: {
        required: true,
        type: String as PropType<TablePropsType['rowKey']>,
    },
}
