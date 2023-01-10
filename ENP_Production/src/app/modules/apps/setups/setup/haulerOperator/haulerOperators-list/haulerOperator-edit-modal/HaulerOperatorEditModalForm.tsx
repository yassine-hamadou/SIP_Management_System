import {FC, useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {isNotEmpty, toAbsoluteUrl} from '../../../../../../../../_metronic/helpers'
import {initialHaulerOperator, HaulerOperator} from '../core/_models'
import clsx from 'clsx'
import {useListView} from '../core/ListViewProvider'
import {HaulerOperatorsListLoading} from '../components/loading/HaulerOperatorsListLoading'
import {createHaulerOperator, updateHaulerOperator} from '../core/_requests'
import {useQueryResponse} from '../core/QueryResponseProvider'

type Props = {
  isHaulerOperatorLoading: boolean
  haulerOperator: HaulerOperator
}

const editHaulerOperatorSchema = Yup.object().shape({
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

const HaulerOperatorEditModalForm: FC<Props> = ({haulerOperator, isHaulerOperatorLoading}) => {
  const {setItemIdForUpdate} = useListView()
  const {refetch} = useQueryResponse()

  const [HaulerOperatorForEdit] = useState<HaulerOperator>({
    ...haulerOperator,
    // avatar: HaulerOperator.avatar || initialHaulerOperator.avatar,
    name: haulerOperator.name || initialHaulerOperator.name,
    description: haulerOperator.description || initialHaulerOperator.description,
    reportingDivision: haulerOperator.reportingDivision || initialHaulerOperator.reportingDivision,
    status: haulerOperator.status || initialHaulerOperator.status,
  })

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch()
    }
    setItemIdForUpdate(undefined)
  }

  // const blankImg = toAbsoluteUrl('/media/svg/avatars/blank.svg')
  // const HaulerOperatorAvatarImg = toAbsoluteUrl(`/media/${HaulerOperatorForEdit.avatar}`)

  const formik = useFormik({
    initialValues: HaulerOperatorForEdit,
    validationSchema: editHaulerOperatorSchema,
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true)
      try {
        if (isNotEmpty(values.id)) {
          await updateHaulerOperator(values)
        } else {
          await createHaulerOperator(values)
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
      <form id='kt_modal_add_daulerOperator_form' className='form' onSubmit={formik.handleSubmit} noValidate>
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
           
            <label className='required fw-bold fs-6 mb-2'>Name</label>
            
            <input
              placeholder='Full name'
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
              disabled={formik.isSubmitting || isHaulerOperatorLoading}
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
         
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Reporting Division</label>
            <select name="reportingDivision" id="cars" className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.reportingDivision && formik.errors.reportingDivision},
                {
                  'is-valid': formik.touched.reportingDivision && !formik.errors.reportingDivision,
                }
              )}>
              <option value="active">Managing Director</option>
              <option value="inactive">Senior Staff</option>
              
            </select>
            
            {formik.touched.reportingDivision && formik.errors.reportingDivision && (
              <div className='fv-plugins-message-container'>
                <span role='alert'>{formik.errors.reportingDivision}</span>
              </div>
            )}
          </div>
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Description</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              placeholder='description'
              {...formik.getFieldProps('description')}
              type='text'
              name='description'
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.description && formik.errors.description},
                {
                  'is-valid': formik.touched.description && !formik.errors.description,
                }
              )}
              autoComplete='off'
              disabled={formik.isSubmitting || isHaulerOperatorLoading}
            />
            {formik.touched.name && formik.errors.name && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.name}</span>
                </div>
              </div>
            )}
         
          </div>
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Status</label>
            <select name="status" id="cars" className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.status && formik.errors.status},
                {
                  'is-valid': formik.touched.status && !formik.errors.status,
                }
              )}>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              
            </select>
            
            {formik.touched.status && formik.errors.status && (
              <div className='fv-plugins-message-container'>
                <span role='alert'>{formik.errors.status}</span>
              </div>
            )}
          </div>
          
        </div>
        {/* end::Scroll */}

        {/* begin::Actions */}
        <div className='text-center pt-15'>
          <button
            type='reset'
            onClick={() => cancel()}
            className='btn btn-light me-3'
            data-kt-users-modal-action='cancel'
            disabled={formik.isSubmitting || isHaulerOperatorLoading}
          >
            Discard
          </button>

          <button
            type='submit'
            className='btn btn-primary'
            data-kt-users-modal-action='submit'
            disabled={isHaulerOperatorLoading || formik.isSubmitting || !formik.isValid || !formik.touched}
          >
            <span className='indicator-label'>Submit</span>
            {(formik.isSubmitting || isHaulerOperatorLoading) && (
              <span className='indicator-progress'>
                Please wait...{' '}
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            )}
          </button>
        </div>
        {/* end::Actions */}
      </form>
      {(formik.isSubmitting || isHaulerOperatorLoading) && <HaulerOperatorsListLoading />}
    </>
  )
}

export {HaulerOperatorEditModalForm}
