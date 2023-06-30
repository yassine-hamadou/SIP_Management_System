import { Divider, Space, Table } from "antd"
import { render } from "react-dom"
import { AppraisalFormComponent } from "./AppraisalFormComponent"

const AppraisalForm = () => {

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
            <AppraisalFormComponent appraisalId= {12} />
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