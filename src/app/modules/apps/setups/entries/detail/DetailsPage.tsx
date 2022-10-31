import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {DetailsListWrapper} from './details-list/DetailsList'

const detailsBreadcrumbs: Array<PageLink> = [
  {
    title: 'Details',
    path: '/apps/setups/entries/detail/details',
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

const DetailsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='details'
          element={
            <>
              <PageTitle breadcrumbs={detailsBreadcrumbs}>Circle Details</PageTitle>
              <DetailsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/entries/detail/details' />} />
    </Routes>
  )
}

export default DetailsPage
