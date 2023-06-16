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
            to='projects/'
            hasBullet={false} 
            icon='/media/icons/duotune/finance/fin005.svg'
            title='Projects' 
          />

          <AsideMenuItemWithSub to='#' title="Entries" icon='/media/icons/duotune/ecommerce/ecm010.svg' hasBullet={false}>
            <AsideMenuItem to='purchaseorders/' hasBullet={true} title='Purchase Orders'/>
            <AsideMenuItem to='invoices/' hasBullet={true} title='Invioces'/>
            <AsideMenuItem to='payments/' hasBullet={true} title='Payments'/>
          </AsideMenuItemWithSub> 
          <AsideMenuItem to='#' icon='/media/icons/duotune/finance/fin008.svg' hasBullet={false} title='Reports'/>

          <AsideMenuItemWithSub to='#' title="Setups" icon='/media/icons/duotune/technology/teh004.svg' hasBullet={false}>
            <AsideMenuItem to='projectTypes/' hasBullet={true} title='ProjectTypes'/>
            <AsideMenuItem to='activities/' hasBullet={true} title='Activities'/>
            <AsideMenuItem to='clients/' hasBullet={true} title='Clients'/>
            <AsideMenuItem to='costCategories/' hasBullet={true} title='Cost Categories'/>
            <AsideMenuItem to='currencies/' hasBullet={true} title='Currencies'/>
            <AsideMenuItem to='suppliers/' hasBullet={true} title='Suppliers'/>
          </AsideMenuItemWithSub>

          <div className='menu-item'>
            <div className='menu-content'>
              <div className='separator  mx-1 my-4'></div>
            </div>
          </div>
          <AsideMenuItemWithSub to='#' title="Configuration" icon='/media/icons/duotune/technology/teh004.svg' hasBullet={false}>
            <AsideMenuItem to='#' hasBullet={true} title='Company Info'/>
            <AsideMenuItem to='#' hasBullet={true} title='User'/>
          </AsideMenuItemWithSub>
        

    </>
  )
}
