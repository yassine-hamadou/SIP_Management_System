import {KTSVG} from '../../../../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
// import {UsersListFilter} from './UsersListFilter'

const HaulerUnitsListToolbar = () => {
  const {setItemIdForUpdate} = useListView()
  const openAddHaulerUnitModal = () => {
    setItemIdForUpdate(null)
  }

  return (
    <div className='d-flex justify-content-end' data-kt-User-table-toolbar='base'>
      {/* <HaulerUnitsListFilter /> */}

      {/* begin::Export */}
      <button type='button' className='btn btn-light-primary me-3'>
        <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
        Export
      </button>
      {/* end::Export */}

      {/* begin::Add HaulerUnit */}
      <button type='button' className='btn btn-primary' onClick={openAddHaulerUnitModal}>
        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
        Add HaulerUnit
      </button>
      {/* end::Add user */}
    </div>
  )
}

export {HaulerUnitsListToolbar}
