import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {OriginsListWrapper} from './origins-list/OriginsList'

const OriginsBreadcrumbs: Array<PageLink> = [
  {
    title: 'Origins',
    path: '/apps/setups/setup/origin/origins',
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

const OriginsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='origins'
          element={
            <>
              <PageTitle breadcrumbs={OriginsBreadcrumbs}>All Origin</PageTitle>
              <OriginsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/setup/origin/origins' />} />
    </Routes>
  )
}

export default OriginsPage
