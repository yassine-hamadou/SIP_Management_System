import {useListView} from '../../core/ListViewProvider'
import {ShiftsListToolbar} from './ShiftListToolbar'
import {ShiftsListGrouping} from './ShiftsListGrouping'
import {ShiftsListSearchComponent} from './ShiftsListSearchComponent'

const ShiftsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <ShiftsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <ShiftsListGrouping /> : <ShiftsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {ShiftsListHeader}
