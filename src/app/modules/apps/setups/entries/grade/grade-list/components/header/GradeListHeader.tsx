import {useListView} from '../../core/ListViewProvider'
import {GradeListToolbar} from './GradeListToolbar'
import {GradeListGrouping} from './GradeListGrouping'
import {GradeListSearchComponent} from './GradeListSearchComponent'

const GradeListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <GradeListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <GradeListGrouping /> : <GradeListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {GradeListHeader}
