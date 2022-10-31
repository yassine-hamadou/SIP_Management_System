import {useQuery} from 'react-query'
import {DetailEditModalForm} from './DetailEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getDetailById} from '../core/_requests'

const DetailEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: detail,
    error,
  } = useQuery(
    `${QUERIES.DETAILS_LIST}-detail-${itemIdForUpdate}`,
    () => {
      return getDetailById(itemIdForUpdate)
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
    return <DetailEditModalForm isDetailLoading={isLoading} detail={{id: undefined}} />
  }

  if (!isLoading && !error && detail) {
    return <DetailEditModalForm isDetailLoading={isLoading} detail={detail} />
  }

  return null
}

export {DetailEditModalFormWrapper}
