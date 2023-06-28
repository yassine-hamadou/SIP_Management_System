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
            <AsideMenuItem to='invoices/' hasBullet={true} title='Invoices'/>
            <AsideMenuItem to='payments/' hasBullet={true} title='Payments'/>
            <AsideMenuItem to='finance-options/' hasBullet={true} title='Finance Option'/>
          </AsideMenuItemWithSub> 
          {/* <AsideMenuItem to='#' icon='/media/icons/duotune/finance/fin008.svg' hasBullet={false} title='Reports'/> */}

          <AsideMenuItemWithSub to='#' icon='/media/icons/duotune/finance/fin008.svg' hasBullet={false} title='Reports'>
            <AsideMenuItem to='cashflow' hasBullet={true} title='Financial Projections'/>
            <AsideMenuItem to='#' hasBullet={true} title='Project Details'/>
            <AsideMenuItem to='#' hasBullet={true} title='Activity Details'/>
            <AsideMenuItem to='#' hasBullet={true} title='Cost Details'/>
            <AsideMenuItem to='#' hasBullet={true} title='Supplier Accounts'/>
            <AsideMenuItem to='#' hasBullet={true} title='Summary'/>
          </AsideMenuItemWithSub>

          <AsideMenuItemWithSub to='#' title="Setups" icon='/media/icons/duotune/technology/teh004.svg' hasBullet={false}>
            <AsideMenuItem to='projectCategories/' hasBullet={true} title='Project Categories'/>
            <AsideMenuItem to='projectTypes/' hasBullet={true} title='Project Types'/>
            <AsideMenuItem to='activities/' hasBullet={true} title='Activities'/>
            <AsideMenuItem to='clients/' hasBullet={true} title='Clients'/>
            <AsideMenuItem to='banks/' hasBullet={true} title='Banks'/>
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
