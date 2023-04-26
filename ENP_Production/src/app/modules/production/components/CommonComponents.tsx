import { KTSVG } from "../../../../_metronic/helpers"
import { Button } from 'antd'

const PageActionButtons = (
    { onAddClick, onExportClicked, onUploadClicked, hasAddButton, hasExportButton, hasUploadButton }: any,
) => {
    const addButtonStyle = hasUploadButton && hasExportButton ? 'btn btn-primary me-3' : 'btn btn-light-primary me-3'
    return (
        <div className='d-flex align-items-center'>
            {
                
                hasAddButton && (
                    <Button
                        type='primary'
                        className={addButtonStyle}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        size='large'
                        onClick={onAddClick}                >
                        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                        Add
                    </Button>
                )
            }
            {
                hasUploadButton && (
                    <Button type='primary' className='btn btn-light-primary me-3' style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }} size='large'
                        onClick={onUploadClicked}
                    >
                        <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
                        Upload
                    </Button>
                )
            }

            {
                hasExportButton && (
                    <Button
                        type='primary'
                        className='btn btn-light-primary'
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        size='large'
                        onClick={onExportClicked}>
                        <KTSVG path='/media/icons/duotune/arrows/arr076.svg' className='svg-icon-2' />
                        Export
                    </Button>
                )
            }
        </div>
    )
}
export { PageActionButtons }