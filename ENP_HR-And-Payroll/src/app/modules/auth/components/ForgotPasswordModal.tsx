import { Button, Modal, message } from "antd"
import { useState } from "react"
import { useAuth } from "../core/Auth"
import { useForm } from "react-hook-form"
import { Api_Endpoint, fetchDocument } from "../../../services/ApiCalls"
import axios from "axios"
import { useParams } from "react-router-dom"

const ForgotPasswordModal = () => {
    const [loading, setLoading] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { register, reset, handleSubmit } = useForm()

      const showModal = () => {
        setIsModalOpen(true)
      }

      const handleCancel = () => {
        reset()
        setIsModalOpen(false)
      }

    const OnSUbmit = handleSubmit(async (values) => {
        setLoading(true)
        if(values.email){
            message.warning("Password and Confirm Password must be the same")
            return
        }

        try {
            const response = axios.patch(`${Api_Endpoint}/Users/RequestPassword`,
            [{
                "op": "replace",
                "path": "/password",
                "value": values.password
            }]
            , {
            headers: {
                'Content-Type': 'application/json-patch+json'
            }
            })

            message.success("A link has ")
            setLoading(false)
            setIsModalOpen(false)
            
        } catch (error) {
            message.error("Error changing password")
        }
      })

      
    return (

        <>
            <a onClick={showModal} className='menu-link px-5'>
                Forgot Password?
            </a>
        <Modal
            title="Request password reset"
            open={isModalOpen}
            onCancel={handleCancel}
            closable={true}
            footer={[
                <Button key='back' onClick={handleCancel}>
                Cancel
                </Button>,
                <Button
                key='submit'
                type='primary'
                htmlType='submit'
                onClick={OnSUbmit}
                >
                Submit
                </Button>,
            ]}
          >
            <form
              onSubmit={OnSUbmit}
            >
                <p>Enter your email to reset your password</p>
              <hr></hr>
              <div style={{ padding: "20px 20px 20px 20px" }} >
                <div className=' mb-7'>
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" {...register("email")} className="form-control form-control-solid" />
                </div>
              </div>
            </form>
          </Modal>
        </>
    )
}

export default ForgotPasswordModal