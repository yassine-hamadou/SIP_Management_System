import {useListView} from '../../core/ListViewProvider'
import {HaulerUnitsListToolbar} from './HaulerUnitListToolbar'
import {HaulerUnitsListGrouping} from './HaulerUnitsListGrouping'
import {HaulerUnitsListSearchComponent} from './HaulerUnitsListSearchComponent'

const HaulerUnitsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <HaulerUnitsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <HaulerUnitsListGrouping /> : <HaulerUnitsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {HaulerUnitsListHeader}
