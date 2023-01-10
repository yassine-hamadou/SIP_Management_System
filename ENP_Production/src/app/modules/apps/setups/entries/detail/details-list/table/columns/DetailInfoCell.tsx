/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../../../../_metronic/helpers'
import {Detail} from '../../core/_models'

type Props = {
  Detail: Detail
}

const DetailInfoCell: FC<Props> = ({Detail}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    {/* <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {Detail.avatar ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${Detail.avatar}`)} alt={Detail.name} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${Detail.initials?.state}`,
              `text-${Detail.initials?.state}`
            )}
          >
            {Detail.initials?.label}
          </div>
        )}
      </a>
    </div> */}
    {/* <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {Detail.name}
      </a>
      <span>{Detail.email}</span>
    </div> */}
  </div>
)

export {DetailInfoCell}
