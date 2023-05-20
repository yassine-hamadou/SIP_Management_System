import { Button, Input, Space, Table, message } from "antd";
import { KTCardBody } from "../../../../../../_metronic/helpers";
import { PageActionButtons } from "../../CommonComponents";
import { useEffect, useState } from "react";
import { fetchDocument } from "../../../urls";


const FuelReciept = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false) // to show the upload modal
    const [isFileUploaded, setIsFileUploaded] = useState(false) // to check if the file is uploaded
    const [isCheckDataModalOpen, setIsCheckDataModalOpen] = useState(false)  // to show the modal to check the data summaries from the uploaded file
    const [isBatchDataCheckModalOpen, setIsBatchDataCheckModalOpen] = useState(false) // to show the modal to check the data summaries from batch data 
    const tenantId = localStorage.getItem('tenant')
    const [loading, setLoading] = useState(false)



    const showModal = () => {
        setIsModalOpen(true)
    }

    const showUploadModal = () => {
        setIsUploadModalOpen(true)
    }

    //hide Update table 
    const clearUpdateTable = () => {
        setIsFileUploaded(false)
        //setUploadedFile(null)
        setLoading(false)
        loadData()
    }

    const loadData = async () => {
        setLoading(true)
        try {
            const response = await fetchDocument(`cycleDetails/tenant/${tenantId}`)
            // const data: any = countRowsPerBatch(response.data)
            // setGridData(data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
            message.error(`${error}`)
        }
    }

    useEffect(() => {
        loadData()
    }, [])


    const columns: any = [
        { title: 'Date', dataIndex: 'recieptDate', },
        { title: 'Pump', dataIndex: 'pumpId', },
       // { title: 'Equipment', dataIndex: 'equipmentId', },
        { title: 'Transaction Type', dataIndex: 'transactionType', },
        { title: 'Quantity', dataIndex: 'quantity', },
        {
            title: 'Action',
            fixed: 'right',
            width: 150,
            render: (record: any) => () => { },
        }
    ]


    return (
        <div className="card-custom card-flush">
            <div className="card-header" style={{borderBottom: 'none'}}>
                <Space style={{ marginBottom: 16 }}>
                    <Input
                        placeholder='Enter Search Text'
                        type='text'
                        allowClear size='large'
                    />
                    <Button type='primary' size='large'>
                        Search
                    </Button>
                </Space>
                <div className="card-toolbar ">
                    <Space style={{ marginBottom: 16 }}>
                        {
                            isFileUploaded ?
                                <Space>
                                    <Button
                                        type='primary' size='large'
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                        className='btn btn-light-success btn-sm'
                                    >
                                        Check data
                                    </Button>
                                    <Button
                                        type='primary' size='large'
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }} className='btn btn-light-success btn-sm'>
                                        Save
                                    </Button>
                                    <Button onClick={clearUpdateTable}
                                        type='primary' size='large'
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }} className='btn btn-light-info btn-sm'>
                                        Clear
                                    </Button>
                                </Space>
                                :
                                <PageActionButtons
                                    onAddClick={showModal}
                                    onExportClicked={() => { console.log('export clicked') }}
                                    onUploadClicked={showUploadModal}
                                    hasAddButton={true}
                                    hasExportButton={true}
                                    hasUploadButton={true}
                                />
                        }
                    </Space>
                </div>
            </div>
            <KTCardBody className='py-4 '>
                <div className='table-responsive'>                   
                    <Table
                        columns={columns}
                        scroll={isFileUploaded ? { x: 1300 } : {}}
                        loading={loading}
                    />
                </div>
            </KTCardBody>
        </div>
    )
};

export { FuelReciept }
