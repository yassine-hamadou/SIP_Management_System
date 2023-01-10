import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {DestinationsListWrapper} from './destinations-list/DestinationsList'

const destinationsBreadcrumbs: Array<PageLink> = [
  {
    title: 'Destinations',
    path: '/apps/setups/setup/destination/destinations',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const DestinationsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='destinations'
          element={
            <>
              <PageTitle breadcrumbs={destinationsBreadcrumbs}>All Destination</PageTitle>
              <DestinationsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/setup/destination/destinations' />} />
    </Routes>
  )
}

export default DestinationsPage
