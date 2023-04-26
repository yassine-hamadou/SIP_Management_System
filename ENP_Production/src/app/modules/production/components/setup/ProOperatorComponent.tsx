import { Button, Input, Space, Table } from 'antd'
import { useEffect, useState } from 'react'
import { KTCardBody } from '../../../../../_metronic/helpers'
import { fetchDocument } from '../../urls'
import { PageActionButtons } from '../CommonComponents'


const OperatorComponent = (props: any) => {
    const [gridData, setGridData] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchText, setSearchText] = useState('')
    let [filteredData] = useState([])

    const columns: any = [

        {
            title: 'Employee Code',
            dataIndex: 'emplCode',
            sorter: (a: any, b: any) => {
                if (a.emplCode > b.emplCode) {
                    return 1
                }
                if (b.emplCode > a.emplCode) {
                    return -1
                }
                return 0
            },
        },

        {
            title: 'Employee Name',
            dataIndex: 'emplName',
            sorter: (a: any, b: any) => a.emplName - b.emplName,
        },
    ]

    const loadData = async () => {
        setLoading(true)
        try {
            const response = await fetchDocument(props.data.url)

            setGridData(response.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadData()
    }, [])

    const dataWithIndex = gridData.map((item: any, index) => ({
        ...item,
        key: index,
    }))

    const handleInputChange = (e: any) => {
        setSearchText(e.target.value)
        if (e.target.value === '') {
            loadData()
        }
    }

    const globalSearch = () => {
        // @ts-ignore
        filteredData = dataWithVehicleNum.filter((value) => {
            return (
                value.emplCode.toLowerCase().includes(searchText.toLowerCase()) ||
                value.emplName.toLowerCase().includes(searchText.toLowerCase())
            )
        })
        setGridData(filteredData)
    }

    return (
        <div
            style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '5px',
                boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
            }}
        >
            <KTCardBody className='py-4 '>
                <div className='table-responsive'>
                    <div className='d-flex justify-content-between'>
                        <Space style={{ marginBottom: 16 }}>
                            <Input
                                placeholder='Enter Search Text'
                                onChange={handleInputChange}
                                type='text'
                                allowClear
                                value={searchText} size='large'
                            />
                            <Button type='primary' onClick={globalSearch} size='large'>
                                Search
                            </Button>
                        </Space>
                        <Space style={{ marginBottom: 16 }}>
                        <PageActionButtons
                                onExportClicked={() => { console.log('export clicked') }}
                                hasExportButton={true}
                            />
                        </Space>
                    </div>
                    <Table columns={columns} dataSource={dataWithIndex} bordered loading={loading} />
                </div>
            </KTCardBody>
        </div>
    )
}

export { OperatorComponent }

