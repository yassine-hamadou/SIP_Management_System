import {useListView} from '../../core/ListViewProvider'
import {LoaderOperatorListToolbar} from './LoaderOperatorListToolbar'
import {LoaderOperatorListGrouping} from './LoaderOperatorListGrouping'
import {LoaderOperatorListSearchComponent} from './LoaderOperatorListSearchComponent'

const LoaderOperatorListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <LoaderOperatorListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <LoaderOperatorListGrouping /> : <LoaderOperatorListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {LoaderOperatorListHeader}
