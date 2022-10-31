import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {OriginsListHeader} from './components/header/OriginsListHeader'
import {OriginsTable} from './table/OriginsTable'
import {OriginEditModal} from './origin-edit-modal/OriginEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const OriginsList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <OriginsListHeader />
        <OriginsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <OriginEditModal />}
    </>
  )
}

const OriginsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <OriginsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {OriginsListWrapper}
