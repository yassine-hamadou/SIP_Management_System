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
      {/* <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      /> */}

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
          <AsideMenuItem to='transaction/hr/recruitment-selection' hasBullet={true} title='Recruitments and Selections' />
          <AsideMenuItem to='transaction/hr/compensation-benefit' hasBullet={true} title='Compensations and Benefits' />
          <AsideMenuItem to='transaction/hr/training-development' hasBullet={true} title='Trainings and Developments' />
          <AsideMenuItem to='transaction/hr/appraisal-performance' hasBullet={true} title='Appraisals and Performances' />
          <AsideMenuItem to='transaction/hr/notes' hasBullet={true} title='Notes' />
          <AsideMenuItem to='transaction/hr/leave-planning' hasBullet={true} title='Leaves Planning' />
          <AsideMenuItem to='transaction/hr/medical-entries' hasBullet={true} title='Medical Entries' />
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub to='#' title='Payroll' hasBullet={true}>
          <AsideMenuItem to='transaction/payroll/timesheet' hasBullet={true} title='Timesheets' />
          <AsideMenuItem to='transaction/payroll/recurrent' hasBullet={true} title='Recurrents' />
          <AsideMenuItem to='transaction/payroll/non-recurrent' hasBullet={true} title='Non-recurrents' />
          <AsideMenuItem to='transaction/payroll/saving-schemes' hasBullet={true} title='Saving Schemes' />
          <AsideMenuItem to='transaction/payroll/salary-upgrade' hasBullet={true} title='Salary Upgrades' />
          <AsideMenuItem to='transaction/payroll/relief-rebate' hasBullet={true} title='Reliefs and Rebate Inputs' />
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
          <AsideMenuItem to='processes/payroll/approval' hasBullet={true} title='Approvals' />
          <AsideMenuItem to='processes/payroll/check-tax' hasBullet={true} title='Check Taxes' />
          <AsideMenuItem to='processes/payroll/journal' hasBullet={true} title='Journals' />
          <AsideMenuItem to='processes/payroll/project-sheets-input' hasBullet={true} title='Project Sheets and Inputs' />
          <AsideMenuItem to='processes/payroll/payrun' hasBullet={true} title='Payruns' />
        </AsideMenuItemWithSub>
        
      </AsideMenuItemWithSub>
      
      <AsideMenuItem 
        to='all-reports/' 
        // hasBullet={true} 
        icon='/media/icons/duotune/general/gen028.svg'
        title='Reports' 
      />
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
          <AsideMenuItem to='setup/administration/audit' hasBullet={true} title='Audits' />
          <AsideMenuItem to='setup/administration/company' hasBullet={true} title='Company Infos' />
          <AsideMenuItem to='setup/administration/configurations' hasBullet={true} title='Configurations' />
          <AsideMenuItem to='setup/administration/user-management' hasBullet={true} title='User Management' />
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub to='#' title='Employee' hasBullet={true}>
          <AsideMenuItem to='setup/employee/category' hasBullet={true} title='Categories' />
          {/* <AsideMenuItem to='setup/employee/department' hasBullet={true} title='Department' /> */}
          <AsideMenuItem to='setup/employee/grades' hasBullet={true} title='Grades' />
          <AsideMenuItem to='setup/employee/jobtitle' hasBullet={true} title='Job Titles' />
          <AsideMenuItem to='setup/employee/nationality' hasBullet={true} title='Nationalities' />
          {/* <AsideMenuItem to='setup/employee/notches' hasBullet={true} title='Notches' /> */}
          <AsideMenuItem to='setup/employee/paygroups' hasBullet={true} title='Paygroups' />
          <AsideMenuItem to='setup/employee/divisions' hasBullet={true} title='Divisions' />
          {/* <AsideMenuItem to='setup/employee/salary-upgrade' hasBullet={true} title='Salary Upgrade' /> */}
          {/* <AsideMenuItem to='setup/employee/units' hasBullet={true} title='Units' /> */}
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub to='#' title='Human Resource' hasBullet={true}>
          <AsideMenuItem to='setup/hr/appraisals' hasBullet={true} title='Appraisals' />
          <AsideMenuItem to='setup/hr/company-assets' hasBullet={true} title='Company Assets' />
          <AsideMenuItem to='setup/hr/notes' hasBullet={true} title='Note Categories' />
          <AsideMenuItem to='setup/hr/leaves' hasBullet={true} title='Leaves' />
          <AsideMenuItem to='setup/hr/medical' hasBullet={true} title='Medicals' />
          <AsideMenuItem to='setup/hr/recruitments' hasBullet={true} title='Recruitments' />
          <AsideMenuItem to='setup/hr/training' hasBullet={true} title='Trainings' />
        </AsideMenuItemWithSub>
  
        <AsideMenuItemWithSub to='#' title='Payroll' hasBullet={true}>
          <AsideMenuItem to='setup/payroll/benefit' hasBullet={true} title='Benefits' />
          <AsideMenuItem to='setup/payroll/deduction' hasBullet={true} title='Deductions' />
          <AsideMenuItem to='setup/payroll/saving-scheme' hasBullet={true} title='Saving Schemes' />
          <AsideMenuItem to='setup/payroll/loan' hasBullet={true} title='Loans' />
          <AsideMenuItem to='setup/payroll/approval-level' hasBullet={true} title='Approval Levels' />
          <AsideMenuItem to='setup/payroll/period' hasBullet={true} title='Periods' />
          <AsideMenuItem to='setup/payroll/currency' hasBullet={true} title='Currencies' />
          {/* <AsideMenuItem to='setup/payroll/overtime' hasBullet={true} title='Overtimes' /> */}
          <AsideMenuItem to='setup/payroll/tax' hasBullet={true} title='Taxes'/>
          <AsideMenuItem to='setup/payroll/parameter' hasBullet={true} title='Parameters' />
        </AsideMenuItemWithSub>
      </AsideMenuItemWithSub>      
    </>
  )
}
