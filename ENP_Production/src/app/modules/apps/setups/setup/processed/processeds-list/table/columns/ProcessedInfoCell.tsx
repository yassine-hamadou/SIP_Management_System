/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../../../../_metronic/helpers'
import {Processed} from '../../core/_models'

type Props = {
  processed: Processed
}

const ProcessedInfoCell: FC<Props> = ({processed}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    {/* <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {Processed.avatar ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${Processed.avatar}`)} alt={Processed.name} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${Processed.initials?.state}`,
              `text-${Processed.initials?.state}`
            )}
          >
            {Processed.initials?.label}
          </div>
        )}
      </a>
    </div> */}
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {processed.fname}
      </a>
      {/* <span>{Processed.email}</span> */}
    </div>
  </div>
)

export {ProcessedInfoCell}
