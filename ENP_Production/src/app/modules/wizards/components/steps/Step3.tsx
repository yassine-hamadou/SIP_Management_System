import React, {FC} from 'react'
import {Field, ErrorMessage} from 'formik'
import { KTSVG } from '../../../../../_metronic/helpers'

const Step3: FC = () => {
  return (
    <div className='w-100'>
      {/* <div className='pb-10 pb-lg-12'>
        <h2 className='fw-bolder text-dark'>Business Details</h2>

        <div className='text-gray-400 fw-bold fs-6'>
          If you need more info, please check out
          <a href='/dashboard' className='link-primary fw-bolder'>
            {' '}
            Help Page
          </a>
          .
        </div>
      </div> */}
      <div className='fv-row'>
        <div className='row'>
          <div className='fv-row mb-10 col-6'>
            <label className='form-label required'>Pay Group</label>

            <Field
              as='select'
              name='businessType'
              className='form-select form-select-lg form-select-solid'
            >
              <option></option>
              
              <option value='1'>Corporation</option>
              <option value='2'>Sole Proprietorship</option>
              <option value='3'>Non-profit</option>
              <option value='4'>Limited Liability</option>
              <option value='5'>General Partnership</option>
            </Field>
            <div className='text-danger mt-2'>
              <ErrorMessage name='businessType' />
            </div>
          </div>
          <div className='fv-row mb-10 col-6'>
            <label className='form-label required'>Notch</label>

            <Field
              as='select'
              name='businessType'
              className='form-select form-select-lg form-select-solid'
            >
              <option></option>
              
              <option value='3'>C Corporation</option>
              <option value='2'>Sole Proprietorship</option>
              <option value='1'>Non-profit</option>
              <option value='4'>Limited Liability</option>
              <option value='5'>General Partnership</option>
            </Field>
            <div className='text-danger mt-2'>
              <ErrorMessage name='businessType' />
            </div>
          </div>
          <div className='fv-row mb-10 col-6'>
            <label className='form-label required'>Salary Grade</label>

            <Field
              as='select'
              name='businessType'
              className='form-select form-select-lg form-select-solid'
            >
              <option></option>
            
              <option value='2'>C Corporation</option>
              <option value='1'>Sole Proprietorship</option>
              <option value='3'>Non-profit</option>
              <option value='4'>Limited Liability</option>
              <option value='5'>General Partnership</option>
            </Field>
            <div className='text-danger mt-2'>
              <ErrorMessage name='businessType' />
            </div>
          </div>
          <div className='fv-row mb-10 col-lg-6'>
            <label className='form-label required'>Basic Salary</label>

            <Field name='basicSalary' className='form-control form-control-lg form-control-solid' />
            <div className='text-danger mt-2'>
              <ErrorMessage name='basicSalary' />
            </div>
          </div>
          <div className='fv-row mb-10 col-6'>
            <label className='form-label required'>Category</label>

            <Field
              as='select'
              name='businessType'
              className='form-select form-select-lg form-select-solid'
            >
              <option></option>
              <option value='2'>Management</option>
              <option value='1'>Call & Support</option>
              <option value='3'>Senior Staff</option>
              <option value='4'>Junior Staff</option>
              
            </Field>
            <div className='text-danger mt-2'>
              <ErrorMessage name='businessType' />
            </div>
          </div>
          <div className='fv-row mb-10 col-6'>
            <label className='form-label required'>Department</label>

            <Field
              as='select'
              name='businessType'
              className='form-select form-select-lg form-select-solid'
            >
              <option></option>
              <option value='1'>Management</option>
              <option value='2'>Call & Support</option>
              <option value='3'>Senior Staff</option>
              <option value='4'>Junior Staff</option>
              
            </Field>
            <div className='text-danger mt-2'>
              <ErrorMessage name='businessType' />
            </div>
          </div>
          <div className='fv-row mb-10 col-6'>
            <label className='form-label required'>Region</label>

            <Field
              as='select'
              name='businessType'
              className='form-select form-select-lg form-select-solid'
            >
              <option></option>
              <option value='1'>Greater Accra</option>
              <option value='1'>Eastern</option>
              <option value='2'>Bono East</option>
              <option value='3'>Northern</option>
              <option value='4'>Central</option>
              <option value='5'>Volta</option>
            </Field>
            <div className='text-danger mt-2'>
              <ErrorMessage name='businessType' />
            </div>
          </div>
          <div className='fv-row mb-10 col-lg-6'>
            <label className='form-label required'>Employment Date</label>

            <Field name='basicSalary' className='form-control form-control-lg form-control-solid' />
            <div className='text-danger mt-2'>
              <ErrorMessage name='basicSalary' />
            </div>
          </div>
          <div className='fv-row mb-10 col-lg-6'>
            <label className='form-label required'>Termination Date</label>

            <Field name='basicSalary' className='form-control form-control-lg form-control-solid' />
            <div className='text-danger mt-2'>
              <ErrorMessage name='basicSalary' />
            </div>
          </div>
          <div className='mr-2 mt-8 col-6'>
            <button
          
              type='button'
              className='btn btn-lg btn-light-primary me-3'
              data-kt-stepper-action='previous'
            >
              <KTSVG
                path='/media/icons/duotune/arrows/arr063.svg'
                className='svg-icon-4 me-1'
              />
              Terminate
            </button>
          </div>
        </div>
      </div>
      {/* <div className='fv-row mb-10 col-lg-6'>
        <label className='form-label required'>Business Name</label>

        <Field name='businessName' className='form-control form-control-lg form-control-solid' />
        <div className='text-danger mt-2'>
          <ErrorMessage name='businessName' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='d-flex align-items-center form-label'>
          <span className='required'>Shortened Descriptor</span>
        </label>

        <Field
          name='businessDescriptor'
          className='form-control form-control-lg form-control-solid'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='businessDescriptor' />
        </div>

        <div className='form-text'>
          Customers will see this shortened version of your statement descriptor
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label required'>Corporation Type</label>

        <Field
          as='select'
          name='businessType'
          className='form-select form-select-lg form-select-solid'
        >
          <option></option>
          <option value='1'>S Corporation</option>
          <option value='1'>C Corporation</option>
          <option value='2'>Sole Proprietorship</option>
          <option value='3'>Non-profit</option>
          <option value='4'>Limited Liability</option>
          <option value='5'>General Partnership</option>
        </Field>
        <div className='text-danger mt-2'>
          <ErrorMessage name='businessType' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label'>Business Description</label>

        <Field
          as='textarea'
          name='businessDescription'
          className='form-control form-control-lg form-control-solid'
          rows={3}
        ></Field>
      </div>

      <div className='fv-row mb-0'>
        <label className='fs-6 fw-bold form-label required'>Contact Email</label>

        <Field name='businessEmail' className='form-control form-control-lg form-control-solid' />
        <div className='text-danger mt-2'>
          <ErrorMessage name='businessEmail' />
        </div> */}
      {/* </div> */}
    </div>
  )
}

export {Step3}
