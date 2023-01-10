import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {ActivitysListHeader} from './components/header/ActivitysListHeader'
import {ActivitysTable} from './table/ActivitysTable'
import {ActivityEditModal} from './activity-edit-modal/ActivityEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const ActivitysList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <ActivitysListHeader />
        <ActivitysTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <ActivityEditModal />}
    </>
  )
}

const ActivitysListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <ActivitysList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {ActivitysListWrapper}
