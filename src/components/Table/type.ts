import { TableProps } from 'tdesign-vue-next'

type BaseColumn = NonNullable<TableProps['columns']>[number]

export interface Columns extends BaseColumn {
    zType?: 'switch' | 'text' | 'select' | 'operation'
    componentProps?: object
    zEdit?: boolean
}

export interface TablePropsType {
    columns: Columns[]
    dataList: Array<object>
    options: TableProps
    rowKey: TableProps['rowKey']
    service: boolean
    url: string
}
