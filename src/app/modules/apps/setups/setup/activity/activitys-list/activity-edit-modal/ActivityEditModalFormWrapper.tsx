import {useQuery} from 'react-query'
import {ActivityEditModalForm} from './ActivityEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getActivityById} from '../core/_requests'

const ActivityEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: activity,
    error,
  } = useQuery(
    `${QUERIES.ACTIVITYS_LIST}-activity-${itemIdForUpdate}`,
    () => {
      return getActivityById(itemIdForUpdate)
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
    return <ActivityEditModalForm isActivityLoading={isLoading} activity={{id: undefined}} />
  }

  if (!isLoading && !error && activity) {
    return <ActivityEditModalForm isActivityLoading={isLoading} activity={activity} />
  }

  return null
}

export {ActivityEditModalFormWrapper}
