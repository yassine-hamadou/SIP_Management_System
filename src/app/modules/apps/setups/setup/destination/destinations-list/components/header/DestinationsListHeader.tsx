import {useListView} from '../../core/ListViewProvider'
import {DestinationsListToolbar} from './DestinationListToolbar'
import {DestinationsListGrouping} from './DestinationsListGrouping'
import {DestinationsListSearchComponent} from './DestinationsListSearchComponent'

const DestinationsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <DestinationsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <DestinationsListGrouping /> : <DestinationsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {DestinationsListHeader}
