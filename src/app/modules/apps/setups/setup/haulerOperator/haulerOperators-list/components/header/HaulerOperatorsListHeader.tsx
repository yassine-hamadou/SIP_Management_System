import {useListView} from '../../core/ListViewProvider'
import {HaulerOperatorsListToolbar} from './HaulerOperatorListToolbar'
import {HaulerOperatorsListGrouping} from './HaulerOperatorsListGrouping'
import {HaulerOperatorsListSearchComponent} from './HaulerOperatorsListSearchComponent'

const HaulerOperatorsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <HaulerOperatorsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <HaulerOperatorsListGrouping /> : <HaulerOperatorsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {HaulerOperatorsListHeader}
