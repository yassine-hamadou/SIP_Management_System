import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../_metronic/layout/core'
import {GradeListWrapper} from './grade-list/GradeList'

const gradeBreadcrumbs: Array<PageLink> = [
  {
    title: 'Grade',
    path: '/apps/setups/entries/grade/grades',
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

const GradesPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='grades'
          element={
            <>
              <PageTitle breadcrumbs={gradeBreadcrumbs}>All Grade</PageTitle>
              <GradeListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/setups/entries/grade/grades' />} />
    </Routes>
  )
}

export default GradesPage
