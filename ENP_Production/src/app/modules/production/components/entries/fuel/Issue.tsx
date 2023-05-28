import { useState } from "react";
import { useQuery } from 'react-query';
import * as XLSX from 'xlsx';
import { fetchDocument } from '../../../urls';
import { convertExcelDateToJSDate } from '../../CommonComponents';
import { FuelComponent } from './FuelComponent';



// const FuelIssue = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false)
//     const [uploading, setUploading] = useState(false)
//     const [uploadedFile, setUploadedFile] = useState<any>(null)
//     const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false) // to show the update modal
//     const [isUploadModalOpen, setIsUploadModalOpen] = useState(false) // to show the upload modal
//     const [isFileUploaded, setIsFileUploaded] = useState(false) // to check if the file is uploaded
//     const [isCheckDataModalOpen, setIsCheckDataModalOpen] = useState(false)  // to show the modal to check the data summaries from the uploaded file
//     const [isBatchDataCheckModalOpen, setIsBatchDataCheckModalOpen] = useState(false) // to show the modal to check the data summaries from batch data 
//     const [submitLoading, setSubmitLoading] = useState(false)
//     const tenantId = localStorage.getItem('tenant')
//     const [loading, setLoading] = useState(false)
//     const { register, reset, handleSubmit } = useForm()
//     const [tempData, setTempData] = useState<any>()
//     const queryClient = useQueryClient()
//     const [fileList, setFileList] = useState([]);
//     const { data: pumps } = useQuery('pump', () => fetchDocument(`ProPump/tenant/${tenantId}`), { cacheTime: 5000 })
//     const { data: equipments } = useQuery('equipmments', () => fetchDocument(`equipments/tenant/${tenantId}`), { cacheTime: 5000 })


//     const [uploadColumns, setUploadColumns] = useState<any>([]) //to hold the table columns of the uploaded file
//     const [uploadData, setUploadData] = useState<any>([]) // to hold the data read from the uploaded file
//     const [rowCount, setRowCount] = useState(0) // to hold the number of rows read from the uploaded file
//     const [dataToSave, setDataToSave] = useState<any>([]) // to hold the data to be saved from the uploaded file
//     const [gridData, setGridData] = useState([])
//     const handleChange = (event: any) => {
//         event.preventDefault()
//         setTempData({ ...tempData, [event.target.name]: event.target.value });
//     }

//     const handleCancel = () => {
//         reset()
//         setIsModalOpen(false)
//         setIsUpdateModalOpen(false)
//         setTempData(null)
//         setIsUploadModalOpen(false)
//         setIsFileUploaded(false)
//         handleRemove()
//         setUploadedFile(null)
//         setUploading(false)
//     }

//     const showModal = () => {
//         setIsModalOpen(true)
//     }

//     const showUploadModal = () => {
//         setIsUploadModalOpen(true)
//     }

//     //hide Update table 
//     const clearUpdateTable = () => {
//         setIsFileUploaded(false)
//         // setUploadedFile(null)
//         setLoading(false)
//         loadData()
//     }

//     const onOkay = () => {
//         // check if no file is uploaded
//         if (!uploadedFile) {
//             message.error('No file uploaded!');
//             return
//         } else {
//             handleUpload()
//         }
//     }

//     const handleRemove = () => {
//         setUploadedFile(null);
//         setFileList([]);
//     };

//     const showUpdateModal = (values: any) => {
//         showModal()
//         setIsUpdateModalOpen(true)
//         setTempData(values);
//         console.log(values)
//     }

//     const { mutate: deleteData, isLoading: deleteLoading } = useMutation(deleteItem, {
//         onSuccess: (data) => {
//             queryClient.setQueryData(['ProFuelIssue', tempData], data);
//             loadData()
//         },
//         onError: (error) => {
//             console.log('delete error: ', error)
//         }
//     })

//     function handleDelete(element: any) {
//         const item = {
//             url: 'ProFuelIssue',
//             data: element
//         }
//         deleteData(item)
//     }

//     const uploadProps: UploadProps = {
//         name: 'file',
//         accept: '.xlsx, .xls',
//         action: '',
//         maxCount: 1,
//         fileList: fileList,
//         beforeUpload: (file: any) => {
//             return new Promise((resolve, reject) => {
//                 // check if file is not uploaded
//                 if (!file || fileList.length === 1) {
//                     message.error('No file uploaded!');
//                     reject(false)
//                 }
//                 else {
//                     const updatedFileList: any = [...fileList, file]; // Add the uploaded file to the fileList
//                     setFileList(updatedFileList);
//                     resolve(true)
//                     setUploadedFile(file)
//                 }
//             })
//         },
//         onRemove: () => { handleRemove() }
//     }

//     const showBatchDataCheckModal = (values: any) => {
//         setIsBatchDataCheckModalOpen(true)
//         setIsCheckDataModalOpen(true)
//         console.log('batchValues: ', values)
//       //  populateBatchData(values)
//     }


//     const loadData = async () => {
//         setLoading(true)
//         try {
//             const response = await fetchDocument(`ProFuelIssue/tenant/${tenantId}`)
//             const data: any =  fuelIntakeData(response.data)
//             setGridData(data)
//             setLoading(false)
//         } catch (error) {
//             setLoading(false)
//             console.log(error)
//             message.error(`${error}`)
//         }
//     }

//     const handleUpdate = (e: any) => {
//         setSubmitLoading(true)
//         e.preventDefault()
//         const item = {
//             url: 'ProFuelIssue',
//             data: { ...tempData, pumpId: parseInt(tempData.pumpId), quantity: parseInt(tempData.quantity) }
//         }
//         updateData(item)
//         console.log('update: ', item.data)
//     }

//     const { isLoading: updateLoading, mutate: updateData } = useMutation(updateItem, {
//         onSuccess: (data) => {
//             queryClient.setQueryData(['ProFuelIssue', tempData], data);
//             reset()
//             setTempData({})
//             loadData()
//             setIsUpdateModalOpen(false)
//             setIsModalOpen(false)
//         },
//         onError: (error) => {
//             setSubmitLoading(false)
//             console.log('error: ', error)
//             message.error(`${error}`)
//         }
//     })

//     const OnSubmit = handleSubmit(async (values: any) => {
//         setSubmitLoading(true)
//         const selectedDate = new Date(values.intakeDate);
//         const item = {
//             data: [
//                 {
//                     intakeDate: selectedDate.toISOString(),
//                     quantity: parseInt(values.quantity),
//                     pumpId: parseInt(values.pumpId),
//                     equipmentId: values.equipmentId,
//                     batchNumber: `${Date.now()}`,
//                     transactionType: 'Fuel Issue',
//                     tenantId: tenantId,
//                 },
//             ],
//             url: 'ProFuelIssue'
//         }
//         console.log(item.data)
//         postData(item)
//     })

//     const { mutate: postData, isLoading: postLoading } = useMutation(postItem, {
//         onSuccess: (data) => {
//             queryClient.setQueryData(['ProFuelIssue', tempData], data);
//             reset()
//             setTempData({})
//             loadData()
//             setIsModalOpen(false)
//             setSubmitLoading(false)
//         },
//         onError: (error) => {
//             setSubmitLoading(false)
//             console.log('post error: ', error)
//             message.error(`${error}`)
//         }
//     })

//     useEffect(() => {
//         loadData()
//     }, [])


//     const columns: any = [
//         { title: 'Date', dataIndex: 'date', },
//         { title: 'Batch Number', dataIndex: 'batchNumber', },
//         // { title: 'Pump', dataIndex: 'pumpId', },
//         {
//             title: 'Items',
//             dataIndex: 'itemsCount',
//             render: (text: any) => <Tag color="geekblue">{text} {text > 1 ? 'records' : 'record'} </Tag>
//         },
//         { title: 'Total Qty Issued', dataIndex: 'totalQuantity', },

//         {
//             title: 'Action',
//             fixed: 'right',
//             width: 150,
//             render: (_: any, record: any) => (
//                 <Space size='middle'>
//                     {
//                         record.itemsCount == 1 &&
//                         <Space size='small'>
//                             <a onClick={() => showUpdateModal(record?.records[0])} className='btn btn-light-warning btn-sm'>
//                                 Update
//                             </a>
//                             <a onClick={() => handleDelete(record?.records[0])} className='btn btn-light-danger btn-sm'>
//                                 Delete
//                             </a>
//                         </Space>
//                     }
//                     {
//                         record.itemsCount > 1 &&
//                         <a className='btn btn-light-success btn-sm'>
//                             Check Data
//                         </a>
//                     }
//                 </Space>
//             ),
//         }
//     ]

//     const uploadFileColumns = [
//         { title: 'Date', dataIndex: 'intakeDate', render: (text: any) => moment(excelDateToJSDate(text), 'YYYY-MM-DD').format('YYYY-MM-DD') },
//         { title: 'Pump', dataIndex: 'pump' },
//         { title: 'Equipment', dataIndex: 'equipment' },
//         { title: 'Quantity', dataIndex: 'quantity' },
//     ]

//     const handleUpload = () => {

//         const reader = new FileReader()
//         const dateStamp = new Date().getTime()
//         try {
//             setUploading(true)
//             reader.onload = (e: any) => {

//                 const file = new Uint8Array(e.target.result)
//                 const workBook = XLSX.read(file, { type: 'array' })
//                 const targetSheetName = `LV'S - RAW DATA`;
//                 const workSheet: any = workBook.Sheets[targetSheetName]

//                 // sets the range to be read from the excel file
//                 const range = "A3:F2300";

//                 const data: any = XLSX.utils.sheet_to_json(workSheet, { header: 0, range: range, blankrows: false, defval: null })

//                 let stopReading = false;
//                 const filteredData: any = data
//                     .map((item: any) => {

//                         if (stopReading) {
//                             return null; // Skip processing the remaining rows
//                         }
//                         // check for blanks in the row
//                         const isRowBblank = item['DATE'] === undefined && item['PUMP ID'] === undefined && item['EQUIPMENT'] === undefined && item['QTY'] === undefined;

//                         if (isRowBblank) {
//                             stopReading = true;
//                             return null;
//                         }

//                         return {
//                             intakeDate: item['DATE'],
//                             pump: item['PUMP ID'],
//                             equipment: item['EQUIPMENT'],
//                             quantity: item['QTY'],
//                         }
//                     }).filter((item: any) => item !== null || item !== undefined);

//                 let timeStamp: any = dateStamp
//                 const saveData = filteredData.map((item: any,) => {
//                     const pumpId = pumps?.data.find((pump: any) => pump.name.trim() === item.pump.trim());
//                     const equipment = equipments?.data.find((equipment: any) => equipment.equipmentId.trim() === item.equipment.trim());
//                     return {
//                         intakeDate: convertExcelDateToJSDate(item.intakeDate).toISOString(),
//                         pumpId: parseInt(pumpId?.id),
//                         quantity: parseInt(item.quantity),
//                         equipmentId: equipment?.equipmentId,
//                         transactionType: 'Fuel Issue',
//                         tenantId: tenantId,
//                         batchNumber: `${timeStamp}`,
//                     }
//                 });
//                 console.log('saveData: ', saveData.slice(0, 10))
//                 console.log('filteredData: ', filteredData.slice(0, 10))
//                 handleRemove()
//                 setDataToSave(saveData)
//                 timeStamp = ''
//                 setUploading(false)
//                 setIsUploadModalOpen(false)
//                 setIsFileUploaded(true)
//                 setUploadData(filteredData)
//                 setRowCount(filteredData.length)
//                 setUploadColumns(uploadFileColumns)
//             }
//         } catch (error) {
//             setIsUploadModalOpen(false)
//         }
//         reader.readAsArrayBuffer(uploadedFile)
//     }

//     const saveTableObjects = () => {
//         try {
//             setLoading(true)
//             const filteredSavedData = dataToSave.filter((data: any) => data !== null && data !== undefined)
//             const item = {
//                 data: filteredSavedData,
//                 url: 'ProFuelIssue',
//             }
//             postData(item)
//             setLoading(true)
//             message.success(`Saving ${filteredSavedData.length}  of ${dataToSave.length} ${filteredSavedData.length > 1 ? 'records' : 'record'} of uploaded data`, 6)
//             loadData()
//             setIsFileUploaded(false)
//             setUploadedFile(null)
//             setUploadData([])
//             setDataToSave([])
//         } catch (err) {
//             console.log('fileSaveError: ', err)
//             setLoading(false)
//         }
//     }



//     return (
//         <div className="card-custom card-flush">
//             <div className="card-header" style={{ borderBottom: 'none' }}>
//                 <Space style={{ marginBottom: 16 }}>
//                     <Input
//                         placeholder='Enter Search Text'
//                         type='text'
//                         allowClear size='large'
//                     />
//                     <Button type='primary' size='large'>
//                         Search
//                     </Button>
//                 </Space>
//                 <div className="card-toolbar ">
//                     <Space style={{ marginBottom: 16 }}>
//                         {
//                             isFileUploaded ?
//                                 <Space>
//                                     {/* <Button
//                                         type='primary' size='large'
//                                         style={{
//                                             display: 'flex',
//                                             justifyContent: 'center',
//                                             alignItems: 'center',
//                                         }}
//                                         className='btn btn-light-success btn-sm'
//                                     >
//                                         Check data
//                                     </Button> */}
//                                     <Button
//                                         onClick={saveTableObjects}
//                                         type='primary' size='large'
//                                         style={{
//                                             display: 'flex',
//                                             justifyContent: 'center',
//                                             alignItems: 'center',
//                                         }} className='btn btn-light-success btn-sm'>
//                                         Save
//                                     </Button>
//                                     <Button onClick={clearUpdateTable}
//                                         type='primary' size='large'
//                                         style={{
//                                             display: 'flex',
//                                             justifyContent: 'center',
//                                             alignItems: 'center',
//                                         }} className='btn btn-light-info btn-sm'>
//                                         Clear
//                                     </Button>
//                                 </Space>
//                                 :
//                                 <PageActionButtons
//                                     onAddClick={showModal}
//                                     onExportClicked={() => { console.log('export clicked') }}
//                                     onUploadClicked={showUploadModal}
//                                     hasAddButton={true}
//                                     hasExportButton={true}
//                                     hasUploadButton={true}
//                                 />
//                         }
//                     </Space>
//                 </div>
//             </div>
//             <KTCardBody className='py-4 '>
//                 <div className='table-responsive'>
//                     <Table
//                         columns={isFileUploaded ? uploadColumns : columns}
//                         dataSource={isFileUploaded ? uploadData : gridData}

//                         loading={loading}
//                     />

//                     <Modal
//                         title={isUpdateModalOpen ? `Update Fuel Issue` : `Add Fuel Issue`}
//                         open={isModalOpen}
//                         onCancel={handleCancel}
//                         closable={true}
//                         footer={
//                             <ModalFooterButtons
//                                 onCancel={handleCancel}
//                                 onSubmit={isUpdateModalOpen ? handleUpdate : OnSubmit} />
//                         }
//                     >
//                         <form onSubmit={isUpdateModalOpen ? handleUpdate : OnSubmit}>
//                             <hr></hr>
//                             <div style={{ padding: "20px 20px 0 20px" }} className='row mb-0 '>
//                                 <div className='col-6'>
//                                     <label htmlFor="exampleFormControlInput1" className="form-label text-gray-500">Date</label>
//                                     <input type="date" {...register("intakeDate")} name="intakeDate" defaultValue={!isUpdateModalOpen ? '' : tempData?.intakeDate} onChange={handleChange} className="form-control form-control-white" />
//                                 </div>

//                                 <div className='col-6'>
//                                     <label htmlFor="exampleFormControlInput1" className="form-label text-gray-500">Quantity</label>
//                                     <input type="number" {...register("quantity")} min={0} name='quantity' defaultValue={!isUpdateModalOpen ? '' : tempData?.quantity} onChange={handleChange} className="form-control form-control-white" />
//                                 </div>
//                             </div>
//                             <div style={{ padding: "20px 20px 0 20px" }} className='row mb-9 '>
//                                 <div className='col-6'>
//                                     <label htmlFor="exampleFormControlInput1" className="form-label text-gray-500">Equipment</label>
//                                     <select
//                                         {...register("equipmentId")}
//                                         onChange={handleChange}
//                                         className="form-select form-select-white" aria-label="Select example">
//                                         {!isUpdateModalOpen && <option>Select</option>}
//                                         {
//                                             equipments?.data.map((item: any) => (
//                                                 <option
//                                                     selected={isUpdateModalOpen && tempData.equipmentId}
//                                                     value={item.equipmentId}>{item.equipmentId}</option>
//                                             ))
//                                         }
//                                     </select>

//                                 </div>
//                                 <div className='col-6'>
//                                     <label htmlFor="exampleFormControlInput1" className="form-label text-gray-500">Pump</label>
//                                     <select
//                                         {...register("pumpId")}
//                                         onChange={handleChange}
//                                         className="form-select form-select-white" aria-label="Select example">
//                                         {!isUpdateModalOpen && <option>Select</option>}
//                                         {
//                                             pumps?.data.map((item: any) => (
//                                                 <option
//                                                     selected={isUpdateModalOpen && tempData.pump?.id}
//                                                     value={item.id}>{item.name}</option>
//                                             ))
//                                         }
//                                     </select>
//                                 </div>
//                             </div>
//                         </form>
//                     </Modal>

//                     {/* Modal to upload file */}
//                     <Modal
//                         title='Upload File'
//                         open={isUploadModalOpen}
//                         onOk={onOkay}
//                         confirmLoading={uploading}
//                         onCancel={handleCancel}
//                         closable={true}
//                     >
//                         <Divider />
//                         <Space size='large'>
//                             <Upload
//                                 {...uploadProps}
//                             >
//                                 <Button
//                                     loading={uploading}
//                                     style={{
//                                         display: 'flex',
//                                         justifyContent: 'center',
//                                         alignItems: 'center',
//                                     }}
//                                     icon={<UploadOutlined rev={''} />}>Click to Upload</Button>
//                             </Upload>
//                         </Space>
//                     </Modal>

//                 </div>
//             </KTCardBody>
//         </div>
//     )
// };

const FuelIssue = () => {
    const [readRows, setReadRows] = useState([]);

    const tenantId = localStorage.getItem('tenant')
    const { data: pumps } = useQuery('pump', () => fetchDocument(`ProPump/tenant/${tenantId}`), { cacheTime: 5000 })
    const { data: equipments } = useQuery('equipmments', () => fetchDocument(`equipments/tenant/${tenantId}`), { cacheTime: 5000 })
    const dateStamp = new Date().getTime()
    const dataToRead: any = (file: any) => {
        const workBook = XLSX.read(file, { type: 'array' })
        const targetSheetName = `LV'S - RAW DATA`;
        const workSheet: any = workBook.Sheets[targetSheetName]

        const range = "A3:F2300";

        const data: any = XLSX.utils.sheet_to_json(workSheet, { header: 0, range: range, blankrows: false, defval: null })

        let stopReading = false;
        const filteredData: any = data
            .map((item: any) => {

                if (stopReading) {
                    return null; // Skip processing the remaining rows
                }
                // check for blanks in the row
                const isRowBblank = item['DATE'] === undefined && item['PUMP ID'] === undefined && item['EQUIPMENT'] === undefined && item['QTY'] === undefined;

                if (isRowBblank) {
                    stopReading = true;
                    return null;
                }

                return {
                    intakeDate: item['DATE'],
                    pump: item['PUMP ID'],
                    equipment: item['EQUIPMENT'],
                    quantity: item['QTY'],
                }
            }).filter((item: any) => item !== null || item !== undefined);

        setReadRows(filteredData)
        return readRows;
    }

    let timeStamp: any = dateStamp;
    const dataToSave = readRows.map((item: any,) => {
        const pumpId = pumps?.data.find((pump: any) => pump.name.trim() === item.pump.trim());
        const equipment = equipments?.data.find((equipment: any) => equipment.equipmentId.trim() === item.equipment.trim());
        return {
            intakeDate: convertExcelDateToJSDate(item.intakeDate).toISOString(),
            pumpId: parseInt(pumpId?.id),
            quantity: parseInt(item.quantity),
            equipmentId: equipment?.equipmentId,
            transactionType: 'Fuel Issue',
            tenantId: tenantId,
            batchNumber: `${timeStamp}`,
        }
    });
    timeStamp = ''

    return (
        <FuelComponent
            title='Fuel Issue'
            url='ProFuelIssue'
            readFromFile={dataToRead}
            dataToUpload={dataToSave}
        />
    )

};

export { FuelIssue };
