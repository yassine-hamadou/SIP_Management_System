/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
// import {toAbsoluteUrl} from '../../../../../../../../../_metronic/helpers'
import {Destination} from '../../core/_models'

type Props = {
  destination: Destination
}

const DestinationInfoCell: FC<Props> = ({destination}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    {/* <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {Destination.avatar ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${Destination.avatar}`)} alt={Destination.name} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${Destination.initials?.state}`,
              `text-${Destination.initials?.state}`
            )}
          >
            {Destination.initials?.label}
          </div>
        )}
      </a>
    </div> */}
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {destination.name}
      </a>
      {/* <span>{destination.email}</span> */}
    </div>
  </div>
)

export {DestinationInfoCell}
