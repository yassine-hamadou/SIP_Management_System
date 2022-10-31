import {useListView} from '../../core/ListViewProvider'
import {MineAreaListToolbar} from './MineAreaListToolbar'
import {MineAreaListGrouping} from './MineAreaListGrouping'
import {MineAreaListSearchComponent} from './MineAreaListSearchComponent'

const MineAreaListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <MineAreaListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <MineAreaListGrouping /> : <MineAreaListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {MineAreaListHeader}
