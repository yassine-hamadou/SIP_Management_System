import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {LoaderUnitsListHeader} from './components/header/LoaderUnitsListHeader'
import {LoaderUnitsTable} from './table/LoaderUnitsTable'
import {LoaderUnitEditModal} from './loaderUnit-edit-modal/LoaderUnitEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const LoaderUnitsList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <LoaderUnitsListHeader />
        <LoaderUnitsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <LoaderUnitEditModal />}
    </>
  )
}

const LoaderUnitsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <LoaderUnitsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {LoaderUnitsListWrapper}
