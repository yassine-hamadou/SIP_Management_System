import {Button, Popconfirm, Table, Modal, Space, Input} from 'antd'
import React, { useState } from 'react';
import { AddFaultForm } from './AddHoursForm';

const NewGrade = () => {
  // const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal of 1000px width
      </Button>
      <Modal title='Add Hour' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <AddFaultForm />
      </Modal>
    </>
  );
};

export {NewGrade};