import { CollapseProps, Divider, Space, Table } from "antd"
import { render } from "react-dom"
import { AppraisalFormComponent } from "./AppraisalFormComponent"
import { useQuery } from "react-query"
import { fetchDocument } from "../../../services/ApiCalls"
import { useEffect, useState } from "react"

const AppraisalForm = () => {
    const [parametersData, setParametersData] = useState<any>([])
    const [objectivesData, setObjectivesData] = useState<any>([])
    const [parmObjectsData, setParmObjectsData] = useState<any>([])

    const tenantId = localStorage.getItem('tenant')
    const { data: parameters } = useQuery('parameters', () => fetchDocument(`parameters/tenant/${tenantId}`), { cacheTime: 5000 })
    const { data: appraisalobjective } = useQuery('appraisalobjective', () => fetchDocument(`appraisalobjective/tenant/${tenantId}`), { cacheTime: 5000 })
    const { data: appraisaldeliverable } = useQuery('appraisaldeliverable', () => fetchDocument(`appraisaldeliverable/tenant/${tenantId}`), { cacheTime: 5000 })

    const loadData = async () => {
        try {
            const objectivesResponse = appraisalobjective?.data
            const parametersResponse = parameters?.data?.filter((item: any) => item.appraisalId === 12)
            setParametersData(parametersResponse)
            setObjectivesData(objectivesResponse)
        } catch (error) {
            console.log('loadError: ', error)
        }
    }

    useEffect(() => {
        loadData()
    }, [parameters?.data, appraisalobjective?.data, appraisaldeliverable?.data])

    return (
        <div style={{
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '5px',
            boxShadow: '2px 2px 15px rgba(0,0,0,0.08)'
        }}>
            <div className="d-flex flex-column align-items-start mb-5">
                <div className=' fs-1 fw-bold mb-2 text-primary'>
                    Employee Name
                </div>
                <Divider className="mb-3 mt-0" />
                <div className='d-flex row-auto mb-3'>
                    <div className='col-4 me-5'>
                        <h5 style={{ color: "GrayText" }}>EmployeeId: <span style={{ color: "black" }}>{''}</span></h5>
                    </div>
                    <div className='col-4 me-5'>
                        <h5 style={{ color: "GrayText" }}>Department: <span style={{ color: "black" }}>{''}</span></h5>
                    </div>
                    <div className='col-4 me-5'>
                        <h5 style={{ color: "GrayText" }}>{`Line Manager`}: <span style={{ color: "black" }}>{''}</span></h5>
                    </div>
                </div>
            </div>
            {
                parametersData?.map((item: any) => (
                    <div className="align-items-start mt-7" >
                        <span className=' fs-3 fw-bold mb-5'>{item?.name}</span>
                        <AppraisalFormComponent parameterId={item.id} />
                    </div>
                ))
            }
        </div>
    )
}


const EmployyDummyData = [
    {
        id: 1,
        name: 'John Doe',
        department: 'IT',
        lineManager: 'Jane Doe',
        staffId: 'JD-001',
    },
]

const DeliverableDummyData = [
    {
        id: 1,
        objectiveId: 1,
        name: 'Deliverable 1',
        description: 'Initiate and close deals for 10 new revenue generating corporate clients',
        subWeight: '20%',
        unitOfMeasure: 'KPI',
        target: '100%',
    },
    {
        id: 2,
        objectiveId: 1,
        name: 'Deliverable 2',
        description: 'Achieve an annual revenue target of GHS2',
        subWeight: '20%',
        unitOfMeasure: 'KPI',
        target: '100%',
    },
]

const ObjectiveDummyData = [
    {
        id: 1,
        parentId: 1,
        name: 'Objective 1',
        description: 'Revenue Growth and Business Development',
    },
    {
        id: 2,
        parentId: 1,
        name: 'Objective 2',
        description: 'Strategy and direction',
    },
    {
        id: 3,
        parentId: 2,
        name: 'Objective 3',
        description: 'Customer Service',
    },
]

const ParameterDummyData = [
    {
        id: 1,
        name: 'Parameter 1',
    },
    {
        id: 2,
        name: 'Parameter 2',
    },
    {
        id: 3,
        name: 'Parameter 3',
    }
]

export { AppraisalForm, EmployyDummyData, DeliverableDummyData, ObjectiveDummyData, ParameterDummyData }