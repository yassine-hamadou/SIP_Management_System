/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../../../../_metronic/helpers'
import {HaulerUnit} from '../../core/_models'

type Props = {
  haulerUnit: HaulerUnit
}

const HaulerUnitInfoCell: FC<Props> = ({haulerUnit}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    {/* <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {HaulerUnit.avatar ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${HaulerUnit.avatar}`)} alt={HaulerUnit.name} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${HaulerUnit.initials?.state}`,
              `text-${HaulerUnit.initials?.state}`
            )}
          >
            {HaulerUnit.initials?.label}
          </div>
        )}
      </a>
    </div> */}
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {haulerUnit.name}
      </a>
      {/* <span>{HaulerUnit.email}</span> */}
    </div>
  </div>
)

export {HaulerUnitInfoCell}
