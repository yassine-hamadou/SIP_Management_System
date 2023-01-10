// @ts-nocheck
import {Column} from 'react-table'
import {LoaderUnitInfoCell} from './LoaderUnitInfoCell'
import {LoaderUnitLastLoginCell} from './LoaderUnitLastLoginCell'
import {LoaderUnitTwoStepsCell} from './LoaderUnitTwoStepsCell'
import {LoaderUnitActionsCell} from './LoaderUnitActionsCell'
import {LoaderUnitSelectionCell} from './LoaderUnitSelectionCell'
import {LoaderUnitCustomHeader} from './LoaderUnitCustomHeader'
import {LoaderUnitSelectionHeader} from './LoaderUnitSelectionHeader'
import {LoaderUnit} from '../../core/_models'

const loaderUnitsColumns: ReadonlyArray<Column<LoaderUnit>> = [
  {
    Header: (props) => <LoaderUnitSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <LoaderUnitSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <LoaderUnitCustomHeader tableProps={props} title='Id' className='min-w-125px' />,
    id: 'entryId',
    accessor: "entryId"
  },
  // {
  //   Header: (props) => <LoaderUnitCustomHeader tableProps={props} title='fleet ID' className='min-w-125px' />,
  //   accessor: 'fleetID',
  // },
  {
    Header: (props) => <LoaderUnitCustomHeader tableProps={props} title='custodian' className='min-w-125px' />,
    accessor: 'email',
  },
  {
    Header: (props) => <LoaderUnitCustomHeader tableProps={props} title='Model class' className='min-w-125px' />,
    accessor: 'position',
  },
  // {
  //   Header: (props) => (
  //     <LoaderUnitCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <LoaderUnitLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <LoaderUnitCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <LoaderUnitTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  // {
  //   Header: (props) => (
  //     <LoaderUnitCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
  //   ),
  //   accessor: 'joined_day',
  // },
  {
    Header: (props) => (
      <LoaderUnitCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <LoaderUnitActionsCell fleetID={props.data[props.row.index].fleetID} />,
  },
]


// const loaderUnitsColumns=[
//   {
//     Header:'Fleet ID',
//     accessor:'fleetID',
   
//   },
//   {
//     Header:'Model Name',
//     accessor:'modlName',
   
//   },
//   {
//     Header:'Model Class',
//     accessor:'modlClass',
   
//   }
// ]
export {loaderUnitsColumns}
