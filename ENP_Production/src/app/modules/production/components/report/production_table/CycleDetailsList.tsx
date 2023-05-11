import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {DetailsListHeader} from './components/header/UsersListHeader'
import {DetailsTable} from './table/DetailsTable'
import {UserEditModal} from './user-edit-modal/UserEditModal'
import { KTCard } from '../../../../../../_metronic/helpers'
import { ReportCard } from '../ReportCardItem'

const CycleDetailsList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <DetailsListHeader />
        <DetailsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <UserEditModal />}
    </>
  )
}


const ProductionReportTable = () => {

  const ProductionReportData = [
    {
      title: "Production Report",
      reports: [
        { title: "Report", link: "/" },
        { title: "Report", link: "/" },
        { title: "Report", link: "/" },
      ]
    },
  ]

  return (
    <div>
      <div className='row col-12 mb-10'>
        {
          ProductionReportData.map((report, index) => {
            return (
              <div className='col-4' key={index}>
                <ReportCard data={report} />
              </div>
            )
          })
        }
      </div>

    </div>
  )

}

export {ProductionReportTable}
