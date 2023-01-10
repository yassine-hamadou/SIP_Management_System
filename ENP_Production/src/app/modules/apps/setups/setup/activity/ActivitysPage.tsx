import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {ActivitysListWrapper} from './activitys-list/ActivitysList'

const ActivitysBreadcrumbs: Array<PageLink> = [
  {
    title: 'Activities',
    path: '/apps/setups/setup/activity/activitys',
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

const ActivitysPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='activitys'
          element={
            <>
              <PageTitle breadcrumbs={ActivitysBreadcrumbs}>All Activity</PageTitle>
              <ActivitysListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/setup/activity/activitys' />} />
    </Routes>
  )
}

export default ActivitysPage
