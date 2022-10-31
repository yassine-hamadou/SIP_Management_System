import {FC, useState, useEffect} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {isNotEmpty, toAbsoluteUrl} from '../../../../../../../../_metronic/helpers'
import {initialGrade, Grade} from '../core/_models'
import clsx from 'clsx'
import {useListView} from '../core/ListViewProvider'
import {GradeListLoading} from '../components/loading/GradeListLoading'
import {createGrade, updateGrade} from '../core/_requests'
import {useQueryResponse} from '../core/QueryResponseProvider'
import axios from 'axios'
import {Button, Form, Input, Select, TimePicker} from 'antd'
import {DatePicker} from 'antd/es'
import {v4 as uuidv4} from 'uuid'
type Props = {
  isGradeLoading: boolean
  grade: Grade
}

const editGradeSchema = Yup.object().shape({
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

const GradeEditModalForm: FC<Props> = ({grade, isGradeLoading}) => {
  const {setItemIdForUpdate} = useListView()
  const {refetch} = useQueryResponse()
  const [loading, setLoading] = useState(true)
  const [submitLoading, setSubmitLoading] = useState(false)
  const [equipment, setEquipment] = useState<any>([])
  const [location, setLocation] = useState<any>([])
  const [employee, setEmployee] = useState([])
  const [GradeForEdit] = useState<Grade>({
    ...grade,
    // avatar: Grade.avatar || initialGrade.avatar,
    date: grade.date || initialGrade.date,
    destination: grade.destination || initialGrade.destination,
    origin: grade.origin || initialGrade.origin,
    loader_unit: grade.loader_unit || initialGrade.loader_unit,
    hauler_unit: grade.hauler_unit || initialGrade.hauler_unit,
    material: grade.material || initialGrade.material,
    shift: grade.shift || initialGrade.shift,
  })

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch()
    }
    setItemIdForUpdate(undefined)
  }

  // const blankImg = toAbsoluteUrl('/media/svg/avatars/blank.svg')
  // const GradeAvatarImg = toAbsoluteUrl(`/media/${GradeForEdit.avatar}`)

  const formik = useFormik({
    initialValues: GradeForEdit,
    validationSchema: editGradeSchema,
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true)
      try {
        if (isNotEmpty(values.id)) {
          await updateGrade(values)
        } else {
          await createGrade(values)
        }
      } catch (ex) {
        console.error(ex)
      } finally {
        setSubmitting(true)
        cancel(true)
      }
    },
  })

  const getEquipment = async () => {
    setLoading(true)
    try {
      const response = await axios.get(
        'https://cors-anywhere.herokuapp.com/http://208.117.44.15/SmWebApi/api/VmequpsApi'
      )
      setEquipment(response.data)
    console.log(response.data);

      // setLoading(false)
    } catch (error: any) {
      setLoading(false)
      return error.statusText
    }
  }
  const getLocation = async () => {
    try {
      const response = await axios.get(
        'https://cors-anywhere.herokuapp.com/http://208.117.44.15/SmWebApi/api/IclocsApi'
      )
      setLocation(response.data)
      // console.log(response.data)
    } catch (error: any) {
      return error.statusText
    }
  }

  const getEmployee = async () => {
    const response = await axios.get(
      'https://cors-anywhere.herokuapp.com/http://208.117.44.15/SmWebApi/api/VmemplsApi'
    )
    setEmployee(response.data)
  }

  // console.log(loadCustodian);

  useEffect(() => {
    getEquipment()
    // loadFaultType()
    getLocation()
    getEmployee()
  }, [])

  const {Option} = Select

  return (
    <>
      <form id='kt_modal_add_grade_form' className='form' onSubmit={formik.handleSubmit} noValidate>
        {/* begin::Scroll */}
        <div
          className='d-flex flex-column scroll-y me-n7 pe-7'
          id='kt_modal_add_grade_scroll'
          data-kt-scroll='true'
          data-kt-scroll-activate='{default: false, lg: true}'
          data-kt-scroll-max-height='auto'
          data-kt-scroll-dependencies='#kt_modal_add_grade_header'
          data-kt-scroll-wrappers='#kt_modal_add_grade_scroll'
          data-kt-scroll-offset='300px'
        >
          {/* <div className='fv-row mb-7'>
         
            <label className='required fw-bold fs-6 mb-2'>Date</label>
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
              disabled={formik.isSubmitting || isGradeLoading}
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
          
            <label className='required fw-bold fs-6 mb-2'>Hauler Unit</label>
            
            <input
              placeholder='Email'
              {...formik.getFieldProps('email')}
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.email && formik.errors.email},
                {
                  'is-valid': formik.touched.email && !formik.errors.email,
                }
              )}
              type='email'
              name='email'
              autoComplete='off'
              disabled={formik.isSubmitting || isGradeLoading}
            />
           
            {formik.touched.email && formik.errors.email && (
              <div className='fv-plugins-message-container'>
                <span role='alert'>{formik.errors.email}</span>
              </div>
            )}
          </div> */}
          <div className="fw-row">
            <div className="row">
              <div className='fv-row mb-7 col-6'>
                {/* begin::Label */}
                <label className='required fw-bold fs-6 mb-2'>Date</label>
                {/* <select name="date" id="cars" className={clsx(
                  'form-control form-control-solid mb-3 mb-lg-0',
                  {'is-invalid': formik.touched.date && formik.errors.date},
                  {
                    'is-valid': formik.touched.date && !formik.errors.date,
                  }
                )}>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>

                
                
                </select> */}
                <input
                  placeholder='quantity'
                  {...formik.getFieldProps('email')}
                  className={clsx(
                    'form-control form-control-solid mb-3 mb-lg-0',
                    {'is-invalid': formik.touched.date && formik.errors.date},
                    {
                      'is-valid': formik.touched.date && !formik.errors.date,
                    }
                  )}
                  type='date'
                  
                  name='quantity'
                  autoComplete='off'
                  disabled={formik.isSubmitting || isGradeLoading}
                />
                {/* end::Input */}
                {formik.touched.date && formik.errors.date && (
                  <div className='fv-plugins-message-container'>
                    <span role='alert'>{formik.errors.date}</span>
                  </div>
                )}
              </div>
              <div className='fv-row mb-7 col-6'>
                {/* begin::Label */}
                <label className='required fw-bold fs-6 mb-2'>Destination</label>
                <select name="hauler_unit" id="cars" className={clsx(
                  'form-control form-control-solid mb-3 mb-lg-0',
                  {'is-invalid': formik.touched.hauler_unit && formik.errors.hauler_unit},
                  {
                    'is-valid': formik.touched.hauler_unit && !formik.errors.hauler_unit,
                  }
                )}>
                  {location.map((item:any)=>(
                    <option
                    value={item.locationCode}
                    key={uuidv4()}
                  >
                    {item.locationCode} - {item.locationDesc}
                    
                  </option>

                  ))}
                {/* <option value="inactive">Inactive</option> */}
                
              </select>
            
                {formik.touched.hauler_unit && formik.errors.hauler_unit && (
                  <div className='fv-plugins-message-container'>
                    <span role='alert'>{formik.errors.hauler_unit}</span>
                  </div>
                )}
              </div>
            </div> 
            <div className="row">
              <div className='fv-row mb-7 col-6'>
                {/* begin::Label */}
                <label className='required fw-bold fs-6 mb-2'>Hauler Unit</label>
                <select name="hauler_unit" id="cars" className={clsx(
                  'form-control form-control-solid mb-3 mb-lg-0',
                  {'is-invalid': formik.touched.hauler_unit && formik.errors.hauler_unit},
                  {
                    'is-valid': formik.touched.hauler_unit && !formik.errors.hauler_unit,
                  }
                )}>
                    {equipment.map((item: any)=>(
                  <option key={uuidv4()} value={item.fleetID}>{item.fleetID} - {item.modlClass}</option>
                ))}
                
                
                </select>
              
                  {formik.touched.hauler_unit && formik.errors.hauler_unit && (
                    <div className='fv-plugins-message-container'>
                      <span role='alert'>{formik.errors.hauler_unit}</span>
                    </div>
                  )}
              </div>
              <div className='fv-row mb-7 col-6'>
                <label className='required fw-bold fs-6 mb-2'>Loader Unit</label>
                  <select name="loader_unit" id="cars" className={clsx(
                    'form-control form-control-solid mb-3 mb-lg-0',
                    {'is-invalid': formik.touched.loader_unit && formik.errors.loader_unit},
                    {
                      'is-valid': formik.touched.loader_unit && !formik.errors.loader_unit,
                    }
                  )}>
                  {/* <option value="active">Active</option>
                  <option value="inactive">Inactive</option> */}
                  {equipment.map((item: any)=>(
                  <option key={uuidv4()} value={item.fleetID}>{item.fleetID} - {item.modlClass}</option>
                ))}
                  
                  </select>
                  
                  {formik.touched.loader_unit && formik.errors.loader_unit && (
                    <div className='fv-plugins-message-container'>
                      <span role='alert'>{formik.errors.loader_unit}</span>
                    </div>
                  )}
                </div>
            </div>
            <div className="row">
              <div className='fv-row mb-7 col-6'>
                <label className='required fw-bold fs-6 mb-2'>Material</label>
                <select name="material" id="cars" className={clsx(
                  'form-control form-control-solid mb-3 mb-lg-0',
                  {'is-invalid': formik.touched.material && formik.errors.material},
                  {
                    'is-valid': formik.touched.material && !formik.errors.material,
                  }
                )}>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                
                </select>
                
                {formik.touched.material && formik.errors.material && (
                  <div className='fv-plugins-message-container'>
                    <span role='alert'>{formik.errors.material}</span>
                  </div>
                )}
              </div>
              <div className='fv-row mb-7 col-6'>
                {/* begin::Label */}
                <label className='required fw-bold fs-6 mb-2'>Origin</label>
                <select name="origin" className={clsx(
                  'form-control form-control-solid mb-3 mb-lg-0',
                  {'is-invalid': formik.touched.origin && formik.errors.origin},
                  {
                    'is-valid': formik.touched.origin && !formik.errors.origin,
                  }
                )}>
                
                 {location.map((item:any) => (
                    <option
                      value={item.locationCode}
                      key={uuidv4()}
                    >
                      {item.locationCode} - {item.locationDesc}
                      
                    </option>
                  ))}
                
              </select>
                {/* end::Input */}
                {formik.touched.origin && formik.errors.origin && (
                  <div className='fv-plugins-message-container'>
                    <span role='alert'>{formik.errors.origin}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className='fv-row mb-7 col-6'>
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
            data-kt-users-modal-action='cancel'
            disabled={formik.isSubmitting || isGradeLoading}
          >
            Discard
          </button>

          <button
            type='submit'
            className='btn btn-primary'
            data-kt-users-modal-action='submit'
            disabled={isGradeLoading || formik.isSubmitting || !formik.isValid || !formik.touched}
          >
            <span className='indicator-label'>Submit</span>
            {(formik.isSubmitting || isGradeLoading) && (
              <span className='indicator-progress'>
                Please wait...{' '}
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            )}
          </button>
        </div>
        {/* end::Actions */}
      </form>
      {(formik.isSubmitting || isGradeLoading) && <GradeListLoading />}
    </>
  )
}

export {GradeEditModalForm}
