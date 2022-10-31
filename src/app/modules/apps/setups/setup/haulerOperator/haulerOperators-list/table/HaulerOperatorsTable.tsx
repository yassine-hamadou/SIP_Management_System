import {useMemo} from 'react'
import {useTable, ColumnInstance, Row} from 'react-table'
import {CustomHeaderColumn} from '../table/columns/CustomHeaderColumn'
import {CustomRow} from '../table/columns/CustomRow'
import {useQueryResponseData, useQueryResponseLoading} from '../core/QueryResponseProvider'
import {haulerOperatorsColumns} from './columns/_columns'
import {HaulerOperator} from '../core/_models'
import {HaulerOperatorsListLoading} from '../components/loading/HaulerOperatorsListLoading'
import {HaulerOperatorsListPagination} from '../components/pagination/HaulerOperatorsListPagination'
import {KTCardBody} from '../../../../../../../../_metronic/helpers'

const HaulerOperatorsTable = () => {
  const haulerOperators = useQueryResponseData()
  const isLoading = useQueryResponseLoading()
  const data = useMemo(() => haulerOperators, [haulerOperators])
  const columns = useMemo(() => haulerOperatorsColumns, [])
  const {getTableProps, getTableBodyProps, headers, rows, prepareRow} = useTable({
    columns,
    data,
  })

  return (
    <KTCardBody className='py-4'>
      <div className='table-responsive'>
        <table
          id='kt_table_hauleroperators'
          className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
          {...getTableProps()}
        >
          <thead>
            <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
              {headers.map((column: ColumnInstance<HaulerOperator>) => (
                <CustomHeaderColumn key={column.id} column={column} />
              ))}
            </tr>
          </thead>
          <tbody className='text-gray-600 fw-bold' {...getTableBodyProps()}>
            {/* {rows.length > 0 ? (
              rows.map((row: Row<HaulerOperator>, i) => {
                prepareRow(row)
                return <CustomRow row={row} key={`row-${i}-${row.id}`} />
              })
            ) : (
              <tr>
                <td colSpan={7}>
                  <div className='d-flex text-center w-100 align-content-center justify-content-center'>
                    No matching records found
                  </div>
                </td>
              </tr>
            )} */}
            <tr>
                <td colSpan={7}>
                  <div className='d-flex text-center w-100 align-content-center justify-content-center'>
                    No matching records found
                  </div>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
      <HaulerOperatorsListPagination />
      {isLoading && <HaulerOperatorsListLoading />}
    </KTCardBody>
  )
}

export {HaulerOperatorsTable}
