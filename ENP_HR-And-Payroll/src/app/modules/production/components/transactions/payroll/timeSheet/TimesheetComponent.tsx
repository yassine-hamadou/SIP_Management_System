import { Table } from "antd"
import { KTCardBody } from "../../../../../../../_metronic/helpers"

const TimeSheetComponent = () => {
    

    const columns: any = [
        
            {
            title: 'Date',
            dataIndex: 'firstname',
            
            },
            {
            title: 'Day',
            dataIndex: 'lastname',
            
            },
            {
            title: 'Time In',
            dataIndex: 'departmentName',
            
            },
            {
            title: 'Time Out',
            dataIndex: 'jobTitleName',
            
            },
            {
            title: 'Total Hours',
            dataIndex: 'payGroupName',
            
            },
            
        ]

    return (
        
        <Table columns={columns}  />
            
    )
}

export { TimeSheetComponent }