import {useQuery} from 'react-query'
import {DestinationEditModalForm} from './DestinationEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getDestinationById} from '../core/_requests'

const DestinationEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: destination,
    error,
  } = useQuery(
    `${QUERIES.DESTINATIONS_LIST}-destination-${itemIdForUpdate}`,
    () => {
      return getDestinationById(itemIdForUpdate)
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
    return <DestinationEditModalForm isDestinationLoading={isLoading} destination={{id: undefined}} />
  }

  if (!isLoading && !error && destination) {
    return <DestinationEditModalForm isDestinationLoading={isLoading} destination={destination} />
  }

  return null
}

export {DestinationEditModalFormWrapper}
