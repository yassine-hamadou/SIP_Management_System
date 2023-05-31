import {ListViewProvider, useListView} from './production_table/core/ListViewProvider'
import {QueryRequestProvider} from './production_table/core/QueryRequestProvider'
import {QueryResponseProvider} from './production_table/core/QueryResponseProvider'
import {DetailsListHeader} from './production_table/components/header/UsersListHeader'
import {DetailsTable} from './production_table/table/DetailsTable'
import {UserEditModal} from './production_table/user-edit-modal/UserEditModal'
import { KTCard } from '../../../../../_metronic/helpers'
import { ReportCard } from './ReportCardItem'

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
      title: "Lists",
      reports: [
        { title: "Hauler Units Report", link: "/" },
        { title: "Loader Units Report", link: "/" },
        { title: "Origin Report", link: "/" },
        { title: "Destination Report", link: "/" },
        { title: "Production Materials Report", link: "/" },
        { title: "Shifts Report", link: "/" },
      ]
    },
    {
      title: "Production Report",
      reports: [
        { title: "Batch Totals Report", link: "/" },
        { title: "Batch Summary Report", link: "/" },
      ]
    },
    
    {
      title: "Statistics",
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
