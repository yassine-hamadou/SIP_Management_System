/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../../../../_metronic/helpers'
import {Raw} from '../../core/_models'

type Props = {
  raw: Raw
}

const RawInfoCell: FC<Props> = ({raw}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    {/* <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {Raw.avatar ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${Raw.avatar}`)} alt={Raw.name} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${Raw.initials?.state}`,
              `text-${Raw.initials?.state}`
            )}
          >
            {Raw.initials?.label}
          </div>
        )}
      </a>
    </div> */}
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {raw.name}
      </a>
      {/* <span>{Raw.email}</span> */}
    </div>
  </div>
)

export {RawInfoCell}
