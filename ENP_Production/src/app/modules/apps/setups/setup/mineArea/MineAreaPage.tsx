import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {MineAreaListWrapper} from './mineArea-list/MineAreaList'

const mineAreaBreadcrumbs: Array<PageLink> = [
  {
    title: 'MineArea',
    path: '/apps/setups/setup/mineArea/mineAreas',
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

const MineAreaPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='mineAreas'
          element={
            <>
              <PageTitle breadcrumbs={mineAreaBreadcrumbs}>All MineAreas</PageTitle>
              <MineAreaListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/setup/mineArea/mineAreas' />} />
    </Routes>
  )
}

export default MineAreaPage
