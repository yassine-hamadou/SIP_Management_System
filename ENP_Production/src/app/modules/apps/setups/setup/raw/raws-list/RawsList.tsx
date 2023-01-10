import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {RawsListHeader} from './components/header/RawsListHeader'
import {RawsTable} from './table/RawsTable'
import {RawEditModal} from './raw-edit-modal/RawEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const RawsList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <RawsListHeader />
        <RawsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <RawEditModal />}
    </>
  )
}

const RawsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <RawsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {RawsListWrapper}
