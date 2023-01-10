// @ts-nocheck
import {Column} from 'react-table'
import {HaulerOperatorInfoCell} from './HaulerOperatorInfoCell'
// import {HaulerOperatorLastLoginCell} from './HaulerOperatorLastLoginCell'
// import {HaulerOperatorTwoStepsCell} from './HaulerOperatorTwoStepsCell'
import {HaulerOperatorActionsCell} from './HaulerOperatorActionsCell'
import {HaulerOperatorSelectionCell} from './HaulerOperatorSelectionCell'
import {HaulerOperatorCustomHeader} from './HaulerOperatorCustomHeader'
import {HaulerOperatorSelectionHeader} from './HaulerOperatorSelectionHeader'
import {HaulerOperator} from '../../core/_models'

const haulerOperatorsColumns: ReadonlyArray<Column<HaulerOperator>> = [
  {
    Header: (props) => <HaulerOperatorSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <HaulerOperatorSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <HaulerOperatorCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <HaulerOperatorInfoCell HaulerOperator={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <HaulerOperatorCustomHeader tableProps={props} title='Reporting Division' className='min-w-125px' />,
    accessor: 'reportingDivision',
  },
  {
    Header: (props) => <HaulerOperatorCustomHeader tableProps={props} title='Description' className='min-w-125px' />,
    accessor: 'description',
  },
  {
    Header: (props) => <HaulerOperatorCustomHeader tableProps={props} title='Status' className='min-w-125px' />,
    accessor: 'status',
  },
  // {
  //   Header: (props) => (
  //     <HaulerOperatorCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <HaulerOperatorLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <HaulerOperatorCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <HaulerOperatorTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  // {
  //   Header: (props) => (
  //     <HaulerOperatorCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
  //   ),
  //   accessor: 'joined_day',
  // },
  {
    Header: (props) => (
      <HaulerOperatorCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <HaulerOperatorActionsCell id={props.data[props.row.index].id} />,
  },
]

export {haulerOperatorsColumns}
