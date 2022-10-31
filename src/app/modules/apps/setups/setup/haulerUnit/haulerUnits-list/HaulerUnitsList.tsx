import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {HaulerUnitsListHeader} from './components/header/HaulerUnitsListHeader'
import {HaulerUnitsTable} from './table/HaulerUnitsTable'
import {HaulerUnitEditModal} from './haulerUnit-edit-modal/HaulerUnitEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const HaulerUnitsList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <HaulerUnitsListHeader />
        <HaulerUnitsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <HaulerUnitEditModal />}
    </>
  )
}

const HaulerUnitsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <HaulerUnitsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {HaulerUnitsListWrapper}
