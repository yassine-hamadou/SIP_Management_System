import { Divider } from "antd"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { fetchDocument } from "../../../../services/ApiCalls"
import { AppraisalFormComponent } from "./AppraisalFormComponent"

const AppraisalForm = () => {
    const [parametersData, setParametersData] = useState<any>([])


    const tenantId = localStorage.getItem('tenant')
    const { data: parameters } = useQuery('parameters', () => fetchDocument(`parameters/tenant/test`), { cacheTime: 5000 })
    const { data: appraisalobjective } = useQuery('appraisalobjective', () => fetchDocument(`appraisalobjective/tenant/test`), { cacheTime: 5000 })
    const { data: appraisaldeliverable } = useQuery('appraisaldeliverable', () => fetchDocument(`appraisaldeliverable/tenant/test`), { cacheTime: 5000 })

    const loadData = async () => {
        try {
            const parametersResponse = parameters?.data?.filter((item: any) => item.appraisalId === 12)
            setParametersData(parametersResponse)
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
            boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
            margin: '40px'
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
            <div className='d-flex align-items-end justify-content-end align-content-end' >
                <button type='button' className='btn btn-primary me-3 mt-7' onClick={() => { }}>
                    Submit
                </button>
            </div>

        </div>
    )
}


export { AppraisalForm }
