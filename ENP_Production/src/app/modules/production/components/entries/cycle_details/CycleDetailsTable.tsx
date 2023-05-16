import { UploadOutlined } from '@ant-design/icons';
import { Button, Divider, Input, Modal, Space, Table, TabsProps, Tag, Upload, UploadFile, UploadProps, message } from 'antd';
import moment from 'moment';
import { useEffect, useState } from "react";
import { set, useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import * as XLSX from 'xlsx';
import { KTCardBody } from '../../../../../../_metronic/helpers';
import { deleteItem, fetchDocument, postItem, updateItem } from '../../../urls';
import { ModalFooterButtons, PageActionButtons, excelDateToJSDate, roundOff, timeStamp } from '../../CommonComponents';
import { Tabs } from 'antd';
import { TableProps } from 'react-bootstrap';
import { UploadChangeParam } from 'antd/es/upload';
import { time } from 'console';



const CycleDetailsTable = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false) // to show the upload modal
    const [uploadedFile, setUploadedFile] = useState<any>(null)
    const [gridData, setGridData] = useState([])
    let [filteredData] = useState([])
    const [submitLoading, setSubmitLoading] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [isFileUploaded, setIsFileUploaded] = useState(false) // to check if the file is uploaded
    const [isCheckDataModalOpen, setIsCheckDataModalOpen] = useState(false)  // to show the modal to check the data summaries from the uploaded file
    const tenantId = localStorage.getItem('tenant')
    const [rowCount, setRowCount] = useState(0) // to hold the number of rows read from the uploaded file
    const [savedCount, setSavedCount] = useState(0) // to hold the number of rows saved from the uploaded file

    const [loading, setLoading] = useState(false)
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false) //  to show the update modal
    const [tempData, setTempData] = useState<any>()
    const { register, reset, handleSubmit } = useForm()
    const queryClient = useQueryClient()
    const [uploadColumns, setUploadColumns] = useState<any>([]) //to hold the table columns of the uploaded file
    const [uploadData, setUploadData] = useState<any>([]) // to hold the data read from the uploaded file
    const [dataToSave, setDataToSave] = useState<any>([]) // to hold the data to be saved from the uploaded file

    const { data: destinations } = useQuery('destinations', () => fetchDocument(`productionDestination/tenant/${tenantId}`), { cacheTime: 5000 })
    const { data: allHaulerUnits } = useQuery('hauler', () => fetchDocument(`ProHaulerUnit/tenant/${tenantId}`), { cacheTime: 5000 })
    const { data: allHaulers } = useQuery('haulerOperator', () => fetchDocument(`HaulerOperator/tenant/${tenantId}`), { cacheTime: 5000 })
    const { data: allLoaderUnits } = useQuery('allLoaders', () => fetchDocument(`ProLoaderUnit/tenant/${tenantId}`), { cacheTime: 5000 })
    const { data: allLoaders } = useQuery('LoaderOperator', () => fetchDocument(`LoaderOperator/tenant/${tenantId}`), { cacheTime: 5000 })
    const { data: allOrigins } = useQuery('allOrigins', () => fetchDocument(`ProductionOrigin/tenant/${tenantId}`), { cacheTime: 5000 })
    const { data: allMaterials } = useQuery('allMaterials', () => fetchDocument(`ProdRawMaterial/tenant/${tenantId}`), { cacheTime: 5000 })
    const { data: allShifts } = useQuery('shifts', () => fetchDocument(`ProductionShift/tenant/${tenantId}`), { cacheTime: 5000 })


    const handleChange = (event: any) => {
        event.preventDefault()
        setTempData({ ...tempData, [event.target.name]: event.target.value });
    }

    const onTabsChange = (key: string) => {
        //console.log(key);
    };

    const showModal = () => {
        setIsModalOpen(true)
    }

    const showUploadModal = () => {
        setIsUploadModalOpen(true)
    }

    const showCheckDataModal = (values: any) => {
        setIsCheckDataModalOpen(true)
    }


    const handleCancel = () => {
        reset()
        setIsModalOpen(false)
        setIsUploadModalOpen(false)
        setIsFileUploaded(false)
        setSavedCount(0)
    }

    const handleCheckDataCancel = () => {
        setIsCheckDataModalOpen(false)
    }


    const { mutate: deleteData, isLoading: deleteLoading } = useMutation(deleteItem, {
        onSuccess: (data) => {
            queryClient.setQueryData(['cycleDetails', tempData], data);
            loadData()
        },
        onError: (error) => {
            console.log('delete error: ', error)
        }
    })

    function handleDelete(element: any) {
        const item = {
            url: 'cycleDetails',
            data: element
        }
        deleteData(item)
    }

    const getRecordName = (id: any, data: any) => {
        let name = ''
        data?.map((item: any) => {
            if (item.id === id) {
                name = item.name
            }
        })
        return name
    }

    const getUnitRecordName = (id: any, data: any) => {
        let name = ''
        data?.map((item: any) => {
            if (item.id === id) {
                name = item.modelName
            }
        })
        return name
    }

    const getOperatorRecordName = (id: any, data: any) => {
        let name = ''
        data?.map((item: any) => {
            if (item.empCode === id) {
                name = item.empName
            }
        })
        return name
    }


    const columns: any = [
        {
            title: 'Date',
            dataIndex: 'cycleDate',
            key: 'date',
            fixed: 'left',
            width: 150,
        },
        {
            title: 'Shift',
            dataIndex: 'shift',
            width: 100,
            render: (text: any) => <span>{text?.name}</span>
        },
        {
            title: 'Time',
            dataIndex: 'cycleTime',
            width: 100,
        },
        {
            title: 'Loader Unit',
            dataIndex: 'loaderUnit',
            width: 150,
            render: (text: any) => <span>{text?.equipmentId}</span>
        },
        {
            title: 'Loader Operator',
            dataIndex: 'loaderNavigation',
            width: 150,
            render: (text: any) => <span>{text?.empName}</span>
        },
        {
            title: 'Hauler Unit',
            dataIndex: 'haulerUnit',
            width: 150,
            render: (text: any) => <span>{text?.equipmentId}</span>
        },
        {
            title: 'Hauler Operator',
            dataIndex: 'haulerNavigation',
            width: 150,
            render: (text: any) => <span>{text?.empName}</span>
        },
        {
            title: 'Origin',
            dataIndex: 'origin',
            width: 150,
            render: (text: any) => <span>{text?.name}</span>
        },
        {
            title: 'Material',
            dataIndex: 'material',
            width: 120,
            render: (text: any) => <span>{text?.name}</span>
        },
        {
            title: 'Destination',
            dataIndex: 'destination',
            width: 150,
            render: (text: any) => <span>{text?.name}</span>
        },
        {
            title: 'Nominal Weight',
            dataIndex: 'nominalWeight',
            width: 100,
        },
        {
            title: 'Weight',
            dataIndex: 'weight',
            width: 100,
        },
        {
            title: 'Payload Weight',
            dataIndex: 'payloadWeight',
            width: 100,
        },
        {
            title: 'Reported Weight',
            dataIndex: 'reportedWeight',
            width: 100,
        },
        {
            title: 'Volume',
            dataIndex: 'volumes',
            width: 100,
        },
        {
            title: 'Loads',
            dataIndex: 'loads',
            width: 100,
        },
        {
            title: 'Time at loader',
            dataIndex: 'timeAtLoader',
            width: 100,
        },
        {
            title: 'Duration',
            dataIndex: 'duration',
            width: 100,
        },
        {
            title: 'Action',
            fixed: 'right',
            width: 200,
            render: (_: any, record: any) => (
                <Space size='middle'>
                    <a onClick={() => showUpdateModal(record)} className='btn btn-light-info btn-sm'>
                        Update
                    </a>
                    <a onClick={() => handleDelete(record)} className='btn btn-light-success btn-sm'>
                        Delete
                    </a>
                </Space>
            ),
        },
    ]

    const uploadFileColumns = [
        { title: 'Cyce Date', dataIndex: 'cycleDate', key: 'date', fixed: 'left', width: 120, },
        { title: 'Shift', dataIndex: 'shift', width: 100 },
        { title: 'Time Start', dataIndex: 'timeAtLoader', width: 120 },
        { title: 'Loader Unit', dataIndex: 'loaderUnit', width: 150 },
        { title: 'Loader Operator', dataIndex: 'loader', width: 150 },
        { title: 'Hauler Unit', dataIndex: 'haulerUnit', width: 100 },
        { title: 'Hauler Operator', dataIndex: 'hauler', width: 150 },
        { title: 'Origin', dataIndex: 'origin', width: 150 },
        { title: 'Material', dataIndex: 'material', width: 120 },
        { title: 'Destination', dataIndex: 'destinationId', width: 150 },
        { title: 'Nominal Weight', dataIndex: 'nominalWeight', width: 150 },
        { title: 'Payload Weight', dataIndex: 'payloadWeight', width: 150 },
        { title: 'Reported Weight', dataIndex: 'reportedWeight', width: 150 },
        { title: 'Volume', dataIndex: 'volumes', width: 100 },
        { title: 'Loads', dataIndex: 'loads', width: 100 },
        { title: 'Cycle Time', dataIndex: 'cycleTime', width: 100 },
        { title: 'Duration', dataIndex: 'duration', width: 150 },
    ]

    const uploadProps: UploadProps = {
        name: 'file',
        accept: '.xlsx, .xls',
        maxCount: 1,

        beforeUpload: (file: any) => {
            return new Promise((resolve, reject) => {
                resolve(file)
                setUploadedFile(file)
            })
        },
    }


    // convert populated data from excel file to database 
    const saveTableObjects = () => {
        setSavedCount(0)
        try {            
            setLoading(true)
            const filteredSavedData = dataToSave.filter((data: any) => data !== null && data !== undefined)
            const item = {  
                data: filteredSavedData,
                url: 'cycleDetails',
            }
            postData(item)
            setLoading(false)
            setIsFileUploaded(false)
            // message.success(`${savedCount} ${savedCount > 1 ? 'records' : 'record'} of ${uploadData.length} saved successfully`, 5)
            // handleCancel()

        } catch (err) {
            console.log('fileSaveError: ', err)
            setLoading(false)
        }
    }

    const handleUpload = () => {

        const reader = new FileReader()
        try {
            setLoading(true)
            reader.onload = (e: any) => {

                const file = new Uint8Array(e.target.result)
                const workBook = XLSX.read(file, { type: 'array' })
                const workSheetName = workBook.SheetNames[0]
                const workSheet: any = workBook.Sheets[workSheetName]

                // sets the range to be read from the excel file
                const range = "A13:ZZ1100";

                const data: any = XLSX.utils.sheet_to_json(workSheet, { header: 0, range: range, blankrows: false })

                const filteredData: any = data
                    .map((item: any) => {                        
                        return {
                            cycleDate: moment(excelDateToJSDate(item.Date), 'YYYY-MM-DD').format('DD/MM/YYYY'),
                            shift: item['Shift'],
                            cycleTime: moment(excelDateToJSDate(item['Arrived']), 'HH:mm:ss').format('HH:mm'),
                            loaderUnit: item['Loading Unit'],
                            loader: item['Loader Operator'],
                            hauler: item['Hauler Operator'],
                            haulerUnit: item['Truck'],
                            origin: item['Origin'],
                            material: item['Material'],
                            destination: item['Destination'],
                            nominalWeight: item['Nominal Weight'],
                            payloadWeight: item['Payload Weight'],
                            reportedWeight: item['Reported Weight'],
                            volumes: roundOff(item.Volume),
                            loads: item['Loads'],
                            timeAtLoader: moment(excelDateToJSDate(item['Time Start']), 'HH:mm:ss').format('HH:mm'),
                            duration: item['Travel Empty Duration'],
                        }
                    })

                let timeStamp = new Date().getTime()
                const saveData = filteredData.slice(1).map((item: any,) => {

                    const destinationId = destinations?.data.find((dest: any) => dest.name.trim() === item.destination.trim());
                    const haulerUnitId = allHaulerUnits?.data.find((unit: any) => unit.equipmentId.trim() === item.haulerUnit.trim());
                    const hauler = allHaulers?.data.find((op: any) => op.empName.trim() === item.hauler.trim());
                    const loaderUnitId = allLoaderUnits?.data.find((unit: any) => unit.equipmentId.trim() === item.loaderUnit.trim());
                    const loader = allLoaders?.data.find((op: any) => op.empName.trim() === item.loader.trim());
                    const originId = allOrigins?.data.find((ori: any) => ori.name.trim() === item.origin.trim());
                    const materialId = allMaterials?.data.find((mat: any) => mat.name === item.material);
                    const shiftId = allShifts?.data.find((s: any) => s.name === item.shift);

                    // check if the id of any of the data is not found 
                    if (!destinationId || !haulerUnitId || !loaderUnitId || !originId) {
                        return
                    } else {
                        return {
                            cycleDate: item.cycleDate,
                            cycleTime: item.cycleTime,
                            loader: loader?.empCode,
                            hauler: hauler?.empCode,
                            loaderUnitId: parseInt(loaderUnitId?.id),
                            haulerUnitId: parseInt(haulerUnitId?.id),
                            originId: parseInt(originId?.id),
                            materialId: parseInt(materialId?.id),
                            destinationId: parseInt(destinationId?.id),
                            nominalWeight: parseInt(item.nominalWeight),
                            weight: parseInt(item.nominalWeight),
                            payloadWeight: parseInt(item.payloadWeight),
                            reportedWeight: parseInt(item.reportedWeight),
                            volumes: parseInt(item.volumes),
                            loads: parseInt(item.loads),
                            timeAtLoader: item.timeAtLoader,
                            shiftId: parseInt(shiftId?.id),
                            duration: parseInt(item.duration),
                            tenantId: tenantId,
                            batchNumber: `${timeStamp++}`,
                        }
                    }
                });
                console.log('saveData: ', saveData)
                setDataToSave(saveData)


                setLoading(false)
                setIsUploadModalOpen(false)
                setIsFileUploaded(true)
                setUploadData(filteredData.slice(1))
                setRowCount(filteredData.length)
                setUploadColumns(uploadFileColumns)
                console.log('read data: ', filteredData.slice(0, 10))
            }
        } catch (error) {
            setIsUploadModalOpen(false)
        }
        reader.readAsArrayBuffer(uploadedFile)
    }

    // group by hauler unit
    const groupedByHauler: any = {};
    uploadData.forEach((item: any) => {
        if (!groupedByHauler[item.haulerUnit]) {
            groupedByHauler[item.haulerUnit] = [];
        }
        groupedByHauler[item.haulerUnit].push(item);
    });

    // sum volumes per hauler
    const volumesByHauler = [];
    for (const hauler in groupedByHauler) {
        const volumes = groupedByHauler[hauler].map((item: { volumes: any; }) => item.volumes);
        const loads = groupedByHauler[hauler].map((item: { loads: any; }) => item.loads);
        const nominalWeights = groupedByHauler[hauler].map((item: { nominalWeight: any; }) => item.nominalWeight);
        const payloadWeights = groupedByHauler[hauler].map((item: { payloadWeight: any; }) => item.payloadWeight);
        const sum = volumes.reduce((accumulator: any, currentValue: any) => accumulator + currentValue);
        const sumLoads = loads.reduce((accumulator: any, currentValue: any) => accumulator + currentValue);
        const sumNominalWeights = nominalWeights.reduce((accumulator: any, currentValue: any) => accumulator + currentValue);
        const sumPayloadWeights = payloadWeights.reduce((accumulator: any, currentValue: any) => accumulator + currentValue);
        volumesByHauler.push({ hauler, sum, sumLoads, sumNominalWeights, sumPayloadWeights });
    }

    // group by loader unit
    const groupedByLoader: any = {};
    uploadData.forEach((item: any) => {
        if (!groupedByLoader[item.loaderUnit]) {
            groupedByLoader[item.loaderUnit] = [];
        }
        groupedByLoader[item.loaderUnit].push(item);
    });

    // sum volumes per loader
    const volumesByLoader = [];
    for (const loader in groupedByLoader) {
        const volumes = groupedByLoader[loader].map((item: { volumes: any; }) => item.volumes);
        const loads = groupedByLoader[loader].map((item: { loads: any; }) => item.loads);
        const nominalWeights = groupedByLoader[loader].map((item: { nominalWeight: any; }) => item.nominalWeight);
        const payloadWeights = groupedByLoader[loader].map((item: { payloadWeight: any; }) => item.payloadWeight);
        const sum = volumes.reduce((accumulator: any, currentValue: any) => accumulator + currentValue);
        const sumLoads = loads.reduce((accumulator: any, currentValue: any) => accumulator + currentValue);
        const sumNominalWeights = nominalWeights.reduce((accumulator: any, currentValue: any) => accumulator + currentValue);
        const sumPayloadWeights = payloadWeights.reduce((accumulator: any, currentValue: any) => accumulator + currentValue);
        volumesByLoader.push({ loader, sum, sumLoads, sumNominalWeights, sumPayloadWeights });
    }

    // group by origin
    const groupedByOrigin: any = {};
    uploadData.forEach((item: any) => {
        if (!groupedByOrigin[item.origin]) {
            groupedByOrigin[item.origin] = [];
        }
        groupedByOrigin[item.origin].push(item);
    });

    // sum volumes per origin
    const volumesByOrigin = [];
    for (const origin in groupedByOrigin) {
        const volumes = groupedByOrigin[origin].map((item: { volumes: any; }) => item.volumes);
        const loads = groupedByOrigin[origin].map((item: { loads: any; }) => item.loads);
        const nominalWeights = groupedByOrigin[origin].map((item: { nominalWeight: any; }) => item.nominalWeight);
        const payloadWeights = groupedByOrigin[origin].map((item: { payloadWeight: any; }) => item.payloadWeight);
        const sum = volumes.reduce((accumulator: any, currentValue: any) => accumulator + currentValue);
        const sumLoads = loads.reduce((accumulator: any, currentValue: any) => accumulator + currentValue);
        const sumNominalWeights = nominalWeights.reduce((accumulator: any, currentValue: any) => accumulator + currentValue);
        const sumPayloadWeights = payloadWeights.reduce((accumulator: any, currentValue: any) => accumulator + currentValue);
        volumesByOrigin.push({ origin, sum, sumLoads, sumNominalWeights, sumPayloadWeights });
    }

    // group by destination
    const groupedByDestination: any = {};
    uploadData.forEach((item: any) => {
        if (!groupedByDestination[item.destination]) {
            groupedByDestination[item.destination] = [];
        }
        groupedByDestination[item.destination].push(item);
    });

    // sum volumes per destination
    const volumesByDestination = [];
    for (const destination in groupedByDestination) {
        const volumes = groupedByDestination[destination].map((item: { volumes: any; }) => item.volumes);
        const loads = groupedByDestination[destination].map((item: { loads: any; }) => item.loads);
        const nominalWeights = groupedByDestination[destination].map((item: { nominalWeight: any; }) => item.nominalWeight);
        const payloadWeights = groupedByDestination[destination].map((item: { payloadWeight: any; }) => item.payloadWeight);
        const sum = volumes.reduce((accumulator: any, currentValue: any) => accumulator + currentValue);
        const sumLoads = loads.reduce((accumulator: any, currentValue: any) => accumulator + currentValue);
        const sumNominalWeights = nominalWeights.reduce((accumulator: any, currentValue: any) => accumulator + currentValue);
        const sumPayloadWeights = payloadWeights.reduce((accumulator: any, currentValue: any) => accumulator + currentValue);
        volumesByDestination.push({ destination, sum, sumLoads, sumNominalWeights, sumPayloadWeights });
    }

    const dynamicColumns = (title: any, dataIndex: any) => {
        const columns = [
            { title: title, dataIndex: dataIndex, render: (text: any) => <span style={{ color: '#3699FF' }}>{text}</span>, },
            {
                title: 'Sum', children: [
                    { title: 'Volumes', dataIndex: 'sum', render: (value: any) => <span>{roundOff(value)}</span> },
                    { title: 'Loads', dataIndex: 'sumLoads', render: (value: any) => <span>{roundOff(value)}</span> },
                    { title: 'Nominal Weights', dataIndex: 'sumNominalWeights', render: (value: any) => <span>{roundOff(value)}</span> },
                    { title: 'Payload Weights', dataIndex: 'sumPayloadWeights', render: (value: any) => <span>{roundOff(value)}</span> },
                ]
            }
        ];
        return columns;
    }

    const summaryFooter = (data: any) => <Tag color="error">{data} rows </Tag>

    const tabItems: TabsProps['items'] = [
        {
            key: '1', label: `Hauler Units`,
            children: (
                <><Table dataSource={volumesByHauler} columns={dynamicColumns('Hauler', 'hauler')}
                    pagination={{ pageSize: 20 }} scroll={{ y: 240 }}
                    footer={() => summaryFooter(volumesByHauler.length)}
                    bordered
                    size="middle"
                /></>
            ),
        },
        {
            key: '2', label: `Loader Units`,
            children: (
                <><Table dataSource={volumesByLoader} columns={dynamicColumns('Loader', 'loader')}
                    pagination={{ pageSize: 20 }} scroll={{ y: 240 }}
                    footer={() => summaryFooter(volumesByLoader.length)}
                    bordered
                    size="middle"
                /></>
            ),
        },
        {
            key: '3', label: `Origins`, children: (
                <><Table dataSource={volumesByOrigin} columns={dynamicColumns('Origin', 'origin')}
                    pagination={{ pageSize: 20 }} scroll={{ y: 240 }}
                    footer={() => summaryFooter(volumesByLoader.length)}
                    bordered
                    size="middle"
                /></>
            ),
        },
        {
            key: '4', label: `Destinations`, children: (
                <><Table dataSource={volumesByDestination} columns={dynamicColumns('Destination', 'destination')}
                    pagination={{ pageSize: 20 }} scroll={{ y: 240 }}
                    footer={() => summaryFooter(volumesByLoader.length)}
                    bordered
                    size="middle"
                /></>
            ),
        },
    ];



    const loadData = async () => {
        setLoading(true)
        try {
            const response = await fetchDocument(`cycleDetails/tenant/${tenantId}`)
            setGridData(response.data)
            console.log('cycledetails: ', response.data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
            message.error(`${error}`)
        }
    }

    useEffect(() => {
        loadData()
    }, [])

    const dataWithIndex = gridData.map((item: any, index) => ({
        ...item,
        key: index,
    }))

    const handleInputChange = (e: any) => {
        setSearchText(e.target.value)
        if (e.target.value === '') {
            loadData()
        }
    }

    const globalSearch = () => {
        // @ts-ignore
        filteredData = dataWithVehicleNum.filter((value) => {
            return (
                value.fleetID.toLowerCase().includes(searchText.toLowerCase()) ||
                value.modlName.toLowerCase().includes(searchText.toLowerCase())
            )
        })
        setGridData(filteredData)
    }
    const { isLoading: updateLoading, mutate: updateData } = useMutation(updateItem, {
        onSuccess: (data) => {
            queryClient.setQueryData(['cycleDetails', tempData], data);
            reset()
            setTempData({})
            loadData()
            setIsUpdateModalOpen(false)
            setIsModalOpen(false)
        },
        onError: (error) => {
            console.log('error: ', error)
            message.error(`${error}`)
        }
    })

    const handleUpdate = (e: any) => {
        e.preventDefault()
        const item = {
            url: 'cycleDetails',
            data: tempData
        }
        updateData(item)
        console.log('update: ', item.data)
    }

    const showUpdateModal = (values: any) => {
        showModal()
        setIsUpdateModalOpen(true)
        setTempData(values);
        console.log(values)
    }

    //hide Update table 
    const clearUpdateTable = () => {
        setIsFileUploaded(false)
        setUploadedFile(null)
        setLoading(false)
        loadData()
    }

    const OnSubmit = handleSubmit(async (values) => {
        setSubmitLoading(true)
        const item = {
            data: [
                {
                cycleDate: values.cycleDate,
                shiftId: parseInt(values.shiftId),
                cycleTime: values.cycleTime,
                loader: values.loader,
                hauler: values.hauler,
                haulerUnitId: parseInt(values.haulerUnitId),
                loaderUnitId: parseInt(values.loaderUnitId),
                originId: parseInt(values.originId),
                materialId: parseInt(values.materialId),
                destinationId: parseInt(values.destinationId),
                nominalWeight: parseInt(values.nominalWeight),
                weight: parseInt(values.weight),
                payloadWeight: parseInt(values.payloadWeight),
                reportedWeight: parseInt(values.reportedWeight),
                volumes: parseInt(values.volumes),
                loads: parseInt(values.loads),
                timeAtLoader: values.timeAtLoader,
                duration: parseInt(values.duration),
                tenantId: tenantId,
                batchNumber: `${Date.now()}`,
            },
        ],
            url: 'cycleDetails'
        }
        console.log(item.data)
        postData(item)

    })

    const { mutate: postData, isLoading: postLoading } = useMutation(postItem, {
        onSuccess: (data) => {
            queryClient.setQueryData(['cycleDetails'], data);
            setSavedCount(isFileUploaded ? savedCount + 1 : 0)
            reset()
            setTempData({})
            loadData()
            setIsModalOpen(false)
            setSubmitLoading(false)
        },
        onError: (error) => {
            setSubmitLoading(false)
            console.log('post error: ', error)
            message.error(isFileUploaded ? 'Saving failed, check your data and try again ' : `${error}`)
        }
    })


    return (
        <div className="card card-custom card-flush" >
            <div className="card-header mt-7">
                <Space style={{ marginBottom: 16 }}>
                    <Input
                        placeholder='Enter Search Text'
                        type='text'
                        allowClear size='large'
                    />
                    <Button type='primary' size='large'>
                        Search
                    </Button>
                </Space>
                <div className="card-toolbar">
                    <Space style={{ marginBottom: 16 }}>
                        {
                            isFileUploaded ?
                                <Space>
                                    <Button onClick={showCheckDataModal}
                                        type='primary' size='large'
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                        className='btn btn-light-success btn-sm'
                                    >
                                        Check data
                                    </Button>
                                    <Button onClick={saveTableObjects}
                                        type='primary' size='large'
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }} className='btn btn-light-success btn-sm'>
                                        Save
                                    </Button>
                                    <Button onClick={clearUpdateTable}
                                        type='primary' size='large'
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }} className='btn btn-light-info btn-sm'>
                                        Clear
                                    </Button>
                                </Space>
                                :
                                <PageActionButtons
                                    onAddClick={showModal}
                                    onExportClicked={() => { console.log('export clicked') }}
                                    onUploadClicked={showUploadModal}
                                    hasAddButton={true}
                                    hasExportButton={true}
                                    hasUploadButton={true}
                                />
                        }
                    </Space>
                </div>
            </div>
            <KTCardBody className='py-4 '>
                <div className='table-responsive'>
                    <div className='d-flex  justify-content-between'>

                    </div>

                    <Table
                        columns={isFileUploaded ? uploadColumns : columns}
                        dataSource={isFileUploaded ? uploadData : gridData}
                        scroll={{ x: 1300 }}
                        loading={loading}
                    />

                    <Modal
                        title={isUpdateModalOpen ? 'Update Cycle Details' : 'Cycle Details Setup'}
                        open={isModalOpen}
                        onCancel={handleCancel}
                        width={800}
                        closable={true}
                        footer={
                            <ModalFooterButtons
                                onCancel={handleCancel}
                                onSubmit={isUpdateModalOpen ? handleUpdate : OnSubmit} />
                        }
                    >
                        <form onSubmit={isUpdateModalOpen ? handleUpdate : OnSubmit}>
                            <hr></hr>
                            <div style={{ padding: "20px 20px 0 20px" }} className='row mb-0 '>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Date</label>
                                    <input type="date" {...register("cycleDate")} name="cycleDate" defaultValue={!isUpdateModalOpen ? '' : tempData?.cycleDate} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Shift</label>
                                    <select
                                        {...register("shiftId")}
                                        onChange={handleChange}
                                        className="form-select form-select-white" aria-label="Select example">
                                        {!isUpdateModalOpen && <option>Select</option>}
                                        {
                                            allShifts?.data.map((item: any) => (
                                                <option
                                                    selected={isUpdateModalOpen && item.name === tempData.shiftId}
                                                    value={item.id}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div style={{ padding: "0 20px 0 20px" }} className='row mb-0 '>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Time</label>
                                    <input type="time" {...register("cycleTime")} name="cycleTime" defaultValue={!isUpdateModalOpen ? '' : tempData?.cycleTime} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Loader</label>
                                    <select
                                        {...register("loader")}
                                        onChange={handleChange}
                                        className="form-select form-select-white" aria-label="Select example">
                                        {!isUpdateModalOpen && <option>Select</option>}
                                        {
                                            allLoaders?.data.map((item: any) => (
                                                <option
                                                    selected={isUpdateModalOpen && item.modelName === tempData.loader}
                                                    value={item.empCode}>{item.empCode}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div style={{ padding: "0 20px 0 20px" }} className='row mb-0 '>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Hauler</label>
                                    <select
                                        {...register("hauler")}
                                        onChange={handleChange}
                                        className="form-select form-select-white" aria-label="Select example">
                                        {!isUpdateModalOpen && <option>Select</option>}
                                        {
                                            allHaulers?.data.map((item: any) => (
                                                <option
                                                    selected={isUpdateModalOpen && item.modelName === tempData.hauler}
                                                    value={item.empCode}>{item.empCode}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Origin</label>
                                    <select
                                        {...register("originId")}
                                        onChange={handleChange}
                                        className="form-select form-select-white" aria-label="Select example">
                                        {!isUpdateModalOpen && <option>Select</option>}
                                        {
                                            allOrigins?.data.map((item: any) => (
                                                <option
                                                    selected={isUpdateModalOpen && item.name === tempData.originId}
                                                    value={item.id}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div style={{ padding: "0 20px 0 20px" }} className='row mb-0 '>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Hauler Unit</label>
                                    <select
                                        {...register("haulerUnitId")}
                                        onChange={handleChange}
                                        className="form-select form-select-white" aria-label="Select example">
                                        {!isUpdateModalOpen && <option>Select</option>}
                                        {
                                            allHaulerUnits?.data.map((item: any) => (
                                                <option
                                                    selected={isUpdateModalOpen && item.id === tempData.haulerUnitId}
                                                    value={item.id}>{item.equipmentId}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Loader Unit</label>
                                    <select
                                        {...register("loaderUnitId")}
                                        onChange={handleChange}
                                        className="form-select form-select-white" aria-label="Select example">
                                        {!isUpdateModalOpen && <option>Select</option>}
                                        {
                                            allLoaderUnits?.data.map((item: any) => (
                                                <option
                                                    selected={isUpdateModalOpen && item.id === tempData.loaderUnitId}
                                                    value={item.id}>{item.equipmentId}</option>
                                            ))
                                        }
                                    </select>
                                </div>

                            </div>
                            <div style={{ padding: "0 20px 0 20px" }} className='row mb-0 '>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Material</label>
                                    <select
                                        {...register("materialId")}
                                        onChange={handleChange}
                                        className="form-select form-select-white" aria-label="Select example">
                                        {!isUpdateModalOpen && <option>Select</option>}
                                        {
                                            allMaterials?.data.map((item: any) => (
                                                <option
                                                    selected={isUpdateModalOpen && item.id === tempData.materialId}
                                                    value={item.id}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Destination</label>
                                    <select
                                        {...register("destinationId")}
                                        onChange={handleChange}
                                        className="form-select form-select-white" aria-label="Select example">
                                        {!isUpdateModalOpen && <option>Select</option>}
                                        {
                                            destinations?.data.map((item: any) => (
                                                <option
                                                    selected={isUpdateModalOpen && item.id === tempData.destinationId}
                                                    value={item.id}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div style={{ padding: "0 20px 0 20px" }} className='row mb-0 '>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Nominal Weight</label>
                                    <input type="number" {...register("nominalWeight")} name="nominalWeight" min={0} defaultValue={!isUpdateModalOpen ? 0 : tempData?.nominalWeight} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Weight</label>
                                    <input type="number" {...register("weight")} name="weight" min={0} defaultValue={!isUpdateModalOpen ? 0 : tempData?.weight} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                            </div>
                            <div style={{ padding: "0 20px 0 20px" }} className='row mb-0 '>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Payload Weight</label>
                                    <input type="number" {...register("payloadWeight")} name="payloadWeight" min={0} defaultValue={!isUpdateModalOpen ? 0 : tempData?.payloadWeight} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Reported Weight</label>
                                    <input type="number" {...register("reportedWeight")} name="reported_weight" min={0} defaultValue={!isUpdateModalOpen ? 0 : tempData?.reportedWeight} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                            </div>
                            <div style={{ padding: "0 20px 0 20px" }} className='row mb-0 '>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Volume</label>
                                    <input type="number" {...register("volumes")} name="volumes" min={0} defaultValue={!isUpdateModalOpen ? 0 : tempData?.volumes} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Loads</label>
                                    <input type="number" {...register("loads")} name="loads" min={0} defaultValue={!isUpdateModalOpen ? 0 : tempData?.loads} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                            </div>
                            <div style={{ padding: "0 20px 0 20px" }} className='row mb-0 '>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Time at Loader</label>
                                    <input type="time" {...register("timeAtLoader")} name="timeAtLoader" defaultValue={!isUpdateModalOpen ? '' : tempData?.timeAtLoader} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                                <div className='col-6 mb-7'>
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Duration</label>
                                    <input type="number" {...register("duration")} name="duration" min={0} defaultValue={!isUpdateModalOpen ? 0 : tempData?.duration} onChange={handleChange} className="form-control form-control-white" />
                                </div>
                            </div>
                        </form>
                    </Modal>
                    {/* Modal to upload file */}

                    <Modal
                        title='Upload Cycle Detail'
                        open={isUploadModalOpen}
                        onOk={handleUpload}
                        confirmLoading={loading}
                        onCancel={handleCancel}
                        closable={true}
                    >
                        <Divider />
                        <Space size='large'>
                            <Upload
                                {...uploadProps}
                            >
                                <Button
                                    loading={loading}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                    icon={<UploadOutlined />}>Click to Upload</Button>
                            </Upload>
                        </Space>
                    </Modal>

                    {/* check data modal */}
                    <Modal
                        title='Data Summaries'
                        open={isCheckDataModalOpen}
                        onCancel={handleCheckDataCancel}
                        width={800}
                        closable={true}
                        footer={
                            <>
                                <Button onClick={handleCheckDataCancel}
                                    type='primary' size='large'
                                    className='btn btn-light btn-sm w'>
                                    Ok
                                </Button>
                            </>}
                    >

                        <Tabs defaultActiveKey="1"
                            items={tabItems}
                            onChange={onTabsChange}
                            tabBarExtraContent={
                                <>
                                    <Tag color="geekblue">{rowCount} records </Tag>
                                </>
                            } />
                    </Modal>

                </div>
            </KTCardBody >
        </div >
    )
}

export { CycleDetailsTable };

