import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {RawsListWrapper} from './raws-list/RawsList'

const RawsBreadcrumbs: Array<PageLink> = [
  {
    title: 'Raws',
    path: '/apps/setups/setup/raw/raws',
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

const RawsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='raws'
          element={
            <>
              <PageTitle breadcrumbs={RawsBreadcrumbs}>All Raw</PageTitle>
              <RawsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/setup/raw/raws' />} />
    </Routes>
  )
}

export default RawsPage
