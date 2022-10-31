import {useQuery} from 'react-query'
import {OriginEditModalForm} from './OriginEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getOriginById} from '../core/_requests'

const OriginEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: origin,
    error,
  } = useQuery(
    `${QUERIES.ORIGINS_LIST}-origin-${itemIdForUpdate}`,
    () => {
      return getOriginById(itemIdForUpdate)
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
    return <OriginEditModalForm isOriginLoading={isLoading} origin={{id: undefined}} />
  }

  if (!isLoading && !error && origin) {
    return <OriginEditModalForm isOriginLoading={isLoading} origin={origin} />
  }

  return null
}

export {OriginEditModalFormWrapper}
