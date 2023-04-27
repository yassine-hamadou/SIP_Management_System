/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { getUserByToken, login, parseJwt } from '../core/_requests'
import { useAuth } from '../core/Auth'
import { useQuery } from 'react-query'
import { fetchCompanies } from '../../../services/ApiCalls'

const loginSchema = Yup.object().shape({
  username: Yup.string()
    // .email('Wrong username')
    .min(3, 'Minimum 5 characters')
    .max(50, 'Maximum 50 characters')
    .required('Username is required'),
  password: Yup.string()
    .min(3, 'Minimum 6 characters')
    .max(50, 'Maximum 50 characters')
    .required('Password is required'),
  tenantId: Yup.string().required('Company is required'),
})

const initialValues = {
  username: '',
  password: '',
  tenantId: '',
}

/*
  Formik+YUP+Typescript:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
  https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e
*/

export function Login() {
  const [loading, setLoading] = useState(false)
  const { saveAuth, setCurrentUser } = useAuth()
  const [selectedCompany, setSelectedCompany] = useState('')

  const tenantId = localStorage.getItem('tenant')
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true)
      try {
        const { data: auth } = await login(values.username, values.password)
        saveAuth(auth)

        //this gets the jwtToken of the login user!
        const token:any = localStorage.getItem("accessToken")
        
        // const {data: user} = await getUserByToken(auth.jwtToken)
        // setCurrentUser(auth.jwtToken)

         //this goes to decode the token and return the user details!
         parseJwt(token)
        
         //now I have to assign the !
         const cuUser:any =  parseJwt(token)
        setCurrentUser(cuUser)
        console.log('selected company: ', selectedCompany)
      } catch (error) {
        console.error(error)
        setStatus('The login detail is incorrect')
        setSubmitting(false)
        setLoading(false)
      }
    },
  })

localStorage.setItem('tenant', formik.values.tenantId)
const { data: allCompanies } = useQuery('companies', fetchCompanies, { cacheTime: 5000 })
  return (
    <form
      className='form w-100'
      onSubmit={formik.handleSubmit}
      noValidate
      id='kt_login_signin_form'
    >
      {formik.status ?
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>{formik.status}</div>
        </div>
        : null}
      <div className='fv-row mb-10'>
        <label className='form-label fs-6 fw-bolder text-dark'>Username</label>
        <input
          placeholder='Username'
          {...formik.getFieldProps('username')}
          className={clsx(
            'form-control form-control-lg form-control-solid',
            { 'is-invalid': formik.touched.username && formik.errors.username },
            {
              'is-valid': formik.touched.username && !formik.errors.username,
            }
          )}
          type='text'
          name='username'
          autoComplete='off'
        />
        {formik.touched.username && formik.errors.username && (
          <div className='fv-plugins-message-container'>
            <span role='alert'>{formik.errors.username}</span>
          </div>
        )}
      </div>
      <div className='fv-row mb-10'>
        <div className='d-flex justify-content-between mt-n5'>
          <div className='d-flex flex-stack mb-2'>
            <label className='form-label fw-bolder text-dark fs-6 mb-0'>Password</label>
          </div>
        </div>
        <input
          type='password'
          autoComplete='off'
          {...formik.getFieldProps('password')}
          className={clsx(
            'form-control form-control-lg form-control-solid',
            {
              'is-invalid': formik.touched.password && formik.errors.password,
            },
            {
              'is-valid': formik.touched.password && !formik.errors.password,
            }
          )}
        />
        {formik.touched.password && formik.errors.password && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.password}</span>
            </div>
          </div>
        )}
      </div>
      <div className='fv-row mb-10'>
        <div className='mb-10'>
          <label className='form-label fw-bold'>Company:  {tenantId}</label>
          <div>
            <select
              className='form-select form-select-solid'
              data-kt-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              {...formik.getFieldProps('tenantId')}
            >

              {
                formik.values.username === '' || formik.values.password === '' ?
                  '' : 
                  <>
                    <option >Select Company</option>
                    {
                      allCompanies?.data.map((item:any)=>(
                        <option value={item.name.toLowerCase()}>{item.description}</option>
                      ))
                    }
                  </>
              }
            </select>
          </div>
          {formik.touched.tenantId && formik.errors.tenantId && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                <span role='alert'>{formik.errors.tenantId}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='text-center'>
        <button
          type='submit'
          id='kt_sign_in_submit'
          className='btn btn-lg btn-primary w-100 mb-5'
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {!loading && <span className='indicator-label'>Continue</span>}
          {loading && (
            <span className='indicator-progress' style={{ display: 'block' }}>
              Please wait...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>
      </div>
    </form>
  )
}
