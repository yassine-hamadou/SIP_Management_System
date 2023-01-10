// @ts-nocheck
import {Column} from 'react-table'
import {DetailInfoCell} from './DetailInfoCell'
// import {DetailLastLoginCell} from './DetailLastLoginCell'
// import {DetailTwoStepsCell} from './DetailTwoStepsCell'
import {DetailActionsCell} from './DetailActionsCell'
import {DetailSelectionCell} from './DetailSelectionCell'
import {DetailCustomHeader} from './DetailCustomHeader'
import {DetailSelectionHeader} from './DetailSelectionHeader'
import {Detail} from '../../core/_models'

const detailsColumns: ReadonlyArray<Column<Detail>> = [
  // {
  //   Header: (props) => <DetailSelectionHeader tableProps={props} />,
  //   id: 'selection',
  //   Cell: ({...props}) => <DetailSelectionCell id={props.data[props.row.index].id} />,
  // },
  
  {
    Header: (props) => <DetailCustomHeader tableProps={props} title='Date' className='min-w-125px border-end border-top' />,
    accessor: 'date',
  },
  {
    Header: (props) => <DetailCustomHeader tableProps={props} title='Shift' className='min-w-125px border-end border-top' />,
    accessor: 'shift',
  },
  {
    Header: (props) => <DetailCustomHeader tableProps={props} title='Loader' className='min-w-125px border-end border-top' />,
    accessor: 'loader',
  },
  {
    Header: (props) => <DetailCustomHeader tableProps={props} title='L-Unit' className='min-w-125px border-end border-top' />,
    accessor: 'l_unit',
  },
  {
    Header: (props) => <DetailCustomHeader tableProps={props} title='Hauler' className='min-w-125px border-end border-top' />,
    accessor: 'hauler',
  },
  {
    Header: (props) => <DetailCustomHeader tableProps={props} title='H-Unit' className='min-w-125px border-end border-top' />,
    accessor: 'h_unit',
  },
  {
    Header: (props) => <DetailCustomHeader tableProps={props} title='Start time' className='min-w-125px border-end border-top' />,
    accessor: 'stime',
  },
  {
    Header: (props) => <DetailCustomHeader tableProps={props} title='Finish time' className='min-w-125px border-end border-top' />,
    accessor: 'ftime',
  },
  {
    Header: (props) => <DetailCustomHeader tableProps={props} title='Duration' className='min-w-125px border-end border-top' />,
    accessor: 'duration',
  },
  // {
  //   Header: (props) => (
  //     <DetailCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <DetailLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <DetailCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <DetailTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  // {
  //   Header: (props) => (
  //     <DetailCustomHeader tableProps={props} title='Joined day' className='min-w-125px border-end border-top' />
  //   ),
  //   accessor: 'joined_day',
  // },
  {
    Header: (props) => (
      <DetailCustomHeader tableProps={props} title='Actions' className='text-center min-w-100px border-top' />
    ),
    id: 'actions',
    Cell: ({...props}) => <DetailActionsCell id={props.data[props.row.index].id} />,
  },
]

export {detailsColumns}
