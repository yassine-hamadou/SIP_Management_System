import {useQuery} from 'react-query'
import {LoaderUnitEditModalForm} from './LoaderUnitEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getLoaderUnitById} from '../core/_requests'

const LoaderUnitEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: LoaderUnit,
    error,
  } = useQuery(
    `${QUERIES.LOADERUNITS_LIST}-loaderunit-${itemIdForUpdate}`,
    () => {
      return getLoaderUnitById(itemIdForUpdate)
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
    return <LoaderUnitEditModalForm isLoaderUnitLoading={isLoading} LoaderUnit={{id: undefined}} />
  }

  if (!isLoading && !error && LoaderUnit) {
    return <LoaderUnitEditModalForm isLoaderUnitLoading={isLoading} LoaderUnit={LoaderUnit} />
  }

  return null
}

export {LoaderUnitEditModalFormWrapper}
