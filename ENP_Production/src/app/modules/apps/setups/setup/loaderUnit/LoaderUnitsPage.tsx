import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import { LoaderUnitsListWrapper } from './loaderUnits-list/LoaderUnitsList'


const loaderUnitsBreadcrumbs: Array<PageLink> = [
  {
    title: 'LoaderUnit',
    path: '/apps/setups/setup/loaderUnit/loaderUnits',
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

const LoaderUnitsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='loaderUnits'
          element={
            <>
              <PageTitle breadcrumbs={loaderUnitsBreadcrumbs}>All LoaderUnit</PageTitle>
              <LoaderUnitsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/setup/loaderUnit/loaderUnits' />} />
    </Routes>
  )
}

export default LoaderUnitsPage
