import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {HaulerOperatorsListWrapper} from './haulerOperators-list/HaulerOperatorsList'

const HaulerOperatorsBreadcrumbs: Array<PageLink> = [
  {
    title: 'HaulerOperators',
    path: '/apps/setups/setup/haulerOperator/haulerOperators',
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

const HaulerOperatorsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='haulerOperators'
          element={
            <>
              <PageTitle breadcrumbs={HaulerOperatorsBreadcrumbs}>All HaulerOperator</PageTitle>
              <HaulerOperatorsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/setup/haulerOperator/haulerOperators' />} />
    </Routes>
  )
}

export default HaulerOperatorsPage
