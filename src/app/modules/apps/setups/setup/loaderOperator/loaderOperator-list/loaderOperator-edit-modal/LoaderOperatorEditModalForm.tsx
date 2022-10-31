import {FC, useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {isNotEmpty, toAbsoluteUrl} from '../../../../../../../../_metronic/helpers'
import {initialLoaderOperator, LoaderOperator} from '../core/_models'
import clsx from 'clsx'
import {useListView} from '../core/ListViewProvider'
import {LoaderOperatorListLoading} from '../components/loading/LoaderOperatorListLoading'
import {createLoaderOperator, updateLoaderOperator} from '../core/_requests'
import {useQueryResponse} from '../core/QueryResponseProvider'

type Props = {
  isLoaderOperatorLoading: boolean
  loaderOperator: LoaderOperator
}

const editLoaderOperatorSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  name: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Name is required'),
})

const LoaderOperatorEditModalForm: FC<Props> = ({loaderOperator, isLoaderOperatorLoading}) => {
  const {setItemIdForUpdate} = useListView()
  const {refetch} = useQueryResponse()

  const [bankForEdit] = useState<LoaderOperator>({
    ...loaderOperator,
    // avatar: bank.avatar || initialBank.avatar,
    // role: LoaderOperator.role || initialLoaderOperator.role,
    // position: LoaderOperator.position || initialLoaderOperator.position,
    name: loaderOperator.name || initialLoaderOperator.name,
    code: loaderOperator.code || initialLoaderOperator.code,
  })

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch()
    }
    setItemIdForUpdate(undefined)
  }

  const formik = useFormik({
    initialValues: bankForEdit,
    validationSchema: editLoaderOperatorSchema,
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true)
      try {
        if (isNotEmpty(values.id)) {
          await updateLoaderOperator(values)
        } else {
          await createLoaderOperator(values)
        }
      } catch (ex) {
        console.error(ex)
      } finally {
        setSubmitting(true)
        cancel(true)
      }
    },
  })

  return (
    <>
      <form id='kt_modal_add_bank_form' className='form' onSubmit={formik.handleSubmit} noValidate>
        {/* begin::Scroll */}
        <div
          className='d-flex flex-column scroll-y me-n7 pe-7'
          id='kt_modal_add_user_scroll'
          data-kt-scroll='true'
          data-kt-scroll-activate='{default: false, lg: true}'
          data-kt-scroll-max-height='auto'
          data-kt-scroll-dependencies='#kt_modal_add_user_header'
          data-kt-scroll-wrappers='#kt_modal_add_user_scroll'
          data-kt-scroll-offset='300px'
        >
          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            {/* <label className='d-block fw-bold fs-6 mb-5'>Avatar</label> */}
            {/* end::Label */}

            {/* begin::Image input */}
            {/* <div
              className='image-input image-input-outline'
              data-kt-image-input='true'
              style={{backgroundImage: `url('${blankImg}')`}}
            > */}
              {/* begin::Preview existing avatar */}
              {/* <div
                className='image-input-wrapper w-125px h-125px'
                style={{backgroundImage: `url('${bankAvatarImg}')`}}
              ></div> */}
              {/* end::Preview existing avatar */}

              {/* begin::Label */}
              {/* <label
              className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
              data-kt-image-input-action='change'
              data-bs-toggle='tooltip'
              title='Change avatar'
            >
              <i className='bi bi-pencil-fill fs-7'></i>

              <input type='file' name='avatar' accept='.png, .jpg, .jpeg' />
              <input type='hidden' name='avatar_remove' />
            </label> */}
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
            {/* </div> */}
            {/* end::Image input */}

            {/* begin::Hint */}
            {/* <div className='form-text'>Allowed file types: png, jpg, jpeg.</div> */}
            {/* end::Hint */}
          </div>
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Code</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              placeholder='code'
              {...formik.getFieldProps('code')}
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.code && formik.errors.code},
                {
                  'is-valid': formik.touched.code && !formik.errors.code,
                }
              )}
              type='Email'
              name='code'
              autoComplete='off'
              disabled={formik.isSubmitting || isLoaderOperatorLoading}
            />
            {/* end::Input */}
            {formik.touched.code && formik.errors.code && (
              <div className='fv-plugins-message-container'>
                <span role='alert'>{formik.errors.code}</span>
              </div>
            )}
          </div>
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Name</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              placeholder='name'
              {...formik.getFieldProps('name')}
              type='text'
              name='name'
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.name && formik.errors.name},
                {
                  'is-valid': formik.touched.name && !formik.errors.name,
                }
              )}
              autoComplete='off'
              disabled={formik.isSubmitting || isLoaderOperatorLoading}
            />
            {formik.touched.name && formik.errors.name && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.name}</span>
                </div>
              </div>
            )}
            {/* end::Input */}
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Status</label>
            {/* end::Label */}

            {/* begin::Input */}
            <select name="code" id="cars" className={clsx(
               'form-control form-control-solid mb-3 mb-lg-0',
               {'is-invalid': formik.touched.status && formik.errors.status},
               {
                 'is-valid': formik.touched.status && !formik.errors.status,
               }
             )}>
             <option value="active">Active</option>
             <option value="inactive">Inactive</option>
             
           </select>
            {/* end::Input */}
            {formik.touched.code && formik.errors.code && (
              <div className='fv-plugins-message-container'>
                <span role='alert'>{formik.errors.status}</span>
              </div>
            )}
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          {/* <div className='mb-7'> */}
            {/* begin::Label */}
            {/* <label className='required fw-bold fs-6 mb-5'>Role</label> */}
            {/* end::Label */}
            {/* begin::Roles */}
            {/* begin::Input row */}
            {/* <div className='d-flex fv-row'> */}
              {/* begin::Radio */}
              {/* <div className='form-check form-check-custom form-check-solid'> */}
                {/* begin::Input */}
                {/* <input
                  className='form-check-input me-3'
                  {...formik.getFieldProps('role')}
                  name='role'
                  type='radio'
                  value='Administrator'
                  id='kt_modal_update_role_option_0'
                  checked={formik.values.role === 'Administrator'}
                  disabled={formik.isSubmitting || isUserLoading}
                /> */}

                {/* end::Input */}
                {/* begin::Label */}
                {/* <label className='form-check-label' htmlFor='kt_modal_update_role_option_0'>
                  <div className='fw-bolder text-gray-800'>Administrator</div>
                  <div className='text-gray-600'>
                    Best for business owners and company administrators
                  </div>
                </label> */}
                {/* end::Label */}
              {/* </div> */}
              {/* end::Radio */}
            {/* </div> */}
            {/* end::Input row */}
            {/* <div className='separator separator-dashed my-5'></div> */}
            {/* begin::Input row */}
            {/* <div className='d-flex fv-row'> */}
              {/* begin::Radio */}
              {/* <div className='form-check form-check-custom form-check-solid'> */}
                {/* begin::Input */}
                {/* <input
                  className='form-check-input me-3'
                  {...formik.getFieldProps('role')}
                  name='role'
                  type='radio'
                  value='Developer'
                  id='kt_modal_update_role_option_1'
                  checked={formik.values.role === 'Developer'}
                  disabled={formik.isSubmitting || isUserLoading}
                /> */}
                {/* end::Input */}
                {/* begin::Label */}
                {/* <label className='form-check-label' htmlFor='kt_modal_update_role_option_1'>
                  <div className='fw-bolder text-gray-800'>Developer</div>
                  <div className='text-gray-600'>
                    Best for developers or people primarily using the API
                  </div> */}
                {/* </label> */}
                {/* end::Label */}
              {/* </div> */}
              {/* end::Radio */}
            {/* </div> */}
            {/* end::Input row */}
            {/* <div className='separator separator-dashed my-5'></div> */}
            {/* begin::Input row */}
            {/* <div className='d-flex fv-row'> */}
              {/* begin::Radio */}
              {/* <div className='form-check form-check-custom form-check-solid'> */}
                {/* begin::Input */}
                {/* <input
                  className='form-check-input me-3'
                  {...formik.getFieldProps('role')}
                  name='role'
                  type='radio'
                  value='Analyst'
                  id='kt_modal_update_role_option_2'
                  checked={formik.values.role === 'Analyst'}
                  disabled={formik.isSubmitting || isUserLoading}
                /> */}

                {/* end::Input */}
                {/* begin::Label */}
                {/* <label className='form-check-label' htmlFor='kt_modal_update_role_option_2'>
                  <div className='fw-bolder text-gray-800'>Analyst</div>
                  <div className='text-gray-600'>
                    Best for people who need full access to analytics data, but don't need to update
                    business settings
                  </div>
                </label> */}
                {/* end::Label */}
              {/* </div> */}
              {/* end::Radio */}
            {/* </div> */}
            {/* end::Input row */}
            {/* <div className='separator separator-dashed my-5'></div> */}
            {/* begin::Input row */}
            {/* <div className='d-flex fv-row'> */}
              {/* begin::Radio */}
              {/* <div className='form-check form-check-custom form-check-solid'> */}
                {/* begin::Input */}
                {/* <input
                  className='form-check-input me-3'
                  {...formik.getFieldProps('role')}
                  name='role'
                  type='radio'
                  value='Support'
                  id='kt_modal_update_role_option_3'
                  checked={formik.values.role === 'Support'}
                  disabled={formik.isSubmitting || isUserLoading}
                /> */}
                {/* end::Input */}
                {/* begin::Label */}
                {/* <label className='form-check-label' htmlFor='kt_modal_update_role_option_3'>
                  <div className='fw-bolder text-gray-800'>Support</div>
                  <div className='text-gray-600'>
                    Best for employees who regularly refund payments and respond to disputes
                  </div>
                </label> */}
                {/* end::Label */}
              {/* </div> */}
              {/* end::Radio */}
            {/* </div> */}
            {/* end::Input row */}
            {/* <div className='separator separator-dashed my-5'></div> */}
            {/* begin::Input row */}
            {/* <div className='d-flex fv-row'> */}
              {/* begin::Radio */}
              {/* <div className='form-check form-check-custom form-check-solid'> */}
                {/* begin::Input */}
                {/* <input
                  className='form-check-input me-3'
                  {...formik.getFieldProps('role')}
                  name='role'
                  type='radio'
                  id='kt_modal_update_role_option_4'
                  value='Trial'
                  checked={formik.values.role === 'Trial'}
                  disabled={formik.isSubmitting || isUserLoading}
                /> */}
                {/* end::Input */}
                {/* begin::Label */}
                {/* <label className='form-check-label' htmlFor='kt_modal_update_role_option_4'>
                  <div className='fw-bolder text-gray-800'>Trial</div>
                  <div className='text-gray-600'>
                    Best for people who need to preview content data, but don't need to make any
                    updates
                  </div> */}
                {/* </label> */}
                {/* end::Label */}
              {/* </div> */}
              {/* end::Radio */}
            {/* </div> */}
            {/* end::Input row */}
            {/* end::Roles */}
          {/* </div> */}
          {/* end::Input group */}
        </div>
        {/* end::Scroll */}

        {/* begin::Actions */}
        <div className='text-center pt-15'>
          <button
            type='reset'
            onClick={() => cancel()}
            className='btn btn-light me-3'
            data-kt-users-modal-action='cancel'
            disabled={formik.isSubmitting || isLoaderOperatorLoading}
          >
            Discard
          </button>

          <button
            type='submit'
            className='btn btn-primary'
            data-kt-users-modal-action='submit'
            disabled={isLoaderOperatorLoading || formik.isSubmitting || !formik.isValid || !formik.touched}
          >
            <span className='indicator-label'>Submit</span>
            {(formik.isSubmitting || isLoaderOperatorLoading) && (
              <span className='indicator-progress'>
                Please wait...{' '}
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            )}
          </button>
        </div>
        {/* end::Actions */}
      </form>
      {(formik.isSubmitting || isLoaderOperatorLoading) && <LoaderOperatorListLoading />}
    </>
  )
}

export {LoaderOperatorEditModalForm}
