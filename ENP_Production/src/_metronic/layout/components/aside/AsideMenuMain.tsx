/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { useIntl } from 'react-intl'
import { KTSVG } from '../../../helpers'
import { AsideMenuItemWithSub } from './AsideMenuItemWithSub'
import { AsideMenuItem } from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({ id: 'MENU.DASHBOARD' })}
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItemWithSub
        to='#'
        title='Entries'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen022.svg'
      >
        <AsideMenuItem
          to='production/entries/cycle-details'
          hasBullet={true}
          title='Cycle Details'
        />
        {/* <AsideMenuItem to='production/entries/cycle-grade' hasBullet={true} title='Cycle Grade' /> */}
        <AsideMenuItem
          to='production/entries/planned-output'
          hasBullet={true}
          title='Planned Output'
        />

        <AsideMenuItemWithSub
          to='#'
          title='Report'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/general/gen028.svg'
        >
          <AsideMenuItem
            to='production/report/production-report'
            title='Production'
            hasBullet={true}
          />
          <AsideMenuItem to='production/report/fuel-report' title='Fuel Report' hasBullet={true} />
          <AsideMenuItem
            to='production/report/equipment-kpi'
            title='Equipment KPI'
            hasBullet={true}
          />
          <AsideMenuItem
            to='production/report/activity-statistics'
            title='Activity Statistics'
            hasBullet={true}
          />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub
          to='#'
          title='Setup'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/coding/cod009.svg'
        >
          <AsideMenuItemWithSub to='#' title='PRO Loader Units' hasBullet={true}>
            <AsideMenuItem to='/production/setup/loader/unit' title='Unit' hasBullet={true} />
            <AsideMenuItem to='/production/setup/loader/operator' title='Operator' hasBullet={true} />
          </AsideMenuItemWithSub>

          <AsideMenuItemWithSub to='#' title='PRO Hauler Units' hasBullet={true}>
            <AsideMenuItem to='/production/setup/hauler/unit' title='Unit' hasBullet={true} />
            <AsideMenuItem to='/production/setup/hauler/operator' title='Operator' hasBullet={true} />
          </AsideMenuItemWithSub>

          <AsideMenuItem to='/production/setup/mine-area' title='PRO Mine Area' hasBullet={true} />

          <AsideMenuItem to='/production/setup/origin' title='PRO Origin' hasBullet={true} />
          
          <AsideMenuItem to='/production/setup/destination' title='PRO Destination' hasBullet={true} />
          <AsideMenuItemWithSub to='#' title='Material' hasBullet={true}>
            <AsideMenuItem to='/production/setup/raw-material' title='Raw' hasBullet={true} />
            <AsideMenuItem to='/production/setup/processed-material' title='Processed' hasBullet={true} />
          </AsideMenuItemWithSub>
          
          <AsideMenuItem to='/production/setup/activity' title='Activity' hasBullet={true} />
          
          <AsideMenuItem to='/production/setup/shift' title='Shift' hasBullet={true} />
        </AsideMenuItemWithSub>
        
        <AsideMenuItemWithSub
          to='#'
          title='Configuration'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/general/gen055.svg'
        >
          <AsideMenuItem to='#' title='Edit' hasBullet={true} />
        </AsideMenuItemWithSub>
      
      </AsideMenuItemWithSub>
      {/*<AsideMenuItemWithSub*/}
      {/*  to='/crafted/accounts'*/}
      {/*  title='Accounts'*/}
      {/*  icon='/media/icons/duotune/communication/com006.svg'*/}
      {/*  fontIcon='bi-person'*/}
      {/*>*/}
      {/*  <AsideMenuItem to='/crafted/account/overview' title='Overview' hasBullet={true} />*/}
      {/*  <AsideMenuItem to='/crafted/account/settings' title='Settings' hasBullet={true} />*/}
      {/*</AsideMenuItemWithSub>*/}
      {/*<AsideMenuItemWithSub*/}
      {/*  to='/error'*/}
      {/*  title='Errors'*/}
      {/*  fontIcon='bi-sticky'*/}
      {/*  icon='/media/icons/duotune/general/gen040.svg'*/}
      {/*>*/}
      {/*  <AsideMenuItem to='/error/404' title='Error 404' hasBullet={true} />*/}
      {/*  <AsideMenuItem to='/error/500' title='Error 500' hasBullet={true} />*/}
      {/*</AsideMenuItemWithSub>*/}
      {/*<AsideMenuItemWithSub*/}
      {/*  to='/crafted/widgets'*/}
      {/*  title='Widgets'*/}
      {/*  icon='/media/icons/duotune/general/gen025.svg'*/}
      {/*  fontIcon='bi-layers'*/}
      {/*>*/}
      {/*  <AsideMenuItem to='/crafted/widgets/lists' title='Lists' hasBullet={true} />*/}
      {/*  <AsideMenuItem to='/crafted/widgets/statistics' title='Statistics' hasBullet={true} />*/}
      {/*  <AsideMenuItem to='/crafted/widgets/charts' title='Charts' hasBullet={true} />*/}
      {/*  <AsideMenuItem to='/crafted/widgets/mixed' title='Mixed' hasBullet={true} />*/}
      {/*  <AsideMenuItem to='/crafted/widgets/tables' title='Tables' hasBullet={true} />*/}
      {/*  <AsideMenuItem to='/crafted/widgets/feeds' title='Feeds' hasBullet={true} />*/}
      {/*</AsideMenuItemWithSub>*/}
      {/*<div className='menu-item'>*/}
      {/*  <div className='menu-content pt-8 pb-2'>*/}
      {/*    <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Apps</span>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<AsideMenuItemWithSub*/}
      {/*  to='/apps/chat'*/}
      {/*  title='Chat'*/}
      {/*  fontIcon='bi-chat-left'*/}
      {/*  icon='/media/icons/duotune/communication/com012.svg'*/}
      {/*>*/}
      {/*  <AsideMenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />*/}
      {/*  <AsideMenuItem to='/apps/chat/group-chat' title='Group Chart' hasBullet={true} />*/}
      {/*  <AsideMenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={true} />*/}
      {/*</AsideMenuItemWithSub>*/}
      {/*<AsideMenuItem*/}
      {/*  to='/apps/user-management/users'*/}
      {/*  icon='/media/icons/duotune/general/gen051.svg'*/}
      {/*  title='User management'*/}
      {/*  fontIcon='bi-layers'*/}
      {/*/>*/}
      {/*<div className='menu-item'>*/}
      {/*  <div className='menu-content'>*/}
      {/*    <div className='separator mx-1 my-4'></div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className='menu-item'>*/}
      {/*  <a*/}
      {/*    target='_blank'*/}
      {/*    className='menu-link'*/}
      {/*    href={process.env.REACT_APP_PREVIEW_DOCS_URL + '/docs/changelog'}*/}
      {/*  >*/}
      {/*    <span className='menu-icon'>*/}
      {/*      <KTSVG path='/media/icons/duotune/general/gen005.svg' className='svg-icon-2' />*/}
      {/*    </span>*/}
      {/*    <span className='menu-title'>Changelog {process.env.REACT_APP_VERSION}</span>*/}
      {/*  </a>*/}
      {/*</div>*/}
    </>
  )
}
