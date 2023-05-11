import { KTCard } from '../../../../../../_metronic/helpers'
import { ReportCard } from '../ReportCardItem'
import { DetailsListHeader } from './components/header/UsersListHeader'
import { useListView } from './core/ListViewProvider'
import { DetailsTable } from './table/DetailsTable'
import { UserEditModal } from './user-edit-modal/UserEditModal'

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

const FuelReportTable = () => {
  const FuelReportData = [
    {
      title: "Fuel Report",
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
          FuelReportData.map((report, index) => {
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
export { FuelReportTable }

