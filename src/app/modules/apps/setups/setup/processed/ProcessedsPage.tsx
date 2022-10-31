import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {ProcessedsListWrapper} from './processeds-list/ProcessedsList'

const ProcessedsBreadcrumbs: Array<PageLink> = [
  {
    title: 'Processeds',
    path: '/apps/setups/setup/processed/processeds',
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

const ProcessedsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='processeds'
          element={
            <>
              <PageTitle breadcrumbs={ProcessedsBreadcrumbs}>All Processed</PageTitle>
              <ProcessedsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/setup/processed/processeds' />} />
    </Routes>
  )
}

export default ProcessedsPage
