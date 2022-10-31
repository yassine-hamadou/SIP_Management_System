import {useQuery} from 'react-query'
import {LoaderOperatorEditModalForm} from './LoaderOperatorEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getLoaderOperatorById} from '../core/_requests'

const LoaderOperatorEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: loaderOperator,
    error,
  } = useQuery(
    `${QUERIES.LOADEROPERATORS_LIST}-loaderoperator-${itemIdForUpdate}`,
    () => {
      return getLoaderOperatorById(itemIdForUpdate)
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
    return <LoaderOperatorEditModalForm isLoaderOperatorLoading={isLoading} loaderOperator={{id: undefined}} />
  }

  if (!isLoading && !error && loaderOperator) {
    return <LoaderOperatorEditModalForm isLoaderOperatorLoading={isLoading} loaderOperator={loaderOperator} />
  }

  return null
}

export {LoaderOperatorEditModalFormWrapper}
