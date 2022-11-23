// @ts-nocheck
import {Column} from 'react-table'
import {ActivityInfoCell} from './ActivityInfoCell'
// import {ActivityLastLoginCell} from './ActivityLastLoginCell'
// import {ActivityTwoStepsCell} from './ActivityTwoStepsCell'
import {ActivityActionsCell} from './ActivityActionsCell'
import {ActivitySelectionCell} from './ActivitySelectionCell'
import {ActivityCustomHeader} from './ActivityCustomHeader'
import {ActivitySelectionHeader} from './ActivitySelectionHeader'
import {Activity} from '../../core/_models'

const ActivitysColumns: ReadonlyArray<Column<Activity>> = [
  {
    Header: (props) => <ActivitySelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <ActivitySelectionCell id={props.data[props.row.index].id} />,
  },
  // {
  //   Header: (props) => <ActivityCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
  //   id: 'name',
  //   Cell: ({...props}) => <ActivityInfoCell Activity={props.data[props.row.index]} />,
  // },
 
  {
    Header: (props) => <ActivityCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    accessor: 'name',
  },
  {
    Header: (props) => <ActivityCustomHeader tableProps={props} title='Status' className='min-w-125px' />,
    accessor: 'status',
  },
  // {
  //   Header: (props) => (
  //     <ActivityCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <ActivityLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <ActivityCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <ActivityTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  // {
  //   Header: (props) => (
  //     <ActivityCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
  //   ),
  //   accessor: 'joined_day',
  // },
  {
    Header: (props) => (
      <ActivityCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <ActivityActionsCell id={props.data[props.row.index].id} />,
  },
]

export {ActivitysColumns}
