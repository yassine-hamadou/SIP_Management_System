import {useQuery} from 'react-query'
import {HaulerUnitEditModalForm} from './HaulerUnitEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getHaulerUnitById} from '../core/_requests'

const HaulerUnitEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: haulerUnit,
    error,
  } = useQuery(
    `${QUERIES.HAULERUNITS_LIST}-haulerUnit-${itemIdForUpdate}`,
    () => {
      return getHaulerUnitById(itemIdForUpdate)
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
    return <HaulerUnitEditModalForm isHaulerUnitLoading={isLoading} haulerUnit={{id: undefined}} />
  }

  if (!isLoading && !error && haulerUnit) {
    return <HaulerUnitEditModalForm isHaulerUnitLoading={isLoading} haulerUnit={haulerUnit} />
  }

  return null
}

export {HaulerUnitEditModalFormWrapper}
