import { useState } from "react"
import { KTSVG } from "../../../../../_metronic/helpers"
import { Button, Modal } from "antd"


const UserProfileModal = ()=>{
    const [isModalOpen, setIsModalOpen] = useState(false)

    const showModal = () => {
        setIsModalOpen(true)
      }

      const handleCancel = () => {
        setIsModalOpen(false)
      }

    return (
        <>
            <button type="button" className="btn btn-primary"  onClick={showModal}>
                Create Application
            </button>
            

            <Modal
            // title={isUpdateModalOpen ? 'Update User' : 'Add User'}
            open={isModalOpen}
            width={850}
            onCancel={handleCancel}
            closable={true}
            footer={[
              <Button key='back' onClick={handleCancel}>
                Cancel
              </Button>,
              <Button
                key='submit'
                type='primary'
                // htmlType='submit'
                // loading={submitLoading}
                // onClick={isUpdateModalOpen ? handleUpdate : OnSubmit}
              >
                Submit
              </Button>,
            ]}
          >
            <form
              
            >
              <hr></hr>
                               
            </form>
          </Modal>
        </>
    )
}

export {UserProfileModal}