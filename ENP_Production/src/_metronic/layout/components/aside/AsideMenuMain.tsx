/* eslint-disable react/jsx-no-target-blank */
import { useIntl } from 'react-intl'
import { AsideMenuItem } from './AsideMenuItem'
import { AsideMenuItemWithSub } from './AsideMenuItemWithSub'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { KTSVG, checkIsActive } from '../../../helpers'
import { useLocation } from 'react-router'

export function AsideMenuMain() {
  const intl = useIntl()
  const { pathname } = useLocation()
  const isDashboardActive = checkIsActive(pathname, '/dashboard')
  return (
    <>
      <div className='menu-item'>
        <Link
          className={clsx('menu-link without-sub ml0', { active: isDashboardActive })}
          to='/dashboard'
        >
          <span className='menu-icon'>
            <KTSVG path='/media/icons/duotune/art/art002.svg' className='svg-icon-2' />
          </span>
          <span className='menu-title'>{intl.formatMessage({ id: 'MENU.DASHBOARD' })}</span>
        </Link>
      </div>

      <AsideMenuItemWithSub
        to='#'
        title='Entries'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen022.svg'
      >
        <AsideMenuItem to='production/entries/cycle-details' hasBullet={true} title='Cycle Details' />
        {/* <AsideMenuItem to='production/entries/cycle-grade' hasBullet={true} title='Cycle Grade' /> */}
        <AsideMenuItem to='production/entries/planned-output' hasBullet={true} title='Planned Output' />
        <AsideMenuItem to='production/entries/fuel' hasBullet={true} title='Fuel' />
      </AsideMenuItemWithSub>
      <AsideMenuItem to='production/report/production-report' title='Reports' fontIcon='bi-archive' icon='/media/icons/duotune/general/gen028.svg' />

      <AsideMenuItemWithSub to='#' title='Setup' fontIcon='bi-archive' icon='/media/icons/duotune/coding/cod009.svg'
      >
        <AsideMenuItem to='/production/setup/loader' title='Loader' hasBullet={true} />
        <AsideMenuItem to='/production/setup/hauler' title='Hauler' hasBullet={true} />
        <AsideMenuItem to='/production/setup/drill' title='Drill' hasBullet={true} />
        <AsideMenuItem to='/production/setup/locations' title='Locations' hasBullet={true} />
        <AsideMenuItem to='/production/setup/materials' title='Material' hasBullet={true} />
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
    </>
  )
}
