// @ts-nocheck
import {Column} from 'react-table'
import {ProcessedInfoCell} from './ProcessedInfoCell'
// import {ProcessedLastLoginCell} from './ProcessedLastLoginCell'
// import {ProcessedTwoStepsCell} from './ProcessedTwoStepsCell'
import {ProcessedActionsCell} from './ProcessedActionsCell'
import {ProcessedSelectionCell} from './ProcessedSelectionCell'
import {ProcessedCustomHeader} from './ProcessedCustomHeader'
import {ProcessedSelectionHeader} from './ProcessedSelectionHeader'
import {Processed} from '../../core/_models'

const processedsColumns: ReadonlyArray<Column<Processed>> = [
  {
    Header: (props) => <ProcessedSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <ProcessedSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <ProcessedCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <ProcessedInfoCell processed={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <ProcessedCustomHeader tableProps={props} title='Role' className='min-w-125px' />,
    accessor: 'role',
  },
  // {
  //   Header: (props) => (
  //     <ProcessedCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <ProcessedLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <ProcessedCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <ProcessedTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  {
    Header: (props) => (
      <ProcessedCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
    ),
    accessor: 'joined_day',
  },
  {
    Header: (props) => (
      <ProcessedCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <ProcessedActionsCell id={props.data[props.row.index].id} />,
  },
]

export {processedsColumns}
