import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {PlansListHeader} from './components/header/PlansListHeader'
import {PlansTable} from './table/PlansTable'
import {PlanEditModal} from './plan-edit-modal/PlanEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const PlansList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <PlansListHeader />
        <PlansTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <PlanEditModal />}
    </>
  )
}

const PlansListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <PlansList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {PlansListWrapper}
