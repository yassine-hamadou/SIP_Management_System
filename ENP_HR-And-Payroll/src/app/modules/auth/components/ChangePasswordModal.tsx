import { Button, Modal, message } from "antd"
import { useState } from "react"
import { useAuth } from "../core/Auth"
import { useForm } from "react-hook-form"
import { useQuery } from "react-query"
import { Api_Endpoint, fetchDocument } from "../../../services/ApiCalls"
import axios from "axios"

const ChangePasswordModal = () => {
    const [loading, setLoading] = useState(false)
    const tenantId = localStorage.getItem('tenant')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { register, reset, handleSubmit } = useForm()


    const { data: allUsers } = useQuery('users', ()=>fetchDocument("Users"), { cacheTime: 5000 })

    const handleChange = (e:any) => {
        // e.target.value 
      }
      const showModal = () => {
        setIsModalOpen(true)
      }

      const handleCancel = () => {
        reset()
        setIsModalOpen(false)
      }

    const OnSUbmit = handleSubmit(async (values) => {
        setLoading(true)

        // get the user from the users collection
        const user = allUsers?.data.find((item:any )=> item.username === values.username)

        // if the user is not found
        if(!user){
            message.warning(`User  ${values.username} does not  exist`)
            return
        }

        if(values.password !== values.confirmPassword){
            message.warning("Password and Confirm Password must be the same")
            return
        }

        try {
            const response = axios.patch(`${Api_Endpoint}/Users/${user?.id}`,
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

            message.success("Password changed successfully")
            setLoading(false)
            setIsModalOpen(false)
            
        } catch (error) {
            message.error("Error changing password")
        }
      })
    return (

        <>
            <a className='btn btn-light-primary btn-sm' onClick={showModal}>Forgot password?</a>
        <Modal
            title="Change Password"
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
                // loading={submitLoading}
                onClick={OnSUbmit}
                >
                Submit
                </Button>,
            ]}
          >
            <form
              onSubmit={OnSUbmit}
            >
              <hr></hr>
              <div style={{ padding: "20px 20px 20px 20px" }} >
                <div className=' mb-7'>
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" {...register("username")} onChange={handleChange} className="form-control form-control-solid" />
                </div>
                <div className=' mb-7'>
                  <label htmlFor="password" className="form-label">Old Password</label>
                  <input type="password" {...register("password")} onChange={handleChange} className="form-control form-control-solid" />
                </div>
                <div className=' mb-7'>
                  <label htmlFor="password" className="form-label">New Password</label>
                  <input type="password" {...register("password")} onChange={handleChange} className="form-control form-control-solid" />
                </div>
                <div className=' mb-7'>
                  <label htmlFor="confirm-password" className="form-label">Confirm Password </label>
                  <input type="password" {...register("confirmPassword")} onChange={handleChange} className="form-control form-control-solid" />
                </div>
              </div>
            </form>
          </Modal>
        </>
    )
}

export default ChangePasswordModal