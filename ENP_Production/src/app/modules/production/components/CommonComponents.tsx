import { KTSVG } from "../../../../_metronic/helpers"
import { Button } from 'antd'

const PageActionButtons = (
    { onAddClick, onExportClicked }: any,
) => {
    return (
        <div className='d-flex align-items-center'>
            <Button
                type='primary'
                className='btn btn-light-primary me-3'
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
            <Button
                type='primary'
                className='btn btn-light-primary me-3'
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
        </div>
    )
}
export { PageActionButtons }