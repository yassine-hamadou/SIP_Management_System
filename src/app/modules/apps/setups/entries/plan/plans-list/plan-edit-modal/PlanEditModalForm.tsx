import {FC, useState, useEffect} from 'react'
import * as Yup from 'yup'
import {Field, useFormik} from 'formik'
import {isNotEmpty, toAbsoluteUrl} from '../../../../../../../../_metronic/helpers'
import {initialPlan, Plan} from '../core/_models'
import clsx from 'clsx'
import {useListView} from '../core/ListViewProvider'
import {PlansListLoading} from '../components/loading/PlansListLoading'
import {createPlan, updatePlan} from '../core/_requests'
import {useQueryResponse} from '../core/QueryResponseProvider'
import axios from 'axios'
import {v4 as uuidv4} from 'uuid'



type Props = {
  isPlanLoading: boolean
  plan: Plan
}

const editPlanSchema = Yup.object().shape({
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

const PlanEditModalForm: FC<Props> = ({plan, isPlanLoading}) => {
  const {setItemIdForUpdate} = useListView()
  const {refetch} = useQueryResponse()
  const [location, setLocation] = useState<any>([])

  const [PlanForEdit] = useState<Plan>({
    ...plan,
    
    activity: plan.activity || initialPlan.activity,
    destination: plan.destination || initialPlan.destination,
    quantity: plan.quantity || initialPlan.quantity,
    status: plan.status || initialPlan.status,
  
  })

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch()
    }
    setItemIdForUpdate(undefined)
  }

  const getLocation = async () => {
    try {
      const response = await axios.get(
        'https://cors-anywhere.herokuapp.com/http://208.117.44.15/SmWebApi/api/IclocsApi'
      )
      setLocation(response.data)
      console.log(response.data)
    } catch (error: any) {
      return error.statusText
    }
  }

  useEffect(() => {
    // getEquipment()
    // loadFaultType()
    getLocation()
    // getEmployee()
  }, [])

  // const blankImg = toAbsoluteUrl('/media/svg/avatars/blank.svg')
  // const PlanAvatarImg = toAbsoluteUrl(`/media/${PlanForEdit.avatar}`)

  const formik = useFormik({
    initialValues: PlanForEdit,
    validationSchema: editPlanSchema,
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true)
      try {
        if (isNotEmpty(values.id)) {
          await updatePlan(values)
        } else {
          await createPlan(values)
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
      <form id='kt_modal_add_plan_form' className='form' onSubmit={formik.handleSubmit} noValidate>
        {/* begin::Scroll */}
        <div
          className='d-flex flex-column scroll-y me-n7 pe-7'
          id='kt_modal_add_plan_scroll'
          data-kt-scroll='true'
          data-kt-scroll-activate='{default: false, lg: true}'
          data-kt-scroll-max-height='auto'
          data-kt-scroll-dependencies='#kt_modal_add_plan_header'
          data-kt-scroll-wrappers='#kt_modal_add_plan_scroll'
          data-kt-scroll-offset='300px'
        >
       
          {/* <div className='fv-row mb-7'>
          
            <label className='required fw-bold fs-6 mb-2'>Activity</label>
            
            <input
              placeholder='activity'
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
              disabled={formik.isSubmitting || isPlanLoading}
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
           
            <label className='required fw-bold fs-6 mb-2'>Destination</label>
            
            <input
              placeholder='destination'
              {...formik.getFieldProps('email')}
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.email && formik.errors.email},
                {
                  'is-valid': formik.touched.email && !formik.errors.email,
                }
              )}
              type='text'
              name='destination'
              autoComplete='off'
              disabled={formik.isSubmitting || isPlanLoading}
            />
           
            {formik.touched.email && formik.errors.email && (
              <div className='fv-plugins-message-container'>
                <span role='alert'>{formik.errors.email}</span>
              </div>
            )}
          </div>
          <div className='fv-row mb-7'>
          
            <label className='required fw-bold fs-6 mb-2'>Quantity</label>
           
            <input
              placeholder='quantity'
              {...formik.getFieldProps('email')}
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.email && formik.errors.email},
                {
                  'is-valid': formik.touched.email && !formik.errors.email,
                }
              )}
              type='text'
              name='quantity'
              autoComplete='off'
              disabled={formik.isSubmitting || isPlanLoading}
            />
           
            {formik.touched.email && formik.errors.email && (
              <div className='fv-plugins-message-container'>
                <span role='alert'>{formik.errors.email}</span>
              </div>
            )}
          </div> */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Activity</label>
            <select name="activity" id="cars" className={clsx(
               'form-control form-control-solid mb-3 mb-lg-0',
               {'is-invalid': formik.touched.activity && formik.errors.activity},
               {
                 'is-valid': formik.touched.activity && !formik.errors.activity,
               }
             )}>
             <option value="active">Test 1</option>
             <option value="active">Test 2</option>
             <option value="active">Test 3</option>
             <option value="active">Test 4</option>
             <option value="inactive">Inactive</option>
             
           </select>
            {/* end::Input */}
            {formik.touched.activity && formik.errors.activity && (
              <div className='fv-plugins-message-container'>
                <span role='alert'>{formik.errors.activity}</span>
              </div>
            )}
          </div>
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Destination</label>
            <select name="destination" id="cars" className={clsx(
               'form-control form-control-solid mb-3 mb-lg-0',
               {'is-invalid': formik.touched.destination && formik.errors.destination},
               {
                 'is-valid': formik.touched.destination && !formik.errors.destination,
               }
             )}>
                {location.map((item:any)=>(
                    <option
                    value={item.locationCode}
                    key={uuidv4()}
                  >
                    {item.locationDesc}
                    
                  </option>
              ))}
            </select>
            {/* end::Input */}
            {formik.touched.destination && formik.errors.destination && (
              <div className='fv-plugins-message-container'>
                <span role='alert'>{formik.errors.destination}</span>
              </div>
            )}
          </div>
          <div className='fv-row mb-7'>
          
            <label className='required fw-bold fs-6 mb-2'>Quantity</label>
              <input
                  placeholder='quantity'
                  {...formik.getFieldProps('email')}
                  className={clsx(
                    'form-control form-control-solid mb-3 mb-lg-0',
                    {'is-invalid': formik.touched.quantity && formik.errors.quantity},
                    {
                      'is-valid': formik.touched.quantity && !formik.errors.quantity,
                    }
                  )}
                  type='number'
                  name='quantity'
                  autoComplete='off'
                  disabled={formik.isSubmitting || isPlanLoading}
                />
      
            {formik.touched.quantity && formik.errors.quantity && (
              <div className='fv-plugins-message-container'>
                <span role='alert'>{formik.errors.quantity}</span>
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
            {/* end::Input */}
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
            data-kt-plans-modal-action='cancel'
            disabled={formik.isSubmitting || isPlanLoading}
          >
            Discard
          </button>

          <button
            type='submit'
            className='btn btn-primary'
            data-kt-plans-modal-action='submit'
            disabled={isPlanLoading || formik.isSubmitting || !formik.isValid || !formik.touched}
          >
            <span className='indicator-label'>Submit</span>
            {(formik.isSubmitting || isPlanLoading) && (
              <span className='indicator-progress'>
                Please wait...{' '}
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            )}
          </button>
        </div>
        {/* end::Actions */}
      </form>
      {(formik.isSubmitting || isPlanLoading) && <PlansListLoading />}
    </>
  )
}

export {PlanEditModalForm}
