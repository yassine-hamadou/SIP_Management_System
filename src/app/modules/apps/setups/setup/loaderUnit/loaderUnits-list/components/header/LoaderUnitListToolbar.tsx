import {KTSVG} from '../../../../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
// import {UsersListFilter} from './UsersListFilter'

const LoaderUnitsListToolbar = () => {
  const {setItemIdForUpdate} = useListView()
  const openAddLoaderUnitModal = () => {
    setItemIdForUpdate(null)
  }

  return (
    <div className='d-flex justify-content-end' data-kt-loaderunit-table-toolbar='base'>
      {/* <BanksListFilter /> */}

      {/* begin::Export */}
      <button type='button' className='btn btn-light-primary me-3'>
        <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
        Export
      </button>
      {/* end::Export */}

      {/* begin::Add Bank */}
      <button type='button' className='btn btn-primary' onClick={openAddLoaderUnitModal}>
        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
        Add Loader-Unit
      </button>
      {/* end::Add user */}
    </div>
  )
}

export {LoaderUnitsListToolbar}
