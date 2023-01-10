// @ts-nocheck
import {Column} from 'react-table'
import {HaulerUnitInfoCell} from './HaulerUnitInfoCell'
// import {HaulerUnitLastLoginCell} from './HaulerUnitLastLoginCell'
// import {HaulerUnitTwoStepsCell} from './HaulerUnitTwoStepsCell'
import {HaulerUnitActionsCell} from './HaulerUnitActionsCell'
import {HaulerUnitSelectionCell} from './HaulerUnitSelectionCell'
import {HaulerUnitCustomHeader} from './HaulerUnitCustomHeader'
import {HaulerUnitSelectionHeader} from './HaulerUnitSelectionHeader'
import {HaulerUnit} from '../../core/_models'

const haulerUnitsColumns: ReadonlyArray<Column<HaulerUnit>> = [
  {
    Header: (props) => <HaulerUnitSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <HaulerUnitSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <HaulerUnitCustomHeader tableProps={props} title='Code' className='min-w-125px' />,
    id: 'code',
    Cell: ({...props}) => <HaulerUnitInfoCell HaulerUnit={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <HaulerUnitCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    accessor: 'name',
  },
  {
    Header: (props) => <HaulerUnitCustomHeader tableProps={props} title='Decription' className='min-w-125px' />,
    accessor: 'desrciption',
  },
  {
    Header: (props) => <HaulerUnitCustomHeader tableProps={props} title='Paygroup' className='min-w-125px' />,
    accessor: 'paygroup',
  },
  {
    Header: (props) => <HaulerUnitCustomHeader tableProps={props} title='Status' className='min-w-125px' />,
    accessor: 'status',
  },
  
  
  {
    Header: (props) => (
      <HaulerUnitCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <HaulerUnitActionsCell id={props.data[props.row.index].id} />,
  },
]

export {haulerUnitsColumns}
