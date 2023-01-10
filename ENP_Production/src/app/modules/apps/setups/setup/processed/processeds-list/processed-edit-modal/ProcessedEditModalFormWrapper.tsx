import {useQuery} from 'react-query'
import {ProcessedEditModalForm} from './ProcessedEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getProcessedById} from '../core/_requests'

const ProcessedEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: processed,
    error,
  } = useQuery(
    `${QUERIES.PROCESSEDS_LIST}-processed-${itemIdForUpdate}`,
    () => {
      return getProcessedById(itemIdForUpdate)
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
    return <ProcessedEditModalForm isProcessedLoading={isLoading} processed={{id: undefined}} />
  }

  if (!isLoading && !error && processed) {
    return <ProcessedEditModalForm isProcessedLoading={isLoading} processed={processed} />
  }

  return null
}

export {ProcessedEditModalFormWrapper}
