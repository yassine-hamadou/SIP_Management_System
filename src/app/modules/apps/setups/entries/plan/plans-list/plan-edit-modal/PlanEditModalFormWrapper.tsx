import {useQuery} from 'react-query'
import {PlanEditModalForm} from './PlanEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getPlanById} from '../core/_requests'

const PlanEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: plan,
    error,
  } = useQuery(
    `${QUERIES.PLANS_LIST}-plan-${itemIdForUpdate}`,
    () => {
      return getPlanById(itemIdForUpdate)
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
    return <PlanEditModalForm isPlanLoading={isLoading} plan={{id: undefined}} />
  }

  if (!isLoading && !error && plan) {
    return <PlanEditModalForm isPlanLoading={isLoading} plan={plan} />
  }

  return null
}

export {PlanEditModalFormWrapper}
