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
            to='users/' 
            hasBullet={false} 
            icon='/media/icons/duotune/communication/com014.svg'
            title='Users' 
          />
        <AsideMenuItem 
            to='roles/' 
            hasBullet={false} 
            icon='/media/icons/duotune/technology/teh002.svg'
            title='Roles' 
          />
        <AsideMenuItem 
            to='applications/' 
            hasBullet={false} 
            icon='/media/icons/duotune/general/gen062.svg'
            title='Applications' 
          />
        <AsideMenuItem 
            to='user-activity/' 
            hasBullet={false} 
            icon='/media/icons/duotune/finance/fin005.svg'
            title='User Activity Logs'
          />

    </>
  )
}
