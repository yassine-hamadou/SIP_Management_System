import {useListView} from '../../core/ListViewProvider'
import {ActivitysListToolbar} from './ActivityListToolbar'
import {ActivitysListGrouping} from './ActivitysListGrouping'
import {ActivitysListSearchComponent} from './ActivitysListSearchComponent'

const ActivitysListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <ActivitysListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <ActivitysListGrouping /> : <ActivitysListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {ActivitysListHeader}
