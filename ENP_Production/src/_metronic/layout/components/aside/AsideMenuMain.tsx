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
        fontIcon='bi bi-people fs-2'
      />
      
      {/* <AsideMenuItem
        to='/apps/user-management/users'
        icon='/media/icons/custom/people.svg'
        title='Employees'
        fontIcon='bi bi-people fs-2'
      /> */}
      {/** Processes starts here**/}

      <AsideMenuItemWithSub
        to='/crafted/accounts'
        title='Entries'
        icon='/media/icons/duotune/communication/com005.svg'
        fontIcon='bi-person'
      > 
        <AsideMenuItem to='/apps/setups/entries/detail/details' title='Details' hasBullet={true} />
        <AsideMenuItem to='/apps/setups/entries/grade/grades' title='Grades' hasBullet={true} />
        <AsideMenuItem to='/apps/setups/entries/plan/plans' title='Planned Out' hasBullet={true} />
        <AsideMenuItem to='/apps' title='Test Repot' hasBullet={true} />
      {/** Processes payroll starts here**/}

       
       
      </AsideMenuItemWithSub>

      {/** Reports starts here**/}
      <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-4'></div>
        </div>
      </div>
      {/** Setup starts here**/}
      <AsideMenuItemWithSub to='/crafted/setup/' icon='/media/icons/custom/settings.svg' title='SetUp' hasBullet={false} >
        <AsideMenuItem to='/apps/setups/setup/activity/activitys' title='Activity' hasBullet={true} />
        <AsideMenuItem to='/apps/setups/setup/loaderUnit/loaderUnits' title='Units' hasBullet={true} />
        {/* <AsideMenuItem to='/apps/setups/setup/destination/destinations' title='Destination' hasBullet={true} />
        <AsideMenuItemWithSub to='/crafted/setup/'  title='Hauler' hasBullet={true} >
          <AsideMenuItem to='/apps/setups/setup/haulerUnit/haulerUnits' title='Units' hasBullet={true} />
          <AsideMenuItem to='/apps/setups/setup/haulerOperator/haulerOperators' title='Operators' hasBullet={true} />
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub to='/crafted/setup/'  title='Loader' hasBullet={true} >
          <AsideMenuItem to='/apps/setups/setup/loaderUnit/loaderUnits' title='Units' hasBullet={true} />
          <AsideMenuItem to='apps/setups/setup/loaderOperator/loaderOperators' title='Operators' hasBullet={true} />
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub to='/crafted/setup/'  title='Materials' hasBullet={true} > 
          <AsideMenuItem to='/apps/setups/setup/raw/raws' title='Raw ' hasBullet={true} />
          <AsideMenuItem to='/apps/setups/setup/processed/processeds' title='Processed' hasBullet={true} />
        </AsideMenuItemWithSub>
        <AsideMenuItem to='/apps/setups/setup/mineArea/mineAreas' title='Mine Area' hasBullet={true} />
        <AsideMenuItem to='/apps/setups/setup/origin/origins' title='Origin ' hasBullet={true} /> */}
        <AsideMenuItem to='/apps/setups/setup/shift/shifts' title='Shift' hasBullet={true} />
      </AsideMenuItemWithSub>
      
    </>
  )
}
