import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {LoaderOperatorListHeader} from './components/header/LoaderOperatorListHeader'
import {LoaderOperatorTable} from './table/LoaderOperatorTable'
import {LoaderOperatorEditModal} from './loaderOperator-edit-modal/LoaderOperatorEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const LoaderOperatorList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <LoaderOperatorListHeader />
        <LoaderOperatorTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <LoaderOperatorEditModal />}
    </>
  )
}

const LoaderOperatorListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <LoaderOperatorList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {LoaderOperatorListWrapper}
