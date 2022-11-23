import {FC, useState, useEffect} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {isNotEmpty, toAbsoluteUrl} from '../../../../../../../../_metronic/helpers'
import {initialDetail, Detail} from '../core/_models'
import clsx from 'clsx'
import {useListView} from '../core/ListViewProvider'
import {DetailsListLoading} from '../components/loading/DetailsListLoading'
import {createDetail, updateDetail} from '../core/_requests'
import {useQueryResponse} from '../core/QueryResponseProvider'
import axios from 'axios'
import {Button, Form, Input, Select, TimePicker} from 'antd'
import {DatePicker} from 'antd/es'
import {v4 as uuidv4} from 'uuid'

type Props = {
  isDetailLoading: boolean
  detail: Detail
}

const editDetailSchema = Yup.object().shape({
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

const DetailEditModalForm: FC<Props> = ({detail, isDetailLoading}) => {
  const {setItemIdForUpdate} = useListView()
  const {refetch} = useQueryResponse()
  const [equipment, setEquipment] = useState<any>([])
  const [location, setLocation] = useState<any>([])
  const [employee, setEmployee] = useState([])
  const [loading, setLoading] = useState(true)

  const [DetailForEdit] = useState<Detail>({
    ...detail,
    // avatar: Detail.avatar || initialDetail.avatar,
    date: detail.date || initialDetail.date,
    shift: detail.shift || initialDetail.shift,
    origin: detail.origin || initialDetail.origin,
    material: detail.material || initialDetail.material,
 
  })

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch()
    }
    setItemIdForUpdate(undefined)
  }

  // const blankImg = toAbsoluteUrl('/media/svg/avatars/blank.svg')
  // const DetailAvatarImg = toAbsoluteUrl(`/media/${DetailForEdit.avatar}`)

  const formik = useFormik({
    initialValues: DetailForEdit,
    validationSchema: editDetailSchema,
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true)
      try {
        if (isNotEmpty(values.id)) {
          await updateDetail(values)
        } else {
          await createDetail(values)
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

  useEffect(() => {
    getEquipment()
    // loadFaultType()
    getLocation()
    getEmployee()
  }, [])

  return (
    <>
      <form id='kt_modal_add_detail_form' className='form' onSubmit={formik.handleSubmit} noValidate>
        {/* begin::Scroll */}
        <div
          className='d-flex flex-column scroll-y me-n7 pe-7'
          id='kt_modal_add_detail_scroll'
          data-kt-scroll='true'
          data-kt-scroll-activate='{default: false, lg: true}'
          data-kt-scroll-max-height='auto'
          data-kt-scroll-dependencies='#kt_modal_add_detail_header'
          data-kt-scroll-wrappers='#kt_modal_add_detail_scroll'
          data-kt-scroll-offset='300px'
        >
          <div className="fv-row">
            <div className="row">
              <div className='mb-7 col-6'>
                <label className='required fw-bold fs-6 mb-2'>Date</label>
                <input
                  placeholder='date'
                  {...formik.getFieldProps('name')}
                  type='date'
                  name='name'
                  className={clsx(
                    'form-control form-control-solid mb-3 mb-lg-0',
                    {'is-invalid': formik.touched.date && formik.errors.date},
                    {
                      'is-valid': formik.touched.date && !formik.errors.date,
                    }
                  )}
                  autoComplete='off'
                  disabled={formik.isSubmitting || isDetailLoading}
                />
                {formik.touched.date && formik.errors.date && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.date}</span>
                    </div>
                  </div>
                )}
              </div>
              <div className='mb-7 col-6'>
                {/* begin::Label */}
                <label className='required fw-bold fs-6 mb-2'>Shift</label>
                <select name="shift" id="cars" className={clsx(
                  'form-control form-control-solid mb-3 mb-lg-0',
                  {'is-invalid': formik.touched.shift && formik.errors.shift},
                  {
                    'is-valid': formik.touched.shift && !formik.errors.shift,
                  }
                )}>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                
                </select>
                  {/* end::Input */}
                  {formik.touched.shift && formik.errors.shift && (
                    <div className='fv-plugins-message-container'>
                      <span role='alert'>{formik.errors.shift}</span>
                    </div>
                  )}
              </div>
            </div>
            <div className="row">
              <div className='mb-7 col-4'>
                <label className='required fw-bold fs-6 mb-2'>Time start</label>
                <input
                  placeholder='date'
                  {...formik.getFieldProps('timeStart')}
                  type='time'
                  name='timeStart'
                  className={clsx(
                    'form-control form-control-solid mb-3 mb-lg-0',
                    {'is-invalid': formik.touched.date && formik.errors.date},
                    {
                      'is-valid': formik.touched.date && !formik.errors.date,
                    }
                  )}
                  autoComplete='off'
                  disabled={formik.isSubmitting || isDetailLoading}
                />
                {formik.touched.date && formik.errors.date && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.date}</span>
                    </div>
                  </div>
                )}
              </div>
              <div className='mb-7 col-4'>
                <label className='required fw-bold fs-6 mb-2'>Time finish</label>
                <input
                  placeholder='date'
                  {...formik.getFieldProps('timeFinish')}
                  type='time'
                  name='timeFinish'
                  className={clsx(
                    'form-control form-control-solid mb-3 mb-lg-0',
                    {'is-invalid': formik.touched.date && formik.errors.date},
                    {
                      'is-valid': formik.touched.date && !formik.errors.date,
                    }
                  )}
                  autoComplete='off'
                  disabled={formik.isSubmitting || isDetailLoading}
                />
                {formik.touched.date && formik.errors.date && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.date}</span>
                    </div>
                  </div>
                )}
              </div>
              <div className='mb-7 col-4'>
                <label className='fw-bold fs-6 mb-2'>Total duration</label>
                <input
                  placeholder='total duration'
                  {...formik.getFieldProps('totalDuration')}
                  type='number'
                  name='totalDuration'
                  className={clsx(
                    'form-control form-control-solid mb-3 mb-lg-0',
                    {'is-invalid': formik.touched.date && formik.errors.date},
                    {
                      'is-valid': formik.touched.date && !formik.errors.date,
                    }
                  )}
                  autoComplete='off'
                  disabled={formik.isSubmitting || isDetailLoading}
                />
                {formik.touched.date && formik.errors.date && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.date}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="row">
              <div className='mb-7 col-6'>
                {/* begin::Label */}
                <label className='required fw-bold fs-6 mb-2'>Loader Unit</label>
                <select name="loader" id="cars" className={clsx(
                  'form-control form-control-solid mb-3 mb-lg-0',
                  {'is-invalid': formik.touched.loader && formik.errors.loader},
                  {
                    'is-valid': formik.touched.loader && !formik.errors.loader,
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
                  {formik.touched.loader && formik.errors.loader && (
                    <div className='fv-plugins-message-container'>
                      <span role='alert'>{formik.errors.loader}</span>
                    </div>
                  )}
              </div>
              <div className='mb-7 col-6'>
                {/* begin::Label */}
                <label className='required fw-bold fs-6 mb-2'>Loader operator</label>
                <select name="hauler" id="cars" className={clsx(
                  'form-control form-control-solid mb-3 mb-lg-0',
                  {'is-invalid': formik.touched.hauler && formik.errors.hauler},
                  {
                    'is-valid': formik.touched.hauler && !formik.errors.hauler,
                  }
                )}>
                 {employee.map((item:any)=>(
                    <option
                    value={item.emplCode}
                    key={uuidv4()}
                  >
                   {item.emplCode}
                    
                  </option>
                  ))}
                
                </select>
                  {/* end::Input */}
                  {formik.touched.hauler && formik.errors.hauler && (
                    <div className='fv-plugins-message-container'>
                      <span role='alert'>{formik.errors.hauler}</span>
                    </div>
                  )}
              </div>
            </div>
            <div className="row">
              <div className='mb-7 col-6'>
                {/* begin::Label */}
                <label className='required fw-bold fs-6 mb-2'>Hauler Unit</label>
                <select name="loader" className={clsx(
                  'form-control form-control-solid mb-3 mb-lg-0',
                  {'is-invalid': formik.touched.loader && formik.errors.loader},
                  {
                    'is-valid': formik.touched.loader && !formik.errors.loader,
                  }
                )}>
                {location.map((item:any)=>(
                    <option
                    value={item.locationCode}
                    key={uuidv4()}
                  >
                   {item.locationCode}
                    
                  </option>
                  ))}
                </select>
                  {/* end::Input */}
                  {formik.touched.loader && formik.errors.loader && (
                    <div className='fv-plugins-message-container'>
                      <span role='alert'>{formik.errors.loader}</span>
                    </div>
                  )}
              </div>
              <div className='mb-7 col-6'>
                {/* begin::Label */}
                <label className='required fw-bold fs-6 mb-2'>Hauler operator</label>
                <select name="hauler" id="cars" className={clsx(
                  'form-control form-control-solid mb-3 mb-lg-0',
                  {'is-invalid': formik.touched.hauler && formik.errors.hauler},
                  {
                    'is-valid': formik.touched.hauler && !formik.errors.hauler,
                  }
                )}>
                 {employee.map((item:any)=>(
                    <option
                    value={item.emplCode}
                    key={uuidv4()}
                  >
                   {item.emplName}
                    
                  </option>
                  ))}
                
                </select>
                  {/* end::Input */}
                  {formik.touched.hauler && formik.errors.hauler && (
                    <div className='fv-plugins-message-container'>
                      <span role='alert'>{formik.errors.hauler}</span>
                    </div>
                  )}
              </div>
            </div>
            <div className="row">
              <div className='mb-7 col-4'>
                {/* begin::Label */}
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
                  {/* end::Input */}
                  {formik.touched.material && formik.errors.material && (
                    <div className='fv-plugins-message-container'>
                      <span role='alert'>{formik.errors.material}</span>
                    </div>
                  )}
              </div>
              <div className='mb-7 col-4'>
                {/* begin::Label */}
                <label className='required fw-bold fs-6 mb-2'>Origin</label>
                <select name="origin" id="cars" className={clsx(
                  'form-control form-control-solid mb-3 mb-lg-0',
                  {'is-invalid': formik.touched.origin && formik.errors.origin},
                  {
                    'is-valid': formik.touched.origin && !formik.errors.origin,
                  }
                )}>
                {location.map((item:any)=>(
                    <option
                    value={item.locationCode}
                    key={uuidv4()}
                  >
                   {item.locationCode}
                    
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
              <div className='mb-7 col-4'>
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
            </div>
            <div className="row">
              
              <div className='mb-7 col-6'>
                {/* begin::Label */}
                <label className='required fw-bold fs-6 mb-2'>Nominal weight (dry)</label>
                <input
                  placeholder='nominal dry'
                  {...formik.getFieldProps('nominal_weight_dry')}
                  type='number'
                  name='nominal_weight_dry'
                  className={clsx(
                    'form-control form-control-solid mb-3 mb-lg-0',
                    {'is-invalid': formik.touched.date && formik.errors.date},
                    {
                      'is-valid': formik.touched.date && !formik.errors.date,
                    }
                  )}
                  autoComplete='off'
                  disabled={formik.isSubmitting || isDetailLoading}
                />
                  {/* end::Input */}
                  {formik.touched.nominal && formik.errors.nominal && (
                    <div className='fv-plugins-message-container'>
                      <span role='alert'>{formik.errors.nominal}</span>
                    </div>
                  )}
              </div>
              <div className='mb-7 col-6'>
                {/* begin::Label */}
                <label className='required fw-bold fs-6 mb-2'>Nominal weight (wet)</label>
                <input
                  placeholder='nominal wet'
                  {...formik.getFieldProps('nominal_weight_wet')}
                  type='number'
                  name='nominal_weight_wet'
                  className={clsx(
                    'form-control form-control-solid mb-3 mb-lg-0',
                    {'is-invalid': formik.touched.date && formik.errors.date},
                    {
                      'is-valid': formik.touched.date && !formik.errors.date,
                    }
                  )}
                  autoComplete='off'
                  disabled={formik.isSubmitting || isDetailLoading}
                />
                  {/* end::Input */}
                  {formik.touched.nominal && formik.errors.nominal && (
                    <div className='fv-plugins-message-container'>
                      <span role='alert'>{formik.errors.nominal}</span>
                    </div>
                  )}
              </div>
            </div>
            <div className="row">
              <div className='mb-7 col-6'>
                {/* begin::Label */}
                <label className='required fw-bold fs-6 mb-2'>Payload weight (dry)</label>
                <input
                  placeholder='payload dry'
                  {...formik.getFieldProps('payload_weight_dry')}
                  type='number'
                  name='payload_weight_dry'
                  className={clsx(
                    'form-control form-control-solid mb-3 mb-lg-0',
                    {'is-invalid': formik.touched.date && formik.errors.date},
                    {
                      'is-valid': formik.touched.date && !formik.errors.date,
                    }
                  )}
                  autoComplete='off'
                  disabled={formik.isSubmitting || isDetailLoading}
                />
                  {/* end::Input */}
                  {formik.touched.payload_weight && formik.errors.payload_weight && (
                    <div className='fv-plugins-message-container'>
                      <span role='alert'>{formik.errors.payload_weight}</span>
                    </div>
                  )}
              </div>
              <div className='mb-7 col-6'>
                {/* begin::Label */}
                <label className='required fw-bold fs-6 mb-2'>Payload weight (wet)</label>
                <input
                  placeholder='payload wet'
                  {...formik.getFieldProps('payload_weight_wet')}
                  type='number'
                  name='payload_weight_wet'
                  className={clsx(
                    'form-control form-control-solid mb-3 mb-lg-0',
                    {'is-invalid': formik.touched.date && formik.errors.date},
                    {
                      'is-valid': formik.touched.date && !formik.errors.date,
                    }
                  )}
                  autoComplete='off'
                  disabled={formik.isSubmitting || isDetailLoading}
                />
                  {/* end::Input */}
                  {formik.touched.payload_weight && formik.errors.payload_weight && (
                    <div className='fv-plugins-message-container'>
                      <span role='alert'>{formik.errors.payload_weight}</span>
                    </div>
                  )}
              </div>
            </div>
            <div className="row">
              <div className='mb-7 col-6'>
                {/* begin::Label */}
                <label className='required fw-bold fs-6 mb-2'>Report weight</label>
                <input
                  placeholder='report weight (tonnes)'
                  {...formik.getFieldProps('report_weight')}
                  type='number'
                  name='report_weight'
                  className={clsx(
                    'form-control form-control-solid mb-3 mb-lg-0',
                    {'is-invalid': formik.touched.report_weight && formik.errors.report_weight},
                    {
                      'is-valid': formik.touched.report_weight && !formik.errors.report_weight,
                    }
                  )}
                  autoComplete='off'
                  disabled={formik.isSubmitting || isDetailLoading}
                />
                  {/* end::Input */}
                  {formik.touched.report_weight && formik.errors.report_weight && (
                    <div className='fv-plugins-message-container'>
                      <span role='alert'>{formik.errors.report_weight}</span>
                    </div>
                  )}
              </div>
              <div className='mb-7 col-6'>
                {/* begin::Label */}
                <label className='required fw-bold fs-6 mb-2'>Volume</label>
                <input
                  placeholder='volume'
                  {...formik.getFieldProps('volume (bcm)')}
                  type='number'
                  name='volume'
                  className={clsx(
                    'form-control form-control-solid mb-3 mb-lg-0',
                    {'is-invalid': formik.touched.volume && formik.errors.volume},
                    {
                      'is-valid': formik.touched.volume && !formik.errors.volume,
                    }
                  )}
                  autoComplete='off'
                  disabled={formik.isSubmitting || isDetailLoading}
                />
                  {/* end::Input */}
                  {formik.touched.volume && formik.errors.volume && (
                    <div className='fv-plugins-message-container'>
                      <span role='alert'>{formik.errors.volume}</span>
                    </div>
                  )}
              </div>
            </div>
            <div className="row">
              <div className='mb-7 col-6'>
                {/* begin::Label */}
                <label className='required fw-bold fs-6 mb-2'>Loads</label>
                  
                <input
                  placeholder='load count'
                  {...formik.getFieldProps('loads')}
                  type='number'
                  name='loads'
                  className={clsx(
                    'form-control form-control-solid mb-3 mb-lg-0',
                    {'is-invalid': formik.touched.loads && formik.errors.loads},
                    {
                      'is-valid': formik.touched.loads && !formik.errors.loads,
                    }
                  )}
                  autoComplete='off'
                  disabled={formik.isSubmitting || isDetailLoading}
                />
                  {/* end::Input */}
                  {formik.touched.loads && formik.errors.loads && (
                    <div className='fv-plugins-message-container'>
                      <span role='alert'>{formik.errors.loads}</span>
                    </div>
                  )}
              </div>
            </div>
            
            <div className="row">
              <div className='mb-7 col-4'>
                {/* begin::Label */}
                <label className='required fw-bold fs-6 mb-2'>Arrived for loading</label>
                <input
                  placeholder='load count'
                  {...formik.getFieldProps('loads')}
                  type='time'
                  name='loads'
                  className={clsx(
                    'form-control form-control-solid mb-3 mb-lg-0',
                    {'is-invalid': formik.touched.loads && formik.errors.loads},
                    {
                      'is-valid': formik.touched.loads && !formik.errors.loads,
                    }
                  )}
                  autoComplete='off'
                  disabled={formik.isSubmitting || isDetailLoading}
                />
                  {/* end::Input */}
                  {formik.touched.loads && formik.errors.loads && (
                    <div className='fv-plugins-message-container'>
                      <span role='alert'>{formik.errors.loads}</span>
                    </div>
                  )}
              </div>
              <div className='mb-7 col-4'>
                {/* begin::Label */}
                <label className='required fw-bold fs-6 mb-2'>Start loading</label>
                <input
                  placeholder='load count'
                  {...formik.getFieldProps('loads')}
                  type='time'
                  name='loads'
                  className={clsx(
                    'form-control form-control-solid mb-3 mb-lg-0',
                    {'is-invalid': formik.touched.loads && formik.errors.loads},
                    {
                      'is-valid': formik.touched.loads && !formik.errors.loads,
                    }
                  )}
                  autoComplete='off'
                  disabled={formik.isSubmitting || isDetailLoading}
                />
                  {/* end::Input */}
                  {formik.touched.loads && formik.errors.loads && (
                    <div className='fv-plugins-message-container'>
                      <span role='alert'>{formik.errors.loads}</span>
                    </div>
                  )}
              </div>
              <div className='mb-7 col-4'>
                {/* begin::Label */}
                <label className='required fw-bold fs-6 mb-2'>Finished loading</label>
                <input
                  placeholder='load count'
                  {...formik.getFieldProps('loads')}
                  type='time'
                  name='loads'
                  className={clsx(
                    'form-control form-control-solid mb-3 mb-lg-0',
                    {'is-invalid': formik.touched.loads && formik.errors.loads},
                    {
                      'is-valid': formik.touched.loads && !formik.errors.loads,
                    }
                  )}
                  autoComplete='off'
                  disabled={formik.isSubmitting || isDetailLoading}
                />
                  {/* end::Input */}
                  {formik.touched.loads && formik.errors.loads && (
                    <div className='fv-plugins-message-container'>
                      <span role='alert'>{formik.errors.loads}</span>
                    </div>
                  )}
              </div>
            </div>
            <label className='fw-bold fs-6 mb-5'>Time at Destination</label>
            <div className="row">
              <div className='mb-7 col-4'>
                {/* begin::Label */}
                <label className='required fw-bold fs-6 mb-2'>Arrived for dumping</label>
                <input
                  placeholder='load count'
                  {...formik.getFieldProps('loads')}
                  type='time'
                  name='loads'
                  className={clsx(
                    'form-control form-control-solid mb-3 mb-lg-0',
                    {'is-invalid': formik.touched.loads && formik.errors.loads},
                    {
                      'is-valid': formik.touched.loads && !formik.errors.loads,
                    }
                  )}
                  autoComplete='off'
                  disabled={formik.isSubmitting || isDetailLoading}
                />
                  {/* end::Input */}
                  {formik.touched.loads && formik.errors.loads && (
                    <div className='fv-plugins-message-container'>
                      <span role='alert'>{formik.errors.loads}</span>
                    </div>
                  )}
              </div>
              <div className='mb-7 col-4'>
                {/* begin::Label */}
                <label className='required fw-bold fs-6 mb-2'>Started dumping</label>
                <input
                  placeholder='load count'
                  {...formik.getFieldProps('loads')}
                  type='time'
                  name='loads'
                  className={clsx(
                    'form-control form-control-solid mb-3 mb-lg-0',
                    {'is-invalid': formik.touched.loads && formik.errors.loads},
                    {
                      'is-valid': formik.touched.loads && !formik.errors.loads,
                    }
                  )}
                  autoComplete='off'
                  disabled={formik.isSubmitting || isDetailLoading}
                />
                  {/* end::Input */}
                  {formik.touched.loads && formik.errors.loads && (
                    <div className='fv-plugins-message-container'>
                      <span role='alert'>{formik.errors.loads}</span>
                    </div>
                  )}
              </div>
              <div className='mb-7 col-4'>
                {/* begin::Label */}
                <label className='required fw-bold fs-6 mb-2'>Finished dumping</label>
                <input
                  placeholder='load count'
                  {...formik.getFieldProps('loads')}
                  type='time'
                  name='loads'
                  className={clsx(
                    'form-control form-control-solid mb-3 mb-lg-0',
                    {'is-invalid': formik.touched.loads && formik.errors.loads},
                    {
                      'is-valid': formik.touched.loads && !formik.errors.loads,
                    }
                  )}
                  autoComplete='off'
                  disabled={formik.isSubmitting || isDetailLoading}
                />
                  {/* end::Input */}
                  {formik.touched.loads && formik.errors.loads && (
                    <div className='fv-plugins-message-container'>
                      <span role='alert'>{formik.errors.loads}</span>
                    </div>
                  )}
              </div>
              
            </div>
            <label className='fw-bold fs-6 mb-5'>Loader</label>
            <div className="row border border-dark">
              <div className='mb-7 col-4'>
                {/* begin::Label */}
                <label className='required fw-bold fs-6 mb-2'>Queue Duration</label>
                <input
                  placeholder='queue'
                  {...formik.getFieldProps('loads')}
                  type='text'
                  name='loads'
                  className={clsx(
                    'form-control form-control-solid mb-3 mb-lg-0',
                    {'is-invalid': formik.touched.loads && formik.errors.loads},
                    {
                      'is-valid': formik.touched.loads && !formik.errors.loads,
                    }
                  )}
                  autoComplete='off'
                  disabled={formik.isSubmitting || isDetailLoading}
                />
                  {/* end::Input */}
                  {formik.touched.loads && formik.errors.loads && (
                    <div className='fv-plugins-message-container'>
                      <span role='alert'>{formik.errors.loads}</span>
                    </div>
                  )}
              </div>
              <div className='mb-7 col-4'>
                {/* begin::Label */}
                <label className='required fw-bold fs-6 mb-2'>Spot Duration</label>
                <input
                  placeholder='spot'
                  {...formik.getFieldProps('loads')}
                  type='text'
                  name='loads'
                  className={clsx(
                    'form-control form-control-solid mb-3 mb-lg-0',
                    {'is-invalid': formik.touched.loads && formik.errors.loads},
                    {
                      'is-valid': formik.touched.loads && !formik.errors.loads,
                    }
                  )}
                  autoComplete='off'
                  disabled={formik.isSubmitting || isDetailLoading}
                />
                  {/* end::Input */}
                  {formik.touched.loads && formik.errors.loads && (
                    <div className='fv-plugins-message-container'>
                      <span role='alert'>{formik.errors.loads}</span>
                    </div>
                  )}
              </div>
              <div className='mb-7 col-4'> 
                {/* begin::Label */}
                <label className='required fw-bold fs-6 mb-2'>Loading Duration</label>
                <input
                  placeholder='loading'
                  {...formik.getFieldProps('loads')}
                  type='text'
                  name='loads'
                  className={clsx(
                    'form-control form-control-solid mb-3 mb-lg-0',
                    {'is-invalid': formik.touched.loads && formik.errors.loads},
                    {
                      'is-valid': formik.touched.loads && !formik.errors.loads,
                    }
                  )}
                  autoComplete='off'
                  disabled={formik.isSubmitting || isDetailLoading}
                />
                  {/* end::Input */}
                  {formik.touched.loads && formik.errors.loads && (
                    <div className='fv-plugins-message-container'>
                      <span role='alert'>{formik.errors.loads}</span>
                    </div>
                  )}
              </div>
              
            </div>
            <label className='fw-bold fs-6 mb-5'>Destination</label>
            <div className="row">
              <div className='mb-7 col-4'>
                {/* begin::Label */}
                <label className='required fw-bold fs-6 mb-2'>Queue Duration</label>
                <input
                  placeholder='queue'
                  {...formik.getFieldProps('loads')}
                  type='text'
                  name='queue'
                  className={clsx(
                    'form-control form-control-solid mb-3 mb-lg-0',
                    {'is-invalid': formik.touched.loads && formik.errors.loads},
                    {
                      'is-valid': formik.touched.loads && !formik.errors.loads,
                    }
                  )}
                  autoComplete='off'
                  disabled={formik.isSubmitting || isDetailLoading}
                />
                  {/* end::Input */}
                  {formik.touched.loads && formik.errors.loads && (
                    <div className='fv-plugins-message-container'>
                      <span role='alert'>{formik.errors.loads}</span>
                    </div>
                  )}
              </div>
              <div className='mb-7 col-4'>
                {/* begin::Label */}
                <label className='required fw-bold fs-6 mb-2'>Spot Duration</label>
                <input
                  placeholder='spot'
                  {...formik.getFieldProps('loads')}
                  type='text'
                  name='spot'
                  className={clsx(
                    'form-control form-control-solid mb-3 mb-lg-0',
                    {'is-invalid': formik.touched.loads && formik.errors.loads},
                    {
                      'is-valid': formik.touched.loads && !formik.errors.loads,
                    }
                  )}
                  autoComplete='off'
                  disabled={formik.isSubmitting || isDetailLoading}
                />
                  {/* end::Input */}
                  {formik.touched.loads && formik.errors.loads && (
                    <div className='fv-plugins-message-container'>
                      <span role='alert'>{formik.errors.loads}</span>
                    </div>
                  )}
              </div>
              <div className='mb-7 col-4'> 
                {/* begin::Label */}
                <label className='required fw-bold fs-6 mb-2'>Loading Duration</label>
                <input
                  placeholder='loading'
                  {...formik.getFieldProps('loads')}
                  type='text'
                  name='loading'
                  className={clsx(
                    'form-control form-control-solid mb-3 mb-lg-0',
                    {'is-invalid': formik.touched.loads && formik.errors.loads},
                    {
                      'is-valid': formik.touched.loads && !formik.errors.loads,
                    }
                  )}
                  autoComplete='off'
                  disabled={formik.isSubmitting || isDetailLoading}
                />
                  {/* end::Input */}
                  {formik.touched.loads && formik.errors.loads && (
                    <div className='fv-plugins-message-container'>
                      <span role='alert'>{formik.errors.loads}</span>
                    </div>
                  )}
              </div>
              
            </div>
            <div className="row">
              <div className='mb-7 col-6'>
                {/* begin::Label */}
                <label className='required fw-bold fs-6 mb-2'>Shift</label>
                <select name="shift" id="cars" className={clsx(
                  'form-control form-control-solid mb-3 mb-lg-0',
                  {'is-invalid': formik.touched.shift && formik.errors.shift},
                  {
                    'is-valid': formik.touched.shift && !formik.errors.shift,
                  }
                )}>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                
                </select>
                  {/* end::Input */}
                  {formik.touched.shift && formik.errors.shift && (
                    <div className='fv-plugins-message-container'>
                      <span role='alert'>{formik.errors.shift}</span>
                    </div>
                  )}
              </div>
              <div className='mb-7 col-6'>
                {/* begin::Label */}
                <label className='required fw-bold fs-6 mb-2'>Weight</label>
                <select name="weight" id="cars" className={clsx(
                  'form-control form-control-solid mb-3 mb-lg-0',
                  {'is-invalid': formik.touched.weight && formik.errors.weight},
                  {
                    'is-valid': formik.touched.weight && !formik.errors.weight,
                  }
                )}>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                
                </select>
                  {/* end::Input */}
                  {formik.touched.weight && formik.errors.weight && (
                    <div className='fv-plugins-message-container'>
                      <span role='alert'>{formik.errors.weight}</span>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
        <div className='text-center pt-15'>
          <button
            type='reset'
            onClick={() => cancel()}
            className='btn btn-light me-3'
            data-kt-users-modal-action='cancel'
            disabled={formik.isSubmitting || isDetailLoading}
          >
            Discard
          </button>

          <button
            type='submit'
            className='btn btn-primary'
            data-kt-users-modal-action='submit'
            disabled={isDetailLoading || formik.isSubmitting || !formik.isValid || !formik.touched}
          >
            <span className='indicator-label'>Submit</span>
            {(formik.isSubmitting || isDetailLoading) && (
              <span className='indicator-progress'>
                Please wait...{' '}
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            )}
          </button>
        </div>
        {/* end::Actions */}
      </form>
      {(formik.isSubmitting || isDetailLoading) && <DetailsListLoading />}
    </>
  )
}

export {DetailEditModalForm}
