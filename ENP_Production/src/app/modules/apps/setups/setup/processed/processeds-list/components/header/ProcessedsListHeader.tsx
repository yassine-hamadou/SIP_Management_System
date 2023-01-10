import {useListView} from '../../core/ListViewProvider'
import {ProcessedsListToolbar} from './ProcessedListToolbar'
import {ProcessedsListGrouping} from './ProcessedsListGrouping'
import {ProcessedsListSearchComponent} from './ProcessedsListSearchComponent'

const ProcessedsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <ProcessedsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <ProcessedsListGrouping /> : <ProcessedsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {ProcessedsListHeader}
