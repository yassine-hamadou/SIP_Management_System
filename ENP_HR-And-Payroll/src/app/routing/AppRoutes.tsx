/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import { FC, useEffect } from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { PrivateRoutes } from './PrivateRoutes'
import { ErrorsPage } from '../modules/errors/ErrorsPage'
import { Logout, AuthPage, useAuth } from '../modules/auth'
import { App } from '../App'
import { useQuery } from 'react-query'
import { fetchCompanies, fetchUserApplications, fetchUserCompany } from '../services/ApiCalls'
import { message } from 'antd'
import { AppraisalForm } from '../modules/production/components/appraisalForms/AppraisalForm'
import { ObjectivesForm } from '../modules/production/components/appraisalForms/ObjectivesForm'
import { ErrorBoundary } from '@ant-design/pro-components'

/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const { PUBLIC_URL } = process.env

const AppRoutes: FC = () => {
  const { currentUser, tenant } = useAuth()
  const { data: userApplications } = useQuery('userApplications', fetchUserApplications, { cacheTime: 5000 })
  const { data: allCompanies } = useQuery('companies', fetchCompanies, { cacheTime: 5000 })
  const { data: userCompanies } = useQuery('userCompanies', fetchUserCompany, { cacheTime: 5000 })

  const userApp = userApplications?.data.filter((item: any) => item.userId === parseInt(currentUser?.id)).map((filteredItem: any) => {
    return filteredItem?.applicationId?.toString()
  })

  // get the company ids of the user
  const  userCom = userCompanies?.data.filter((item:any )=> item.userId === parseInt(currentUser?.id)).map((filteredItem:any) => {
    return filteredItem?.companyId?.toString()
  })

  const newCompanyNames = allCompanies?.data
    .filter((item : any) => userCom?.includes(item?.id?.toString()))
    .map((item : any) => item?.name?.toLowerCase());

  const hasApp = userApp?.find((applicationId: any) => applicationId === '10')


  const comCheck = newCompanyNames?.some((companyId:any)=>{
    return companyId === tenant?.toLowerCase()
  })

  const expiringDate: any = currentUser?.exp
  const dateObj: any = new Date(expiringDate * 1000);

  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path='error/*' element={<ErrorsPage />} />
          <Route path='logout' element={<Logout />} />
          <Route path='appraisalReviewForm' element={<AppraisalForm />} />
          <Route path='appraisalObjectivesForm'
            element={
              
                <ObjectivesForm />
              
            }
          />

          {currentUser && hasApp && comCheck && tenant && (dateObj > Date.now()) ? (
            <>
              <Route path='/*' element={<PrivateRoutes />} />
              <Route index element={<Navigate to='/hr-dashboard' />} />
            </>
          ) : (
            <>

              <Route path='auth/*' element={<AuthPage />} />
              <Route path='*' element={<Navigate to='/auth' />} />

            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { AppRoutes }
