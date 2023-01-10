import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {HaulerOperatorsListHeader} from './components/header/HaulerOperatorsListHeader'
import {HaulerOperatorsTable} from './table/HaulerOperatorsTable'
import { HaulerOperatorEditModal } from './haulerOperator-edit-modal/HaulerOperatorEditModal'
// import {HaulerOperatorEditModal} from './haulerOperator-edit-modal/HaulerOperatorEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const HaulerOperatorsList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <HaulerOperatorsListHeader />
        <HaulerOperatorsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <HaulerOperatorEditModal />}
    </>
  )
}

const HaulerOperatorsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <HaulerOperatorsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {HaulerOperatorsListWrapper}
