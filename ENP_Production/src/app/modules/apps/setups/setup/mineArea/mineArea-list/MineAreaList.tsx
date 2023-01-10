import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {MineAreaListHeader} from './components/header/MineAreaListHeader'
import {MineAreaTable} from './table/MineAreaTable'
import {MineAreaEditModal} from './mineArea-edit-modal/MineAreaEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const MineAreaList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <MineAreaListHeader />
        <MineAreaTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <MineAreaEditModal />}
    </>
  )
}

const MineAreaListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <MineAreaList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {MineAreaListWrapper}
