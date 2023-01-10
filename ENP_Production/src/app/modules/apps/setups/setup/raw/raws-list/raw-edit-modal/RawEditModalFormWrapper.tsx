import {useQuery} from 'react-query'
import {RawEditModalForm} from './RawEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getRawById} from '../core/_requests'

const RawEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: raw,
    error,
  } = useQuery(
    `${QUERIES.RAWS_LIST}-raw-${itemIdForUpdate}`,
    () => {
      return getRawById(itemIdForUpdate)
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
    return <RawEditModalForm isRawLoading={isLoading} raw={{id: undefined}} />
  }

  if (!isLoading && !error && raw) {
    return <RawEditModalForm isRawLoading={isLoading} raw={raw} />
  }

  return null
}

export {RawEditModalFormWrapper}
