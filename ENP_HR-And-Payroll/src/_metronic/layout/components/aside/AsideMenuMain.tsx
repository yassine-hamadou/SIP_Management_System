/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../helpers'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />

      <AsideMenuItem 
        to='employee/' 
        // hasBullet={true} 
        icon='/media/icons/duotune/communication/com013.svg'
        title='Employees' 
      />

      
      <AsideMenuItemWithSub
        to='#'
        title='Transactions'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen019.svg'
      >
       
        <AsideMenuItemWithSub to='#' title='Human Resource' hasBullet={true}>
          <AsideMenuItem to='transaction/hr/recruitment-selection' hasBullet={true} title='Recruitment and Selection' />
          <AsideMenuItem to='transaction/hr/compensation-benefit' hasBullet={true} title='Compensation and Benefits' />
          <AsideMenuItem to='transaction/hr/training-development' hasBullet={true} title='Trainig and Development' />
          <AsideMenuItem to='transaction/hr/appraisal-performance' hasBullet={true} title='Appraisal and Performance' />
          <AsideMenuItem to='transaction/hr/disciplinary-actions' hasBullet={true} title='Disciplinary Actions' />
          <AsideMenuItem to='transaction/hr/leave-planning' hasBullet={true} title='Leave Planning' />
          <AsideMenuItem to='transaction/hr/medical-entries' hasBullet={true} title='Medical Entries' />
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub to='#' title='Payroll' hasBullet={true}>
          <AsideMenuItem to='transaction/payroll/timesheet' hasBullet={true} title='Timesheet' />
          <AsideMenuItem to='transaction/payroll/recurrent' hasBullet={true} title='Recurrent' />
          <AsideMenuItem to='transaction/payroll/non-recurrent' hasBullet={true} title='Non-recurrent' />
          <AsideMenuItem to='transaction/payroll/saving-schemes' hasBullet={true} title='Saving Schemes' />
          <AsideMenuItem to='transaction/payroll/salary-upload' hasBullet={true} title='Salary Upload' />
          <AsideMenuItem to='transaction/payroll/relief-rebate' hasBullet={true} title='Relief and Rebate Input' />
        </AsideMenuItemWithSub>
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='#'
        title='Processes'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen022.svg'
      >
        <AsideMenuItemWithSub to='#' title='Human Resource' hasBullet={true}>
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub to='#' title='Payroll' hasBullet={true}>
          <AsideMenuItem to='processes/payroll/approval' hasBullet={true} title='Approval' />
          <AsideMenuItem to='processes/payroll/check-tax' hasBullet={true} title='Check Tax' />
          <AsideMenuItem to='processes/payroll/journal' hasBullet={true} title='Journal' />
          <AsideMenuItem to='processes/payroll/project-sheets-input' hasBullet={true} title='Project Sheets and Inputs' />
          <AsideMenuItem to='processes/payroll/payrun' hasBullet={true} title='Payrun' />
        </AsideMenuItemWithSub>
        
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='#'
        title='Report'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen028.svg'
      >
        <AsideMenuItem 
        to='all-reports/' 
        hasBullet={true} 
        
        title='All Reports' 
        />
        
      </AsideMenuItemWithSub>
      <div className='menu-item'>
       <div className='menu-content'>
         <div className='separator  mx-1 my-4'></div>
       </div>
      </div>
      <AsideMenuItemWithSub
        to='#'
        title='Setup'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/coding/cod009.svg'
      >
        <AsideMenuItemWithSub to='#' title='Administration' hasBullet={true}>
          <AsideMenuItem to='setup/administration/audit' hasBullet={true} title='Audit' />
          <AsideMenuItem to='setup/administration/company' hasBullet={true} title='Company' />
          <AsideMenuItem to='setup/administration/configurations' hasBullet={true} title='Configurations' />
          <AsideMenuItem to='setup/administration/user-management' hasBullet={true} title='User Management' />
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub to='#' title='Employee' hasBullet={true}>
          <AsideMenuItem to='setup/employee/category' hasBullet={true} title='Categories' />
          <AsideMenuItem to='setup/employee/department' hasBullet={true} title='Department' />
          <AsideMenuItem to='setup/employee/grades' hasBullet={true} title='Grades' />
          <AsideMenuItem to='setup/employee/jobtitle' hasBullet={true} title='Job Title' />
          <AsideMenuItem to='setup/employee/nationality' hasBullet={true} title='Nationality' />
          <AsideMenuItem to='setup/employee/notches' hasBullet={true} title='Notches' />
          <AsideMenuItem to='setup/employee/paygroups' hasBullet={true} title='Paygroups' />
          <AsideMenuItem to='setup/employee/regions' hasBullet={true} title='Regions' />
          <AsideMenuItem to='setup/employee/salary-upgrade' hasBullet={true} title='Salary Upgrade' />
          <AsideMenuItem to='setup/employee/units' hasBullet={true} title='Units' />
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub to='#' title='Human Resource' hasBullet={true}>
          <AsideMenuItem to='setup/hr/appraisals' hasBullet={true} title='Appraisals' />
          <AsideMenuItem to='setup/hr/disciplinary-action' hasBullet={true} title='Disciplinary Actions' />
          <AsideMenuItem to='setup/hr/leaves' hasBullet={true} title='Leaves' />
          <AsideMenuItem to='setup/hr/medical' hasBullet={true} title='Medicals' />
          <AsideMenuItem to='setup/hr/recruitments' hasBullet={true} title='Recruitments' />
          <AsideMenuItem to='setup/hr/training' hasBullet={true} title='Trainings' />
        </AsideMenuItemWithSub>
  
        <AsideMenuItemWithSub to='#' title='Payroll' hasBullet={true}>
          <AsideMenuItem to='setup/payroll/approval-level' hasBullet={true} title='Approval Level' />
          <AsideMenuItem to='setup/payroll/benefit' hasBullet={true} title='Benefit' />
          <AsideMenuItem to='setup/payroll/currency' hasBullet={true} title='Currency' />
          <AsideMenuItem to='setup/payroll/deduction' hasBullet={true} title='Deduction' />
          <AsideMenuItem to='setup/payroll/loan' hasBullet={true} title='Loan' />
          <AsideMenuItem to='setup/payroll/overtime' hasBullet={true} title='Overtime' />
          <AsideMenuItem to='setup/payroll/parameter' hasBullet={true} title='Parameter' />
          <AsideMenuItem to='setup/payroll/period' hasBullet={true} title='Period' />
          <AsideMenuItem to='setup/payroll/saving-scheme' hasBullet={true} title='Saving Scheme' />
          <AsideMenuItem to='setup/payroll/tax' hasBullet={true} title='Tax'/>
        </AsideMenuItemWithSub>

      </AsideMenuItemWithSub>
       
        

      <AsideMenuItemWithSub
        to='#'
        title='Configuration'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen055.svg'
      >
        <AsideMenuItem to='#' title='Edit' hasBullet={true} />
      </AsideMenuItemWithSub>
      
    </>
  )
}
