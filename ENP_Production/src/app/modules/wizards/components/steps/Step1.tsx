/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../../_metronic/helpers'
import {Field, ErrorMessage} from 'formik'

const Step1: FC = () => {

  const blankImg = toAbsoluteUrl('/media/svg/avatars/blank.svg')
  // const userAvatarImg = toAbsoluteUrl(`/media/${userForEdit.avatar}`)
  return (
    <div className='col-lg-12'>
      {/* <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder d-flex align-items-center text-dark'>
          Choose Account Type
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title='Billing is issued based on your selected account type'
          ></i>
        </h2>

        <div className='text-gray-400 fw-bold fs-6'>
          If you need more info, please check out
          <a href='/dashboard' className='link-primary fw-bolder'>
            {' '}
            Help Page
          </a>
          .
        </div>
      </div> */}
      <div className='fv-row mb-7'>
            {/* begin::Label */}
            {/* <label className='d-block fw-bold fs-6 mb-5'>Passport size picture</label> */}
            {/* end::Label */}

            {/* begin::Image input */}
            <div
              className='image-input image-input-outline'
              data-kt-image-input='true'
              style={{backgroundImage: `url('${blankImg}')`}}
            >
              {/* begin::Preview existing avatar */}
              <div
                className='image-input-wrapper w-125px h-125px'
                style={{backgroundImage: `url('${blankImg}')`}}
              ></div>
              {/* end::Preview existing avatar */}

              {/* begin::Label */}
              <label
              className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
              data-kt-image-input-action='change'
              data-bs-toggle='tooltip'
              title='Change avatar'
            >
              <i className='bi bi-pencil-fill fs-7'></i>

              <input type='file' name='avatar' accept='.png, .jpg, .jpeg' />
              {/* <input type='hidden' name='avatar_remove' /> */}
            </label>
              {/* end::Label */}

              {/* begin::Cancel */}
              {/* <span
              className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
              data-kt-image-input-action='cancel'
              data-bs-toggle='tooltip'
              title='Cancel avatar'
            >
              <i className='bi bi-x fs-2'></i>
            </span> */}
              {/* end::Cancel */}

              {/* begin::Remove */}
              {/* <span
              className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
              data-kt-image-input-action='remove'
              data-bs-toggle='tooltip'
              title='Remove avatar'
            >
              <i className='bi bi-x fs-2'></i>
            </span> */}
              {/* end::Remove */}
            </div>
            {/* end::Image input */}

            {/* begin::Hint */}
            <label className='d-block fw-bold fs-6 '>Passport size picture</label>

            <div className='form-text mb-15'>Allowed file types: png, jpg, jpeg.</div>
            {/* end::Hint */}
          </div>

      <div className='fv-row'>
        <div className='row'>
          <div className='fv-row mb-10 col-lg-6'>
            <label className='form-label required'>Code</label>

            <Field name='code' className='form-control form-control-lg form-control-solid' />
            <div className='text-danger mt-2'>
              <ErrorMessage name='code' />
            </div>
          </div>
          <div className='fv-row mb-10 col-lg-6'>
            <label className='form-label required'>First Name</label>

            <Field name='firstName' className='form-control form-control-lg form-control-solid' />
            <div className='text-danger mt-2'>
              <ErrorMessage name='firstName' />
            </div>
          </div>
          <div className='fv-row mb-10 col-lg-6'>
            <label className='form-label required'>Middle Name</label>

            <Field name='middleName' className='form-control form-control-lg form-control-solid' />
            <div className='text-danger mt-2'>
              <ErrorMessage name='middleName' />
            </div>
          </div>
          <div className='fv-row mb-10 col-lg-6'>
            <label className='form-label required'>Last Name</label>

            <Field name='lastName' className='form-control form-control-lg form-control-solid '/>
            <div className='text-danger mt-2'>
              <ErrorMessage name='lastName' />
            </div>
          </div>
          <div className='fv-row mb-10 col-lg-6'>
            <label className='form-label'>Date Of Birth</label>

            <Field name='dob' className='form-control form-control-lg form-control-solid' />
            <div className='text-danger mt-2'>
              <ErrorMessage name='dob' />
            </div>
          </div>

          <div className='fv-row mb-10 col-lg-6'>
            <label className='form-label required'>Marital Status</label>

            <Field
              as='select'
              name='maritalStatus'
              className='form-select form-select-lg form-select-solid'
            >
              <option></option>
              <option value='1'>Single</option>
              <option value='2'>Married</option>
              
              
            </Field>
            <div className='text-danger mt-2'>
              <ErrorMessage name='maritalStatus' />
            </div>
          </div>
          <div className='fv-row mb-10 col-lg-6'>
            <label className='form-label required'>Sex</label>

            <Field
              as='select'
              name='sex'
              className='form-select form-select-lg form-select-solid'
            >
              <option></option>
              <option value='1'>Male</option>
              <option value='2'>Female</option>
            </Field>
            <div className='text-danger mt-2'>
              <ErrorMessage name='sex' />
            </div>
          </div>
          <div className='fv-row mb-10 col-lg-6'>
            <label className='form-label required'>Nationality</label>

            <Field
              as='select'
              name='nationality'
              className='form-select form-select-lg form-select-solid'
            >
              <option></option>
              <option value='1'>Ghanaian</option>
              <option value='2'>Nigerian</option>
            </Field>
            <div className='text-danger mt-2'>
              <ErrorMessage name='nationality' />
            </div>
          </div>
          {/* <div className='col-lg-6'>
            <Field
              type='radio'
              className='btn-check'
              name='accountType'
              value='personal'
              id='kt_create_account_form_account_type_personal'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10'
              htmlFor='kt_create_account_form_account_type_personal'
            >
              <KTSVG
                path='/media/icons/duotune/communication/com005.svg'
                className='svg-icon-3x me-5'
              />

              <span className='d-block fw-bold text-start'>
                <span className='text-dark fw-bolder d-block fs-4 mb-2'>Personal Account</span>
                <span className='text-gray-400 fw-bold fs-6'>
                  If you need more info, please check it out
                </span>
              </span>
            </label>
          </div> */}
          
          {/* <div className='col-lg-6'>
            <Field
              type='radio'
              className='btn-check'
              name='accountType'
              value='corporate'
              id='kt_create_account_form_account_type_corporate'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'
              htmlFor='kt_create_account_form_account_type_corporate'
            >
              <KTSVG path='/media/icons/duotune/finance/fin006.svg' className='svg-icon-3x me-5' />

              <span className='d-block fw-bold text-start'>
                <span className='text-dark fw-bolder d-block fs-4 mb-2'>Corporate Account</span>
                <span className='text-gray-400 fw-bold fs-6'>
                  Create corporate account to mane users
                </span>
              </span>
            </label>
          </div> */}

          <div className='text-danger mt-2'>
            <ErrorMessage name='accountType' />
          </div>
        </div>
      </div>
    </div>
  )
}

export {Step1}
