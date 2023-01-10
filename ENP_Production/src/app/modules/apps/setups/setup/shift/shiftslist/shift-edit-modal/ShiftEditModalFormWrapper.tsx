import {useQuery} from 'react-query'
import {ShiftEditModalForm} from './ShiftEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getShiftById} from '../core/_requests'

const ShiftEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: shift,
    error,
  } = useQuery(
    `${QUERIES.SHIFTS_LIST}-shift-${itemIdForUpdate}`,
    () => {
      return getShiftById(itemIdForUpdate)
    },
    {
      cacheTime: 0,
      enabled: enabledQuery,
      onError: (err) => {
        setItemIdForUpdate(undefined)
        console.error(err)
      },
    }
  )

  if (!itemIdForUpdate) {
    return <ShiftEditModalForm isShiftLoading={isLoading} shift={{id: undefined}} />
  }

  if (!isLoading && !error && shift) {
    return <ShiftEditModalForm isShiftLoading={isLoading} shift={shift} />
  }

  return null
}

export {ShiftEditModalFormWrapper}
