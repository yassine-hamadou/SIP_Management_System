import React, {useState} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import {requestPassword} from '../core/_requests'
import { useForm } from 'react-hook-form'
import { Api_Endpoint } from '../../../services/ApiCalls'
import axios from 'axios'
import { message } from 'antd'


export function RequestPassword() {
    const [loading, setLoading] = useState(false)
    const tenantId = localStorage.getItem('tenant')
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
        if(values.password !== values.confirmPassword){
            message.warning("Password and Confirm Password must be the same")
            return
        }

        try {
            const response = axios.patch(`${Api_Endpoint}/Users/PasswordRe`,
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

        <form
            onSubmit={OnSUbmit}
        >
            <p><span style={{fontWeight:"bold"}}>Recommended: </span>Your new password should include <br/>(Uppercase, LowerCase, Numbers and Symbols)</p>
            <hr></hr>
            <div style={{ padding: "20px 20px 20px 20px" }} >
            <div className=' mb-7'>
                <label htmlFor="password" className="form-label">New Password</label>
                <input type="password" {...register("password")} className="form-control form-control-solid" />
            </div>
            <div className=' mb-7'>
                <label htmlFor="confirm-password" className="form-label">Confirm Password </label>
                <input type="password" {...register("confirmPassword")} className="form-control form-control-solid" />
            </div>
            </div>
        </form>
      
    </>
  )
}
