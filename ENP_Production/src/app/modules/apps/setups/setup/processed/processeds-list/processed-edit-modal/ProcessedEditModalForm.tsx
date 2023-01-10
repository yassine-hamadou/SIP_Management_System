import {FC, useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {isNotEmpty, toAbsoluteUrl} from '../../../../../../../../_metronic/helpers'
import {initialProcessed, Processed} from '../core/_models'
import clsx from 'clsx'
import {useListView} from '../core/ListViewProvider'
import {ProcessedsListLoading} from '../components/loading/ProcessedsListLoading'
import {createProcessed, updateProcessed} from '../core/_requests'
import {useQueryResponse} from '../core/QueryResponseProvider'

type Props = {
  isProcessedLoading: boolean
 processed: Processed
}

const editProcessedSchema = Yup.object().shape({
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

const ProcessedEditModalForm: FC<Props> = ({processed, isProcessedLoading}) => {
  const {setItemIdForUpdate} = useListView()
  const {refetch} = useQueryResponse()

  const [ProcessedForEdit] = useState<Processed>({
    ...processed,
    // avatar: Processed.avatar || initialProcessed.avatar,
    role: processed.role || initialProcessed.role,
    oldBasicSalary: processed.oldBasicSalary || initialProcessed.oldBasicSalary,
    newBasicSalary: processed.newBasicSalary || initialProcessed.newBasicSalary,
    fname: processed.fname || initialProcessed.fname,
    sname: processed.sname || initialProcessed.sname,
    // email: Processed.email || initialProcessed.email,
  })

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch()
    }
    setItemIdForUpdate(undefined)
  }

  // const blankImg = toAbsoluteUrl('/media/svg/avatars/blank.svg')
  // const ProcessedAvatarImg = toAbsoluteUrl(`/media/${ProcessedForEdit.avatar}`)

  const formik = useFormik({
    initialValues: ProcessedForEdit,
    validationSchema: editProcessedSchema,
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true)
      try {
        if (isNotEmpty(values.id)) {
          await updateProcessed(values)
        } else {
          await createProcessed(values)
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
      <form id='kt_modal_add_processed_form' className='form' onSubmit={formik.handleSubmit} noValidate>
        {/* begin::Scroll */}
        <div
          className='d-flex flex-column scroll-y me-n7 pe-7'
          id='kt_modal_add_processed_scroll'
          data-kt-scroll='true'
          data-kt-scroll-activate='{default: false, lg: true}'
          data-kt-scroll-max-height='auto'
          data-kt-scroll-dependencies='#kt_modal_add_processed_header'
          data-kt-scroll-wrappers='#kt_modal_add_processed_scroll'
          data-kt-scroll-offset='300px'
        >
          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>First Name</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              placeholder='first name'
              {...formik.getFieldProps('name')}
              type='text'
              name='name'
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.fname && formik.errors.fname},
                {
                  'is-valid': formik.touched.fname && !formik.errors.fname,
                }
              )}
              autoComplete='off'
              disabled={formik.isSubmitting || isProcessedLoading}
            />
            {formik.touched.fname && formik.errors.fname && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.fname}</span>
                </div>
              </div>
            )}
            {/* end::Input */}
          </div>
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Surame</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              placeholder='surname'
              {...formik.getFieldProps('name')}
              type='text'
              name='name'
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.sname && formik.errors.sname},
                {
                  'is-valid': formik.touched.sname && !formik.errors.sname,
                }
              )}
              autoComplete='off'
              disabled={formik.isSubmitting || isProcessedLoading}
            />
            {formik.touched.sname && formik.errors.sname && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.sname}</span>
                </div>
              </div>
            )}
            {/* end::Input */}
          </div>
        </div>
        </div>
        
        {/* end::Scroll */}

        {/* begin::Actions */}
        <div className='text-center pt-15'>
          <button
            type='reset'
            onClick={() => cancel()}
            className='btn btn-light me-3'
            data-kt-processeds-modal-action='cancel'
            disabled={formik.isSubmitting || isProcessedLoading}
          >
            Discard
          </button>

          <button
            type='submit'
            className='btn btn-primary'
            data-kt-processeds-modal-action='submit'
            disabled={isProcessedLoading || formik.isSubmitting || !formik.isValid || !formik.touched}
          >
            <span className='indicator-label'>Submit</span>
            {(formik.isSubmitting || isProcessedLoading) && (
              <span className='indicator-progress'>
                Please wait...{' '}
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            )}
          </button>
        </div>
        {/* end::Actions */}
      </form>
      {(formik.isSubmitting || isProcessedLoading) && <ProcessedsListLoading />}
    </>
  )
}

export {ProcessedEditModalForm}
