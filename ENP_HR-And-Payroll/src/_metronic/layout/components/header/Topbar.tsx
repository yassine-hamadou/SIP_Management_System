import clsx from 'clsx'
import React, {FC} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {
  HeaderUserMenu,
} from '../../../partials'
import {useLayout} from '../../core'
import { useAuth } from '../../../../app/modules/auth'

const toolbarButtonMarginClass = 'ms-1 ms-lg-3',
  toolbarButtonHeightClass = 'w-30px h-30px w-md-40px h-md-40px',
  toolbarUserAvatarHeightClass = 'symbol-30px symbol-md-40px';

const Topbar: FC = () => {
  const {config} = useLayout()
  const {currentUser} = useAuth()

  return (
    <div className='d-flex align-items-stretch flex-shrink-0'>

      <div
        className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}
        id='kt_header_user_menu_toggle'
      >
        {/* begin::Toggle */}
        <div
          className={clsx('cursor-pointer symbol', toolbarUserAvatarHeightClass)}
          data-kt-menu-trigger='click'
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
          data-kt-menu-flip='bottom'
        >
          <img src={toAbsoluteUrl('/media/avatars/user.png')} alt='ENP user Profile' />
          <p>{currentUser?.phone}</p>
        </div>
        <HeaderUserMenu />
        {/* end::Toggle */}
      </div>
      <div style={{paddingLeft: "20px"}} className='d-flex align-items-center fs-5'>
            {currentUser?.username}
          </div>
      {/* end::User */}

      {/* begin::Aside Toggler */}
      {config.header.left === 'menu' && (
        <div className='d-flex align-items-center d-lg-none ms-2 me-n3' title='Show header menu'>
          <div
            className='btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px'
            id='kt_header_menu_mobile_toggle'
          >
            <KTSVG path='/media/icons/duotune/text/txt001.svg' className='svg-icon-1' />
          </div>
        </div>
      )}
    </div>
  )
}

export {Topbar}
