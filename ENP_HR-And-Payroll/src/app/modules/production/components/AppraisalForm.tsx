import { Space, Table } from "antd"
import { render } from "react-dom"

const AppraisalForm = () => {

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
                <div
                    style={{
                        display: 'flex', flexDirection: 'column', flexWrap: 'wrap', borderRadius: '5px',
                        boxShadow: '2px 2px 15px rgba(0,0,0,0.08)', padding: '20px',
                    }}>
                    <Space className="mb-3">
                        <div className='form-label fs-4'>
                            STAFF ID :
                        </div>
                        <div className='form-label fs-4'>
                            {``}
                        </div>
                    </Space>
                    <Space className="mb-3">
                        <div className='form-label fs-4'>
                            DEPARTMENT :
                        </div>
                        <div className='form-label fs-4'>
                            {``}
                        </div>
                    </Space>
                    <Space className="mb-3">
                        <div className='form-label fs-4'>
                            LINE MANAGER :
                        </div>
                        <div className='form-label fs-4'>
                            {``}
                        </div>
                    </Space>

                </div>

            </div>
            <div className="d-flex flex-column align-items-start mt-7 col-12" >
                <span className=' fs-3 fw-bold mb-5'>Title of parameter</span>
                <div className="col-12" style={{
                   borderRadius: '5px',
                   padding: '20px',
                   border: '1px solid #ebedf2',
                }}>
                    <Space className="mb-5">
                        <span className='fs-3 fw-bold mb-2'>{`{Objective}`}</span>
                        <div className="bullet"></div>
                        <span className=' fs-3 fw-bold mb-2 text-primary'>{`{Description}`}</span>
                    </Space>
                    <Table columns={deliverableColumns} dataSource={[]} />
                </div>
            </div>
        </div>
    )
}

export { AppraisalForm }

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