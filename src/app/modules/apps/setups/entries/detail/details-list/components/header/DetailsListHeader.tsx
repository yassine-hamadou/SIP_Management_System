import {useListView} from '../../core/ListViewProvider'
import {DetailsListToolbar} from './DetailListToolbar'
import {DetailsListGrouping} from './DetailsListGrouping'
import {DetailsListSearchComponent} from './DetailsListSearchComponent'

const DetailsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <DetailsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <DetailsListGrouping /> : <DetailsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {DetailsListHeader}
