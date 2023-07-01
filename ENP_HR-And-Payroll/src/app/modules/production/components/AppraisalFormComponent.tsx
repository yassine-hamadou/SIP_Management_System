import { App, Collapse, CollapseProps, Divider, Space, Table } from "antd"
import { render } from "react-dom"
import { useQuery } from "react-query"
import { fetchDocument } from "../../../services/ApiCalls"
import { useEffect, useState } from "react"
import { set } from "react-hook-form"
import { param } from "jquery"

const AppraisalFormComponent = ({ parameterId }: any) => {

    const [parametersData, setParametersData] = useState<any>([])
    const [objectivesData, setObjectivesData] = useState<any>([])
    const [parmObjectsData, setParmObjectsData] = useState<any>([])
    const [collapseitems, setCollapseitems] = useState<CollapseProps['items']>([])
    const [itemsData, setItemsData] = useState<CollapseProps['items']>([])

    const tenantId = localStorage.getItem('tenant')
    const { data: parameters } = useQuery('parameters', () => fetchDocument(`parameters/tenant/${tenantId}`), { cacheTime: 5000 })
    const { data: appraisalobjective } = useQuery('appraisalobjective', () => fetchDocument(`appraisalobjective/tenant/${tenantId}`), { cacheTime: 5000 })
    const { data: appraisaldeliverable } = useQuery('appraisaldeliverable', () => fetchDocument(`appraisaldeliverable/tenant/${tenantId}`), { cacheTime: 5000 })

    const onChange = (key: string | string[]) => {
        console.log(key);
    };


    const loadData = async () => {
        try {
            const objectivesResponse = appraisalobjective?.data.filter((item: any) => item.parameterId === parameterId)
            setObjectivesData(objectivesResponse)

            const itemData = objectivesResponse?.map((item: any) => ({
                key: item?.id,
                label: item?.name,
                children: <AppraisalFormDeliverableComponent appraisalObjectivesData={item} />
            }
            ))
            setItemsData(itemData)
            console.log('itemsData', itemData)

        } catch (error) {
            console.log('loadError: ', error)
        }
    }

    useEffect(() => {
        loadData()

    }, [parameters?.data, appraisalobjective?.data, appraisaldeliverable?.data])

    return (
        <div >
            <Collapse size="large" defaultActiveKey={['1']} 
                items={itemsData} onChange={onChange} />
        </div>
    )
}

const AppraisalFormObjectiveComponent = ({ appraisalParameterData }: any) => {

    const [objectivesData, setObjectivesData] = useState<any>([])
    const tenantId = localStorage.getItem('tenant')

    const { data: appraisalobjective } = useQuery('appraisalobjective', () => fetchDocument(`appraisalobjective/tenant/${tenantId}`), { cacheTime: 5000 })
    const { data: appraisaldeliverable } = useQuery('appraisaldeliverable', () => fetchDocument(`appraisaldeliverable/tenant/${tenantId}`), { cacheTime: 5000 })

    const loadData = async () => {
        try {
            const objectivesResponse = appraisalobjective?.data?.filter((item: any) => item.objectiveId === appraisalParameterData.id)
            setObjectivesData(objectivesResponse)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadData()
    })

    return (
        <div>
            {
                objectivesData?.map((item: any) => (
                    <AppraisalFormDeliverableComponent appraisalObjectivesData={item} />
                ))
            }
        </div>
    )
}

const AppraisalFormDeliverableComponent = ({ appraisalObjectivesData }: any) => {

    const [deliverablesData, setDeliverablesData] = useState<any>([])

    const tenantId = localStorage.getItem('tenant')

    const { data: appraisalobjective } = useQuery('appraisalobjective', () => fetchDocument(`appraisalobjective/tenant/${tenantId}`), { cacheTime: 5000 })
    const { data: appraisaldeliverable } = useQuery('appraisaldeliverable', () => fetchDocument(`appraisaldeliverable/tenant/${tenantId}`), { cacheTime: 5000 })

    const loadData = async () => {
        try {
            const deliverablesResponse = appraisaldeliverable?.data?.filter((item: any) => item.objectiveId === appraisalObjectivesData.id)
            setDeliverablesData(deliverablesResponse)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadData()
    })


    const deliverableColumns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Description',
            dataIndex: 'description',
        },
        {
            title: 'Sub weight',
            dataIndex: 'subWeight',
        },
        {
            title: 'Unit of measure',
            dataIndex: 'unitOfMeasure',
        },
        {
            title: 'Target',
            dataIndex: 'target',
        },
        {
            title: 'Actual',
            width: 200,
            render: (text: any, record: any) => (
                <div className="d-flex align-items-center">
                    <input type="number" className="form-control" placeholder="Enter actual here" />
                </div>
            )
        },
    ]

    return (
        <div className="d-flex flex-column align-items-start mt-7 col-12" >
            <div className="col-12">
                <Space className="mb-5">
                    <span className='fs-3 fw-bold mb-2'>{appraisalObjectivesData?.name}</span>
                    <div className="bullet"></div>
                    <span className=' fs-3 fw-bold mb-2 text-primary'>{appraisalObjectivesData?.description}</span>
                </Space>
                <Table columns={deliverableColumns} dataSource={deliverablesData} />
            </div>
        </div>
    )
}





export { AppraisalFormComponent, AppraisalFormObjectiveComponent, AppraisalFormDeliverableComponent }