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

const ModalFooterButtons = ({ onCancel, onSubmit }: any) => {
    return (
        <>
            <Button
                key='back'
                onClick={onCancel}
                size="large">
                Cancel
            </Button>,
            <Button
                key='submit'
                type='primary'
                htmlType='submit'
                onClick={onSubmit}
                size="large">
                Submit
            </Button>,
        </>

    )
}

//to convert excel date to js date
const excelDateToJSDate = (serial: number) => {
    const utcDays = Math.floor(serial - 25569)
    const utcValue = utcDays * 86400
    const date = new Date(utcValue * 1000)

    const fractionalDay = serial - Math.floor(serial) + 0.0000001

    let hours = Math.floor(fractionalDay * 24)
    let minutes = Math.floor(fractionalDay * 1440) - (hours * 60)
    let seconds = Math.floor(fractionalDay * 86400) - (hours * 3600) - (minutes * 60)


    date.setHours(hours)
    date.setMinutes(minutes)
    date.setSeconds(seconds)

    return date
}

function extractDateFromTimestamp(timestamp: any) {
    const date = new Date(timestamp);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

const convertExcelDateToJSDate = (serialNumber: any) => {
    return new Date(Date.UTC(1900, 0, serialNumber - 1));
  };
  
  const convertExcelTimeToJSDate = (decimalTime: any) => {
    const millisecondsInDay = 24 * 60 * 60 * 1000;
    const timeMilliseconds = Math.floor((decimalTime % 1) * millisecondsInDay);
    return new Date(timeMilliseconds);
  };


const timeStamp = () => {
    const date = new Date();
    const timestamp = date.getTime() * 1000 + date.getMilliseconds();
    const batchNumber = timestamp.toString();
    return batchNumber;
}

const timeFormat = (time: any) => {
    // Split the time string into hours, minutes, and seconds
    const [hours, minutes] = time.split(":");
    const dateObject = new Date("1970-01-01");
    dateObject.setHours(hours, minutes)
    return dateObject
}

// round off to whole number
const roundOff = (num: number) => {
    if (Number.isFinite(num)) {
        const isDecimal = Number.isInteger(num) === false;
        if (isDecimal) {
            return Math.round(num * 1000) / 1000;
        } else {
            return num;
        }
    } else {
        return NaN;
    }
}

// calculate volumes by field for cycle details
function calculateVolumesByField(groupedByField: any) {
    const volumesByField = [];

    for (const field in groupedByField) {
        const volumes = groupedByField[field].map((item: any) => item.volumes);
        const loads = groupedByField[field].map((item: any) => item.loads);
        const nominalWeights = groupedByField[field].map((item: any) => item.nominalWeight);
        const payloadWeights = groupedByField[field].map((item: any) => item.payloadWeight);
        const sum = volumes.reduce((accumulator: any, currentValue: any) => accumulator + currentValue);
        const sumLoads = loads.reduce((accumulator: any, currentValue: any) => accumulator + currentValue);
        const sumNominalWeights = nominalWeights.reduce((accumulator: any, currentValue: any) => accumulator + currentValue);
        const sumPayloadWeights = payloadWeights.reduce((accumulator: any, currentValue: any) => accumulator + currentValue);
        volumesByField.push({ field, sum, sumLoads, sumNominalWeights, sumPayloadWeights });
    }

    return volumesByField;
}


function batchVolumesThirtyDaysRolling(data: any) {
    // Group data by batchNumber
    const groupedData = data?.reduce((result: any, item: any) => {
        const batchNumber = item.batchNumber;
        if (!batchNumber) {
            return result;
        }
        if (!result[batchNumber]) {
            result[batchNumber] = [];
        }
        result[batchNumber].push(item);
        return result;
    }, {});

    // Calculate sums for each batchNumber
    const result: any[] = [];

    Object.keys(groupedData).forEach((batchNumber: string) => {
        const batchData = groupedData[batchNumber];

        // Group data by cycleDate
        const groupedByDate = batchData.reduce((result: any, item: any) => {
            const cycleDate = item.cycleDate;
            if (!cycleDate) {
                return result;
            }
            if (!result[cycleDate]) {
                result[cycleDate] = {
                    batchNumber,
                    cycleDate,
                    sumVolumes: 0,
                    sumLoads: 0,
                    sumNominalWeights: 0,
                    sumPayloadWeights: 0,
                    count: 0,
                };
            }
            result[cycleDate].sumVolumes += item.volumes || 0;
            result[cycleDate].sumLoads += item.loads || 0;
            result[cycleDate].sumNominalWeights += item.nominalWeight || 0;
            result[cycleDate].sumPayloadWeights += item.payloadWeight || 0;
            result[cycleDate].count += 1;
            return result;
        }, {});

        // Get the last 30 dates with summed values
        const distinctDates = Object.keys(groupedByDate);
        const last30Dates = distinctDates.slice(-30);
        last30Dates.forEach((date: string) => {
            result.push({
                batchNumber,
                cycleDate: date,
                ...groupedByDate[date],
            });
        });
    });

    return result;
}

const groupByBatchNumber = (data: any) => {
    const groupedByBatchNumber: any = {};
    data?.forEach((item: any) => {
        if (!groupedByBatchNumber[item.batchNumber]) {
            groupedByBatchNumber[item.batchNumber] = [];
        }
        groupedByBatchNumber[item.batchNumber].push(item);
    });
    return groupedByBatchNumber;
}

const fuelIntakeData = (data: any) => {
    const groupedByBatchNumber = groupByBatchNumber(data);
    const batchNumbers = Object.keys(groupedByBatchNumber);
    const batchCount = batchNumbers.map((batchNumber: any) => {
        const records = groupedByBatchNumber[batchNumber];
        const itemsCount = records.length;
        // Sum the values of the 'quantity' property for each batch
        
        const totalQuantity = records.reduce(
            (sum: number, record: any) => sum + record.quantity,
            0
        );
        return {
            batchNumber: batchNumber,
            itemsCount: itemsCount,
            date: records.length === 1 ? getDateFromDateString(records[0].intakeDate) : extractDateFromTimestamp(parseInt(batchNumber)),
            totalQuantity: totalQuantity,
            records: records,
        };
    });
    return batchCount;
};

const getDateFromDateString = (dateString: any) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding 1 and padding with leading zeros
    const day = String(date.getDate()).padStart(2, '0'); // Padding with leading zeros
    
    // Return the formatted date string
    return `${year}-${month}-${day}`;
  };


export {
    PageActionButtons, ModalFooterButtons, excelDateToJSDate,
    roundOff, timeStamp, calculateVolumesByField,
    extractDateFromTimestamp, batchVolumesThirtyDaysRolling,
    groupByBatchNumber, fuelIntakeData, convertExcelDateToJSDate, 
    convertExcelTimeToJSDate, timeFormat, getDateFromDateString
}