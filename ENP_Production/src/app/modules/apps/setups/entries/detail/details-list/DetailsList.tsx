import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {DetailsListHeader} from './components/header/DetailsListHeader'
import {DetailsTable} from './table/DetailsTable'
import {DetailEditModal} from './detail-edit-modal/DetailEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const DetailsList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <DetailsListHeader />
        <DetailsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <DetailEditModal />}
    </>
  )
}

const DetailsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <DetailsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {DetailsListWrapper}
