// @ts-nocheck
import {Column} from 'react-table'
import {LoaderOperatorInfoCell} from './LoaderOperatorInfoCell'
// import {LoaderOperatorLastLoginCell} from './LoaderOperatorLastLoginCell'
// import {LoaderOperatorTwoStepsCell} from './LoaderOperatorTwoStepsCell'
import {LoaderOperatorActionsCell} from './LoaderOperatorActionsCell'
import {LoaderOperatorSelectionCell} from './LoaderOperatorSelectionCell'
import {LoaderOperatorCustomHeader} from './LoaderOperatorCustomHeader'
import {LoaderOperatorSelectionHeader} from './LoaderOperatorSelectionHeader'
import {LoaderOperator} from '../../core/_models'

const loaderOperatorColumns: ReadonlyArray<Column<LoaderOperator>> = [
  {
    Header: (props) => <LoaderOperatorSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <LoaderOperatorSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <LoaderOperatorCustomHeader tableProps={props} title='Code' className='min-w-125px' />,
    id: 'code',
    Cell: ({...props}) => <LoaderOperatorInfoCell LoaderOperator={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <LoaderOperatorCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    accessor: 'name',
  },
  // {
  //   Header: (props) => (
  //     <LoaderOperatorCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <LoaderOperatorLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <LoaderOperatorCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <LoaderOperatorTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  {
    Header: (props) => (
      <LoaderOperatorCustomHeader tableProps={props} title='Status' className='min-w-125px' />
    ),
    accessor: 'status',
  },
  {
    Header: (props) => (
      <LoaderOperatorCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <LoaderOperatorActionsCell id={props.data[props.row.index].id} />,
  },
]

export {loaderOperatorColumns}
