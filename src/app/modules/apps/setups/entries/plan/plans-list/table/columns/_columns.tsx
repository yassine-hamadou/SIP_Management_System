// @ts-nocheck
import {Column} from 'react-table'
import {PlanInfoCell} from './PlanInfoCell'
// import {PlanLastLoginCell} from './PlanLastLoginCell'
// import {PlanTwoStepsCell} from './PlanTwoStepsCell'
import {PlanActionsCell} from './PlanActionsCell'
import {PlanSelectionCell} from './PlanSelectionCell'
import {PlanCustomHeader} from './PlanCustomHeader'
import {PlanSelectionHeader} from './PlanSelectionHeader'
import {Plan} from '../../core/_models'

const plansColumns: ReadonlyArray<Column<Plan>> = [
  // {
  //   Header: (props) => <PlanSelectionHeader tableProps={props} />,
  //   id: 'selection',
  //   Cell: ({...props}) => <PlanSelectionCell id={props.data[props.row.index].id} />,
  // },
  {
    Header: (props) => <PlanCustomHeader tableProps={props} title='Name' className='min-w-125px border-end border-top' />,
    id: 'name',
    Cell: ({...props}) => <PlanInfoCell plan={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <PlanCustomHeader tableProps={props} title='Activity' className='min-w-125px border-end border-top' />,
    accessor: 'activity',
  },
  {
    Header: (props) => <PlanCustomHeader tableProps={props} title='Destination' className='min-w-125px border-end border-top' />,
    accessor: 'destination',
  },
  {
    Header: (props) => <PlanCustomHeader tableProps={props} title='Quantity' className='min-w-125px border-end border-top' />,
    accessor: 'quantity',
  },
  // {
  //   Header: (props) => (
  //     <PlanCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <PlanLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <PlanCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <PlanTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  {
    Header: (props) => (
      <PlanCustomHeader tableProps={props} title='Actions' className='text-center min-w-100px border-top' />
    ),
    id: 'actions',
    Cell: ({...props}) => <PlanActionsCell id={props.data[props.row.index].id} />,
  },
]

export {plansColumns}
