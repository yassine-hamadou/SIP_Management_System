import {useMemo, useEffect, useState} from 'react'
import {useTable, ColumnInstance, Row, useSortBy} from 'react-table'
import {CustomHeaderColumn} from '../table/columns/CustomHeaderColumn'
import {CustomRow} from '../table/columns/CustomRow'
import {useQueryResponseData, useQueryResponseLoading} from '../core/QueryResponseProvider'
import {loaderUnitsColumns} from './columns/_columns'
import {LoaderUnit} from '../core/_models'
import {LoaderUnitsListLoading} from '../components/loading/LoaderUnitsListLoading'
import {LoaderUnitsListPagination} from '../components/pagination/LoaderUnitsListPagination'
import {KTCardBody} from '../../../../../../../../_metronic/helpers'
import axios from 'axios'
const LoaderUnitsTable = () => {
  const loaderUnits = useQueryResponseData()
  const isLoading = useQueryResponseLoading()
  const data = useMemo(() => loaderUnits, [loaderUnits])
  const columns = useMemo(() => loaderUnitsColumns, [])
  const [equipment, setEquipment] = useState<any>([])
  const [loading, setLoading] = useState(true)
  const getEquipment = async () => {
    setLoading(true)
    try {
      const response = await axios.get(
        'https://cors-anywhere.herokuapp.com/http://208.117.44.15/SmWebApi/api/VmequpsApi'
      )
      setEquipment(response.data)

      // setLoading(false)
    } catch (error: any) {
      setLoading(false)
      return error.statusText
    }
  }
 

  // const data = useMemo(() =>equipment,[])
  // const columns = useMemo(() => loaderUnitsColumns, [])
  const {getTableProps, getTableBodyProps, headers, rows, prepareRow} = useTable({
    columns,
    data,
    
  })

  useEffect(() => {
    getEquipment()
    // loadFaultType()
  
  }, [])

  return (
    <KTCardBody className='py-4'>
      <div className='table-responsive'>
        <table
          id='kt_table_loaderunits'
          className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
          {...getTableProps()}
        >
          <thead>
            <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
              {headers.map((column: ColumnInstance<LoaderUnit>) => (
                <CustomHeaderColumn key={column.id} column={column} />
               
              ))}
            </tr>
          </thead>
          <tbody className='text-gray-600 fw-bold' {...getTableBodyProps()}>
             {rows.length > 0 ? (
              rows.map((row: Row<LoaderUnit>, i) => {
                prepareRow(row)
                return <CustomRow row={row} key={`row-${i}-${row}`} />
              })
            ) : ( 
              <tr>
                <td colSpan={7}>
                  <div className='d-flex text-center w-100 align-content-center justify-content-center'>
                    No matching records found
                  </div>
                </td>
              </tr>
            )}
            {/* <tr>
                <td colSpan={7}>
                  <div className='d-flex text-center w-100 align-content-center justify-content-center'>
                    No matching records found
                  </div>
                </td>
              </tr> */}
          </tbody>
        </table>
      </div>
      <LoaderUnitsListPagination />
      {isLoading && <LoaderUnitsListLoading />}
    </KTCardBody>
  )
}

export {LoaderUnitsTable}
