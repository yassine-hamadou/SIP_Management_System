import {useListView} from '../../core/ListViewProvider'
import {LoaderUnitsListToolbar} from './LoaderUnitListToolbar'
import {LoaderUnitsListGrouping} from './LoaderUnitsListGrouping'
import {LoaderUnitsListSearchComponent} from './LoaderUnitsListSearchComponent'

const LoaderUnitsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <LoaderUnitsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <LoaderUnitsListGrouping /> : <LoaderUnitsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {LoaderUnitsListHeader}
