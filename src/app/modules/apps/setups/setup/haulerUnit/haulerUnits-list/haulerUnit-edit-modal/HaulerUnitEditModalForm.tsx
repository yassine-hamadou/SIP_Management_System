import {FC, useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {isNotEmpty, toAbsoluteUrl} from '../../../../../../../../_metronic/helpers'
import {initialHaulerUnit, HaulerUnit} from '../core/_models'
import clsx from 'clsx'
import {useListView} from '../core/ListViewProvider'
import {HaulerUnitsListLoading} from '../components/loading/HaulerUnitsListLoading'
import {createHaulerUnit, updateHaulerUnit} from '../core/_requests'
import {useQueryResponse} from '../core/QueryResponseProvider'

type Props = {
  isHaulerUnitLoading: boolean
  haulerUnit: HaulerUnit
}

const editHaulerUnitSchema = Yup.object().shape({
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

const HaulerUnitEditModalForm: FC<Props> = ({haulerUnit, isHaulerUnitLoading}) => {
  const {setItemIdForUpdate} = useListView()
  const {refetch} = useQueryResponse()

  const [HaulerUnitForEdit] = useState<HaulerUnit>({
    ...haulerUnit,
    // avatar: HaulerUnit.avatar || initialHaulerUnit.avatar,
    code: haulerUnit.code || initialHaulerUnit.code,
    description: haulerUnit.description || initialHaulerUnit.description,
    name: haulerUnit.name || initialHaulerUnit.name,
    paygroup: haulerUnit.paygroup || initialHaulerUnit.paygroup,
  })

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch()
    }
    setItemIdForUpdate(undefined)
  }

  // const blankImg = toAbsoluteUrl('/media/svg/avatars/blank.svg')
  // const HaulerUnitAvatarImg = toAbsoluteUrl(`/media/${HaulerUnitForEdit.avatar}`)

  const formik = useFormik({
    initialValues: HaulerUnitForEdit,
    validationSchema: editHaulerUnitSchema,
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true)
      try {
        if (isNotEmpty(values.id)) {
          await updateHaulerUnit(values)
        } else {
          await createHaulerUnit(values)
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
      <form id='kt_modal_add_haulerUnit_form' className='form' onSubmit={formik.handleSubmit} noValidate>
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
            <label className='required fw-bold fs-6 mb-2'>Code</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              placeholder='code'
              {...formik.getFieldProps('code')}
              type='text'
              name='code'
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.code && formik.errors.code},
                {
                  'is-valid': formik.touched.code && !formik.errors.code,
                }
              )}
              autoComplete='off'
              disabled={formik.isSubmitting || isHaulerUnitLoading}
            />
            {formik.touched.code && formik.errors.code && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.code}</span>
                </div>
              </div>
            )}
            {/* end::Input */}
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
              disabled={formik.isSubmitting || isHaulerUnitLoading}
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
            <label className='required fw-bold fs-6 mb-2'>Decription</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              placeholder='description'
              {...formik.getFieldProps('description')}
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.description && formik.errors.description},
                {
                  'is-valid': formik.touched.description && !formik.errors.description,
                }
              )}
              type='text'
              name='description'
              autoComplete='off'
              disabled={formik.isSubmitting || isHaulerUnitLoading}
            />
            {/* end::Input */}
            {formik.touched.description && formik.errors.description && (
              <div className='fv-plugins-message-container'>
                <span role='alert'>{formik.errors.description}</span>
              </div>
            )}
          </div>
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Paygroup</label>
            {/* end::Label */}

            {/* begin::Input */}
            <select name="paygroup" id="cars" className={clsx(
               'form-control form-control-solid mb-3 mb-lg-0',
               {'is-invalid': formik.touched.paygroup && formik.errors.paygroup},
               {
                 'is-valid': formik.touched.paygroup && !formik.errors.paygroup,
               }
             )}>
             <option value="active">Active</option>
             <option value="inactive">Inactive</option>
             
           </select>
            {/* end::Input */}
            {formik.touched.code && formik.errors.code && (
              <div className='fv-plugins-message-container'>
                <span role='alert'>{formik.errors.paygroup}</span>
              </div>
            )}
          </div>
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

          
        </div>
        {/* end::Scroll */}

        {/* begin::Actions */}
        <div className='text-center pt-15'>
          <button
            type='reset'
            onClick={() => cancel()}
            className='btn btn-light me-3'
            data-kt-users-modal-action='cancel'
            disabled={formik.isSubmitting || isHaulerUnitLoading}
          >
            Discard
          </button>

          <button
            type='submit'
            className='btn btn-primary'
            data-kt-users-modal-action='submit'
            disabled={isHaulerUnitLoading || formik.isSubmitting || !formik.isValid || !formik.touched}
          >
            <span className='indicator-label'>Submit</span>
            {(formik.isSubmitting || isHaulerUnitLoading) && (
              <span className='indicator-progress'>
                Please wait...{' '}
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            )}
          </button>
        </div>
        {/* end::Actions */}
      </form>
      {(formik.isSubmitting || isHaulerUnitLoading) && <HaulerUnitsListLoading />}
    </>
  )
}

export {HaulerUnitEditModalForm}
