import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {LoaderOperatorListWrapper} from './loaderOperator-list/LoaderOperatorList'

const LoaderOperatorBreadcrumbs: Array<PageLink> = [
  {
    title: 'Loader',
    path: '/apps/setups/setup/loaderOperator/loaderOperators',
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

const LoaderOperatorPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='loaderOperators'
          element={
            <>
              <PageTitle breadcrumbs={LoaderOperatorBreadcrumbs}>All Operators</PageTitle>
              <LoaderOperatorListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/setup/loaderOperator/loaderOperators' />} />
    </Routes>
  )
}

export default LoaderOperatorPage
