import {useQuery} from 'react-query'
import {HaulerOperatorEditModalForm} from './HaulerOperatorEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getHaulerOperatorById} from '../core/_requests'

const HaulerOperatorEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: haulerOperator,
    error,
  } = useQuery(
    `${QUERIES.HAULEROPERATORS_LIST}-haulerOperator-${itemIdForUpdate}`,
    () => {
      return getHaulerOperatorById(itemIdForUpdate)
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
    return <HaulerOperatorEditModalForm isHaulerOperatorLoading={isLoading} haulerOperator={{id: undefined}} />
  }

  if (!isLoading && !error && haulerOperator) {
    return <HaulerOperatorEditModalForm isHaulerOperatorLoading={isLoading} haulerOperator={haulerOperator} />
  }

  return null
}

export {HaulerOperatorEditModalFormWrapper}
