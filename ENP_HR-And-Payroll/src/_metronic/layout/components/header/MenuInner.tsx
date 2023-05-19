import React from 'react'
import {MenuItem} from './MenuItem'
import {useIntl} from 'react-intl'

export function MenuInner() {
  const intl = useIntl()
  return (
    <>
      {/* <MenuItem title={intl.formatMessage({id: 'Human Resource'})} to='/dashboard' /> */}
      <MenuItem title={"Human Resource"} to='/hr-dashboard' />
      <MenuItem title={"Payroll"} to='/payroll-dashboard' />
      
    </>
  )
}
