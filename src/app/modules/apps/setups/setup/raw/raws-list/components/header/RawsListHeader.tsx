import {useListView} from '../../core/ListViewProvider'
import {RawsListToolbar} from './RawListToolbar'
import {RawsListGrouping} from './RawsListGrouping'
import {RawsListSearchComponent} from './RawsListSearchComponent'

const RawsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <RawsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <RawsListGrouping /> : <RawsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {RawsListHeader}
