import {useListView} from '../../core/ListViewProvider'
import {OriginsListToolbar} from './OriginListToolbar'
import {OriginsListGrouping} from './OriginsListGrouping'
import {OriginsListSearchComponent} from './OriginsListSearchComponent'

const OriginsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <OriginsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <OriginsListGrouping /> : <OriginsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {OriginsListHeader}
