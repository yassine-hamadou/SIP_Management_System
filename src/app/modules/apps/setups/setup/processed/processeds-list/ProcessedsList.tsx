import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {ProcessedsListHeader} from './components/header/ProcessedsListHeader'
import {ProcessedsTable} from './table/ProcessedsTable'
import {ProcessedEditModal} from './processed-edit-modal/ProcessedEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const ProcessedsList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <ProcessedsListHeader />
        <ProcessedsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <ProcessedEditModal />}
    </>
  )
}

const ProcessedsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <ProcessedsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {ProcessedsListWrapper}
