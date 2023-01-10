/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../../../../_metronic/helpers'
import {Plan} from '../../core/_models'

type Props = {
  plan: Plan
}

const PlanInfoCell: FC<Props> = ({plan}) => (
  <div className='d-flex align-items-center'>
   
    {/* <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {plan.name}
      </a>
      <span>{plan.email}</span>
    </div> */}
  </div>
)

export {PlanInfoCell}
