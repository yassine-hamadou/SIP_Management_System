import { Space } from "antd"
import { render } from "react-dom"

const AppraisalForm = () => {

    return (
        <div style={{
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '5px',
            boxShadow: '2px 2px 15px rgba(0,0,0,0.08)'
        }}>
            <div className="d-flex flex-column align-items-start">
                <div className=' fs-1 fw-bold mb-2 text-primary'>
                    Employee Name
                </div>
                <div 
                style={{
                    display: 'flex', flexDirection: 'column', flexWrap: 'wrap', borderRadius: '5px',
                    boxShadow: '2px 2px 15px rgba(0,0,0,0.08)', padding: '20px',
                }}>
                    <Space className="mb-3">
                        <div className='fs-2 fw-bold'>
                            STAFF ID :
                        </div>
                        <div className='fs-2 fw-bold'>
                            {``}
                        </div>
                    </Space>
                    <Space className="mb-3">
                        <div className='fs-3 fw-bold'>
                            DEPARTMENT :
                        </div>
                        <div className='fs-3 fw-bold'>
                            {``}
                        </div>
                    </Space>
                    <Space className="mb-3">
                        <div className='fs-3 fw-bold'>
                            LINE MANAGER :
                        </div>
                        <div className='fs-3 fw-bold'>
                            {``}
                        </div>
                    </Space>
                    <Space className="mb-3">
                        <div className='fs-3 fw-bold'>
                            STAFF ID :
                        </div>
                        <div className='fs-3 fw-bold'>
                            {``}
                        </div>
                    </Space>
                </div>

            </div>

        </div>
    )
}

export { AppraisalForm }