/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../../../../_metronic/helpers'
import {MineArea} from '../../core/_models'

type Props = {
  mineArea: MineArea
}

const MineAreaInfoCell: FC<Props> = ({mineArea}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    {/* <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {MineArea.avatar ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${MineArea.avatar}`)} alt={MineArea.name} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${MineArea.initials?.state}`,
              `text-${MineArea.initials?.state}`
            )}
          >
            {MineArea.initials?.label}
          </div>
        )}
      </a>
    </div> */}
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {mineArea.name}
      </a>
      {/* <span>{MineArea.email}</span> */}
    </div>
  </div>
)

export {MineAreaInfoCell}
