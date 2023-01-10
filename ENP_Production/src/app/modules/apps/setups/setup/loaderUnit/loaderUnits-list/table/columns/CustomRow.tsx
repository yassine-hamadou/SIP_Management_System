// @ts-nocheck
import clsx from 'clsx'
import {FC, useState, useEffect} from 'react'
import {Row} from 'react-table'
import {LoaderUnit} from '../../core/_models'

type Props = {
  row: Row<LoaderUnit>
}

const CustomRow: FC<Props> = ({row}) => (


  
  <tr {...row.getRowProps()}>
    {row.cells.map((cell) => {
      return (
        <td
          {...cell.getCellProps()}
          className={clsx({'text-end min-w-100px': cell.column.id === 'actions'})}
        >
          {cell.render('Cell')}
        </td>
      )
    })}
  </tr>
)

export {CustomRow}
