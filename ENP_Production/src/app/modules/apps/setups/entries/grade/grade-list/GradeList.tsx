import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {GradeListHeader} from './components/header/GradeListHeader'
import {GradeTable} from './table/GradeTable'
import {GradeEditModal} from './grade-edit-modal/GradeEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const GradeList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <GradeListHeader />
        <GradeTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <GradeEditModal />}
    </>
  )
}

const GradeListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <GradeList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {GradeListWrapper}
