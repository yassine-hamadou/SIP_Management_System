import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {ShiftsListHeader} from './components/header/ShiftsListHeader'
import {ShiftsTable} from './table/ShiftsTable'
import {ShiftEditModal} from './shift-edit-modal/ShiftEditModal'
import {KTCard} from '../../../../../../../_metronic/helpers'

const ShiftsList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <div className='card card-stretch' style={{width: '100%'}}>
        <ShiftsListHeader />
        <ShiftsTable />
      </div>
      {itemIdForUpdate !== undefined && <ShiftEditModal />}
    </>
  )
}

const ShiftsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <ShiftsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {ShiftsListWrapper}
