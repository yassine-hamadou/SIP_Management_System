import {FC, useState} from 'react'
import * as Yup from 'yup'
import {Field, useFormik} from 'formik'
import {isNotEmpty, toAbsoluteUrl} from '../../../../../../../../_metronic/helpers'
import {initialActivity, Activity} from '../core/_models'
import clsx from 'clsx'
import {useListView} from '../core/ListViewProvider'
import {ActivitysListLoading} from '../components/loading/ActivitysListLoading'
import {createActivity, updateActivity} from '../core/_requests'
import {useQueryResponse} from '../core/QueryResponseProvider'

type Props = {
  isActivityLoading: boolean
  activity: Activity
}

const editActivitySchema = Yup.object().shape({
  // email: Yup.string()
  //   .email('Wrong email format')
  //   .min(3, 'Minimum 3 symbols')
  //   .max(50, 'Maximum 50 symbols')
  //   .required('Email is required'),
  // name: Yup.string()
  //   .min(3, 'Minimum 3 symbols')
  //   .max(50, 'Maximum 50 symbols')
  //   .required('Name is required'),
})

const ActivityEditModalForm: FC<Props> = ({activity, isActivityLoading}) => {
  const {setItemIdForUpdate} = useListView()
  const {refetch} = useQueryResponse()

  const [ActivityForEdit] = useState<Activity>({
    ...activity,
    // avatar: Activity.avatar || initialActivity.avatar,
    status: activity.status || initialActivity.status,
    // position: Activity.position || initialActivity.position,
    name: activity.name || initialActivity.name,
    salarygrade: activity.salarygrade || initialActivity.salarygrade,
    annual: activity.annual || initialActivity.annual,
    monthly: activity.monthly || initialActivity.monthly,
  })

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch()
    }
    setItemIdForUpdate(undefined)
  }


  const formik = useFormik({
    initialValues: ActivityForEdit,
    validationSchema: editActivitySchema,
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true)
      try {
        if (isNotEmpty(values.id)) {
          await updateActivity(values)
        } else {
          await createActivity(values)
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
      <form id='kt_modal_add_Activity_form' className='form' onSubmit={formik.handleSubmit} noValidate>
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
              disabled={formik.isSubmitting || isActivityLoading}
            />
            {formik.touched.name && formik.errors.name && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.name}</span>
                </div>
              </div>
            )}
            
          </div>
          {/* <div className='fv-row mb-7'>
            <label className='required fw-bold fs-6 mb-2'>Salary Grade</label>
           
            <select name="cars" id="cars" className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.monthly && formik.errors.monthly},
                {
                  'is-valid': formik.touched.monthly && !formik.errors.monthly,
                }
              )}>
              <option value="active">Managing Director</option>
              <option value="inactive">Senior Staff</option>
              
            </select>
            {formik.touched.salarygrade && formik.errors.salarygrade && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.salarygrade}</span>
                </div>
              </div>
            )}
          </div> */}

          {/* <div className='fv-row mb-7'>
            <label className='required fw-bold fs-6 mb-2'>Annual Salary</label>
            <input
              placeholder='annual'
              {...formik.getFieldProps('annual')}
              type='text'
              name='annual'
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.annual && formik.errors.annual},
                {
                  'is-valid': formik.touched.annual && !formik.errors.annual,
                }
              )}
              autoComplete='off'
              disabled={formik.isSubmitting || isActivityLoading}
            />
            {formik.touched.annual && formik.errors.annual && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.annual}</span>
                </div>
              </div>
            )}
          </div>
          <div className='fv-row mb-7'>
            <label className=' fw-bold fs-6 mb-2'>Monthly Salary</label>
            <input
              placeholder='monthly'
              {...formik.getFieldProps('monthly')}
              type='text'
              name='monthly'
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.monthly && formik.errors.monthly},
                {
                  'is-valid': formik.touched.monthly && !formik.errors.monthly,
                }
              )}
              autoComplete='off'
              disabled={formik.isSubmitting || isActivityLoading}
            />
            {formik.touched.monthly && formik.errors.monthly && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.monthly}</span>
                </div>
              </div>
            )}
          </div> */}
          <div className='fv-row mb-7'>
            <label className=' fw-bold fs-6 mb-2'>Status</label>
            
           <select name="cars" id="cars" className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.monthly && formik.errors.monthly},
                {
                  'is-valid': formik.touched.monthly && !formik.errors.monthly,
                }
              )}>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              
            </select>
            
            {formik.touched.monthly && formik.errors.monthly && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.monthly}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* begin::Actions */}
        <div className='text-center pt-15'>
          <button
            type='reset'
            onClick={() => cancel()}
            className='btn btn-light me-3'
            data-kt-users-modal-action='cancel'
            disabled={formik.isSubmitting || isActivityLoading}
          >
            Discard
          </button>

          <button
            type='submit'
            className='btn btn-primary'
            data-kt-users-modal-action='submit'
            disabled={isActivityLoading || formik.isSubmitting || !formik.isValid || !formik.touched}
          >
            <span className='indicator-label'>Submit</span>
            {(formik.isSubmitting || isActivityLoading) && (
              <span className='indicator-progress'>
                Please wait...{' '}
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            )}
          </button>
        </div>
        {/* end::Actions */}
      </form>
      {(formik.isSubmitting || isActivityLoading) && <ActivitysListLoading />}
    </>
  )
}

export {ActivityEditModalForm}
