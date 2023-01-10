import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {PlansListWrapper} from './plans-list/PlansList'

const PlansBreadcrumbs: Array<PageLink> = [
  {
    title: 'Plans',
    path: '/apps/setups/entries/plan/plans',
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

const PlansPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='plans'
          element={
            <>
              <PageTitle breadcrumbs={PlansBreadcrumbs}>Planned OutPut</PageTitle>
              <PlansListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/entries/plan/plans' />} />
    </Routes>
  )
}

export default PlansPage
