import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {DestinationsListHeader} from './components/header/DestinationsListHeader'
import {DestinationsTable} from './table/DestinationsTable'
import {DestinationEditModal} from './destination-edit-modal/DestinationEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const DestinationsList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <DestinationsListHeader />
        <DestinationsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <DestinationEditModal />}
    </>
  )
}

const DestinationsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <DestinationsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {DestinationsListWrapper}
