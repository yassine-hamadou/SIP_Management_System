import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {HaulerUnitsListWrapper} from './haulerUnits-list/HaulerUnitsList'

const HaulerUnitsBreadcrumbs: Array<PageLink> = [
  {
    title: 'haulerUnits',
    path: '/apps/setups/setup/haulerUnit/haulerUnits',
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

const HaulerUnitsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='haulerUnits'
          element={
            <>
              <PageTitle breadcrumbs={HaulerUnitsBreadcrumbs}>All HaulerUnit</PageTitle>
              <HaulerUnitsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/setup/haulerUnit/haulerUnits' />} />
    </Routes>
  )
}

export default HaulerUnitsPage
