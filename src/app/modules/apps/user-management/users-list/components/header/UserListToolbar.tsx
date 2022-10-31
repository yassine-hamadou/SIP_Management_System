import {KTSVG} from '../../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
// import {UsersListFilter} from './UsersListFilter'
import 'antd/dist/antd.min.css'
import { Button, Modal } from 'antd';
import { useState } from 'react';
import { Step1 } from '../../../userform/components/steps/Step1';
// import { Field } from 'formik/dist/Field';
import { ErrorMessage, Field } from 'formik';

const UsersListToolbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const {setItemIdForUpdate} = useListView()
  // const openAddUserModal = () => {
  //   setItemIdForUpdate(null)
  // }
  // const [open, setOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      {/* <UsersListFilter /> */}

      {/* begin::Export */}
      <button type='button' className='btn btn-light-primary me-3'>
        <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
        Export
      </button>
      {/* end::Export */}

      {/* begin::Add user */}
      {/* <button type='button' className='btn btn-primary' onClick={openAddUserModal}>
        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
        Add Employee
      </button> */}
      {/* <a href='./userform/components/horizontal'>
        <button type='button' className='btn btn-primary'  >
          <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
          Add Employee
        </button>
      </a> */}
      {/* end::Add user */}
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} centered width={1000}>
       
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  )
}

export {UsersListToolbar}
