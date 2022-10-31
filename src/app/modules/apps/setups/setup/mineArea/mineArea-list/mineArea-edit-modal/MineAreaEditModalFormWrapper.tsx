import {useQuery} from 'react-query'
import {MineAreaEditModalForm} from './MineAreaEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getMineAreaById} from '../core/_requests'

const MineAreaEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: mineArea,
    error,
  } = useQuery(
    `${QUERIES.MINEAREAS_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getMineAreaById(itemIdForUpdate)
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
    return <MineAreaEditModalForm isMineAreaLoading={isLoading} mineArea={{id: undefined}} />
  }

  if (!isLoading && !error && mineArea) {
    return <MineAreaEditModalForm isMineAreaLoading={isLoading} mineArea={mineArea} />
  }

  return null
}

export {MineAreaEditModalFormWrapper}
