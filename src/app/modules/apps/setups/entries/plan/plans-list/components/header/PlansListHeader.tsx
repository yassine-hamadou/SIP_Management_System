import {useListView} from '../../core/ListViewProvider'
import {PlansListToolbar} from './PlanListToolbar'
import {PlansListGrouping} from './PlansListGrouping'
import {PlansListSearchComponent} from './PlansListSearchComponent'

const PlansListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <PlansListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <PlansListGrouping /> : <PlansListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {PlansListHeader}
