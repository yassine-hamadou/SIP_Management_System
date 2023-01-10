import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {ShiftsListWrapper} from './shiftslist/ShiftsList'

const ShiftsBreadcrumbs: Array<PageLink> = [
  {
    title: 'Shifts',
    path: '/apps/setups/setup/shift/shifts',
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

const ShiftsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='shifts'
          element={
            <>
              <PageTitle breadcrumbs={ShiftsBreadcrumbs}>All shift</PageTitle>
              <ShiftsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/setup/shift/shifts' />} />
    </Routes>
  )
}

export default ShiftsPage
