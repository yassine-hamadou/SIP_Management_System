import { useState } from "react";
import { useQuery } from "react-query";
import * as XLSX from 'xlsx';
import { fetchDocument } from "../../../urls";
import { convertExcelDateToJSDate } from "../../CommonComponents";
import { FuelComponent } from "./FuelComponent";



const FuelReceipt = () => {

    const [readRows, setReadRows] = useState([]);

    const tenantId = localStorage.getItem('tenant')
    const { data: pumps } = useQuery('pump', () => fetchDocument(`ProPump/tenant/${tenantId}`), { cacheTime: 5000 })
    const { data: equipments } = useQuery('equipmments', () => fetchDocument(`equipments/tenant/${tenantId}`), { cacheTime: 5000 })
    const dateStamp = new Date().getTime()


    const dataToRead: any = (file: any) => {
        const workBook = XLSX.read(file, { type: 'array' })
        const targetSheetName = ``;
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
                const isRowBblank = item['DATE'] === undefined && item['PUMP ID'] === undefined && item['QTY'] === undefined;

                if (isRowBblank) {
                    stopReading = true;
                    return null;
                }

                return {
                    intakeDate: item['DATE'],
                    pump: item['PUMP ID'],
                    quantity: item['QTY'],
                }
            }).filter((item: any) => item !== null || item !== undefined);

        setReadRows(filteredData)
        console.log('filteredData: ', filteredData)
        return readRows;
    }

    let timeStamp: any = dateStamp;
    const dataToSave: any = (readData: any) => {
    readData.map((item: any,) => {
        const pumpId = pumps?.data.find((pump: any) => pump.name.trim() === item.pump.trim());
        const equipment = equipments?.data.find((equipment: any) => equipment.equipmentId.trim() === item.equipment.trim());
        return {
            intakeDate: convertExcelDateToJSDate(item.intakeDate).toISOString(),
            pumpId: parseInt(pumpId?.id),
            quantity: parseInt(item.quantity),
            transactionType: 'Fuel Receipt',
            tenantId: tenantId,
            batchNumber: `${timeStamp}`,
        }
    });
}
    timeStamp = ''

    return (
        <FuelComponent
            title='Fuel Receipt'
            url='ProFuelReceipt'
            readFromFile={dataToRead}
            dataToUpload={dataToSave}
        />
    )
};

export { FuelReceipt };

